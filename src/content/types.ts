/**
 * Innholdstyper. Hver side i src/content/ er en liste av "blokker".
 * Du trenger normalt ikke endre denne fila – rediger sidene i stedet.
 */
export type Block =
  | { type: 'p'; text: string }                       // avsnitt (støtter **fet** og [lenke](url))
  | { type: 'lead'; text: string }                    // ingress, litt større tekst
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'note'; text: string }                    // blå infoboks
  | { type: 'placeholder'; text: string }             // gul [Mangler: …]-boks – fjernes før publisering
  | { type: 'photos'; title?: string; items: Photo[] } // turkis bildeseksjon
  | { type: 'image'; photo: Photo }                   // ett bilde med bildetekst
  | { type: 'code'; title: string; language: string; code: string; file?: string } // kodeblokk + lenke til fil
  | { type: 'pdf'; title: string; src: string; summary?: string } // rapport: innebygd visning + nedlasting
  | { type: 'links'; items: { label: string; href: string }[] }
  | { type: 'timeline'; items: { label: string; text: string }[] } // steg i en prosess

export interface Photo {
  src: string      // fil i public/img/ – skriv '/img/filnavn.jpg'
  alt: string      // alternativ tekst (beskriv bildet for skjermlesere)
  caption: string  // bildetekst som vises under bildet
}

export interface Page {
  slug: string     // adressen, f.eks. 'idi-rally'
  title: string    // sidetittel (H1)
  nav: string      // tekst i menyen
  intro?: string   // kort tekst under tittelen
  blocks: Block[]
}
