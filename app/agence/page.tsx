'use client'
import Link from 'next/link'
import {
  Layout,
  Store,
  Globe,
  Sparkles,
  Search,
  Percent,
  ShieldCheck,
  Code,
  MessageSquare,
} from 'lucide-react'
import Cursor       from '@/components/Cursor'
import Navbar       from '@/components/Navbar'
import Realisations from '@/components/Realisations'
import CtaSection   from '@/components/CtaSection'
import Footer       from '@/components/Footer'

const WA = 'https://wa.me/213XXXXXXXXX'

const services = [
  {
    Icon: Layout,
    title: 'Site OnePage Impact',
    desc: "Une page unique sculptée pour la conversion. Vitesse de chargement maximale, structure épurée et appels à l'action WhatsApp directs. Idéal pour tester ou lancer une offre.",
  },
  {
    Icon: Globe,
    title: 'Vitrine Prestige',
    desc: "Une architecture multi-pages d'excellence. Présentez vos services avec élégance, asseyez votre autorité sectorielle et profitez d'un SEO local configuré sur-mesure.",
  },
  {
    Icon: Store,
    title: 'Pack E-Commerce',
    desc: 'Boutiques Next.js fluides avec tableaux de bord autonomes pour gérer vos stocks. Systèmes de commandes WhatsApp ou passerelles de livraison configurées de bout en bout.',
  },
  {
    Icon: Sparkles,
    title: 'Identité Visuelle & Logo',
    desc: 'Création de logos signatures et de chartes graphiques complètes (Brand Books PDF, typographies, kits réseaux sociaux). Une identité intemporelle pour vous démarquer.',
  },
  {
    Icon: Search,
    title: 'Optimisation SEO Google',
    desc: 'Audit technique approfondi, sémantique des balises et maillage de mots-clés stratégiques. Propulsez vos pages sur Google Search et optimisez votre fiche Google Maps.',
  },
  {
    Icon: Percent,
    title: 'Stratégie SMO Réseaux',
    desc: "Audit et refonte visuelle de vos grilles d'image (Instagram, TikTok). Établissement d'un positionnement éditorial fort, templates épurés et calendriers de contenu sur 30 jours.",
  },
]

const reassurance = [
  {
    Icon: Code,
    title: 'Ingénierie Moderne',
    desc: "Pas de thèmes lourds ou de générateurs de pages lents. Vos sites internet sont écrits avec des frameworks performants pour assurer une fluidité absolue sur mobile et desktop.",
  },
  {
    Icon: ShieldCheck,
    title: 'Hébergement Sécurisé',
    desc: "Nous déployons vos infrastructures sur des stockages NVMe rapides avec certificats SSL permanents et sauvegardes automatisées pour garantir une disponibilité sans failles.",
  },
  {
    Icon: MessageSquare,
    title: 'Support & Autonomie',
    desc: "Chaque livraison s'accompagne d'une formation complète pour prendre en main vos outils, doublée d'un accès prioritaire via notre support dédié sur WhatsApp.",
  },
]

export default function AgencePage() {
  return (
    <main className="bg-[#F9F9FB] text-zinc-900 antialiased">
      <Cursor />
      <Navbar />

      {/* ─── 1. HERO ────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center bg-white border-b border-zinc-100 px-6 md:px-12 overflow-hidden">
        {/* Grille de fond style Linear */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto w-full relative z-10 py-20 text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold inline-block px-3 py-1 bg-amber-50 border border-amber-100/80 rounded-full">
            Studio Digital Premium
          </span>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-zinc-900 leading-[1.05] max-w-5xl mx-auto"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nous concevons des interfaces <br />
            <em className="font-light italic text-zinc-500">haut de gamme</em> & sur-mesure
          </h1>
          <p className="text-zinc-500 font-light text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            De la charte graphique minimale aux architectures web Next.js ultra-rapides. Nous fusionnons esthétique rigoureuse et excellence technique pour propulser votre business.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium px-8 py-4 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-sm no-underline"
            >
              Démarrer un projet
            </a>
            <Link
              href="#services"
              className="w-full sm:w-auto text-center text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200/80 text-xs uppercase tracking-widest font-medium px-8 py-4 rounded-xl transition-all duration-300 no-underline"
            >
              Explorer nos services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2. MANIFESTO ───────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
              Notre Philosophie
            </span>
            <h2
              className="text-2xl md:text-4xl font-light tracking-tight text-zinc-800 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              L&apos;alliance d&apos;un design minimaliste et d&apos;une vitesse pure.
            </h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-zinc-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" /> Zéro compromis visuel
              </h4>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Inspirés par les codes du luxe, nous épurons chaque ligne de code et chaque pixel pour que votre image de marque soit instantanément mémorable et respectée.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-zinc-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-amber-600 rounded-full" /> Conversion par l&apos;immédiat
              </h4>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Pas de fioritures inutiles. Nous privilégions des structures fluides, des boutons de contact WhatsApp instantanés et un SEO local agressif pour générer des leads qualifiés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CATALOGUE SERVICES ──────────────────────── */}
      <section id="services" className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
            Notre Catalogue
          </span>
          <h2
            className="text-3xl md:text-5xl font-light tracking-tight text-zinc-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Des compétences ciblées pour votre impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-zinc-200/60 rounded-2xl p-8 space-y-6 shadow-sm hover:border-zinc-300 transition-all duration-300 group"
            >
              <div className="p-3 bg-[#F9F9FB] border border-zinc-200/60 rounded-xl w-fit text-zinc-600 group-hover:bg-amber-50 group-hover:text-amber-600 group-hover:border-amber-100 transition-all duration-300">
                <Icon className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                  {title}
                </h3>
                <p className="text-zinc-500 text-xs font-light leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 4. PORTFOLIO — composant partagé ───────────── */}
      <Realisations />

      {/* ─── 5. RÉASSURANCE + CTA FINAL ─────────────────── */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reassurance.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white border border-zinc-200/60 p-8 rounded-2xl shadow-sm space-y-4">
              <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl w-fit text-zinc-700">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                {title}
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
