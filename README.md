# stadfest.github.io
# E-portefølje – Alireza Sedghi

Nettsiden er bygd med React + TypeScript + Tailwind (Vite) og publiseres automatisk på GitHub Pages.

## Slik redigerer du innholdet (ingen koding nødvendig)

All tekst ligger i mappen **`src/content/`** – én fil per side:

| Fil | Side |
|---|---|
| `site.ts` | navn, roller i «skrivemaskin»-effekten, bannerbilde, portrett, lenker |
| `hjem.ts` | Hjem / Om meg |
| `omEmnet.ts` | Om emnet |
| `idiRally.ts` | IDI-Rally |
| `legoProsjekt.ts` | LEGO-prosjekt |
| `refleksjon.ts` | Refleksjon |

Hver side er en liste av blokker, f.eks.

```ts
{ type: 'h2', text: 'Overskrift' },
{ type: 'p', text: 'Et avsnitt med **fet tekst** og en [lenke](/idi-rally).' },
{ type: 'placeholder', text: '[Mangler: …]' },   // gul boks – slett før publisering
{ type: 'photos', title: 'Bilder', items: [{ src: '/img/fil.jpg', alt: '…', caption: '…' }] },
{ type: 'code', title: 'fil.py', language: 'python', file: '/kode/fil.py', code: '…' },
{ type: 'pdf', title: 'Prosjektrapport', src: '/dokumenter/rapport.pdf', summary: '…' },
```

Alle blokktyper er beskrevet i `src/content/types.ts`.

- **Bilder** legges i `public/img/`, **PDF-er** i `public/dokumenter/`, **kode** i `public/kode/`.
- Rediger direkte på GitHub (åpne fila → blyant-ikonet → *Commit changes*). Nettsiden bygges og publiseres automatisk etter 1–2 minutter (se fanen *Actions*).

## Kjøre lokalt (valgfritt)

```bash
npm install
npm run dev      # forhåndsvisning på http://localhost:5173
npm run build    # produksjonsbygg i dist/
```

## Publisering på GitHub Pages (første gang)

1. Opprett et repo som heter `eportfolio` (eller endre `REPO_NAME` i `vite.config.ts`).
2. Push koden til `main`.
3. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
4. Adressen blir `https://<brukernavn>.github.io/eportfolio/`.

## Fonter

Siden bruker Comic Sans MS der den finnes, og ellers **Comic Relief** (SIL Open Font License, `public/fonts/`), som har samme metrikk.
