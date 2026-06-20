'use client'
import { useEffect, useRef } from 'react'

const G = '#807C73'

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20L14.5 12L16.5 18L11 14L5.5 18L7.5 12L2 8H8.5L11 2Z" stroke="#111009" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Qualité sans compromis',
    desc: 'Chaque livrable passe par des processus d\'excellence rigoureux. Chaque ligne de code, chaque pixel est validé avant livraison.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#111009" strokeWidth="1.2"/>
        <path d="M11 7v4l3 2" stroke="#111009" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Délais garantis',
    desc: 'Votre projet est livré dans les délais convenus. Notre organisation interne garantit une exécution rapide sans sacrifier la qualité.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-4 3 3 4-5 5 6" stroke="#111009" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="3" width="18" height="14" rx="1" stroke="#111009" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'SEO natif intégré',
    desc: 'Chaque site est construit avec le référencement naturel intégré dès la conception — pour dominer Google Alger dès le lancement.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16l4-4 2 2 4-5 4 7H4z" stroke="#111009" strokeWidth="1.2" strokeLinejoin="round"/>
        <circle cx="7" cy="7" r="2" stroke="#111009" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'Design haute couture',
    desc: 'Nos maquettes se distinguent par leur élégance et leur impact. Un design qui inspire confiance et attire vos clients idéaux.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="5" width="18" height="12" rx="1.5" stroke="#111009" strokeWidth="1.2"/>
        <path d="M7 9h8M7 13h4" stroke="#111009" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Prix transparents',
    desc: 'Tarifs clairs adaptés au marché algérien. Pas de frais cachés, pas de mauvaises surprises — votre investissement est connu dès le départ.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7 3 4 6 4 10c0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z" stroke="#111009" strokeWidth="1.2"/>
        <circle cx="11" cy="10" r="2" stroke="#111009" strokeWidth="1.2"/>
      </svg>
    ),
    title: 'Sur-mesure total',
    desc: 'Vous choisissez le contenu, les fonctionnalités, le design. Nous construisons exactement ce que votre business exige — rien de générique.',
  },
]

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.08 })
    s.querySelectorAll('.rv,.rvl').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-12 py-24" style={{ background: '#FAFAF6' }}>
      {/* Header */}
      <div className="rv flex justify-between items-end pb-5 mb-16" style={{ borderBottom: '1px solid rgba(17,16,9,0.06)' }}>
        <div>
          <p className="text-[9px] uppercase tracking-[0.28em] font-medium mb-3" style={{ color: G }}>Notre différence</p>
          <h2 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,40px)', color: '#111009' }}>
            Pourquoi choisir <em style={{ fontStyle: 'italic', color: '#111009' }}>YOUCEF web/AI ?</em>
          </h2>
        </div>
        <p className="text-[11px] font-light max-w-[260px] text-right leading-[1.8]" style={{ color: 'rgba(17,16,9,0.55)' }}>
          6 engagements concrets qui nous séparent des agences généralistes algériennes.
        </p>
      </div>

      {/* 3×2 Grid */}
      <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(17,16,9,0.06)' }}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`rv p-10 group transition-all duration-500 ${i === 1 ? 'd1' : i === 2 ? 'd2' : i === 3 ? 'd1' : i === 4 ? 'd2' : ''}`}
            style={{ background: '#FAFAF6', transitionDelay: `${i * 0.06}s` }}
            data-hover
          >
            {/* Icon */}
            <div className="mb-6 transition-transform duration-500 group-hover:scale-110" style={{ display: 'inline-block' }}>
              {item.icon}
            </div>
            <h4 className="font-semibold mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#111009', letterSpacing: '0.01em' }}>
              {item.title}
            </h4>
            <p className="text-[11.5px] font-light leading-[1.8]" style={{ color: 'rgba(17,16,9,0.62)' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
