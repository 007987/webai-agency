'use client'
import { useEffect, useRef } from 'react'

const WA_NUMBER = '213XXXXXXXXX'

export default function SupportSection() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.08 })
    s.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-12 py-24" style={{ background: '#FAFAF6', borderTop: '1px solid rgba(17,16,9,0.06)' }}>
      <div className="rv flex justify-between items-end mb-14" style={{ borderBottom: '1px solid rgba(17,16,9,0.08)', paddingBottom: '20px' }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2" style={{ color: '#807C73' }}>Assistance</p>
          <h2 className="font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px,3vw,38px)', color: '#111009' }}>
            Support & <em style={{ fontStyle: 'italic', color: '#111009' }}>Contact direct</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="lux-card p-10 rv group flex flex-col justify-between min-h-[220px]"
          data-hover
          style={{ textDecoration: 'none' }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full mb-6" style={{ border: '1px solid rgba(17,16,9,0.14)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652A11.98 11.98 0 0012.045 24c6.582 0 11.94-5.335 11.944-11.893 0-3.176-1.24-6.165-3.47-8.658zM12.045 21.98a9.94 9.94 0 01-5.031-1.356l-.36-.214-3.742.977.999-3.63-.236-.374a9.86 9.86 0 01-1.521-5.26c.001-5.45 4.46-9.888 9.94-9.888 2.655 0 5.146 1.03 7.018 2.9A9.825 9.825 0 0122 11.91c-.003 5.452-4.462 9.97-9.955 9.97zm5.458-7.442c-.3-.148-1.764-.864-2.038-.963-.273-.099-.471-.148-.67.15-.198.297-.77.963-.944 1.16-.173.196-.347.222-.644.074-.3-.148-1.261-.462-2.402-1.475-.888-.788-1.487-1.76-1.662-2.057-.173-.297-.018-.457.13-.604.133-.133.3-.346.448-.519.148-.173.197-.297.297-.495.1-.198.05-.372-.025-.52-.074-.148-.67-1.608-.917-2.202-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.793.372-.273.297-1.043 1.016-1.043 2.477 0 1.46 1.069 2.871 1.217 3.07.149.198 2.104 3.2 5.094 4.487.714.306 1.27.488 1.704.624.716.226 1.368.194 1.884.118.574-.085 1.764-.72 2.013-1.415.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" fill="#111009" opacity="0.9"/></svg>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: '#807C73' }}>WhatsApp</p>
            <p className="font-light mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#111009' }}>Réponse instantanée</p>
            <p className="text-[11px] font-light leading-[1.7]" style={{ color: 'rgba(17,16,9,0.5)' }}>Lun–Sam · 9h–19h<br />Réponse sous 15 min</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:contact@youcef-webai.dz"
          className="lux-card p-10 rv d1 group flex flex-col justify-between min-h-[220px]"
          data-hover
          style={{ textDecoration: 'none' }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full mb-6" style={{ border: '1px solid rgba(17,16,9,0.14)' }}>
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M12.6 0H1.4C.63 0 0 .62 0 1.375v8.25C0 10.38.63 11 1.4 11h11.2c.77 0 1.4-.62 1.4-1.375v-8.25C14 .62 13.37 0 12.6 0zm0 2.75L7 6.187 1.4 2.75v-1.375L7 4.813 12.6 1.375V2.75z" fill="#111009" opacity="0.9"/></svg>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: '#807C73' }}>Email</p>
            <p className="font-light mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#111009' }}>contact@youcef-webai.dz</p>
            <p className="text-[11px] font-light leading-[1.7]" style={{ color: 'rgba(17,16,9,0.5)' }}>Devis & briefs<br />Réponse sous 24h</p>
          </div>
        </a>

        {/* Location */}
        <div className="lux-card p-10 rv d2 flex flex-col justify-between min-h-[220px]">
          <div className="w-8 h-8 flex items-center justify-center rounded-full mb-6" style={{ border: '1px solid rgba(17,16,9,0.14)' }}>
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none"><path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.75A1.75 1.75 0 115 3.25a1.75 1.75 0 010 3.5z" fill="#111009" opacity="0.9"/></svg>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: '#807C73' }}>Localisation</p>
            <p className="font-light mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '20px', color: '#111009' }}>Alger, Algérie</p>
            <p className="text-[11px] font-light leading-[1.7]" style={{ color: 'rgba(17,16,9,0.5)' }}>Réunions sur RDV<br />Visio disponible</p>
          </div>
        </div>
      </div>
    </section>
  )
}
