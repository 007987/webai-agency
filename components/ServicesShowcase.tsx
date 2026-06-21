'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const G = '#807C73'

const SERVICES = [
  {
    num: '01',
    name: 'Sites Internet',
    sub: 'OnePage · Vitrine · Catalogue',
    detail: "Des vitrines d'élite et landing pages à fort impact — Architecture mobile-first ultra-rapide conçue pour convertir vos prospects.",
    price: 'dès 25 000 DA',
    href: '/services/onepage',
    img: '/images/services/web-vitrine.jpg',
    pos: 'center top',
  },
  {
    num: '02',
    name: 'E-Commerce Élite',
    sub: 'COD · WhatsApp · Paiement Livraison',
    detail: "Plateformes e-commerce immersives et fluides — Optimisées pour maximiser votre panier moyen et simplifier l'acte d'achat.",
    price: 'dès 85 000 DA',
    href: '/services/ecommerce',
    img: '/images/services/ecommerce.jpg',
    pos: 'center center',
    panelTitle: 'Boutique Élite',
    imgFilter: 'brightness(0.34) saturate(0.5) contrast(1.18)',
  },
  {
    num: '03',
    name: 'Hébergement NVMe',
    sub: 'Cloud Serveurs · Sécurité · Disponibilité',
    detail: 'Serveurs Cloud NVMe ultra-rapides. Performance maximale, sauvegardes automatisées et haute disponibilité pour maintenir votre business en ligne 24/7.',
    price: 'dès 6 500 DA/an',
    href: '/services/hebergement',
    img: '/images/services/hebergement.jpg',
    pos: 'center center',
  },
  {
    num: '04',
    name: 'Identité Visuelle',
    sub: 'Logo · Charte graphique · Print',
    detail: "3 concepts originaux, charte vectorielle complète, déclinaisons HD et kits premium prêts pour l'imprimerie.",
    price: 'dès 5 000 DA',
    href: '/services/design',
    img: '/images/services/identite.jpg',
    pos: 'center center',
  },
  {
    num: '05',
    name: 'Social Media SMO',
    sub: 'Stratégie · Contenu · Visibilité',
    detail: 'Optimisation de vos réseaux sociaux. Ligne éditoriale sur-mesure, grilles esthétiques et calendriers de posts pour attirer une audience qualifiée.',
    price: '9 000 DA/mois',
    href: '/services/smo',
    img: '/images/services/smo.jpg',
    pos: 'center center',
    panelTitle: 'Impact Social',
  },
  {
    num: '06',
    name: 'Référencement SEO',
    sub: 'Google Maps · Mots-clés · Avis',
    detail: 'Positionnement stratégique sur Google — Dominez les résultats de recherche locaux et organiques pour attirer des clients qualifiés en continu.',
    price: '9 000 DA/mois',
    href: '/services/seo',
    img: '/images/services/seo.jpg',
    pos: 'center center',
    panelTitle: 'Visibilité Google',
  },
]

export default function ServicesShowcase() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const s = sectionRef.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.05 })
    s.querySelectorAll('.rv, .rvl').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ background: '#F7F5F1', borderTop: '1px solid rgba(17,16,9,0.06)' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_42%]">

        {/* ── LEFT: service index ────────────────────────────── */}
        <div className="px-6 py-16 md:px-12 md:py-24 lg:px-12 lg:py-24 lg:border-r border-zinc-100" style={{ borderRightColor: 'rgba(17,16,9,0.06)' }}>

          {/* Header */}
          <div className="rv" style={{ marginBottom: 56 }}>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '8.5px', letterSpacing: '0.32em',
              textTransform: 'uppercase', color: G, fontWeight: 500, marginBottom: 16,
            }}>Nos expertises</p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'clamp(26px, 3.2vw, 42px)', color: '#111009',
              letterSpacing: '-0.01em', lineHeight: 1.05,
              textTransform: 'uppercase',
            }}>
              6 Pôles<br />d&apos;Expertise
            </h2>
          </div>

          {/* Service rows */}
          <div>
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="rv"
                style={{ transitionDelay: `${i * 0.06}s` }}
                onMouseEnter={() => setActive(i)}
              >
                <Link
                  href={s.href}
                  className="no-underline"
                  style={{ display: 'block' }}
                  data-hover
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '22px 0',
                    borderBottom: '1px solid rgba(17,16,9,0.06)',
                    transition: 'border-color 0.3s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(197,168,128,0.18)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(17,16,9,0.06)' }}
                  >
                    {/* Num + Name */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                      <span style={{
                        fontFamily: 'var(--font-inter)', fontSize: '9px',
                        letterSpacing: '0.2em', color: 'rgba(17,16,9,0.3)',
                        minWidth: 22, fontWeight: 400,
                      }}>{s.num}</span>
                      <div>
                        <p style={{
                          fontFamily: 'var(--font-display)', fontWeight: 700,
                          fontSize: 'clamp(17px, 1.9vw, 24px)',
                          letterSpacing: '-0.015em',
                          color: active === i ? '#111009' : 'rgba(17,16,9,0.35)',
                          transition: 'color 0.35s cubic-bezier(.16,1,.3,1)',
                          lineHeight: 1.1,
                        }}>{s.name}</p>
                        <p style={{
                          fontFamily: 'var(--font-inter)', fontSize: '9px',
                          letterSpacing: '0.14em', textTransform: 'uppercase',
                          color: G, opacity: active === i ? 0.6 : 0,
                          marginTop: 4,
                          transition: 'opacity 0.4s ease',
                        }}>{s.sub}</p>
                      </div>
                    </div>

                    {/* Price + Arrow — alignés avec le titre du service */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
                      <span style={{
                        fontFamily: 'var(--font-inter)', fontSize: '10px',
                        color: active === i ? 'rgba(17,16,9,0.7)' : 'rgba(17,16,9,0.18)',
                        transition: 'color 0.35s',
                        whiteSpace: 'nowrap',
                      }}>{s.price}</span>
                      <span style={{
                        fontSize: '12px', color: '#111009',
                        opacity: active === i ? 1 : 0,
                        transform: active === i ? 'translateX(0)' : 'translateX(-8px)',
                        transition: 'all 0.35s cubic-bezier(.16,1,.3,1)',
                        display: 'inline-block',
                      }}>→</span>
                    </div>
                  </div>

                  {/* Expandable detail */}
                  <div style={{
                    maxHeight: active === i ? '60px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(.16,1,.3,1)',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-inter)', fontSize: '11px',
                      fontWeight: 400, lineHeight: 1.72,
                      color: 'rgba(17,16,9,0.62)',
                      padding: '12px 0 4px 40px',
                    }}>{s.detail}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="rv" style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(17,16,9,0.06)' }}>
            <Link
              href="/services"
              className="no-underline"
              style={{
                fontFamily: 'var(--font-inter)', fontSize: '9px',
                letterSpacing: '0.24em', textTransform: 'uppercase',
                color: '#111009', fontWeight: 500,
                display: 'inline-flex', alignItems: 'center', gap: 10,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#807C73' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#111009' }}
              data-hover
            >
              Voir le détail de tous les services
              <span style={{ fontSize: '13px' }}>↗</span>
            </Link>
          </div>
        </div>

        {/* ── RIGHT: sticky cinematic image panel — desktop uniquement ── */}
        <div className="hidden lg:block" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
          {SERVICES.map((s, i) => (
            <div
              key={i}
              style={{
                position: 'absolute', inset: 0,
                opacity: active === i ? 1 : 0,
                transition: 'opacity 0.65s cubic-bezier(.16,1,.3,1)',
                pointerEvents: 'none',
              }}
            >
              {/* Image — désaturée mais lisible : maquettes visibles */}
              <Image
                src={s.img}
                alt={s.name}
                fill
                sizes="42vw"
                priority={i === 0}
                style={{
                  objectFit: 'cover',
                  objectPosition: s.pos,
                  filter: s.imgFilter ?? 'brightness(0.52) saturate(0.58) contrast(1.06)',
                  transform: active === i ? 'scale(1.06)' : 'scale(1.0)',
                  transition: 'transform 3s cubic-bezier(.16,1,.3,1)',
                }}
              />

              {/* Left-edge gradient — renforcé pour Identité Visuelle (masque les bords nets) */}
              <div style={{
                position: 'absolute', inset: 0,
                background: i === 3
                  ? 'linear-gradient(to right, rgba(7,5,3,0.80) 0%, rgba(7,5,3,0.25) 45%, transparent 72%)'
                  : 'linear-gradient(to right, rgba(7,5,3,0.55) 0%, rgba(7,5,3,0.08) 35%, transparent 60%)',
              }} />

              {/* Bottom vignette — renforcée pour Identité Visuelle */}
              <div style={{
                position: 'absolute', inset: 0,
                background: i === 3
                  ? 'linear-gradient(to top, rgba(7,5,3,0.72) 0%, rgba(7,5,3,0.22) 38%, transparent 62%)'
                  : 'linear-gradient(to top, rgba(7,5,3,0.45) 0%, rgba(7,5,3,0.1) 28%, transparent 52%)',
              }} />

              {/* Top-right corner fade — discret */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse 70% 50% at 100% 0%, rgba(7,5,3,0.28) 0%, transparent 70%)',
              }} />
            </div>
          ))}

          {/* Hairline or verticale décorative */}
          <div style={{
            position: 'absolute', top: '15%', bottom: '15%', right: 0, width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(197,168,128,0.08), transparent)',
          }} />
        </div>
      </div>
    </section>
  )
}
