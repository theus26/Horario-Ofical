export interface AboutParagraph {
  id: string
  text: string
}

export const ABOUT_PARAGRAPHS: AboutParagraph[] = [
  {
    id: 'padronizacao',
    text: 'A padronização dos horários passou a valer em 1º de janeiro de 1914, depois da Lei nº 2.784, de 18 de junho de 1913, e do Decreto nº 10.546, de 5 de novembro de 1913. Antes disso, cada lugar acertava os relógios pelo horário solar aparente. Entre o Rio de Janeiro (então capital federal) e São Paulo, por exemplo, havia uma diferença de 13 minutos e 54 segundos.',
  },
  {
    id: 'observatorio',
    text: 'A determinação, a conservação e a disseminação da Hora Legal Brasileira são competência da Divisão do Serviço da Hora do Observatório Nacional. A instituição mantém a referência com relógios atômicos de césio.',
  },
]

export const SOURCES =
  'Fontes: Wikipédia e Divisão de Serviço da Hora do Observatório Nacional.'
