import { useEffect, useRef } from 'react'

/**
 * Kretskort-bakgrunn: rettvinklede "ledningsbaner" i palettens farger
 * med små signalpulser som beveger seg langs banene. Reagerer svakt på musa.
 * Stopper animasjonen hvis brukeren har valgt redusert bevegelse.
 */
const GRID = 44
const COLORS = ['0,78,175', '0,128,159', '198,38,102', '144,37,115', '195,47,0', '242,165,45'] // blå, turkis, rosa, lilla, rust, sennep

interface Trace { pts: { x: number; y: number }[]; len: number; c: string }
interface Pulse { tr: Trace; t: number; v: number }

export function CircuitBackground() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let traces: Trace[] = []
    let pulses: Pulse[] = []
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    const build = () => {
      const dpr = window.devicePixelRatio || 1
      const W = window.innerWidth, H = window.innerHeight
      canvas.width = W * dpr; canvas.height = H * dpr
      canvas.style.width = `${W}px`; canvas.style.height = `${H}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const cols = Math.ceil(W / GRID), rows = Math.ceil(H / GRID)
      const n = Math.floor((cols * rows) / 22)
      traces = Array.from({ length: n }, () => {
        let x = Math.floor(Math.random() * cols) * GRID, y = Math.floor(Math.random() * rows) * GRID
        const pts = [{ x, y }]
        let dir = Math.floor(Math.random() * 4)
        const segs = 2 + Math.floor(Math.random() * 4)
        for (let i = 0; i < segs; i++) {
          const l = (1 + Math.floor(Math.random() * 4)) * GRID
          if (dir === 0) x += l; else if (dir === 1) y += l; else if (dir === 2) x -= l; else y -= l
          pts.push({ x, y })
          dir = (dir + (Math.random() < 0.5 ? 1 : 3)) % 4
        }
        let len = 0
        for (let i = 1; i < pts.length; i++) len += Math.abs(pts[i].x - pts[i - 1].x) + Math.abs(pts[i].y - pts[i - 1].y)
        return { pts, len, c: COLORS[Math.floor(Math.random() * COLORS.length)] }
      })
      pulses = traces.filter(() => Math.random() < 0.4).map((tr) => ({ tr, t: Math.random(), v: 0.5 + Math.random() }))
    }

    const at = (tr: Trace, t: number) => {
      let d = t * tr.len
      for (let i = 1; i < tr.pts.length; i++) {
        const a = tr.pts[i - 1], b = tr.pts[i]
        const s = Math.abs(b.x - a.x) + Math.abs(b.y - a.y)
        if (d <= s) { const k = s ? d / s : 0; return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k } }
        d -= s
      }
      return tr.pts[tr.pts.length - 1]
    }

    const draw = () => {
      const dark = document.documentElement.classList.contains('dark')
      const base = dark ? 0.26 : 0.24
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const tr of traces) {
        const end = tr.pts[tr.pts.length - 1]
        const near = Math.hypot(end.x - mouse.x, end.y - mouse.y) < 180
        ctx.strokeStyle = `rgba(${tr.c},${near ? 0.7 : base})`
        ctx.lineWidth = 2
        ctx.beginPath()
        tr.pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)))
        ctx.stroke()
        for (const p of [tr.pts[0], end]) {
          ctx.beginPath(); ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${tr.c},${near ? 0.9 : base + 0.1})`; ctx.fill()
        }
      }
      for (const p of pulses) {
        p.t += (p.v * 0.7) / p.tr.len
        if (p.t > 1) p.t = 0
        const { x, y } = at(p.tr, p.t)
        const g = ctx.createRadialGradient(x, y, 0, x, y, 9)
        g.addColorStop(0, `rgba(${p.tr.c},0.9)`); g.addColorStop(1, `rgba(${p.tr.c},0)`)
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 9, 0, Math.PI * 2); ctx.fill()
      }
      if (!reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; if (reduce) draw() }
    const onResize = () => { build(); if (reduce) draw() }
    build(); draw()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); window.removeEventListener('mousemove', onMove) }
  }, [])

  return (
    <>
      <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-paper)_85%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_30%,#121212_85%)]" />
    </>
  )
}
