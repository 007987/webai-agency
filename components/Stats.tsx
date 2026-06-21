'use client'
import { useEffect, useRef } from 'react'

const stats = [
  {
    target: 150,
    suffix: 'M+ DZD',
    label: "Volume d'affaires\ngénéré pour nos clients",
  },
  {
    target: 30,
    prefix: '+',
    label: 'Marques & projets\npropulsés sur le web',
  },
  {
    target: 99,
    suffix: '.8%',
    label: 'Taux de disponibilité\nde nos tunnels WhatsApp',
  },
]

function animateCount(el: HTMLElement, target: number, suffix = '', prefix = '', dur = 2000) {
  let start: number | null = null
  const step = (ts: number) => {
    if (!start) start = ts
    const p = Math.min((ts - start) / dur, 1)
    el.textContent = prefix + Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = ref.current
    if (!section) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        e.target.classList.add('in')
        const numEl = (e.target as HTMLElement).querySelector<HTMLElement>('.stat-num')
        if (numEl) {
          animateCount(numEl, +numEl.dataset.target!, numEl.dataset.suffix ?? '', numEl.dataset.prefix ?? '', 2000)
        }
        io.unobserve(e.target)
      })
    }, { threshold: 0.2 })
    section.querySelectorAll('.rv, .rvl, .stat-item').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="agence"
      className="px-6 md:px-12 pt-16 md:pt-28 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 md:gap-16 items-center"
      style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(17,16,9,0.07)' }}
    >
      {/* ── TITRE GAUCHE ── */}
      <div>
        <p
          className="rv text-[10px] uppercase tracking-[0.3em] font-medium mb-4"
          style={{ color: '#807C73' }}
        >
          L&apos;Autorité de l&apos;Agence
        </p>
        <h2
          className="text-[clamp(24px,3vw,38px)] font-bold leading-[1.22]"
          style={{ fontFamily: 'var(--font-display)', color: '#09090B' }}
        >
          <span className="rvl"><span className="rvi">Des résultats</span></span>
          <span className="rvl d1"><span className="rvi">mesurables pour les</span></span>
          <span className="rvl d2"><span className="rvi" style={{ fontStyle: 'italic' }}>business d&apos;élite.</span></span>
        </h2>
      </div>

      {/* ── GRILLE DES STATS — empilées sur mobile, 3 colonnes sur tablette+ ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`stat-item rv ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}`}
            style={{
              borderLeft: '1px solid rgba(17,16,9,0.1)',
              /* padding-left uniforme : sécurité par rapport à la bordure */
              paddingLeft: '28px',
              paddingRight: '16px',
              paddingTop: '4px',
              paddingBottom: '4px',
            }}
          >
            {/* Chiffre animé */}
            <div
              className="stat-num font-medium leading-none tracking-[-0.015em]"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2vw, 28px)',
                color: '#09090B',
              }}
              data-target={s.target}
              data-suffix={s.suffix ?? ''}
              data-prefix={s.prefix ?? ''}
            >
              {s.prefix ?? ''}{0}{s.suffix ?? ''}
            </div>

            {/* Séparateur hairline */}
            <div
              style={{
                height: 1,
                marginTop: '10px',
                marginBottom: '10px',
                background: 'rgba(17,16,9,0.07)',
              }}
            />

            {/* Label — lisible et aligné */}
            <div
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '9.5px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                lineHeight: 1.65,
                color: '#71717A',   /* zinc-500 — lisible, haut de gamme */
                whiteSpace: 'pre-line',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
