const REQUEST_TIMEOUT_MS = 5_000

interface TimeSource {
  url: string
  parse: (payload: unknown) => number
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function parseWorldTime(payload: unknown): number {
  if (!isRecord(payload)) {
    throw new Error('Resposta inválida do serviço de hora.')
  }

  if (typeof payload.unixtime === 'number' && Number.isFinite(payload.unixtime)) {
    return payload.unixtime * 1000
  }

  if (typeof payload.datetime === 'string') {
    const parsed = Date.parse(payload.datetime)
    if (!Number.isNaN(parsed)) return parsed
  }

  throw new Error('Não foi possível ler o instante de referência.')
}

function parseTimeApi(payload: unknown): number {
  if (!isRecord(payload) || typeof payload.dateTime !== 'string') {
    throw new Error('Resposta inválida do serviço de hora.')
  }

  const hasZoneDesignator = /(?:Z|[+-]\d{2}:\d{2})$/i.test(payload.dateTime)
  const normalized = hasZoneDesignator ? payload.dateTime : `${payload.dateTime}-03:00`
  const parsed = Date.parse(normalized)

  if (Number.isNaN(parsed)) {
    throw new Error('Data de referência inválida.')
  }

  return parsed
}

const TIME_SOURCES: TimeSource[] = [
  {
    url: 'https://worldtimeapi.org/api/timezone/America/Sao_Paulo',
    parse: parseWorldTime,
  },
  {
    url: 'https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo',
    parse: parseTimeApi,
  },
]

async function requestOffset(source: TimeSource): Promise<number> {
  const startedAt = Date.now()
  const response = await fetch(source.url, {
    cache: 'no-store',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })

  if (!response.ok) {
    throw new Error(`Serviço de hora respondeu ${response.status}.`)
  }

  const serverMs = source.parse(await response.json())
  const finishedAt = Date.now()
  const estimatedLocalMs = startedAt + (finishedAt - startedAt) / 2

  return serverMs - estimatedLocalMs
}

export async function fetchTimeOffsetMs(): Promise<number> {
  let lastError: unknown

  for (const source of TIME_SOURCES) {
    try {
      return await requestOffset(source)
    } catch (error) {
      lastError = error
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Falha ao sincronizar a hora.')
}
