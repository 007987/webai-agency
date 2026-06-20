'use client'
import { useEffect, useRef } from 'react'

const territories = [
  {
    code: 'DZ',
    name: "Algérie",
    cities: ['Alger', 'Oran', 'Constantine', 'Béjaïa', 'Annaba', 'Tlemcen'],
    desc: "Notre terrain principal. Nous accompagnons des entreprises algériennes dans toutes les wilayas, des PME locales aux grandes marques.",
    stat: '+30 projets',
  },
  {
    code: 'EU',
    name: "Europe",
    cities: ['Paris', 'Lyon', 'Marseille', 'Bruxelles'],
    desc: "Diaspora algérienne et entrepreneurs franco-algériens qui veulent un site au niveau des standards européens avec un ancrage local.",
    stat: 'France · Belgique',
  },
  {
    code: 'ME',
    name: "Moyen-Orient",
    cities: ['Dubaï', 'Abu Dhabi', 'Riyad', 'Doha'],
    desc: "Marques premium et investisseurs du Golfe qui cherchent une présence digitale de luxe. Design bilingue FR/AR disponible.",
    stat: 'EAU · KSA · Qatar',
  },
]

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    s.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-12 py-24" style={{ background: '#FAFAF6', borderTop: '1px solid rgba(17,16,9,0.06)' }}>
      <div className="rv flex justify-between items-end mb-16" style={{ borderBottom: '1px solid rgba(17,16,9,0.06)', paddingBottom: '20px' }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2" style={{ color: '#807C73' }}>Notre Portée Géographique</p>
          <h2 className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,38px)', color: '#111009' }}>
            Notre expérience s&apos;étend en <em style={{ fontStyle: 'italic', color: '#111009' }}>Algérie, Europe & Moyen-Orient</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-0.5">
        {territories.map((t, i) => (
          <div key={i} className={`service-card p-10 rv ${i === 1 ? 'd1' : i === 2 ? 'd2' : ''}`} data-hover>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-[11px] font-medium tracking-[0.3em] px-2.5 py-1" style={{ color: '#807C73', border: '1px solid rgba(17,16,9,0.12)', borderRadius: '2px' }}>{t.code}</span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-medium" style={{ color: '#807C73' }}>{t.stat}</span>
            </div>
            <h3 className="font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: '#111009' }}>{t.name}</h3>
            <p className="text-[11px] font-light leading-[1.8] mb-7" style={{ color: 'rgba(17,16,9,0.62)' }}>{t.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {t.cities.map(c => (
                <span key={c} className="text-[9px] px-2.5 py-1 uppercase tracking-[0.15em]" style={{ background: 'rgba(17,16,9,0.04)', color: '#807C73', borderRadius: '1px' }}>{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
