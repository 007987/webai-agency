import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import {
  Layout,
  ShoppingBag,
  Server,
  Palette,
  Share2,
  Search,
  ArrowUpRight,
} from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

export const metadata = {
  title: 'Services — YOUCEF web/AI',
  description:
    "Six pôles d'expertise au service de votre présence digitale — sites internet, e-commerce, hébergement NVMe, identité visuelle, SMO et référencement SEO.",
}

type Pole = {
  num: string
  Icon: LucideIcon
  name: string
  tags: string
  desc: string
  price: string
  href: string
  highlighted?: boolean
}

const POLES: Pole[] = [
  {
    num: '01',
    Icon: Layout,
    name: 'Sites Internet',
    tags: 'OnePage • Vitrine • Catalogue',
    desc: "Des vitrines d'élite et landing pages à fort impact — Architecture mobile-first ultra-rapide conçue pour convertir vos prospects.",
    price: 'dès 25 000 DA',
    href: '/services/onepage',
  },
  {
    num: '02',
    Icon: ShoppingBag,
    name: 'E-Commerce Élite',
    tags: 'COD • WhatsApp • Paiement Livraison',
    desc: "Plateformes e-commerce immersives et fluides — Optimisées pour maximiser votre panier moyen et simplifier l'acte d'achat.",
    price: 'dès 85 000 DA',
    href: '/services/ecommerce',
    highlighted: true,
  },
  {
    num: '03',
    Icon: Server,
    name: 'Hébergement NVMe',
    tags: 'Cloud Serveurs • Sécurité • Disponibilité',
    desc: 'Serveurs Cloud NVMe ultra-rapides. Performance maximale, sauvegardes automatisées et haute disponibilité pour maintenir votre business en ligne 24/7.',
    price: 'dès 6 500 DA/an',
    href: '/services/hebergement',
  },
  {
    num: '04',
    Icon: Palette,
    name: 'Identité Visuelle',
    tags: 'Logo • Charte graphique • Print',
    desc: "3 concepts originaux, charte vectorielle complète, déclinaisons HD et kits premium prêts pour l'imprimerie.",
    price: 'dès 5 000 DA',
    href: '/services/design',
  },
  {
    num: '05',
    Icon: Share2,
    name: 'Social Media SMO',
    tags: 'Stratégie • Contenu • Visibilité',
    desc: 'Optimisation de vos réseaux sociaux. Ligne éditoriale sur-mesure, grilles esthétiques et calendriers de posts pour attirer une audience qualifiée.',
    price: '9 000 DA/mois',
    href: '/services/smo',
  },
  {
    num: '06',
    Icon: Search,
    name: 'Référencement SEO',
    tags: 'Google Maps • Mots-clés • Avis',
    desc: 'Positionnement stratégique sur Google — Dominez les résultats de recherche locaux et organiques pour attirer des clients qualifiés en continu.',
    price: '9 000 DA/mois',
    href: '/services/seo',
  },
]

export default function ServicesPage() {
  return (
    <main className="bg-[#F9F9FB] text-zinc-900 antialiased">
      <Cursor />
      <Navbar />

      {/* HERO */}
      <section className="bg-white border-b border-zinc-100 px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-5">
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold block">
              Nos Services
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              6 Pôles d&apos;expertise,{' '}
              <em className="font-light italic text-zinc-500">une architecture complète</em>
            </h1>
          </div>
          <p className="lg:col-span-4 text-zinc-500 font-light text-sm md:text-base leading-relaxed">
            Du site vitrine au référencement avancé, en passant par l&apos;e-commerce, l&apos;hébergement Cloud et le design de marque — chaque pôle est tarifé clairement et livré clé en main.
          </p>
        </div>
      </section>

      {/* GRILLE 6 PÔLES */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-6 border-b border-zinc-200 pb-4 mb-12">
            <h2
              className="text-xs uppercase tracking-[0.3em] font-semibold text-zinc-400"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Catalogue complet
            </h2>
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 hidden md:block">
              Tarifs à partir de
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POLES.map(({ num, Icon, name, tags, desc, price, href, highlighted }) => (
              <Link
                key={num}
                href={href}
                className={`group relative flex flex-col justify-between rounded-2xl p-8 border transition-all duration-300 no-underline ${
                  highlighted
                    ? 'bg-white border-amber-200/70 shadow-md shadow-amber-100/30 hover:border-amber-300'
                    : 'bg-white border-zinc-200/70 shadow-sm hover:border-zinc-300/80'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono">
                        {num}
                      </span>
                      <div
                        className={`p-2.5 rounded-xl border ${
                          highlighted
                            ? 'bg-amber-50 border-amber-100 text-amber-600'
                            : 'bg-zinc-50 border-zinc-200 text-zinc-500 group-hover:bg-amber-50 group-hover:border-amber-100 group-hover:text-amber-600 transition-colors'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-300 transition-transform duration-300 group-hover:text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div className="space-y-3 pb-5 border-b border-zinc-100">
                    <h3
                      className="text-xl font-medium text-zinc-800 leading-tight group-hover:text-amber-600 transition-colors"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
                      {tags}
                    </p>
                  </div>

                  <p className="text-zinc-500 text-xs font-light leading-relaxed">{desc}</p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-baseline justify-between">
                  <span
                    className={`text-lg font-medium ${highlighted ? 'text-amber-700' : 'text-zinc-900'}`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {price}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-widest font-medium ${
                      highlighted ? 'text-amber-600' : 'text-zinc-500 group-hover:text-amber-600 transition-colors'
                    }`}
                  >
                    Détails →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-[11px] text-zinc-400 font-light leading-relaxed max-w-3xl pt-10">
            Chaque forfait est livré clé en main avec hébergement NVMe inclus la première année (sur les offres web). Pour une vue d&apos;ensemble comparative, consultez la{' '}
            <Link href="/tarifs" className="underline underline-offset-2 hover:text-amber-600 transition-colors">
              page Tarifs
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
