import { computed, onMounted, onUnmounted, ref } from 'vue'
import { fetchTimeOffsetMs } from '@/services/timeSync'
import { formatBrasiliaDate, formatBrasiliaTime, toBrasiliaDateTimeAttribute } from '@/utils/brasiliaTime'

const RESYNC_INTERVAL_MS = 10 * 60 * 1000

export type SyncState = 'pending' | 'synced' | 'local'

export function useBrasiliaClock() {
  const deviceNow = ref(new Date())
  const offsetMs = ref(0)
  const syncState = ref<SyncState>('pending')

  const instant = computed(() => new Date(deviceNow.value.getTime() + offsetMs.value))
  const timeLabel = computed(() => formatBrasiliaTime(instant.value))
  const dateLabel = computed(() => formatBrasiliaDate(instant.value))
  const dateTime = computed(() => toBrasiliaDateTimeAttribute(instant.value))

  let tickToken = 0
  let tickTimer = 0
  let resyncTimer = 0
  let syncing = false

  function scheduleTick(): void {
    const token = ++tickToken
    deviceNow.value = new Date()

    const adjustedNow = Date.now() + offsetMs.value
    const remainder = ((adjustedNow % 1000) + 1000) % 1000
    const delay = remainder === 0 ? 1000 : 1000 - remainder

    tickTimer = window.setTimeout(() => {
      if (token !== tickToken) return
      scheduleTick()
    }, delay)
  }

  async function sync(): Promise<void> {
    if (syncing) return
    syncing = true

    try {
      offsetMs.value = await fetchTimeOffsetMs()
      syncState.value = 'synced'
      scheduleTick()
    } catch {
      if (syncState.value !== 'synced') {
        syncState.value = 'local'
      }
    } finally {
      syncing = false
    }
  }

  onMounted(() => {
    scheduleTick()
    void sync()
    resyncTimer = window.setInterval(() => {
      void sync()
    }, RESYNC_INTERVAL_MS)
  })

  onUnmounted(() => {
    tickToken += 1
    window.clearTimeout(tickTimer)
    window.clearInterval(resyncTimer)
  })

  return { timeLabel, dateLabel, dateTime, syncState }
}
