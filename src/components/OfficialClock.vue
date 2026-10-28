<script setup lang="ts">
import type { SyncState } from '@/composables/useBrasiliaClock'

defineProps<{
  timeLabel: string
  dateLabel: string
  dateTime: string
  syncState: SyncState
}>()

const syncMessage: Record<SyncState, string> = {
  pending: 'Horário de Brasília (UTC−3).',
  synced: 'Sincronizado com a hora da internet e exibido no fuso de Brasília.',
  local: 'Horário deste dispositivo, convertido para o fuso de Brasília.',
}
</script>

<template>
  <section class="clock" aria-label="Relógio">
    <hr class="rule" />
    <p class="date">{{ dateLabel }}</p>
    <div class="panel">
      <time class="time" :datetime="dateTime">{{ timeLabel }}</time>
    </div>
    <p class="status">{{ syncMessage[syncState] }}</p>
  </section>
</template>

<style scoped>
.clock {
  text-align: center;
}

.date {
  margin: 0;
  font-size: clamp(1.2rem, 2.4vw, 1.65rem);
  font-weight: 700;
}

.panel {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.05rem 0 0.85rem;
  padding: 0.35rem 0.75rem 0.5rem;
  background: #e6e6e6;
  border: 1px solid #c0c0c0;
  border-radius: 18px;
}

.time {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: clamp(3.8rem, 20vw, 13.25rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
  font-feature-settings: "tnum" 1;
  white-space: nowrap;
}

.status {
  max-width: 40rem;
  margin: 0 auto;
  font-size: 0.98rem;
}

@media (max-width: 640px) {
  .panel {
    border-radius: 14px;
  }
}
</style>
