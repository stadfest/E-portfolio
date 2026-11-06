import { useEffect, useState } from 'react'

/** Skriver og sletter ordene etter tur. Respekterer "redusert bevegelse". */
export function useTypewriter(words: string[], typeMs = 70, deleteMs = 35, holdMs = 1800) {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [i, setI] = useState(0)
  const [text, setText] = useState(reduce ? words[0] ?? '' : '')
  const [del, setDel] = useState(false)
  useEffect(() => {
    if (reduce || words.length === 0) return
    const w = words[i % words.length]
    let d = del ? deleteMs : typeMs
    if (!del && text === w) d = holdMs
    const t = setTimeout(() => {
      if (!del && text === w) setDel(true)
      else if (del && text === '') { setDel(false); setI((n) => (n + 1) % words.length) }
      else setText(w.slice(0, text.length + (del ? -1 : 1)))
    }, d)
    return () => clearTimeout(t)
  }, [text, del, i, words, typeMs, deleteMs, holdMs, reduce])
  return text
}
