import { Download, ExternalLink, FileCode2 } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Block, Photo } from '../content/types'
import { useInView } from '../hooks/useInView'

/** Fader inn innholdet når det rulles inn i bildet. */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out motion-reduce:transition-none ${inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'} ${className}`}>
      {children}
    </div>
  )
}

/** Enkel tekstformatering: **fet** og [lenke](url). Interne lenker (/…) bruker ruteren. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((p, i) => {
        const b = p.match(/^\*\*(.+)\*\*$/)
        if (b) return <strong key={i}>{b[1]}</strong>
        const l = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (l) {
          const cls = 'font-bold text-blue underline decoration-2 underline-offset-2 hover:text-pink dark:text-sky-300'
          return l[2].startsWith('/')
            ? <Link key={i} to={l[2]} className={cls}>{l[1]}</Link>
            : <a key={i} href={l[2]} className={cls} target="_blank" rel="noreferrer">{l[1]}</a>
        }
        return <span key={i}>{p}</span>
      })}
    </>
  )
}

function Figure({ photo, className = '' }: { photo: Photo; className?: string }) {
  return (
    <figure className={`overflow-hidden rounded-xl bg-white text-ink shadow-md ${className}`}>
      <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-[1.03]" />
      <figcaption className="px-4 py-3 text-sm">{photo.caption}</figcaption>
    </figure>
  )
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'lead': return <Reveal key={i}><p className="text-lg sm:text-xl"><Rich text={b.text} /></p></Reveal>
          case 'p': return <Reveal key={i}><p className="my-3"><Rich text={b.text} /></p></Reveal>
          case 'h2': return <h2 key={i}>{b.text}</h2>
          case 'h3': return <h3 key={i}>{b.text}</h3>
          case 'list': return <Reveal key={i}><ul className="my-3 list-disc space-y-1 pl-6">{b.items.map((t, j) => <li key={j}><Rich text={t} /></li>)}</ul></Reveal>
          case 'note': return <Reveal key={i}><div className="my-4 rounded-md border-l-8 border-blue bg-blue/5 px-4 py-3 dark:bg-blue/20"><Rich text={b.text} /></div></Reveal>
          case 'placeholder': return <div key={i} className="placeholder">{b.text}</div>
          case 'image': return <Reveal key={i}><Figure photo={b.photo} className="my-6 max-w-xl" /></Reveal>
          case 'photos':
            return (
              <Reveal key={i}>
                <section className="my-8 -mx-4 rounded-none bg-teal px-4 py-6 text-white sm:mx-0 sm:rounded-2xl sm:px-6">
                  {b.title && <h2 className="mt-0 text-white">{b.title}</h2>}
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {b.items.map((ph, j) => <Figure key={j} photo={ph} />)}
                  </div>
                </section>
              </Reveal>
            )
          case 'timeline':
            return (
              <Reveal key={i}>
                <ol className="my-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {b.items.map((s, j) => (
                    <li key={j} className="card relative pl-5">
                      <span className="absolute left-0 top-0 h-full w-2 rounded-l-xl" style={{ background: ['var(--color-blue)', 'var(--color-rust)', 'var(--color-purple)', 'var(--color-teal)'][j % 4] }} aria-hidden />
                      <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400">steg {j + 1}</div>
                      <div className="font-bold">{s.label}</div>
                      <p className="mt-1 text-sm">{s.text}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )
          case 'code':
            return (
              <Reveal key={i}>
                <div className="my-5 overflow-hidden rounded-xl border-2 border-zinc-800 bg-zinc-900 text-zinc-100">
                  <div className="flex items-center justify-between gap-2 bg-zinc-800 px-4 py-2 font-mono text-xs">
                    <span className="flex items-center gap-2"><FileCode2 size={14} /> {b.title} <span className="text-zinc-400">· {b.language}</span></span>
                    {b.file && <a href={b.file} className="flex items-center gap-1 text-mustard hover:underline" download>Last ned fila <Download size={12} /></a>}
                  </div>
                  <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed"><code>{b.code}</code></pre>
                </div>
              </Reveal>
            )
          case 'pdf':
            return (
              <Reveal key={i}>
                <div className="my-5">
                  {b.summary && <p className="my-3"><Rich text={b.summary} /></p>}
                  <div className="my-3 flex flex-wrap gap-2">
                    <a className="pill text-sm no-underline" href={b.src} target="_blank" rel="noreferrer">Åpne {b.title} <ExternalLink size={14} /></a>
                    <a className="pill bg-blue text-sm no-underline" href={b.src} download>Last ned PDF <Download size={14} /></a>
                  </div>
                  <iframe title={b.title} src={b.src} className="h-[70vh] w-full rounded-xl border-2 border-zinc-200 dark:border-zinc-700" />
                </div>
              </Reveal>
            )
          case 'links':
            return (
              <div key={i} className="my-4 flex flex-wrap gap-2">
                {b.items.map((l, j) => <a key={j} className="pill bg-blue text-sm no-underline" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{l.label}</a>)}
              </div>
            )
        }
      })}
    </>
  )
}
