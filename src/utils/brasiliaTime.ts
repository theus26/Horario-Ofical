const TIME_ZONE = 'America/Sao_Paulo'

const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
})

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: TIME_ZONE,
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const attributeFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hourCycle: 'h23',
})

function readPart(parts: Intl.DateTimeFormatPart[], type: Intl.DateTimeFormatPartTypes): string {
  return parts.find((part) => part.type === type)?.value ?? ''
}

function numericPart(parts: Intl.DateTimeFormatPart[], type: Intl.DateTimeFormatPartTypes, length: number): string {
  const digits = readPart(parts, type).replace(/\D/g, '')
  const normalized = digits === '24' ? '00' : digits
  return normalized.padStart(length, '0')
}

function capitalize(value: string): string {
  if (!value) return value
  return value.charAt(0).toLocaleUpperCase('pt-BR') + value.slice(1)
}

export function formatBrasiliaTime(date: Date): string {
  const parts = timeFormatter.formatToParts(date)
  const hour = numericPart(parts, 'hour', 2)
  const minute = numericPart(parts, 'minute', 2)
  const second = numericPart(parts, 'second', 2)
  return `${hour}:${minute}:${second}`
}

export function formatBrasiliaDate(date: Date): string {
  const parts = dateFormatter.formatToParts(date)
  const weekday = capitalize(readPart(parts, 'weekday'))
  const day = readPart(parts, 'day')
  const month = readPart(parts, 'month')
  const year = readPart(parts, 'year')
  return `${weekday}, ${day} de ${month} de ${year}`
}

export function toBrasiliaDateTimeAttribute(date: Date): string {
  const parts = attributeFormatter.formatToParts(date)
  const year = numericPart(parts, 'year', 4)
  const month = numericPart(parts, 'month', 2)
  const day = numericPart(parts, 'day', 2)
  const hour = numericPart(parts, 'hour', 2)
  const minute = numericPart(parts, 'minute', 2)
  const second = numericPart(parts, 'second', 2)
  return `${year}-${month}-${day}T${hour}:${minute}:${second}-03:00`
}
