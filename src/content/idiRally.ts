import type { Page } from './types'

export const idiRally: Page = {
  slug: 'idi-rally',
  nav: 'IDI-Rally',
  title: 'Innledende teamarbeid – IDI-Rally',
  blocks: [
    { type: 'lead', text: 'I IDI-Rally skulle vi som team lage en fungerende LEGO EV3-robot som kunne konkurrere på en bane med svinger, linjefølging og hindringer. Oppgaven krevde at robotens konstruksjon og programkode fungerte sammen i praksis.' },

    { type: 'image', photo: { src: '/img/bane.jpg', alt: 'Banen til IDI-Rally: en stor hvit matte på gulvet med to svarte linjer i sløyfe, NTNU-logo i midten og en rød pil som viser startretningen.', caption: 'Banen roboten skulle følge. Den svarte linjen har svinger og et kryss, og den røde pilen markerer start.' } },

    { type: 'h2', text: 'Oppgaven' },
    { type: 'p', text: 'Roboten skulle følge en linje langs banen, håndtere svingene og reagere på hindringer den møtte. Arbeidet omfattet både den fysiske LEGO-konstruksjonen og programkoden som styrte roboten. Teamet utviklet løsningen sammen; mitt ansvar var først og fremst klargjøring av kode, testing og tilbakemelding om det som ikke fungerte som forventet.' },
    { type: 'placeholder', text: '[Mangler: eventuell offisiell oppgavetekst for IDI-Rally.]' },

    { type: 'h2', text: 'Samarbeid og kommunikasjon' },
    { type: 'timeline', items: [
      { label: 'Idé', text: 'Alle bidro med ideer til løsningen.' },
      { label: 'Programmering', text: 'To personer arbeidet med programkoden.' },
      { label: 'Bygging', text: 'Én til to personer jobbet med den fysiske LEGO-konstruksjonen, delvis parallelt med programmeringen.' },
      { label: 'Testing', text: 'Jeg overførte koden til roboten og testet. Observasjonene ga grunnlag for neste runde.' },
    ] },
    { type: 'p', text: 'Vi organiserte arbeidet som en gjentakende syklus med idéutvikling, programmering, bygging og testing. Alle bidro med ideer til løsningen. Deretter arbeidet to personer med programkoden, mens én til to personer jobbet med robotens fysiske LEGO-konstruksjon. Programmering og bygging foregikk delvis parallelt, og gjennom testingen undersøkte jeg hvordan delene fungerte sammen.' },

    { type: 'h3', text: 'Mitt bidrag: testing og feilsøking' },
    { type: 'p', text: 'Mitt hovedbidrag lå mot slutten av programmeringssyklusen, i overgangen fra programkode til en robot som kunne prøves ut på banen. Jeg hadde ansvar for å overføre koden til roboten og prøve den ut. Etter testene forklarte jeg resten av teamet hva roboten faktisk gjorde, hva som var uventet, og hvor det kunne være feil eller svakheter i koden. Jeg gikk gjennom koden og feilsøkte selv, eller ga konkrete og konstruktive tilbakemeldinger til den som programmerte. Disse tilbakemeldingene ga grunnlag for endringer før neste runde med testing.' },

    { type: 'h3', text: 'Oppfølging av problemer («issueboards»)' },
    { type: 'p', text: 'Jeg hadde også ansvar for oppgavetavlene våre, eller «issueboards». Der holdt jeg oversikt over problemer med både programkoden og selve roboten. Jeg fulgte opp tidligere feil gjennom de neste arbeidsrundene, slik at vi kunne undersøke om endringene hadde løst problemene, eller om vi måtte arbeide videre med dem.' },
    { type: 'placeholder', text: '[Mangler: skjermbilde eller eksport av issueboard, hvis det skal vises.]' },

    { type: 'photos', title: 'Bilder av roboten', items: [
      { src: '/img/robot-front.jpg', alt: 'LEGO EV3-roboten sett forfra. To lyssensorer peker ned mot bordet og lyser rødt, EV3-enheten sitter øverst med kabler til sensorene.', caption: 'Roboten sett forfra. De to lyssensorene foran brukes til linjefølging.' },
      { src: '/img/robot-side.jpg', alt: 'LEGO EV3-roboten sett fra siden. EV3-enheten er montert oppå rammen, med motor, tannhjul og et stort hjul synlig.', caption: 'Roboten fra siden, med EV3-enheten montert i konstruksjonen og drivverket synlig.' },
      { src: '/img/robot-laptop.jpg', alt: 'Roboten ligger på ryggen på en laptop. Tannhjulene, motoren og EV3-enhetens USB- og SD-porter er synlige.', caption: 'Roboten på laptopen under arbeid med oppsettet. Her ser man tannhjulene og portene på EV3-enheten.' },
    ] },

    { type: 'h2', text: 'Et konkret eksempel: konfigurasjon av EV3' },
    { type: 'p', text: 'Det tok flere uker før vi fikk en EV3-enhet til å fungere. Konfigurasjonen lot seg ikke fullføre, og vi fikk ikke overført programkoden fra datamaskinen til EV3-enheten. Vi testet og konfigurerte på nytt mange ganger. Selve LEGO-konstruksjonen var i hovedsak ferdig, men vi kom ikke videre med oppsettet.' },
    { type: 'p', text: 'Etter å ha undersøkt og forsøkt å konfigurere to ulike enheter fikk vi til slutt tilgang til en som fungerte. Da kunne vi montere den i konstruksjonen, fullføre konfigurasjonen og overføre programkoden fra datamaskinen til roboten. Da var det gått omtrent én til to uker siden fristen for semesterets to første øvinger.' },
    { type: 'p', text: 'Jeg bidro mye i denne delen av arbeidet gjennom gjentatt testing og feilsøking. Jeg prøvde ulike fremgangsmåter og foreslo mulige forklaringer på hvorfor oppsettet ikke fungerte, blant annet om problemet lå i konfigurasjonen eller i selve utstyret. Samtidig var dette et felles arbeid. Vi sto ofte samlet rundt roboten og diskuterte hva som kunne være galt, og hva vi burde prøve videre. Mitt bidrag var særlig å undersøke mulige feilkilder og formidle det jeg observerte underveis. Vi tok også opp problemene med læringsassistentene.' },

    { type: 'h2', text: 'Resultatet i IDI-Rally' },
    { type: 'placeholder', text: '[Mangler: faktisk resultat fra IDI-Rally.]' },

    { type: 'h2', text: 'Resultat og læring' },
    { type: 'p', text: 'Det viktigste jeg lærte, var hvor stor betydning tidsstyring, samarbeid og kommunikasjon har i et teamprosjekt. Problemene med EV3-enheten viste hvor mye tid som kan gå med når gruppen står fast. Jeg erfarte at tydelig kommunikasjon om hva vi hadde prøvd, hva som ikke fungerte, og hva vi skulle undersøke videre, var en viktig del av feilsøkingen.' },
    { type: 'p', text: 'Mer om læringen min, blant annet om planlegging med Gantt-diagram, står på [refleksjonssiden](/refleksjon).' },
  ],
}
