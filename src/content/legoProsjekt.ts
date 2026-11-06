import type { Page } from './types'

export const legoProsjekt: Page = {
  slug: 'lego-prosjekt',
  nav: 'LEGO-prosjekt',
  title: 'LEGO-prosjekt: Team 25 – robot og bærekraftig ressursforvaltning',
  blocks: [
    { type: 'lead', text: 'Målet med prosjektet er å lage en LEGO EV3-robot som undersøker en simulert fiskebestand og gir beskjed om det kan fiskes eller ikke. Prosjektideen knytter programmering og robotbygging til bærekraftig forvaltning av ressurser.' },
    { type: 'note', text: '**Status:** Denne siden bygger på rapportutkastet datert 28. oktober 2026, som beskriver prosjektideen og planlagt arbeid. Sluttresultatet er ikke dokumentert ennå. Prosjektet er et eget arbeid, atskilt fra [IDI-Rally](/idi-rally).' },

    { type: 'h2', text: 'Oppgaven og målene' },
    { type: 'placeholder', text: '[Mangler: offisiell oppgavetekst og mål – fra oppgaveinstruksjonen/rapporten.]' },

    { type: 'h2', text: 'Løsningen vi planla' },
    { type: 'placeholder', text: '[Mangler: beskrivelse av tiltenkt løsning – fra rapporten.]' },

    { type: 'h2', text: 'Min rolle i prosjektet' },
    { type: 'p', text: 'I rapportutkastet er min rolle å teste koden og roboten, bidra med mindre feilrettinger og konfigurere programmet på roboten.' },
    { type: 'placeholder', text: '[Mangler: hva jeg faktisk gjorde i gjennomføringen.]' },

    { type: 'h2', text: 'Prosess og testing' },
    { type: 'p', text: 'Rapportutkastet inneholder idévalg, rollefordeling, møtereferater og en plan for videre arbeid.' },
    { type: 'placeholder', text: '[Mangler: faktisk gjennomføring med eksempler fra planlegging, testing og endringer.]' },

    { type: 'h2', text: 'Programkode og løsning' },
    { type: 'placeholder', text: '[Mangler: kildekode. Legg fila i public/kode/ og bruk en code-blokk. Forklaring av formål, inn- og utdata, hovedflyt og samspill med robotens maskinvare skrives etter at koden er lest.]' },
    // Eksempel på kodeblokk – erstatt med faktisk kode:
    // { type: 'code', title: 'linjefolging.py', language: 'python', file: '/kode/linjefolging.py', code: 'from ev3dev2.motor import MoveTank\n...' },

    { type: 'h2', text: 'Resultat og begrensninger' },
    { type: 'placeholder', text: '[Mangler: endelig resultat med dokumentasjon (bilder, video, testnotater).]' },

    { type: 'h2', text: 'Prosjektrapport og dokumentasjon' },
    { type: 'placeholder', text: '[Mangler: nyeste versjon av prosjektrapporten (PDF). Legg fila i public/dokumenter/ og bruk en pdf-blokk.]' },
    // { type: 'pdf', title: 'Prosjektrapport Team 25', src: '/dokumenter/Prosjektrapport-Team25.pdf', summary: 'Kort sammendrag av rapporten …' },
  ],
}
