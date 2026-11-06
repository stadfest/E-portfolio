import type { Page } from './types'

export const refleksjon: Page = {
  slug: 'refleksjon',
  nav: 'Refleksjon',
  title: 'Refleksjon og læringsutbytte',
  blocks: [
    { type: 'lead', text: 'Her oppsummerer jeg hva oppgavene gikk ut på, hva jeg bidro med, hva jeg lærte, og hva jeg ville gjort annerledes.' },

    { type: 'h2', text: 'Hva var oppgavene?' },
    { type: 'p', text: 'I [IDI-Rally](/idi-rally) skulle vi lage en LEGO EV3-robot som fulgte en bane med svinger, linjefølging og hindringer. I [LEGO-prosjektet](/lego-prosjekt) arbeider Team 25 med en robot som undersøker en simulert fiskebestand og gir beskjed om det kan fiskes eller ikke.' },

    { type: 'h2', text: 'Hva var mitt bidrag?' },
    { type: 'p', text: 'I IDI-Rally lå hovedbidraget mitt i testfasen: jeg overførte koden til roboten, testet den, forklarte teamet hva roboten faktisk gjorde, feilsøkte selv eller ga tilbakemeldinger til den som programmerte, og holdt oversikt over problemene på oppgavetavlene våre. Under konfigurasjonsproblemene med EV3-enheten bidro jeg med gjentatt testing og forslag til mulige feilkilder, som del av et felles arbeid.' },
    { type: 'placeholder', text: '[Mangler: mitt bidrag i LEGO-prosjektet.]' },

    { type: 'h2', text: 'Hva lærte jeg?' },
    { type: 'p', text: 'Det viktigste jeg lærte, var hvor stor betydning tidsstyring, samarbeid og kommunikasjon har i et teamprosjekt. Problemene med EV3-enheten viste hvor mye tid som kan gå med når gruppen står fast, og at tydelig kommunikasjon om hva vi hadde prøvd, hva som ikke fungerte, og hva vi skulle undersøke videre, var en viktig del av feilsøkingen.' },
    { type: 'p', text: 'Jeg lærte også betydningen av å ta opp problemene våre med læringsassistentene. Det var viktig å kunne forklare utfordringene vi møtte, slik at vi kunne diskutere dem og få hjelp til å komme videre. Erfaringen gjorde meg mer bevisst på hvordan vi bruker tiden og ressursene våre som gruppe. For meg ble det tydelig at et godt resultat avhenger av at vi deler observasjoner, samordner arbeidet og bruker tiden målrettet.' },
    { type: 'placeholder', text: '[Mangler: kobling til offisielle læringsutbytter – gjøres etter at de er lest.]' },

    { type: 'h2', text: 'Hva fungerte godt?' },
    { type: 'p', text: 'Arbeidsmåten med korte runder av programmering, bygging og testing gjorde at vi raskt så hvordan endringer slo ut i praksis. Oppgavetavlene ga oss oversikt over hva som var løst, og hva vi måtte arbeide videre med.' },

    { type: 'h2', text: 'Hva ville jeg gjort annerledes?' },
    { type: 'p', text: 'Hadde vi kjent til og brukt et Gantt-diagram fra starten, kunne vi ha fordelt tid, oppgaver og ressurser mer effektivt. Det kunne gitt oss bedre oversikt over framdriften og gjort det lettere å sette av nok tid til testing, feilsøking og uforutsette problemer.' },

    { type: 'h2', text: 'Hvordan kan jeg bruke dette i arbeidslivet?' },
    { type: 'p', text: 'Erfaringen med å teste systematisk, formidle observasjoner tydelig og følge opp problemer til de er avklart, er direkte overførbar til prosjektarbeid. Det samme gjelder å si fra tidlig når gruppen står fast, og å planlegge med rom for uforutsette problemer. Dette er arbeidsmåter jeg vil ta med meg videre, også i arbeid med vitenskapelig og statistisk beregning, der testing og tydelig dokumentasjon av hva som er gjort er viktig.' },
  ],
}
