import Image from 'next/image'

interface PageHeroProps {
  label: string
  title: string
  titleEm?: string
  sub: string
  img: string
  imgAlt: string
}

export default function PageHero({ label, title, titleEm, sub, img, imgAlt }: PageHeroProps) {
  return (
    <section
      className="relative min-h-[54vh] flex flex-col justify-end px-12 pb-16 pt-32 overflow-hidden"
      style={{ background: '#F7F5F1' }}
    >
      <div className="absolute inset-0 z-0">
        <Image src={img} alt={imgAlt} fill style={{ objectFit: 'cover', objectPosition: 'center' }} sizes="100vw" />
        {/* Cream wash — image bleeds from the right, text breathes on the left */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(100deg, rgba(247,245,241,1) 0%, rgba(247,245,241,0.95) 32%, rgba(247,245,241,0.82) 54%, rgba(247,245,241,0.4) 78%, rgba(247,245,241,0.1) 100%)',
        }} />
        {/* Bottom + top softeners */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(247,245,241,1) 0%, rgba(247,245,241,0.85) 16%, transparent 46%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(247,245,241,0.6) 0%, transparent 26%)',
        }} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: '#C5A880' }} />
          <span className="text-[10px] uppercase tracking-[0.32em] font-medium" style={{ color: '#807C73' }}>{label}</span>
        </div>
        <h1 className="font-light leading-[0.95] mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,6vw,72px)', color: '#111009', letterSpacing: '-0.02em', fontWeight: 700 }}>
          {title}{titleEm && <> <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#111009' }}>{titleEm}</em></>}
        </h1>
        <p className="text-[13px] font-light max-w-[460px] leading-[1.85]" style={{ color: 'rgba(17,16,9,0.55)' }}>{sub}</p>
      </div>
    </section>
  )
}
