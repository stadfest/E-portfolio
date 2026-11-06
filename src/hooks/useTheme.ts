import { useEffect, useState } from 'react'

/** Lys/mørk modus – husker valget i nettleseren. */
export function useTheme() {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const s = localStorage.getItem('theme')
      if (s) return s === 'dark'
    } catch { /* ignorer */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* ignorer */ }
  }, [dark])
  return { dark, toggle: () => setDark((d) => !d) }
}
