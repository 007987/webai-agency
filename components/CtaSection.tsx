'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const WA_NUMBER = '213XXXXXXXXX'

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.15 })
    s.querySelectorAll('.rv, .rvl').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="contact"
      className="relative overflow-hidden text-center py-36 px-12"
      style={{ background: '#FAFAF6', borderTop: '1px solid rgba(17,16,9,0.06)' }}
    >
      {/* Soft gold glow + grain — keeps the block airy and premium */}
      <div className="absolute inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 60% 70% at 50% 40%, rgba(197,168,128,0.09) 0%, transparent 65%)',
      }} />

      <div className="relative z-10">
        <p className="rv text-[10px] uppercase tracking-[0.3em] font-medium mb-5" style={{ color: '#807C73' }}>
          Prêt à dominer votre marché ?
        </p>
        <h2 className="text-[clamp(36px,5.5vw,70px)] font-light leading-[1.04] max-w-[660px] mx-auto mb-4" style={{ fontFamily: 'var(--font-display)', color: '#111009', fontWeight: 700 }}>
          <span className="rvl"><span className="rvi">Votre business mérite</span></span>
          <span className="rvl d1"><span className="rvi">
            une{' '}<em style={{ fontStyle: 'italic', fontWeight: 400, color: '#111009' }}>présence d&apos;exception.</em>
          </span></span>
        </h2>
        <p className="rv text-[13px] font-light max-w-[380px] mx-auto leading-[1.85] mb-10" style={{ color: 'rgba(17,16,9,0.55)' }}>
          Un message WhatsApp suffit pour lancer votre projet. Réponse sous 2h. Consultation initiale offerte.
        </p>
        <Link
          href={`https://wa.me/${WA_NUMBER}?text=Bonjour%2C%20je%20souhaite%20lancer%20un%20projet%20web.`}
          target="_blank" rel="noopener noreferrer"
          className="rv inline-block text-[10px] uppercase tracking-[0.2em] font-medium px-10 py-4 rounded-full no-underline transition-all duration-300"
          style={{ background: '#111009', color: '#F7F5F1' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#C5A880'; el.style.color = '#111009' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111009'; el.style.color = '#F7F5F1' }}
        >
          Lancer un projet sur WhatsApp
        </Link>
      </div>
    </section>
  )
}
