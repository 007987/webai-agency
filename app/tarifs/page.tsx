'use client'
import { useState } from 'react'
import {
  Check,
  HelpCircle,
  Layout,
  Globe,
  Store,
  Sparkles,
  Heart,
  Search,
  Percent,
  Server,
  Cpu,
  ShieldCheck,
} from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const WA = 'https://wa.me/213XXXXXXXXX'

/* ─── DATA ──────────────────────────────────────────────── */

const webOffers = [
  {
    Icon: Layout,
    name: 'Site OnePage Impact',
    price: '25 000',
    unit: 'DA',
    focus: 'Conversion rapide, design épuré, idéal pour un lancement.',
    features: [
      'Architecture mono-page haute conversion',
      'Design sur-mesure responsive',
      'Vitesse de chargement < 2s',
      'Bouton WhatsApp direct intégré',
      'SEO On-Page de base inclus',
    ],
    cta: 'Lancer mon projet',
    highlighted: false,
  },
  {
    Icon: Globe,
    name: 'Vitrine Prestige',
    price: '45 000',
    unit: 'DA',
    focus: 'Architecture multi-pages, design sur-mesure, autorité de marque.',
    features: [
      "Jusqu'à 5 pages interconnectées",
      'Animations premium Apple-like',
      'Maquette UI/UX exclusive Figma',
      'SEO sectoriel approfondi',
      'CMS pour mise à jour autonome',
    ],
    cta: 'Lancer ma vitrine',
    highlighted: false,
  },
  {
    Icon: Store,
    name: 'Pack E-Commerce Élite',
    price: '85 000',
    unit: 'DA',
    focus: 'Vente en ligne, gestion de stocks, paiements sécurisés, automatisation.',
    features: [
      'Boutique Next.js ultra-rapide',
      'Tableaux de bord de gestion intuitifs',
      'Paiements & livraisons intégrés',
      'Commande WhatsApp en 1 clic',
      "Formation complète à l'autonomie",
    ],
    cta: 'Déployer mon e-commerce',
    highlighted: true,
    badge: 'Offre Phare',
  },
]

const brandingOffers = [
  {
    Icon: Sparkles,
    name: 'Logo Couture',
    price: '5 000',
    unit: 'DA',
    features: [
      '2 pistes créatives uniques',
      'Fichiers vectoriels AI / SVG',
      'Déclinaisons PNG / JPG HD',
      'Palette couleurs primaires',
    ],
    cta: 'Commander mon logo',
  },
  {
    Icon: Heart,
    name: 'Identité Complète',
    price: '9 000',
    unit: 'DA',
    features: [
      'Charte graphique (Brand Book)',
      'Kit réseaux sociaux complet',
      'Cartes de visite prêtes à imprimer',
      'Typographies de marque',
    ],
    cta: 'Créer ma marque',
  },
  {
    Icon: Search,
    name: 'Optimisation SEO',
    price: '9 000',
    unit: 'DA / Mois',
    features: [
      'Audit technique & sémantique',
      'Recherche mots-clés ciblés',
      'Indexation Search Console',
      'Rapports mensuels de positions',
    ],
    cta: 'Optimiser mon SEO',
  },
  {
    Icon: Percent,
    name: 'Stratégie SMO',
    price: '9 000',
    unit: 'DA / Mois',
    features: [
      'Ligne éditoriale sur-mesure',
      'Templates de posts (x6)',
      'Calendrier 30 jours détaillé',
      'Audit profils sociaux',
    ],
    cta: 'Activer le SMO',
  },
]

const infraOffers = [
  {
    Icon: Server,
    name: 'Hébergement Starter',
    price: '6 500',
    unit: 'DA / An',
    sub: 'Sites vitrines & OnePage légers',
    features: [
      'Serveur NVMe haute vitesse',
      'Nom de domaine inclus (1 an)',
      'Certificat SSL permanent',
      'Sauvegardes hebdomadaires',
    ],
    cta: 'Activer Starter',
    highlighted: false,
  },
  {
    Icon: Cpu,
    name: 'Hébergement Pro',
    price: '13 000',
    unit: 'DA / An',
    sub: 'E-commerce & forts trafics',
    features: [
      'Ressources CPU / RAM dédiées',
      'Sauvegardes quotidiennes',
      'Support WhatsApp prioritaire',
      'Espace NVMe étendu',
    ],
    cta: 'Activer Pro',
    highlighted: true,
  },
  {
    Icon: ShieldCheck,
    name: 'Suivi & Maintenance',
    price: '9 000',
    unit: 'DA / An',
    sub: 'Sérénité technique complète',
    features: [
      'Mises à jour de sécurité',
      'Surveillance active 24/7',
      'Correctifs immédiats de bugs',
      '3 modifications légères / mois',
    ],
    cta: 'Souscrire au suivi',
    highlighted: false,
  },
]

const faqs = [
  {
    q: 'À qui appartiennent les fichiers et le code source après livraison ?',
    a: "Vous êtes 100% propriétaire de votre site, de son code source, du nom de domaine et de tous les fichiers graphiques (logo, charte, maquettes). À tout moment vous pouvez récupérer une archive complète et migrer ailleurs — aucune dépendance, aucun verrouillage technique.",
  },
  {
    q: "Quels sont les délais de livraison pour chaque type de projet ?",
    a: "Un OnePage est livré sous 3 à 5 jours ouvrables, une Vitrine Prestige sous 5 à 10 jours, et un Pack E-Commerce sous 10 à 15 jours. Le branding (logo, identité) prend 3 à 7 jours. Les services SEO/SMO démarrent immédiatement après contractualisation. Tous les délais sont confirmés par écrit avant lancement.",
  },
  {
    q: 'Comment fonctionne le renouvellement des forfaits annuels ?',
    a: "Les forfaits Hébergement et Maintenance sont des engagements annuels sans tacite reconduction. Trois semaines avant l'échéance, nous vous notifions par WhatsApp pour que vous décidiez librement de renouveler, d'évoluer vers un palier supérieur ou de récupérer votre infrastructure en autonomie.",
  },
  {
    q: 'Comment se déroule la facturation et le paiement ?',
    a: "Pour les projets de création, un acompte de 50% est demandé au lancement et le solde à la livraison. Les forfaits annuels (hébergement, maintenance) sont facturés en une fois. Paiements acceptés : virement bancaire, espèces, Baridi Mob. Une facture détaillée vous est systématiquement remise.",
  },
]

/* ─── HELPERS ───────────────────────────────────────────── */

const SectionHeader = ({ index, label, title }: { index: string; label: string; title: string }) => (
  <div className="flex items-end justify-between gap-6 border-b border-zinc-200 pb-4">
    <div className="space-y-2">
      <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
        {index} · {label}
      </span>
      <h2
        className="text-2xl md:text-3xl font-light tracking-tight text-zinc-800"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
    </div>
  </div>
)

/* ─── PAGE ──────────────────────────────────────────────── */

export default function TarifsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-[#F9F9FB] text-zinc-900 antialiased">
      <Cursor />
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────── */}
      <section className="bg-white border-b border-zinc-100 py-24 px-6 md:px-12 text-center space-y-5">
        <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold block">
          Tarification Claire & Transparente
        </span>
        <h1
          className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Investissez dans votre{' '}
          <em className="font-light italic text-zinc-500">croissance</em>
        </h1>
        <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Des forfaits fixes ajustés à vos ambitions techniques et graphiques. Une architecture moderne, sécurisée et optimisée — sans frais cachés, sans surprise.
        </p>
      </section>

      {/* ─── 01 — DÉVELOPPEMENT WEB ─────────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader index="01" label="Développement Web" title="Conception de plateformes digitales" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {webOffers.map(({ Icon, name, price, unit, focus, features, cta, highlighted, badge }) => (
              <div
                key={name}
                className={`relative h-full flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  highlighted
                    ? 'bg-white border border-amber-200 shadow-md shadow-amber-100/40'
                    : 'bg-white border border-zinc-200/70 shadow-sm hover:border-zinc-300/80'
                }`}
              >
                {badge && (
                  <div className="absolute top-0 right-0 bg-amber-600 text-white text-[8px] uppercase tracking-widest font-semibold px-4 py-1 rounded-bl-xl rounded-tr-2xl flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> {badge}
                  </div>
                )}

                <div className="space-y-7">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        highlighted
                          ? 'bg-amber-50 border-amber-100 text-amber-600'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3
                      className="text-lg font-medium text-zinc-800 leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {name}
                    </h3>
                  </div>

                  <div className="space-y-3 pb-5 border-b border-zinc-100">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-5xl font-light tracking-tight ${
                          highlighted ? 'text-amber-800' : 'text-zinc-900'
                        }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {price}
                      </span>
                      <span className="text-xs uppercase tracking-wider font-medium text-zinc-500">
                        {unit}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-xs font-light leading-relaxed">{focus}</p>
                  </div>

                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-zinc-600 font-light">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            highlighted ? 'text-amber-600' : 'text-emerald-600'
                          }`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full text-center block text-xs uppercase tracking-widest font-medium py-3.5 rounded-xl transition-colors duration-300 no-underline ${
                    highlighted
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  }`}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 02 — BRANDING & VISIBILITÉ ─────────────────── */}
      <section className="bg-white border-t border-b border-zinc-100 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader
            index="02"
            label="Branding & Visibilité"
            title="Identité visuelle & stratégies d'acquisition"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {brandingOffers.map(({ Icon, name, price, unit, features, cta }) => (
              <div
                key={name}
                className="h-full flex flex-col justify-between bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl p-6 transition-all duration-300 hover:border-amber-200/70 hover:shadow-md hover:shadow-amber-100/30"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-zinc-200/60 pb-3">
                    <div className="p-2 bg-white border border-zinc-200 rounded-xl text-zinc-500">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-right">
                      <span
                        className="text-lg font-light text-zinc-900 leading-none"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {price}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium block mt-0.5">
                        {unit}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4
                      className="text-sm font-medium text-zinc-800 leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {name}
                    </h4>
                    <ul className="space-y-2">
                      {features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-[11px] text-zinc-600 font-light leading-snug"
                        >
                          <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full text-center block border border-zinc-900 text-zinc-900 text-[10px] uppercase tracking-widest font-medium py-2.5 rounded-lg hover:bg-zinc-900 hover:text-white transition-colors duration-300 no-underline"
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 03 — INFRASTRUCTURE & SUIVI ────────────────── */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <SectionHeader
            index="03"
            label="Infrastructure & Suivi"
            title="Maintenance & serveurs Cloud NVMe"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {infraOffers.map(({ Icon, name, price, unit, sub, features, cta, highlighted }) => (
              <div
                key={name}
                className={`relative h-full flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  highlighted
                    ? 'bg-white border border-amber-200 shadow-md shadow-amber-100/40'
                    : 'bg-white border border-zinc-200/70 shadow-sm hover:border-zinc-300/80'
                }`}
              >
                {highlighted && (
                  <div className="absolute top-0 right-0 bg-amber-600 text-white text-[8px] uppercase tracking-widest font-semibold px-4 py-1 rounded-bl-xl rounded-tr-2xl">
                    Recommandé
                  </div>
                )}

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        highlighted
                          ? 'bg-amber-50 border-amber-100 text-amber-600'
                          : 'bg-zinc-50 border-zinc-200 text-zinc-500'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        className="text-base font-medium text-zinc-800 leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {name}
                      </h3>
                      <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium mt-0.5">
                        {sub}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 pb-5 border-b border-zinc-100">
                    <span
                      className={`text-4xl font-light tracking-tight ${
                        highlighted ? 'text-amber-800' : 'text-zinc-900'
                      }`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {price}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-medium text-zinc-500">
                      {unit}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs text-zinc-600 font-light">
                        <Check
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            highlighted ? 'text-amber-600' : 'text-emerald-600'
                          }`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full text-center block text-xs uppercase tracking-widest font-medium py-3.5 rounded-xl transition-colors duration-300 no-underline ${
                    highlighted
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  }`}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-zinc-400 font-light leading-relaxed max-w-3xl pt-2">
            Toute notre infrastructure repose sur des serveurs NVMe haute disponibilité, des sauvegardes automatiques et un suivi technique sous SLA. Réponse WhatsApp sous 24h.
          </p>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="bg-white border-t border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
              Propriété · Délais · Renouvellement
            </span>
            <h2
              className="text-2xl md:text-3xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-[#F9F9FB] border border-zinc-200/60 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white transition-colors"
                  >
                    <span className="text-sm font-medium text-zinc-800">{faq.q}</span>
                    <div
                      className={`p-1 rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-amber-50 text-amber-600 border-amber-200'
                          : 'bg-white text-zinc-500 border-zinc-200'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-zinc-100' : 'max-h-0'
                    }`}
                  >
                    <p className="p-6 text-zinc-500 font-light text-sm leading-relaxed bg-white">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
