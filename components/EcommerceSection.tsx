'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const features = [
  { n: '01', t: 'Paiement en ligne sécurisé', d: "Intégration CIB, Dahabia, paiement à la livraison et solutions tierces. Transactions sécurisées SSL." },
  { n: '02', t: 'Catalogue produits illimité', d: "Ajoutez, modifiez et organisez vos produits en quelques clics via votre back-office personnalisé." },
  { n: '03', t: 'Gestion des commandes', d: "Tableau de bord temps réel, notifications automatiques clients, suivi de livraison intégré." },
  { n: '04', t: 'SEO e-commerce natif', d: "Balises produits, URLs propres, rich snippets — optimisé pour apparaître en première page Google Algérie." },
]

export default function EcommerceSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    s.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-0 overflow-hidden" style={{ background: '#FAFAF6', borderTop: '1px solid rgba(17,16,9,0.06)', borderBottom: '1px solid rgba(17,16,9,0.06)' }}>
      <div className="grid grid-cols-2 min-h-[600px]">
        {/* Image */}
        <div className="rv relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85&auto=format&fit=crop"
            alt="E-Commerce Algérie"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="50vw"
          />
          {/* Subtle cream edge fusing image into the light panel */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(250,250,246,0) 75%, rgba(250,250,246,0.9) 100%)' }} />
          {/* Gold badge */}
          <div className="absolute bottom-10 left-10 px-5 py-3 flex items-center gap-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.92)', border: '1px solid rgba(17,16,9,0.1)', backdropFilter: 'blur(12px)', boxShadow: '0 8px 30px rgba(17,16,9,0.08)' }}>
            <span className="text-[22px]" style={{ fontFamily: 'var(--font-display)', color: '#C5A880', fontWeight: 400 }}>119K</span>
            <span className="text-[9px] uppercase tracking-[0.2em]" style={{ color: 'rgba(17,16,9,0.55)' }}>DZD · Clé en main</span>
          </div>
        </div>

        {/* Content */}
        <div className="rv d1 px-14 py-16 flex flex-col justify-center" style={{ background: '#FAFAF6' }}>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: '#807C73' }}>E-Commerce · Algérie</p>
          <h2 className="font-light leading-tight mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,42px)', color: '#111009', fontWeight: 700 }}>
            Votre boutique en ligne,<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#111009' }}>prête à vendre en Algérie</em>
          </h2>
          <p className="text-[12px] font-light leading-[1.85] mb-10" style={{ color: 'rgba(17,16,9,0.55)', maxWidth: '420px' }}>
            Nous créons des boutiques e-commerce performantes adaptées au marché algérien — paiement local, livraison intégrée, gestion simplifiée. Du catalogue au paiement, une solution complète clé en main.
          </p>
          <div className="space-y-5 mb-10">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 items-start">
                <span className="text-[9px] font-medium tracking-[0.2em] mt-0.5 flex-shrink-0" style={{ color: '#807C73' }}>{f.n}</span>
                <div>
                  <p className="text-[12px] font-medium mb-1" style={{ color: '#111009' }}>{f.t}</p>
                  <p className="text-[11px] font-light leading-[1.7]" style={{ color: 'rgba(17,16,9,0.5)' }}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="/services/ecommerce" className="inline-flex items-center gap-3 group" style={{ color: '#111009', textDecoration: 'none' }}>
            <span className="text-[10px] uppercase tracking-[0.28em] font-medium">Voir l&apos;offre complète</span>
            <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
