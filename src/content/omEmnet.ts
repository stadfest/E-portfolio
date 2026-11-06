import type { Page } from './types'

export const omEmnet: Page = {
  slug: 'om-emnet',
  nav: 'Om emnet',
  title: 'Teambasert samhandling – teknisk arbeid i et team',
  blocks: [
    { type: 'lead', text: 'I Teambasert samhandling (IDATT1004) arbeider vi med praktiske oppgaver der samarbeid, teknisk gjennomføring og dokumentasjon henger sammen. I denne delen av porteføljen presenterer jeg oppgavene, mitt eget bidrag og refleksjoner over prosessen.' },
    { type: 'placeholder', text: '[Mangler: offisiell emnebeskrivelse, læringsutbytte og oppgavetekst. Teksten over er min egen beskrivelse, ikke et offisielt læringsutbytte.]' },

    { type: 'h2', text: 'Arbeidet i porteføljen' },
    { type: 'h3', text: 'IDI-Rally' },
    { type: 'p', text: 'Det innledende teamarbeidet med en LEGO EV3-robot som skulle følge en bane med svinger, linjefølging og hindringer. Her beskriver jeg særlig min rolle i testing, klargjøring av kode og rapportering av problemer. [Gå til IDI-Rally](/idi-rally)' },
    { type: 'h3', text: 'LEGO-prosjekt' },
    { type: 'p', text: 'Team 25 sitt prosjekt om en robot og en simulert fiskebestand. Siden samler prosjektideen, rollefordelingen, koden, prosessdokumentasjonen, testresultatene og rapporten. [Gå til LEGO-prosjektet](/lego-prosjekt)' },
    { type: 'h3', text: 'Refleksjon og læringsutbytte' },
    { type: 'p', text: 'Her knytter jeg konkrete erfaringer fra arbeidet til hva jeg har lært, hva jeg ville gjort annerledes og hvordan erfaringene kan brukes i arbeidslivet. [Gå til refleksjonen](/refleksjon)' },
  ],
}
