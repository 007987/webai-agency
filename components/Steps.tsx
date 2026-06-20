'use client'
import { useEffect, useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Consultation & Stratégie',
    duration: '1 Jour',
    description: "Analyse approfondie de votre marché et de votre positionnement. Nous définissons l'architecture logicielle et l'arborescence idéales pour aligner le futur site avec vos objectifs de conversion.",
    tags: ['Audit concurrentiel', 'User Flow', 'Cahier des charges'],
  },
  {
    number: '02',
    title: 'Design & Direction Artistique',
    duration: '2–3 Jours',
    description: "Création d'une interface utilisateur (UI/UX) exclusive, épurée et sur-mesure. Chaque section, typographie et interaction est pensée pour installer l'autorité visuelle de votre marque.",
    tags: ['Moodboard', 'Maquette Figma', 'Prototype Mobile'],
  },
  {
    number: '03',
    title: 'Ingénierie & Développement',
    duration: '4–10 Jours',
    description: "Développement d'une architecture performante et durable. Code sémantique, optimisation SEO native et vitesse de chargement instantanée, entièrement optimisée pour les réseaux 5G.",
    tags: ['Next.js & Tailwind', 'SEO Technique', 'Score Performance 100%'],
  },
  {
    number: '04',
    title: 'Tests & Révision',
    duration: '1–2 Jours',
    description: "Contrôle qualité rigoureux sur tous les terminaux et navigateurs. Nous ajustons les derniers détails d'animation et de réactivité sur la base de vos retours.",
    tags: ['QA Testing', 'Ajustements UX', 'Optimisation Assets'],
  },
  {
    number: '05',
    title: 'Livraison & Lancement',
    duration: 'Jour J',
    description: "Déploiement final sur votre infrastructure ou serveur sécurisé, suivi d'une prise en main simplifiée et d'une formation pour la gestion de vos contenus en totale autonomie.",
    tags: ['Mise en ligne', 'Transfert de propriété', 'Support Post-launch'],
  },
]

export default function Steps() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.06 })
    s.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-12"
      style={{ background: '#F9F9FB', borderTop: '1px solid rgba(17,16,9,0.06)', fontFamily: 'var(--font-inter)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <div className="rv flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="space-y-3">
            <span
              className="text-[10px] uppercase tracking-[0.4em] font-semibold block"
              style={{ color: '#C5A880' }}
            >
              Notre Méthode
            </span>
            <h2
              className="font-light tracking-tight"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4vw,44px)', color: '#111009', lineHeight: 1.1 }}
            >
              L&apos;art de façonner votre <br />
              <em style={{ fontStyle: 'italic', color: '#71717A' }}>empreinte numérique</em>
            </h2>
          </div>
          <p
            className="text-sm font-light leading-relaxed max-w-xs pl-4"
            style={{ color: '#71717A', borderLeft: '1px solid rgba(17,16,9,0.1)' }}
          >
            Un protocole fluide et optimisé, pensé pour concevoir des plateformes d&apos;exception à l&apos;échelle internationale.
          </p>
        </div>

        {/* Étapes */}
        <div
          className="rv relative border-t"
          style={{ borderColor: 'rgba(17,16,9,0.08)' }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="group flex flex-col md:flex-row md:items-start justify-between py-10 rounded-2xl transition-all duration-300"
              style={{
                borderBottom: '1px solid rgba(17,16,9,0.06)',
                transitionDelay: `${i * 0.06}s`,
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#fff'
                el.style.padding = '40px 32px'
                el.style.boxShadow = '0 2px 20px rgba(0,0,0,0.04)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.padding = ''
                el.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-start gap-6 md:gap-8 w-full max-w-3xl">
                {/* Numéro */}
                <span
                  className="text-2xl md:text-3xl font-light pt-0.5 flex-shrink-0"
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'rgba(197,168,128,0.8)' }}
                >
                  {step.number}
                </span>

                {/* Contenu */}
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      className="font-medium transition-colors duration-300 group-hover:text-[#C5A880]"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(17px,1.8vw,20px)', color: '#18181B' }}
                    >
                      {step.title}
                    </h3>
                    <span
                      className="text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 rounded-md"
                      style={{ color: '#71717A', background: 'rgba(17,16,9,0.05)' }}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <p className="text-sm font-light leading-relaxed" style={{ color: '#52525B', maxWidth: '600px' }}>
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {step.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[11px] font-light px-3 py-0.5 rounded-full"
                        style={{
                          color: '#71717A',
                          background: 'rgba(17,16,9,0.03)',
                          border: '1px solid rgba(17,16,9,0.08)',
                        }}
                      >
                        • {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
