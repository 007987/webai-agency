'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const G = '#C5A880'

const PILLARS = [
  { num: '01', label: 'Stratégie', desc: 'Nous analysons chaque marché avant d\'écrire une seule ligne de code.' },
  { num: '02', label: 'Craft', desc: 'Chaque pixel est intentionnel. Chaque interaction, mémorable.' },
  { num: '03', label: 'Mesure', desc: 'KPIs clairs, livrables datés, résultats traçables.' },
]

export default function AgenceStudio() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.05 })
    s.querySelectorAll('.rv, .rvl').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background: '#F7F5F1', overflow: 'hidden' }}>

      {/* ── HEADER ────────────────────────────────────────── */}
      <div className="rv" style={{
        padding: '80px 48px 56px',
        borderBottom: '1px solid rgba(17,16,9,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '8.5px',
            letterSpacing: '0.32em', textTransform: 'uppercase',
            color: '#807C73', fontWeight: 500, marginBottom: 14,
          }}>Notre studio</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 52px)', color: '#111009',
            letterSpacing: '-0.025em', lineHeight: 1.0,
          }}>
            L'agence qui construit<br />
            <em style={{ fontStyle: 'italic', color: G }}>des actifs digitaux.</em>
          </h2>
        </div>
        <p style={{
          fontFamily: 'var(--font-inter)', fontWeight: 300,
          fontSize: '11.5px', lineHeight: 1.9,
          color: 'rgba(17,16,9,0.55)',
          maxWidth: 280, textAlign: 'right',
        }}>
          Fondée par des passionnés du web, YOUCEF web/AI allie
          précision technique et direction artistique de luxe pour
          livrer des expériences digitales durables.
        </p>
      </div>

      {/* ── EDITORIAL IMAGE BLOCK ─────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '85vh',
        borderBottom: '1px solid rgba(17,16,9,0.06)',
      }}>

        {/* LEFT — grand visuel vertical */}
        <div className="rv" style={{ position: 'relative', overflow: 'hidden', minHeight: 560 }}>
          <Image
            src="/images/agence/phones-luxury.jpg"
            alt="Expériences mobiles premium — YOUCEF web/AI"
            fill
            sizes="50vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'brightness(0.6) saturate(0.65) contrast(1.05)',
              transition: 'transform 3s cubic-bezier(.16,1,.3,1)',
            }}
            className="agence-img"
          />

          {/* Edge fades — fusion avec le fond #070503 */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(247,245,241,0) 55%, rgba(247,245,241,0.9) 100%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(247,245,241,0.35) 0%, transparent 25%, transparent 65%, rgba(247,245,241,0.7) 100%)',
          }} />

          {/* Gold grain overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(197,168,128,0.05) 0%, transparent 70%)',
            mixBlendMode: 'overlay',
          }} />

          {/* Caption bottom-left */}
          <div style={{
            position: 'absolute', bottom: 40, left: 40,
          }}>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '8px',
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(197,168,128,0.9)', marginBottom: 8,
            }}>Expériences mobiles</p>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(22px, 3vw, 36px)', color: '#111009',
              letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>Chaque écran,<br />une œuvre.</p>
          </div>
        </div>

        {/* RIGHT — texte + petit visuel */}
        <div style={{
          padding: '72px 48px 60px 52px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          borderLeft: '1px solid rgba(17,16,9,0.06)',
        }}>

          {/* Piliers */}
          <div>
            {PILLARS.map((p, i) => (
              <div key={i} className="rv" style={{
                paddingBottom: 28, marginBottom: 28,
                borderBottom: '1px solid rgba(17,16,9,0.06)',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 8 }}>
                  <span style={{
                    fontFamily: 'var(--font-inter)', fontSize: '8.5px',
                    letterSpacing: '0.18em', color: 'rgba(17,16,9,0.38)',
                  }}>{p.num}</span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: 'clamp(17px, 2vw, 22px)', color: '#111009',
                    letterSpacing: '-0.015em',
                  }}>{p.label}</h3>
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontWeight: 300,
                  fontSize: '12px', lineHeight: 1.8,
                  color: 'rgba(17,16,9,0.6)',
                  paddingLeft: 32,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Petit visuel horizontal — laptop luxury */}
          <div className="rv" style={{
            position: 'relative', overflow: 'hidden',
            height: 200, marginTop: 8,
            borderRadius: 1,
          }}>
            <Image
              src="/images/agence/laptop-luxury.jpg"
              alt="Sites web premium — Luxury Security Doors"
              fill
              sizes="25vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center center',
                filter: 'brightness(0.58) saturate(0.6) contrast(1.05)',
                transition: 'transform 2.5s cubic-bezier(.16,1,.3,1)',
              }}
              className="agence-img"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(247,245,241,0.5) 0%, transparent 50%, rgba(247,245,241,0.6) 100%)',
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 40%, rgba(247,245,241,0.85) 100%)',
            }} />
            <div style={{ position: 'absolute', bottom: 18, left: 20, right: 20 }}>
              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '8px',
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: '#C5A880',
              }}>Sites haut de gamme · +30 projets livrés</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rv" style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link
              href="/contact"
              className="no-underline"
              style={{
                fontFamily: 'var(--font-inter)', fontWeight: 500,
                fontSize: '9px', letterSpacing: '0.24em', textTransform: 'uppercase',
                color: '#F7F5F1', background: '#111009',
                padding: '14px 28px', display: 'inline-block',
                borderRadius: 6, border: '1px solid #111009',
                transition: 'background 0.3s, color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = G; el.style.color = '#111009'; el.style.borderColor = G
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#111009'; el.style.color = '#F7F5F1'; el.style.borderColor = '#111009'
              }}
              data-hover
            >
              Lancer un projet
            </Link>
            <Link
              href="/tarifs"
              className="no-underline"
              style={{
                fontFamily: 'var(--font-inter)', fontSize: '9px',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(17,16,9,0.35)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#111009' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(17,16,9,0.35)' }}
              data-hover
            >
              Voir les tarifs →
            </Link>
          </div>
        </div>
      </div>

      {/* ── MANIFESTO STRIP ───────────────────────────────── */}
      <div className="rv" style={{
        padding: '40px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(13px, 1.4vw, 18px)',
          color: 'rgba(17,16,9,0.08)',
          letterSpacing: '-0.01em',
        }}>
          Stratégie &nbsp;·&nbsp; Développement &nbsp;·&nbsp; Design &nbsp;·&nbsp; IA
        </p>
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: '9px',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#807C73',
        }}>MENA · Europe · Beyond</p>
      </div>
    </section>
  )
}
