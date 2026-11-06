import { ArrowRight, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Blocks, Reveal } from '../components/Blocks'
import { pages, site } from '../content'
import { useTypewriter } from '../hooks/useTypewriter'

const home = pages[0]
const cardColors = ['border-t-teal', 'border-t-rust', 'border-t-purple', 'border-t-blue']

export function Home() {
  const role = useTypewriter(site.roles)
  return (
    <>
      {/* Banner */}
      <figure className="-mx-4 mb-6 sm:mx-0 sm:mt-4 sm:overflow-hidden sm:rounded-2xl">
        <img src={site.banner.src} alt={site.banner.alt} className="max-h-[420px] w-full object-cover" />
      </figure>

      {/* Hero */}
      <section className="grid items-start gap-6 md:grid-cols-[1fr_300px]">
        <div>
          <p className="font-mono text-sm text-teal dark:text-teal">// {site.study}</p>
          <h1 className="mt-1">{site.name}</h1>
          <p className="mt-2 min-h-[2rem] text-xl text-purple dark:text-fuchsia-300" aria-live="polite">
            {role}<span className="animate-blink text-pink" aria-hidden>|</span>
          </p>
          <p className="mt-3 text-lg">{home.title}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link to="/idi-rally" className="pill no-underline">Se IDI-Rally <ArrowRight size={16} /></Link>
            <Link to="/refleksjon" className="pill bg-blue no-underline">Les refleksjonen</Link>
            {site.links.map((l) => <a key={l.href} href={l.href} className="pill bg-teal no-underline" target="_blank" rel="noreferrer">{l.label}</a>)}
          </div>
        </div>

        <aside className="card animate-float motion-reduce:animate-none">
          {site.portrait.src
            ? <img src={site.portrait.src} alt={site.portrait.alt} className="mb-3 aspect-square w-full rounded-lg object-cover" />
            : <div className="placeholder mt-0 flex aspect-square items-center justify-center text-center">[Mangler: portrettbilde]</div>}
          <dl className="space-y-1 font-mono text-xs">
            {site.specs.map((s) => (
              <div key={s.key} className="flex gap-2 border-b border-dashed border-zinc-200 py-1 last:border-0 dark:border-zinc-700">
                <dt className="w-16 shrink-0 text-zinc-500 dark:text-zinc-400">{s.key}</dt>
                <dd className="font-sans text-sm">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-3 flex items-center gap-1 font-mono text-xs text-teal"><Cpu size={14} /> LEGO EV3 · Python</div>
        </aside>
      </section>

      <Blocks blocks={home.blocks} />

      <h2>Hva finner du her?</h2>
      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {pages.slice(1).map((p, i) => (
            <li key={p.slug} className={`card border-t-8 ${cardColors[i % 4]}`}>
              <h3 className="mt-0">{p.nav}</h3>
              <p className="text-sm">{p.title}</p>
              <Link to={`/${p.slug}`} className="pill mt-3 text-sm no-underline">Åpne <ArrowRight size={14} /></Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </>
  )
}
