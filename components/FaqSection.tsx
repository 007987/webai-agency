'use client'
import { useState, useEffect, useRef } from 'react'

const faqItems = [
  {
    question: "Quel est le délai de livraison pour la création d'un site web ?",
    answer: "Nos délais varient de 5 à 15 jours selon la complexité du projet. Une vitrine sur-mesure prend généralement une semaine, tandis qu'une plateforme e-commerce ou une application web nécessite jusqu'à deux semaines de développement intensif.",
  },
  {
    question: "Combien coûte la création d'un site internet chez WEBAI ?",
    answer: "Chaque projet étant développé sur-mesure, nos tarifs dépendent de vos fonctionnalités, du design et des objectifs de performance. Contactez-nous pour obtenir un devis gratuit et transparent sous 24h adapté à votre budget.",
  },
  {
    question: "Mon site sera-t-il visible sur Google en Algérie et à l'étranger ?",
    answer: "Absolument. Tous nos sites intègrent une architecture sémantique propre et une optimisation SEO native. Nous configurons votre référencement pour vous positionner prioritairement sur vos mots-clés stratégiques cibles.",
  },
  {
    question: "Puis-je gérer et modifier le contenu de mon site de manière autonome ?",
    answer: "Oui, entièrement. Nous livrons chaque site avec une interface d'administration intuitive. De plus, nous vous offrons une formation gratuite de 2 heures en fin de projet pour vous rendre 100% autonome sur la mise à jour de vos textes, images et actualités.",
  },
  {
    question: "Travaillez-vous avec des clients basés hors d'Algérie ?",
    answer: "Oui, nous collaborons régulièrement avec des entreprises à l'international (France, Émirats, Canada...). Grâce à nos outils de suivi (Figma, Notion, Slack), nous gérons le design et le développement à distance avec une transparence totale.",
  },
  {
    question: "Proposez-vous des forfaits de maintenance et de support après la livraison ?",
    answer: "Un support technique complet est inclus après le déploiement pour garantir le bon démarrage. Nous proposons également des forfaits de maintenance optionnels pour assurer les mises à jour de sécurité, les sauvegardes régulières et l'évolution continue de vos fonctionnalités.",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.08 })
    s.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-12"
      style={{ background: '#F9F9FB', borderTop: '1px solid rgba(17,16,9,0.06)', fontFamily: 'var(--font-inter)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* En-tête */}
        <div className="rv space-y-3 mb-16">
          <span
            className="text-[10px] uppercase tracking-[0.4em] font-semibold block"
            style={{ color: '#C5A880' }}
          >
            Questions Fréquentes
          </span>
          <h2
            className="font-light tracking-tight"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,4vw,44px)', color: '#111009' }}
          >
            FAQ —{' '}
            <em style={{ fontStyle: 'italic', color: '#71717A' }}>Toutes vos réponses</em>
          </h2>
        </div>

        {/* Accordéon */}
        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rv rounded-xl px-6 transition-all duration-300"
                style={{
                  background: '#fff',
                  border: `1px solid ${isOpen ? 'rgba(197,168,128,0.45)' : 'rgba(228,228,231,0.8)'}`,
                  boxShadow: isOpen
                    ? '0 4px 24px rgba(197,168,128,0.08)'
                    : '0 1px 4px rgba(0,0,0,0.04)',
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                {/* Trigger */}
                <button
                  className="w-full text-left flex justify-between items-center gap-6 py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-hover
                >
                  <span
                    className="font-medium text-base leading-snug transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: isOpen ? '#C5A880' : '#18181B',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen ? 'rgba(197,168,128,0.12)' : 'rgba(0,0,0,0.04)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                      color: isOpen ? '#C5A880' : '#71717A',
                      fontSize: '16px',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Content */}
                <div
                  style={{
                    maxHeight: isOpen ? '260px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(.16,1,.3,1)',
                  }}
                >
                  <p
                    className="text-sm font-light leading-relaxed pb-5 pt-2"
                    style={{
                      color: '#52525B',
                      borderTop: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
