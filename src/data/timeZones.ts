export interface TimeZoneGroup {
  id: string
  utcLabel: string
  title: string
  places: string
  note?: string
  wide?: boolean
}

export const TIME_ZONE_GROUPS: TimeZoneGroup[] = [
  {
    id: 'utc-3',
    utcLabel: 'UTC−3',
    title: 'Horário de Brasília',
    wide: true,
    places:
      'Alagoas, Amapá, Bahia, Ceará, Distrito Federal, Espírito Santo, Goiás, Maranhão, Minas Gerais, Pará, Paraíba, Paraná, Pernambuco (exceto Fernando de Noronha), Piauí, Rio de Janeiro, Rio Grande do Norte, Rio Grande do Sul, Santa Catarina, São Paulo, Sergipe e Tocantins.',
  },
  {
    id: 'utc-2',
    utcLabel: 'UTC−2',
    title: 'Uma hora à frente de Brasília',
    places:
      'Arquipélago de São Pedro e São Paulo, Atol das Rocas, Fernando de Noronha, Martim Vaz e Trindade.',
  },
  {
    id: 'utc-4',
    utcLabel: 'UTC−4',
    title: 'Uma hora atrás de Brasília',
    places: 'Amazonas, Mato Grosso, Mato Grosso do Sul, Rondônia e Roraima.',
    note: 'Vale para a maior parte do Amazonas. Municípios do oeste do estado seguem o horário do Acre.',
  },
  {
    id: 'utc-5',
    utcLabel: 'UTC−5',
    title: 'Duas horas atrás de Brasília',
    places: 'Acre e municípios do oeste do Amazonas.',
  },
]

export const UTC_EXPLANATION =
  'UTC (Tempo Universal Coordenado) é a referência mundial de fuso, correspondente ao meridiano de Greenwich. O Brasil não adota horário de verão desde 2019, então esses deslocamentos valem o ano inteiro.'
