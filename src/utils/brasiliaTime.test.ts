import { describe, expect, it } from 'vitest'
import { formatBrasiliaDate, formatBrasiliaTime, toBrasiliaDateTimeAttribute } from './brasiliaTime'

const AFTERNOON_IN_BRASILIA = new Date('2026-10-28T20:30:45.000Z')
const MIDNIGHT_IN_BRASILIA = new Date('2026-10-29T03:00:00.000Z')

describe('formatBrasiliaTime', () => {
  it('converte um instante UTC para o relógio de Brasília', () => {
    expect(formatBrasiliaTime(AFTERNOON_IN_BRASILIA)).toBe('17:30:45')
  })

  it('mostra meia-noite como 00:00:00', () => {
    expect(formatBrasiliaTime(MIDNIGHT_IN_BRASILIA)).toBe('00:00:00')
  })
})

describe('formatBrasiliaDate', () => {
  it('escreve a data por extenso no fuso de Brasília', () => {
    expect(formatBrasiliaDate(AFTERNOON_IN_BRASILIA)).toBe('Quarta-feira, 28 de outubro de 2026')
  })

  it('usa o dia civil de Brasília, e não o dia UTC', () => {
    expect(formatBrasiliaDate(MIDNIGHT_IN_BRASILIA)).toBe('Quinta-feira, 29 de outubro de 2026')
  })
})

describe('toBrasiliaDateTimeAttribute', () => {
  it('monta um datetime com o deslocamento fixo de Brasília', () => {
    expect(toBrasiliaDateTimeAttribute(AFTERNOON_IN_BRASILIA)).toBe('2026-10-28T17:30:45-03:00')
  })
})
