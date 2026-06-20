'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

const team = [
  { name: 'Youcef', role: 'Directeur & Développeur Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85&auto=format&fit=crop&crop=faces', spec: ['Next.js', 'IA', 'Stratégie'] },
  { name: 'Designer Senior', role: 'Direction Artistique & UI/UX', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=85&auto=format&fit=crop&crop=faces', spec: ['Figma', 'Branding', 'Motion'] },
  { name: 'Dev Full-Stack', role: 'Développeur Backend & E-Commerce', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=85&auto=format&fit=crop&crop=faces', spec: ['Laravel', 'API', 'CMS'] },
  { name: 'SEO Manager', role: 'Référencement & Performance', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85&auto=format&fit=crop&crop=faces', spec: ['SEO', 'Analytics', 'Ads'] },
]

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    s.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-12 py-24" style={{ background: '#F7F5F1', borderTop: '1px solid rgba(17,16,9,0.06)' }}>
      <div className="rv flex justify-between items-end mb-16" style={{ borderBottom: '1px solid rgba(17,16,9,0.06)', paddingBottom: '20px' }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2" style={{ color: '#807C73' }}>Notre Équipe</p>
          <h2 className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,38px)', color: '#111009' }}>
            Une équipe <em style={{ fontStyle: 'italic', color: '#111009' }}>qualifiée & créative</em>
          </h2>
        </div>
        <p className="text-[11px] font-light max-w-[280px] text-right leading-[1.75]" style={{ color: 'rgba(17,16,9,0.55)' }}>
          Des experts pluridisciplinaires au service de votre ambition digitale.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-0.5">
        {team.map((m, i) => (
          <div key={i} className={`rv group ${i === 1 ? 'd1' : i === 2 ? 'd2' : i === 3 ? 'd3' : ''}`} data-hover>
            {/* Photo */}
            <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '3/4' }}>
              <Image
                src={m.img}
                alt={m.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(30%) contrast(1.02)', transition: 'filter 0.6s ease, transform 0.8s ease' }}
                className="group-hover:grayscale-0"
                sizes="25vw"
              />
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" style={{ background: 'rgba(247,245,241,0.1)' }} />
            </div>
            <div className="px-1">
              <h3 className="font-semibold mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: '#111009' }}>{m.name}</h3>
              <p className="text-[10px] font-light mb-4" style={{ color: 'rgba(17,16,9,0.58)' }}>{m.role}</p>
              <div className="flex flex-wrap gap-1">
                {m.spec.map(s => (
                  <span key={s} className="text-[8px] px-2 py-0.5 uppercase tracking-[0.15em]" style={{ background: 'rgba(17,16,9,0.04)', color: '#807C73', borderRadius: '1px' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
