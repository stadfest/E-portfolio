import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { pages, site } from '../content'
import { useTheme } from '../hooks/useTheme'
import { CircuitBackground } from './CircuitBackground'

export function Layout() {
  const { dark, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0 }) }, [pathname])
  useEffect(() => {
    const f = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <CircuitBackground />
      <a href="#innhold" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-mustard focus:px-3 focus:py-2">Hopp til innhold</a>

      <header className="sticky top-0 z-40 border-b-4 border-mustard bg-paper/90 backdrop-blur dark:bg-[#121212]/90">
        {/* lesefremdrift */}
        <div className="h-1 bg-teal transition-[width] duration-150" style={{ width: `${progress}%` }} aria-hidden />
        <div className="bg-mustard">
          <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-3 px-4 py-2.5">
            <NavLink to="/" className="text-lg font-bold text-ink no-underline sm:text-xl">{site.name}</NavLink>
            <span className="hidden text-sm text-ink sm:inline">E-portefølje · {site.course}, {site.institution}</span>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-2">
          <nav aria-label="Hovedmeny" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-2 border-b-4 border-mustard bg-paper p-4 sm:static sm:flex sm:flex-row sm:flex-wrap sm:border-0 sm:bg-transparent sm:p-0 dark:bg-[#121212] sm:dark:bg-transparent`}>
            {pages.map((p) => (
              <NavLink key={p.slug} to={`/${p.slug}`} end={p.slug === ''}
                className={({ isActive }) => `pill text-sm no-underline ${isActive ? 'bg-purple' : ''}`}>
                {p.nav}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label={dark ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
              className="rounded-full border-2 border-teal p-2 text-teal transition hover:bg-teal hover:text-white">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Meny"
              className="rounded-full border-2 border-pink p-2 text-pink sm:hidden">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <main id="innhold" className="mx-auto w-full max-w-5xl flex-1 px-4 pb-16">
        <Outlet />
      </main>

      <footer className="border-t-4 border-purple bg-paper/90 dark:bg-[#121212]/90">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-4 py-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span>© {new Date().getFullYear()} {site.name} · {site.study}</span>
          <span>E-portefølje i emnet Teambasert samhandling</span>
        </div>
      </footer>
    </div>
  )
}
