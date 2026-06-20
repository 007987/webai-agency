const items = [
  'Développement Web',
  'Tunnels WhatsApp',
  'Identité Visuelle',
  'SEO & Organic Growth',
  'E-Commerce COD',
  'Hébergement NVMe',
]

export default function MarqueeBand() {
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-4 border-t border-b" style={{ background: '#EEEAE2', borderColor: 'rgba(17,16,9,0.06)' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-7 px-7 flex-shrink-0"
            style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '20px', fontWeight: 300, color: 'rgba(17,16,9,0.55)', letterSpacing: '0.04em' }}
          >
            {item}
            <span style={{ color: '#C5A880', fontStyle: 'normal', fontSize: '11px', fontFamily: 'var(--font-inter)', letterSpacing: '0.2em' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
