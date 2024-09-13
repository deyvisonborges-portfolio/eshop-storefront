// Nomes Abstratos
// Outra abordagem é usar nomes abstratos que não estão diretamente
// relacionados ao tamanho, mas sim à função ou importância relativa.

export const definitions = {
  typography: {
    /** Heading Component */
      // Usar quando necessario
      // display: {
      //   primary: 102, // h1 102 - 96
      //   secondary: 96, // h2 96 - 64
      //   teriary: 72, // h3 72 - 48
      //   quartenary: 64 // h4 64 - 56
      // },
      heading: {
        // Para titulos
        primary: {
          desk: 56,
          mob: 40
        }, // Mobile:
        secondary: {
          desk: 48,
          mob: 36
        },
        tertiary: {
          desk: 40,
          mob: 32
        },

        // Para subtitulos
        quaternary: {
          desk: 32,
          mob: 24
        },
        quinary: {
          desk: 24,
          mob: 20
        },
        senary: 18,
    },
    /** Text Component */
      body: {
        // Para textos corridos no geral (ou nuances tbm)
        primary: 16,
        secondary: 14,
      },
      // Para informacoes relativamente simples
      caption: 12,

      // Para informacoes relativamente, mais simples ainda
      overline: 10,
  },
};
