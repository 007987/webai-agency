'use client'
import { useEffect, useRef } from 'react'

const reasons = [
  {
    title: 'Qualité sans compromis',
    desc: "Nos livrables passent par des processus d'excellence rigoureux. Chaque ligne de code, chaque pixel est validé avant livraison.",
  },
  {
    title: 'Investissement maîtrisé',
    desc: "Une transparence absolue dès le premier jour. Aucun frais caché, aucune mauvaise surprise en cours de projet. Vous investissez exclusivement dans la valeur réelle.",
  },
  {
    title: 'SEO natif intégré',
    desc: "Chaque site est architecturé avec un référencement naturel optimisé dès la première ligne de code — conçu pour dominer les moteurs de recherche dès son lancement.",
  },
  {
    title: 'Design haute couture',
    desc: "Nos maquettes se distinguent par leur élégance et leur impact visuel. Un design qui inspire confiance et attire vos clients idéaux.",
  },
  {
    title: 'Engagement & Délais',
    desc: "Le temps de nos clients est sacré. Notre organisation interne rigoureuse garantit une exécution rapide et une livraison ponctuelle, sans jamais sacrifier l'excellence.",
  },
  {
    title: 'Sur-mesure total',
    desc: "Vous choisissez le contenu, les fonctionnalités et le design. Nous construisons exactement ce que votre business exige.",
  },
]

export default function WhyChoose() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.1 })
    s.querySelectorAll('.rv,.rvl').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-12 py-24" style={{ borderBottom: '1px solid rgba(17,16,9,0.06)' }}>

      {/* ── EN-TÊTE ── */}
      <div className="rv flex justify-between items-end mb-16" style={{ borderBottom: '1px solid rgba(17,16,9,0.06)', paddingBottom: '20px' }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-3" style={{ color: '#807C73' }}>
            Notre Valeur Ajoutée
          </p>
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3vw, 38px)',
              color: '#111009',
              letterSpacing: '-0.015em',
              lineHeight: 1.05,
            }}
          >
            Pourquoi nous choisir ?
          </h2>
        </div>
        <p
          className="text-[11px] font-light max-w-[300px] text-right leading-[1.78]"
          style={{ color: 'rgba(17,16,9,0.52)' }}
        >
          6 engagements d&apos;élite qui redéfinissent les standards du web et propulsent votre business.
        </p>
      </div>

      {/* ── GRILLE ── */}
      <div className="grid grid-cols-3 gap-0.5">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`service-card p-9 rv ${i === 1 ? 'd1' : i === 2 ? 'd2' : i === 3 ? 'd1' : i === 4 ? 'd2' : ''}`}
            data-hover
          >
            <div
              className="text-[9.5px] font-medium mb-6 tracking-[0.22em]"
              style={{ color: '#A8A29E' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3
              className="font-semibold mb-3 leading-snug"
              style={{ fontFamily: 'var(--font-display)', fontSize: '19px', color: '#111009' }}
            >
              {r.title}
            </h3>
            <p
              className="text-[11.5px] font-light leading-[1.78]"
              style={{ color: 'rgba(17,16,9,0.60)' }}
            >
              {r.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}
