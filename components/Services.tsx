'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

interface ServiceCard {
  id: string; label: string; name: string; desc: string
  features: string[]; price: string; unit?: string
  featured?: boolean; badge?: boolean
}

const webCards: ServiceCard[] = [
  {
    id: 'A', label: 'A — Landing Page', name: 'Site OnePage Impact',
    desc: "Une page unique à fort impact conçue pour la conversion immédiate d'un produit, d'un événement ou d'un service artisanal.",
    features: ["Design responsive fluide, Mobile-First obligatoire", "Section Hero avec proposition de valeur unique", "Formulaire d'action ou bouton d'appel direct unique", "Optimisation performances de chargement 4G"],
    price: '25 000', badge: true,
  },
  {
    id: 'B', label: 'B — Vitrine Professionnel', name: 'Vitrine Prestige 5 Pages',
    desc: "La vitrine incontournable pour instituts de beauté, professions libérales et établissements haut de gamme d'Alger.",
    features: ["Accueil · À Propos · Services · Galerie · Contact", "Tunnel WhatsApp direct pour prise de RDV en ligne", "Grille asymétrique pour photos avant/après", "Formulaire complet + intégration carte de localisation"],
    price: '45 000', badge: true,
  },
  {
    id: 'C', label: 'C — Catalogue Entreprise', name: 'Catalogue Digital Pro',
    desc: "Pour showrooms, fabricants de meubles et marques de cosmétiques souhaitant exposer leurs collections sans paiement immédiat.",
    features: ["Pages et menus illimités — flexibilité totale", "Admin complet, gestion autonome des catégories", "Fiches techniques individuelles par article", "Bouton devis / commande WhatsApp par produit", "Blog d'actualités d'entreprise intégré"],
    price: '69 000', badge: true,
  },
  {
    id: 'D', label: 'D — E-Commerce Pro', name: 'Plateforme E-Commerce Élite',
    desc: "Solution e-commerce robuste et haut de gamme, entièrement optimisée pour les spécificités du marché algérien (COD).",
    features: ["Check-out 1 clic · Paiement à la Livraison (COD)", "Notifications commandes instantanées sur WhatsApp", "Admin épuré : stocks, ventes, statuts de livraison", "Espace membre · Avis clients · Pop-ups promotionnelles"],
    price: '119 000', featured: true, badge: true,
  },
]

const infraCards: ServiceCard[] = [
  {
    id: 'H1', label: '', name: 'Hébergement Seul',
    desc: "Serveurs NVMe ultra-rapides avec certificat SSL (HTTPS) inclus et adresses e-mails professionnelles illimitées.",
    features: ["Serveurs NVMe haute performance", "Certificat de sécurité SSL / HTTPS inclus", "E-mails pro illimités (ex: contact@entreprise.dz)"],
    price: '12 000', unit: '/ an',
  },
  {
    id: 'H2', label: '', name: 'Hébergement & Maintenance Élite',
    desc: "Formule complète : hébergement premium, sauvegardes hebdomadaires automatisées et forfait modifications mensuelles.",
    features: ["Tout le pack hébergement premium inclus", "Sauvegarde hebdomadaire automatisée", "Forfait modifications mensuelles (textes, images)"],
    price: '25 000', unit: '/ an',
  },
]

const designCards = [
  { name: 'Design de Logo Élite', desc: "3 concepts originaux + charte graphique complète (typographies et codes couleurs vectoriels).", price: '15 000' },
  { name: 'Pack Print Premium', desc: "Cartes de visite finition mate/dorure, brochures, dépliants — maquettes prêtes pour l'imprimerie.", price: '12 000' },
  { name: 'Bannières & Kits Ads', desc: "Bannières web + kits graphiques pour campagnes Google Ads et Meta (Facebook/Instagram).", price: '8 000' },
]

const C = { gold: '#C5A880', goldLight: 'rgba(17,16,9,0.35)', cream: '#111009', dim: 'rgba(17,16,9,0.62)', muted: 'rgba(17,16,9,0.45)', label: '#807C73', bg: '#FFFFFF', bgHov: '#FDFCF9', border: 'rgba(17,16,9,0.08)', borderGold: 'rgba(17,16,9,0.12)' }

function Btn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-[9px] uppercase tracking-[0.18em] font-medium rounded-full px-5 py-2.5 no-underline transition-all duration-300 inline-block"
      style={{ background: '#111009', color: '#F7F5F1', border: '1px solid #111009' }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = C.gold; el.style.color = '#111009'; el.style.borderColor = C.gold }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = '#111009'; el.style.color = '#F7F5F1'; el.style.borderColor = '#111009' }}
    >{children}</Link>
  )
}

function WCard({ card }: { card: ServiceCard }) {
  const feat = card.featured
  return (
    <div className={`service-card p-10 flex flex-col ${feat ? 'featured' : ''}`} data-hover>
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px]" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: C.muted }}>{card.label}</p>
        {feat && <span className="text-[9px] uppercase tracking-[0.22em] font-semibold px-3 py-1 rounded-full" style={{ background: '#C5A880', color: '#111009' }}>Populaire</span>}
      </div>
      {card.badge && <span className="badge-incl mb-4">Domaine + Hébergement offerts</span>}
      <h4 className="text-[clamp(16px,2vw,22px)] font-semibold mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>{card.name}</h4>
      <p className="text-[12px] font-light leading-[1.75] mb-5" style={{ color: C.dim }}>{card.desc}</p>
      <ul className="flex-1 mb-6 space-y-0">
        {card.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[11px] leading-[1.6] py-1.5 border-b" style={{ color: 'rgba(17,16,9,0.62)', borderColor: C.border }}>
            <span className="flex-shrink-0 mt-[3px]">
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="#111009" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>{f}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-2">
        <div className="price-display" style={{ color: C.cream }}>
          {card.price} <span className="text-[12px] font-light" style={{ fontFamily: 'var(--font-inter)', color: C.muted }}>DA{card.unit ? ` ${card.unit}` : ''}</span>
        </div>
        <Btn href="#contact">Démarrer</Btn>
      </div>
    </div>
  )
}

function PoleHead({ num, name, tagline }: { num: string; name: string; tagline: string }) {
  return (
    <div className="rv flex items-baseline gap-4 pb-4 mb-8" style={{ borderBottom: `1px solid ${C.border}` }}>
      <span className="text-[16px]" style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: '#B0ABA2' }}>{num}</span>
      <h3 className="text-[clamp(18px,2.5vw,28px)] font-semibold tracking-[-0.01em]" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>{name}</h3>
      <span className="ml-auto text-[11px] font-light" style={{ color: C.muted }}>{tagline}</span>
    </div>
  )
}

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const s = ref.current; if (!s) return
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.1, rootMargin: '0px 0px -24px 0px' })
    s.querySelectorAll('.rv, .rvl').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} id="services" className="px-12 pt-24 pb-0">
      <div className="rv flex justify-between items-end pb-5 mb-16" style={{ borderBottom: `1px solid ${C.border}` }}>
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-medium mb-2" style={{ color: C.label }}>Nos Expertises</p>
          <h2 className="text-[28px] font-bold tracking-[-0.01em]" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>5 Pôles de Compétences</h2>
        </div>
        <p className="text-[9px] uppercase tracking-[0.2em] max-w-[220px] text-right leading-[1.7]" style={{ color: C.muted }}>Hébergement NVMe &amp; domaine offerts la 1ère année sur toute création de site</p>
      </div>

      {/* POLE 1 */}
      <div id="tarifs" className="mb-24">
        <PoleHead num="01" name="Développement Web & Architecture E-Commerce" tagline="Mobile-first · Optimisé 4G Algérie" />
        <div className="grid grid-cols-2 gap-0.5">
          {webCards.map(c => <WCard key={c.id} card={c} />)}
        </div>
      </div>

      {/* POLE 2 */}
      <div className="mb-24">
        <PoleHead num="02" name="Infrastructure & Hébergement Web Pro" tagline="Serveurs NVMe · SSL · E-mails Pro" />
        <div className="grid grid-cols-2 gap-0.5">
          {infraCards.map(c => <WCard key={c.id} card={c} />)}
        </div>
      </div>

      {/* POLE 3 */}
      <div className="mb-24">
        <PoleHead num="03" name="Création Graphique & Identité Visuelle Premium" tagline="Minimaliste · Haute couture · Vectoriel" />
        <div className="grid grid-cols-3 gap-0.5">
          {designCards.map((d, i) => (
            <div key={i} className="service-card p-9 flex flex-col" data-hover>
              <h4 className="text-[18px] font-semibold mb-2.5 leading-snug" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>{d.name}</h4>
              <p className="text-[11px] font-light leading-[1.75] mb-5 flex-1" style={{ color: C.dim }}>{d.desc}</p>
              <div className="flex justify-between items-center">
                <div className="price-display" style={{ color: C.cream }}>{d.price} <span className="text-[12px] font-light" style={{ color: C.muted }}>DA</span></div>
                <Btn href="#contact">Demander</Btn>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POLE 4 — SMO */}
      <div className="mb-24">
        <PoleHead num="04" name="Social Media & Configuration Plateformes (SMO)" tagline="Pack Launch · Facebook · Instagram · TikTok" />
        <div className="service-card dark p-12 grid grid-cols-2 gap-14 items-start" data-hover>
          <div>
            <h4 className="text-[clamp(20px,2.5vw,28px)] font-semibold mb-3 leading-snug" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>Pack Launch Social Media</h4>
            <p className="text-[13px] font-light leading-[1.85] mb-6" style={{ color: C.dim }}>Déploiement technique et optimisation de votre écosystème sur les réseaux sociaux pour capter l&apos;attention de votre cible et la rediriger vers votre site.</p>
            <ul className="space-y-0">
              {["Page Facebook Business + Instagram Pro + TikTok + YouTube", "Rédaction biographies à fort impact (copywriting premium)", "Messagerie automatique configurée (messages de bienvenue)", "Arbre de liens personnalisé (Link-in-bio propriétaire)"].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[11px] leading-[1.6] py-2" style={{ color: C.dim, borderBottom: `1px solid ${C.border}` }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: C.goldLight }}>—</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] mb-2" style={{ color: C.muted }}>Investissement</p>
              <div className="text-[clamp(32px,3.5vw,48px)] font-light tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>
                10 000 <span className="text-[13px]" style={{ fontFamily: 'var(--font-inter)', color: C.muted }}>DA</span>
              </div>
            </div>
            <Btn href="#contact">Lancer le pack</Btn>
          </div>
        </div>
      </div>

      {/* POLE 5 — SEO */}
      <div className="mb-0">
        <PoleHead num="05" name="Référencement SEO Local Alger" tagline="Sniper SEO · Google Maps · Mots-clés à intention" />
        <div className="service-card p-12 grid grid-cols-2 gap-14 items-start" data-hover>
          <div>
            <h4 className="text-[clamp(18px,2vw,24px)] font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>Plan Sniper SEO Local</h4>
            <p className="text-[12px] font-light leading-[1.75] mb-5" style={{ color: C.dim }}>Positionnez votre business devant vos concurrents directs au moment précis où vos clients recherchent vos services sur Google à Alger.</p>
            <ul className="space-y-0">
              {["Création & optimisation algorithmique fiche Google Maps / My Business", "Recherche mots-clés à forte intention d'achat localisée", "SEO des métadonnées, descriptions et géolocalisation images", "Kit QR Code personnalisé pour inciter les avis 5 étoiles"].map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[11px] leading-[1.6] py-2" style={{ color: C.dim, borderBottom: `1px solid ${C.border}` }}>
                  <span className="flex-shrink-0 mt-0.5" style={{ color: C.goldLight }}>—</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] mb-2" style={{ color: C.label }}>Investissement</p>
            <div className="text-[clamp(30px,3.5vw,46px)] font-light tracking-[-0.02em] mb-5" style={{ fontFamily: 'var(--font-display)', color: C.cream }}>
              20 000 <span className="text-[14px] font-light" style={{ fontFamily: 'var(--font-inter)', color: C.muted }}>DA</span>
            </div>
            <p className="text-[11px] leading-[1.75] mb-6" style={{ color: C.dim }}>Résultats visibles sur Google Maps en 4 à 8 semaines. Méthode éprouvée sur plus de 30 business algériens.</p>
            <Btn href="#contact">Demander un audit</Btn>
          </div>
        </div>
      </div>
    </section>
  )
}
