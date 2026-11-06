/**
 * ============================================================
 *  GRUNNINFO – rediger denne fila for navn, roller, lenker m.m.
 * ============================================================
 */
export const site = {
  name: 'Alireza Sedghi',
  course: 'Teambasert samhandling (IDATT1004)',
  institution: 'NTNU',
  study: 'Dataingeniør, NTNU',

  // Ordene som "skrives" i hero-seksjonen på forsiden (typewriter-effekt)
  roles: ['dataingeniørstudent', 'matematikk og statistikk', 'programmering i Python', 'vitenskapelig beregning'],

  // Bannerbilde på forsiden (fil i public/img/)
  banner: {
    src: '/img/robot-banner.jpg',
    alt: 'LEGO EV3-roboten sett fra siden, med EV3-enheten montert øverst og to lyssensorer foran.',
  },

  // Portrett: sett src når bildet er klart, f.eks. '/img/portrett.jpg'. Tom streng = plassholder vises.
  portrait: { src: '', alt: 'Portrett av Alireza Sedghi' },

  // Valgfrie lenker (vises bare hvis de er fylt ut)
  links: [
    // { label: 'CV (PDF)', href: '/dokumenter/AlirezaSedghi_CV.pdf' },
    // { label: 'GitHub', href: 'https://github.com/brukernavn' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/brukernavn' },
  ] as { label: string; href: string }[],

  // Små "spesifikasjoner" i hero-kortet
  specs: [
    { key: 'Studie', value: 'Dataingeniør, NTNU' },
    { key: 'Retning', value: 'Vitenskapelig og statistisk beregning' },
    { key: 'Verktøy', value: 'Python' },
    { key: 'Utenom', value: 'Badminton · sjakk · piano' },
  ],
}
