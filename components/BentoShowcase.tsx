'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

/* ─────────────────────────────────────────────────────────
   BENTO SHOWCASE — capability grid
   Cartes 01/02 : maquettes visuelles réelles
   Cartes 03/04 : line-art SVG minimaliste
───────────────────────────────────────────────────────── */

const STROKE = 'rgba(17,16,9,0.22)'
const STROKE_SOFT = 'rgba(17,16,9,0.12)'
const GOLD = '#C5A880'

/* Search / SEO */
function SeoMock() {
  return (
    <svg viewBox="0 0 130 150" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="20.5" y="46.5" width="89" height="20" rx="10" stroke={STROKE} />
      <circle cx="86" cy="56.5" r="7" stroke={GOLD} />
      <line x1="91" y1="61.5" x2="97" y2="67.5" stroke={GOLD} strokeLinecap="round" />
      <rect x="30" y="82" width="70" height="5" rx="2.5" stroke={STROKE_SOFT} />
      <rect x="30" y="94" width="54" height="5" rx="2.5" stroke={STROKE_SOFT} />
      <rect x="30" y="106" width="62" height="5" rx="2.5" stroke={STROKE_SOFT} />
    </svg>
  )
}

/* Performance gauge / rising line */
function PerfMock() {
  return (
    <svg viewBox="0 0 320 150" fill="none" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <line x1="40.5" y1="24.5" x2="40.5" y2="118.5" stroke={STROKE_SOFT} />
      <line x1="40.5" y1="118.5" x2="284.5" y2="118.5" stroke={STROKE_SOFT} />
      <path d="M52 104 L104 88 L150 96 L198 60 L246 44 L280 30" stroke={GOLD} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="198" cy="60" r="3" fill={GOLD} />
      <circle cx="280" cy="30" r="3" fill={GOLD} />
      <line x1="52" y1="118.5" x2="52" y2="122" stroke={STROKE_SOFT} />
      <line x1="150" y1="118.5" x2="150" y2="122" stroke={STROKE_SOFT} />
      <line x1="246" y1="118.5" x2="246" y2="122" stroke={STROKE_SOFT} />
    </svg>
  )
}

type BentoCell = {
  span: 1 | 2
  img?: string
  imgFit?: 'cover' | 'contain'
  imgPos?: string
  imgBg?: string
  imgPad?: string
  imgHeight?: number
  Mock?: React.FC
  label: string
  title: string
  desc: string
}

const CELLS: BentoCell[] = [
  {
    span: 2,
    img: '/images/bento/bento-web.jpg',
    imgFit: 'cover',
    imgPos: 'center 40%',
    imgHeight: 280,
    label: 'Architecture web',
    title: 'Sites sur-mesure',
    desc: "Des interfaces développées de zéro, sans aucun template intermédiaire. Une architecture propre, ultra-rapide et optimisée pour maximiser vos taux de conversion.",
  },
  {
    span: 1,
    img: '/images/bento/bento-mobile.jpg',
    imgFit: 'cover',
    imgPos: 'center center',
    imgBg: '#F0EDE6',
    imgHeight: 280,
    label: 'Mobile-first',
    title: 'Responsive natif',
    desc: "Une adaptabilité chirurgicale sur chaque écran. Vos plateformes offrent une expérience utilisateur fluide, rapide et intuitive, de l'ordinateur au smartphone.",
  },
  {
    span: 1,
    img: '/images/bento/bento-seo.jpg',
    imgFit: 'cover',
    imgPos: 'center center',
    imgHeight: 220,
    label: 'Visibilité',
    title: 'SEO intégré',
    desc: "Référencement technique dès la conception.",
  },
  {
    span: 2,
    img: '/images/bento/bento-perf.jpg',
    imgFit: 'cover',
    imgPos: 'center 70%',
    imgHeight: 220,
    label: 'Ingénierie',
    title: 'Performance mesurée',
    desc: "Code propre, temps de chargement optimisés et résultats traçables sur chaque livrable.",
  },
]

export default function BentoShowcase() {
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
    <section ref={ref} className="px-6 md:px-12 py-16 md:py-28" style={{ background: '#FAFAF6', borderTop: '1px solid rgba(17,16,9,0.06)', borderBottom: '1px solid rgba(17,16,9,0.06)' }}>

      {/* Header */}
      <div className="rv mb-10 md:mb-16 max-w-2xl">
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-4" style={{ color: '#807C73' }}>Notre savoir-faire</p>
        <h2 className="font-bold leading-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3.5vw,46px)', color: '#111009', letterSpacing: '-0.02em' }}>
          Une ingénierie digitale<br />pensée dans le détail.
        </h2>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CELLS.map((cell, i) => (
          <div
            key={i}
            className={`lux-card rv p-6 md:p-8 flex flex-col group ${cell.span === 2 ? 'sm:col-span-2' : 'col-span-1'}`}
            style={{ transitionDelay: `${i * 0.08}s` }}
            data-hover
          >
            {cell.img ? (
              /* ── Maquette visuelle réelle ── */
              <div
                className="mb-7 relative rounded-2xl overflow-hidden"
                style={{
                  height: cell.imgHeight ?? 210,
                  background: cell.imgBg ?? 'transparent',
                }}
              >
                <Image
                  src={cell.img}
                  alt={cell.title}
                  fill
                  sizes={cell.span === 2 ? '44vw' : '22vw'}
                  style={{
                    objectFit: cell.imgFit ?? 'cover',
                    objectPosition: cell.imgPos ?? 'center center',
                    transition: 'transform 0.55s cubic-bezier(.16,1,.3,1)',
                  }}
                  className="group-hover:scale-105"
                />
                {/* Vignette bas — fondu vers la carte (cover uniquement) */}
                {cell.imgFit !== 'contain' && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(250,250,246,0.5) 0%, transparent 42%)',
                    borderRadius: 'inherit',
                    pointerEvents: 'none',
                  }} />
                )}
              </div>
            ) : (
              /* ── Illustration SVG line-art ── */
              <div
                className="mb-7 flex items-center justify-center"
                style={{ height: 168, borderRadius: 12, background: '#FBFAF7', border: '1px solid rgba(17,16,9,0.05)', padding: '14px 18px' }}
              >
                {cell.Mock ? <cell.Mock /> : null}
              </div>
            )}

            <p className="text-[10px] uppercase tracking-[0.26em] font-medium mb-2" style={{ color: '#807C73' }}>{cell.label}</p>
            <h3 className="font-semibold mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#111009' }}>{cell.title}</h3>
            <p className="text-[12px] font-light leading-[1.7]" style={{ color: 'rgba(17,16,9,0.62)', maxWidth: 420 }}>{cell.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
