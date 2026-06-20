'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const G = '#807C73'
const CREAM = '#111009'
const DIM = 'rgba(17,16,9,0.58)'
const MUTED = 'rgba(17,16,9,0.42)'
const BORDER = 'rgba(17,16,9,0.08)'

export interface Feature { text: string; included: boolean }
export interface PricingCard {
  name: string
  price: string
  unit?: string
  badge?: string
  features: Feature[]
  ctaLabel?: string
  ctaHref?: string
  highlighted?: boolean
}

interface Props {
  definition: { title: string; paragraphs: string[] }
  pourQui: { description: string; targets: string[] }
  benefits: { title: string; items: string[] }
  cards: PricingCard[]
}

export default function ServiceDetail({ definition, pourQui, benefits, cards }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.06 })
    el.querySelectorAll('.rv').forEach(x => io.observe(x))
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref}>

      {/* ── DÉFINITION ───────────────────────────────── */}
      <section className="px-12 py-24" style={{ background: '#F7F5F1', borderBottom: `1px solid ${BORDER}` }}>
        <div className="rv max-w-3xl">
          <p className="text-[9px] uppercase tracking-[0.28em] font-medium mb-4" style={{ color: G }}>Définition du service</p>
          <h2 className="font-bold mb-10 leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3.5vw,46px)', color: CREAM }}>
            {definition.title}
          </h2>
          <div className="space-y-5">
            {definition.paragraphs.map((p, i) => (
              <p key={i} className="text-[13px] font-light leading-[1.9]" style={{ color: DIM }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── POUR QUI + BÉNÉFICES ─────────────────────── */}
      <section className="px-12 py-24" style={{ background: '#FAFAF6', borderBottom: `1px solid ${BORDER}` }}>
        <div className="grid grid-cols-2 gap-20">
          <div className="rv">
            <p className="text-[9px] uppercase tracking-[0.28em] font-medium mb-4" style={{ color: G }}>Public cible</p>
            <h3 className="font-semibold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', color: CREAM }}>
              Ce service,<br />pour qui ?
            </h3>
            <p className="text-[13px] font-light leading-[1.9] mb-8" style={{ color: DIM }}>{pourQui.description}</p>
            <div className="flex flex-wrap gap-2">
              {pourQui.targets.map((t, i) => (
                <span key={i} className="text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full" style={{ border: `1px solid rgba(17,16,9,0.12)`, color: MUTED }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rv d1">
            <p className="text-[9px] uppercase tracking-[0.28em] font-medium mb-4" style={{ color: G }}>Bénéfices clés</p>
            <h3 className="font-semibold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,2.5vw,34px)', color: CREAM }}>
              {benefits.title}
            </h3>
            <ul className="space-y-4">
              {benefits.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[12px] font-light leading-[1.75]" style={{ color: DIM }}>
                  <span className="flex-shrink-0 mt-1" style={{ color: G, fontSize: '7px' }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TARIFICATION ─────────────────────────────── */}
      <section className="px-12 py-24" style={{ background: '#F7F5F1' }}>
        <div className="rv mb-14">
          <p className="text-[9px] uppercase tracking-[0.28em] font-medium mb-3" style={{ color: G }}>Tarification transparente</p>
          <h2 className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,40px)', color: CREAM }}>
            Ce qui est inclus dans <em style={{ fontStyle: 'italic', color: '#111009' }}>votre investissement</em>
          </h2>
        </div>
        <div className={`grid gap-6 ${cards.length === 1 ? 'max-w-md' : cards.length === 2 ? 'grid-cols-2 max-w-2xl' : 'grid-cols-3 max-w-4xl'}`}>
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rv lux-card flex flex-col ${card.highlighted ? 'featured' : ''}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                padding: '40px 32px',
              }}
              data-hover
            >
              {card.badge && (
                <span className="inline-block self-start text-[9px] uppercase tracking-[0.22em] px-3 py-1 mb-6 rounded-full" style={{ background: '#C5A880', color: '#111009' }}>
                  {card.badge}
                </span>
              )}
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium mb-3" style={{ color: 'rgba(17,16,9,0.4)' }}>{card.name}</p>
              <div className="flex items-end gap-2 pb-6 mb-6" style={{ borderBottom: '1px solid rgba(17,16,9,0.08)' }}>
                <span className="font-light leading-none" style={{ fontFamily: 'var(--font-display)', fontSize: '52px', color: '#111009', letterSpacing: '-0.02em' }}>
                  {card.price}
                </span>
                {card.unit && <span className="text-[11px] font-light mb-2" style={{ color: 'rgba(17,16,9,0.4)' }}>{card.unit}</span>}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {card.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-[11.5px] font-light leading-[1.6]"
                    style={{ color: f.included ? 'rgba(17,16,9,0.7)' : 'rgba(17,16,9,0.3)' }}>
                    <span className="flex-shrink-0 mt-0.5">
                      {f.included
                        ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="#111009" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3.2 3.2l5.6 5.6M8.8 3.2l-5.6 5.6" stroke="rgba(17,16,9,0.28)" strokeWidth="1.4" strokeLinecap="round"/></svg>}
                    </span>
                    <span style={{ textDecoration: f.included ? 'none' : 'line-through', textDecorationColor: 'rgba(17,16,9,0.22)' }}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={card.ctaHref || '/contact'}
                className="block text-center text-[10px] uppercase tracking-[0.22em] font-medium py-3.5 no-underline transition-all duration-300 rounded-lg"
                style={{ background: '#111009', color: '#F7F5F1' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = G; el.style.color = '#FFFFFF' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111009'; el.style.color = '#F7F5F1' }}
              >
                {card.ctaLabel || 'Démarrer ce projet'}
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
