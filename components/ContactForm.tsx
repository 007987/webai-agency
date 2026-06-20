'use client'

const WA_NUMBER = '213XXXXXXXXX'

const fields = [
  { label: 'Votre nom', name: 'name', type: 'text', placeholder: 'Mohammed Amine Benali' },
  { label: 'Votre email', name: 'email', type: 'email', placeholder: 'contact@votrebusiness.dz' },
  { label: 'Votre téléphone', name: 'phone', type: 'tel', placeholder: '+213 6XX XX XX XX' },
]

export default function ContactForm() {
  return (
    <div className="grid grid-cols-2 gap-12 max-w-[960px]">
      {/* Form */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-6" style={{ color: '#807C73' }}>Formulaire de Contact</p>
        <form className="space-y-5" action={`https://wa.me/${WA_NUMBER}`}>
          {fields.map(field => (
            <div key={field.name}>
              <label className="block text-[9px] uppercase tracking-[0.2em] font-medium mb-2" style={{ color: 'rgba(17,16,9,0.5)' }}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="lux-input w-full px-4 py-3 text-[12px] font-light outline-none"
              />
            </div>
          ))}
          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] font-medium mb-2" style={{ color: 'rgba(17,16,9,0.5)' }}>Service souhaité</label>
            <select
              className="lux-input w-full px-4 py-3 text-[12px] font-light outline-none"
            >
              <option value="">— Sélectionner un service</option>
              <option>Site Vitrine Essentiel (25 000 DZD)</option>
              <option>Site Vitrine Premium (55 000 DZD)</option>
              <option>E-Commerce Standard (85 000 DZD)</option>
              <option>E-Commerce Premium (119 000 DZD)</option>
              <option>Hébergement & Maintenance</option>
              <option>Design & Identité</option>
              <option>SMO — Réseaux Sociaux</option>
              <option>SEO — Référencement</option>
              <option>Autre / Devis personnalisé</option>
            </select>
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-[0.2em] font-medium mb-2" style={{ color: 'rgba(17,16,9,0.5)' }}>Votre message</label>
            <textarea
              rows={4}
              placeholder="Décrivez votre projet, vos objectifs, votre budget approximatif..."
              className="lux-input w-full px-4 py-3 text-[12px] font-light outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-300 rounded-lg"
            style={{ background: '#111009', color: '#F7F5F1' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#C5A880'; el.style.color = '#111009' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111009'; el.style.color = '#F7F5F1' }}
            data-hover
          >
            Envoyer ma demande
          </button>
        </form>
      </div>

      {/* Info */}
      <div className="pt-10">
        <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-8" style={{ color: '#807C73' }}>Informations</p>
        <div className="space-y-8">
          {[
            { label: 'Délai de réponse', value: 'Sous 24h ouvrables' },
            { label: 'Devis', value: 'Gratuit & sans engagement' },
            { label: 'Localisation', value: 'Alger, Algérie' },
            { label: 'Zones desservies', value: 'Algérie · France · EAU' },
            { label: 'Langues', value: 'Français · Arabe · Anglais' },
          ].map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(17,16,9,0.08)', paddingBottom: '20px' }}>
              <p className="text-[9px] uppercase tracking-[0.2em] mb-1.5" style={{ color: 'rgba(17,16,9,0.42)' }}>{item.label}</p>
              <p className="text-[13px] font-light" style={{ color: '#111009', fontFamily: 'var(--font-display)' }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
