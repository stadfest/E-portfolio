import type { Page } from './types'

export const hjem: Page = {
  slug: '',
  nav: 'Hjem / Om meg',
  title: 'Matematikk, statistikk og programmering',
  blocks: [
    { type: 'lead', text: 'Jeg heter Alireza Sedghi og studerer dataingeniør ved NTNU. Jeg ønsker å arbeide med vitenskapelige og statistiske beregninger, og bruke det jeg lærer i dataingeniørstudiet til å gjennomføre beregningsarbeidet mer effektivt.' },

    { type: 'h2', text: 'Min faglige retning' },
    { type: 'p', text: 'Jeg har bakgrunn fra studier i matematiske fag og erfaring med matematikk, fysikk og programmering i Python. Et arbeid jeg har likt spesielt godt, er programmering mot OrcaFlex sitt Python-API for hydrodynamiske simuleringer.' },
    { type: 'p', text: 'Videre ønsker jeg å utvikle meg i skjæringspunktet mellom matematikk, statistikk og datavitenskap. Drømmestillingen kombinerer programmering, statistikk og fysikk.' },
    { type: 'placeholder', text: '[Mangler: bekreftelse mot oppdatert CV før ferdigheter utvides.]' },

    { type: 'h2', text: 'Om denne porteføljen' },
    { type: 'p', text: 'Her presenterer jeg arbeidet mitt i emnet **Teambasert samhandling**: IDI-Rally, LEGO-prosjektet og refleksjoner om læring og samarbeid. Jeg legger særlig vekt på testing, feilsøking og tydelig rapportering av problemer, og skiller mellom mitt eget bidrag og det vi har gjort som team.' },
    { type: 'p', text: 'Porteføljen er rettet mot faglærere og framtidige arbeidsgivere som vil se hvordan og hvorfor jeg arbeider med tekniske oppgaver og samarbeid.' },

    { type: 'h2', text: 'Utenfor studiene' },
    { type: 'p', text: 'Jeg spiller badminton, sjakk og piano – kanskje ikke samtidig.' },
  ],
}
