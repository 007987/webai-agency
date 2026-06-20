'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

type Category = 'Prestige & Beauté' | 'E-Commerce' | 'Gastronomie' | 'Voyages & Services'

type Project = {
  id: number
  title: string
  category: Category
  tagline: string
  desc: string
  link: string
  featured: boolean
}

const PROJECTS: Project[] = [
  { id: 1, title: 'Heavens', category: 'Gastronomie', tagline: 'GASTRONOMIE CONCEPTUELLE — ULTRA MINIMALIST', desc: 'Une interface culinaire expérimentale épurée axée sur des typographies imposantes et un minimalisme rigoureux.', link: 'https://7-heavens.netlify.app/', featured: true },
  { id: 2, title: "Restaurant Côte d'Oran", category: 'Gastronomie', tagline: 'VITRINE PREMIUM', desc: "Une table d'exception mise en scène sur le web — galerie immersive haute définition et système de réservation directe.", link: 'https://cote-d-oran.com/', featured: true },
  { id: 3, title: 'Beauty Touch', category: 'E-Commerce', tagline: 'BOUTIQUE ÉLITE — COSMÉTIQUES', desc: "Plateforme e-commerce haut de gamme dédiée aux cosmétiques, avec gestion fine du catalogue et tunnel d'achat sécurisé.", link: 'https://beautytouch-shop.com/', featured: true },
  { id: 4, title: 'Looks QA', category: 'Prestige & Beauté', tagline: 'FASHION BRAND (QATAR)', desc: 'Vitrine internationale haut de gamme déployée pour le marché du Golfe, alliant esthétique épurée et fluidité.', link: 'https://www.looks.qa/', featured: true },
  { id: 5, title: 'Restaurant Saray (مطعم سراي)', category: 'Gastronomie', tagline: 'VITRINE EXPÉRIENTIELLE BILINGUE', desc: 'Cuisine moyen-orientale prestigieuse — mise en valeur théâtrale des signatures culinaires et interface bilingue fluide.', link: 'https://bright-arithmetic-65a92f.netlify.app/', featured: false },
  { id: 6, title: 'PinkMe', category: 'E-Commerce', tagline: 'LIFESTYLE STORE', desc: "Marque de mode et lifestyle féminine — design éditorial d'impact et expérience d'achat hautement optimisée pour le mobile.", link: 'https://pinkme.shop/', featured: false },
  { id: 7, title: "L'Institut Paris", category: 'Prestige & Beauté', tagline: 'VITRINE PREMIUM — MAISON LOUNA', desc: "Une présence digitale haute couture pour un institut parisien d'exception, avec parcours de réservation en ligne fluide.", link: 'https://www.linstitut-paris.fr/', featured: true },
  { id: 8, title: 'Beauté Noble Paris', category: 'Prestige & Beauté', tagline: 'VITRINE ÉDITORIALE LUMINANCE', desc: 'Identité de marque et catalogue de soins immersif pour une maison de beauté parisienne aux codes visuels du luxe.', link: 'https://www.beautenobleparis.fr/', featured: true },
  { id: 9, title: 'Fezi', category: 'Gastronomie', tagline: 'GASTRONOMIE FRANÇAISE', desc: "Identité numérique raffinée pour une table gastronomique, centrée sur le minimalisme visuel et l'expérience utilisateur.", link: 'https://fezi-restaurant.fr/', featured: false },
  { id: 10, title: 'La Piraterie', category: 'E-Commerce', tagline: 'URBAN WEAR STORE', desc: 'Boutique en ligne à forte identité visuelle pour une marque de mode urbaine, axée sur la vitesse de conversion.', link: 'https://piraterie-officielle.com/', featured: false },
  { id: 11, title: 'Laurel Traiteur', category: 'Gastronomie', tagline: 'VITRINE ÉVÉNEMENTIELLE', desc: "Présentation haute couture de prestations traiteur pour mariages et réceptions d'envergure avec devis sur-mesure.", link: 'https://laureltraiteur.com/#accueil', featured: false },
  { id: 12, title: 'Lukas Messing', category: 'Voyages & Services', tagline: 'PORTFOLIO DESIGN', desc: "Espace portfolio sur-mesure à l'architecture d'information pointue et aux typographies audacieuses.", link: 'https://lukasmessing.com/', featured: false },
  { id: 13, title: 'IDRA Brand', category: 'E-Commerce', tagline: 'CONCEPT STORE', desc: "E-commerce moderne doté d'une interface de navigation minimaliste axée sur la mise en avant des produits.", link: 'https://idrabrand.flexdz.store/', featured: false },
  { id: 14, title: 'Divan Hane', category: 'Gastronomie', tagline: 'RESTAURANT RAFFINÉ', desc: 'Atmosphère éditoriale et carte théâtralisée pour une expérience culinaire turque haut de gamme.', link: 'https://divanhane.vercel.app/', featured: false },
  { id: 15, title: 'Yoga Montauban', category: 'Prestige & Beauté', tagline: 'BIEN-ÊTRE & SANTÉ', desc: "Une interface apaisante et épurée favorisant l'accès aux plannings de cours et aux réservations de séances.", link: 'https://yoga-montauban.fr/', featured: false },
  { id: 16, title: 'Monsieur K', category: 'Voyages & Services', tagline: 'VITRINE SUR-MESURE', desc: 'Site vitrine corporatif au design structuré, pensé pour poser une autorité de marque immédiate sur son secteur.', link: 'https://monsieur-k.be/', featured: false },
  { id: 17, title: 'Sportline DZ', category: 'E-Commerce', tagline: 'SPORT PERFORMANCE STORE', desc: "Plateforme e-commerce performante optimisée pour la gestion d'un catalogue d'articles de sport à fort trafic.", link: 'https://www.sportline-dz.com/', featured: false },
  { id: 18, title: 'Elya Shops', category: 'E-Commerce', tagline: 'TRENDY E-COMMERCE', desc: 'Boutique en ligne au parcours utilisateur simplifié pour maximiser le taux de conversion sur mobile.', link: 'https://elyashops.com/', featured: false },
  { id: 19, title: 'Linge du Bonheur', category: 'E-Commerce', tagline: 'BOUTIQUE MAISON', desc: 'Boutique transactionnelle fluide spécialisée dans le textile de maison et le confort intérieur.', link: 'https://www.lingedubonheur.com/', featured: false },
  { id: 20, title: 'Jana Trading', category: 'E-Commerce', tagline: 'B2B & B2C PLATFORM', desc: 'Moteur e-commerce robuste structuré pour la distribution et les transactions commerciales de produits.', link: 'https://jana-trading.com/', featured: false },
  { id: 21, title: 'Terre de Ywar', category: 'Voyages & Services', tagline: 'VITRINE ARTISANALE', desc: "Mise en valeur d'un savoir-faire unique à travers un univers graphique sur-mesure et immersif.", link: 'https://www.terredeywar.com/', featured: false },
  { id: 22, title: 'NXT DZ', category: 'E-Commerce', tagline: 'DIGITAL MARKETPLACE', desc: "Tunnel de vente optimisé et intégration de mécaniques d'achat rapides pour le marché national.", link: 'https://nxtdz.com/ar', featured: false },
  { id: 23, title: 'Syndicate of Self-Development Coaches', category: 'Voyages & Services', tagline: 'INSTITUTIONNEL CORPORATE', desc: "Plateforme vitrine internationale pour regrouper et valoriser l'écosystème de coachs certifiés.", link: 'https://syndicatesdcc.com/', featured: false },
  { id: 24, title: 'Club Voyages', category: 'Voyages & Services', tagline: 'AGENCE DE VOYAGE ÉLITE', desc: "Catalogue d'offres de séjours et circuits sur-mesure avec parcours de demande de cotation interactif.", link: 'https://clubvoyages.dz/', featured: false },
  { id: 25, title: 'Touring Algeria', category: 'Voyages & Services', tagline: 'TOURISME & PATRIMOINE', desc: "Portail d'exploration touristique valorisant des destinations majeures avec une navigation fluide axée sur le visuel.", link: 'https://www.touring-algeria.com/', featured: false },
  { id: 26, title: 'Karim Voyages', category: 'Voyages & Services', tagline: 'TRAVEL BOOKING VITRINE', desc: "Interface moderne facilitant la découverte d'offres de voyages, d'Omra et de séjours à l'étranger.", link: 'https://karim-voyages.com/', featured: false },
  { id: 27, title: 'Union Voyage', category: 'Voyages & Services', tagline: 'VITRINE TOURISTIQUE', desc: 'Plateforme épurée mettant en avant des séjours organisés avec génération de leads qualifiés par formulaires dynamiques.', link: 'https://www.unionvoyage.com/', featured: false },
  { id: 28, title: 'Stephanie Travel', category: 'Voyages & Services', tagline: 'ONE-PAGE EXPERIENTIAL', desc: "Landing page d'impact conçue pour synthétiser des offres d'évasion exclusives dans une navigation fluide à défilement unique.", link: 'https://www.stephanie-travel.com/#!/voyages', featured: false },
]

const FILTERS: Array<'Tous' | Category> = [
  'Tous',
  'Prestige & Beauté',
  'E-Commerce',
  'Gastronomie',
  'Voyages & Services',
]

const BRONZE = '#9A7B56'

export default function Realisations() {
  const [active, setActive] = useState<'Tous' | Category>('Tous')
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const s = ref.current
    if (!s) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.05 },
    )
    s.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const filtered = useMemo(
    () => (active === 'Tous' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section
      ref={ref}
      id="portfolio"
      className="px-6 md:px-12 py-24"
      style={{
        background: '#FBFBFA',
        borderTop: '1px solid #E6E6E2',
        borderBottom: '1px solid #E6E6E2',
        fontFamily: 'var(--font-inter)',
      }}
    >
      <div className="max-w-7xl mx-auto space-y-14">

        {/* ── En-tête éditorial ────────────────────── */}
        <div className="rv flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8" style={{ borderBottom: '1px solid #E6E6E2' }}>
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] uppercase tracking-[0.4em] font-semibold block" style={{ color: BRONZE }}>
              Portfolio · Nos dernières créations
            </span>
            <h2
              className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)', color: '#111111' }}
            >
              Des marques qui nous ont{' '}
              <em className="font-light italic" style={{ color: '#666666' }}>
                fait confiance
              </em>
            </h2>
          </div>
          <p className="font-light text-sm leading-relaxed max-w-xs" style={{ color: '#555555' }}>
            Sélection de plateformes livrées en Algérie, en France, au Qatar et au Moyen-Orient — vitrines confidentielles, e-commerces performants et expériences sur-mesure.
          </p>
        </div>

        {/* ── Filtres interactifs ──────────────────── */}
        <div className="rv flex flex-wrap items-center gap-2 md:gap-2.5">
          {FILTERS.map((label) => {
            const isActive = active === label
            const count = label === 'Tous' ? PROJECTS.length : PROJECTS.filter((p) => p.category === label).length
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                className="text-[11px] uppercase tracking-[0.18em] font-medium px-4 py-2.5 rounded-full transition-all duration-300 border inline-flex items-center gap-2"
                style={{
                  background: isActive ? '#111111' : '#FFFFFF',
                  borderColor: isActive ? '#111111' : '#E6E6E2',
                  color: isActive ? '#FBFBFA' : '#555555',
                }}
                onMouseEnter={(e) => {
                  if (isActive) return
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = BRONZE
                  el.style.color = '#111111'
                }}
                onMouseLeave={(e) => {
                  if (isActive) return
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E6E6E2'
                  el.style.color = '#555555'
                }}
              >
                {label}
                <span
                  className="text-[9px] tabular-nums px-1.5 py-0.5 rounded-full"
                  style={{
                    background: isActive ? 'rgba(255,255,255,0.16)' : '#F4F4F2',
                    color: isActive ? '#FBFBFA' : '#999',
                  }}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Grille Bento asymétrique — Mobile-first ─ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:grid-flow-dense transition-all duration-300">
          {filtered.map((p) => {
            const hasLink = !!p.link && p.link !== '#'
            return (
              <article
                key={p.id}
                className={`bento-card group relative flex flex-col rounded-3xl p-6 md:p-8 lg:p-10 transition-all duration-300 ${
                  p.featured ? 'md:col-span-2' : ''
                } ${hasLink ? 'cursor-pointer' : ''}`}
              >
                {/* Stretched link — couvre toute la carte pour un tap-target optimal */}
                {hasLink && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ouvrir la preview live — ${p.title}`}
                    className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ outlineColor: BRONZE }}
                  />
                )}

                <div className="relative z-0 flex flex-col h-full">

                  {/* En-tête : catégorie + badge phare */}
                  <div className="flex items-start justify-between gap-3 mb-5 md:mb-6">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-semibold" style={{ color: BRONZE }}>
                      {p.category}
                    </span>
                    {p.featured && (
                      <span
                        className="inline-flex items-center gap-1.5 text-[8.5px] uppercase tracking-[0.25em] font-semibold px-2.5 py-1 rounded-full shrink-0"
                        style={{
                          background: 'rgba(154,123,86,0.08)',
                          color: BRONZE,
                          border: '1px solid rgba(154,123,86,0.18)',
                        }}
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        Projet phare
                      </span>
                    )}
                  </div>

                  {/* Titre + tagline */}
                  <h3
                    className={`font-medium tracking-tight leading-[1.1] mb-2 ${
                      p.featured
                        ? 'text-xl md:text-2xl lg:text-[28px]'
                        : 'text-lg md:text-xl'
                    }`}
                    style={{ fontFamily: 'var(--font-display)', color: '#111111' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-medium mb-4 md:mb-5" style={{ color: '#999999' }}>
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="text-[13px] md:text-sm font-light leading-relaxed"
                    style={{
                      color: '#555555',
                      display: '-webkit-box',
                      WebkitLineClamp: p.featured ? 3 : 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* CTA discret en bas */}
                  <div className="mt-auto pt-6 md:pt-8">
                    {hasLink ? (
                      <span
                        className="bento-cta inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] font-medium transition-colors duration-300"
                        style={{ color: '#111111' }}
                      >
                        Ouvrir la preview live
                        <ArrowUpRight className="bento-cta-arrow w-3.5 h-3.5 transition-transform duration-300" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] font-medium" style={{ color: '#999' }}>
                        <Sparkles className="w-3 h-3" style={{ color: BRONZE }} />
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* ── Styles hover responsifs (désactivés sur tactile) ── */}
        <style jsx>{`
          .bento-card {
            background: #ffffff;
            border: 1px solid #f0f0ec;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          }
          @media (hover: hover) and (pointer: fine) {
            .bento-card:hover {
              transform: scale(1.01);
              border-color: rgba(154, 123, 86, 0.3);
              box-shadow:
                0 12px 36px rgba(154, 123, 86, 0.06),
                0 4px 12px rgba(17, 17, 17, 0.03);
            }
            .bento-card:hover .bento-cta {
              color: ${BRONZE};
            }
            .bento-card:hover .bento-cta-arrow {
              transform: translate(2px, -2px);
            }
          }
        `}</style>

        {/* ── Footer compteur / état vide ────────── */}
        {filtered.length === 0 ? (
          <p className="rv text-center text-sm font-light py-8" style={{ color: '#999' }}>
            Aucun projet listé dans cette catégorie pour le moment.
          </p>
        ) : (
          <p className="rv text-center text-[10px] uppercase tracking-[0.3em] font-medium pt-4" style={{ color: '#999' }}>
            {filtered.length} projet{filtered.length > 1 ? 's' : ''} affiché
            {filtered.length > 1 ? 's' : ''} · {PROJECTS.length} au total
          </p>
        )}
      </div>
    </section>
  )
}
