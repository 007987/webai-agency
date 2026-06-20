'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, X, Layers, Shield, Sparkles, LayoutGrid, ArrowRight, HelpCircle } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: "Quelle est la différence principale avec l'offre OnePage ?",
    a: "L'offre Vitrine Prestige est une architecture multi-pages (jusqu'à 5 pages indépendantes). Elle permet de segmenter vos services, de présenter votre agence ou institut en détail, et de maximiser votre puissance de référencement (SEO) sur plusieurs requêtes Google distinctes.",
  },
  {
    q: "Quel est le délai de conception pour ce site multi-pages ?",
    a: "Compte tenu du travail de design d'interface et d'architecture sémantique sur plusieurs pages, le délai de livraison est de 5 à 10 jours ouvrables après réception de vos éléments.",
  },
  {
    q: "Le site inclut-il des animations sur-mesure ?",
    a: "Absolument. Pour faire honneur au terme 'Prestige', nous intégrons des micro-interactions fluides et des transitions de pages haut de gamme style Apple qui captivent l'utilisateur au scroll.",
  },
  {
    q: "Puis-je ajouter de nouvelles pages ou des articles de blog plus tard ?",
    a: "Oui. Le site est propulsé par une architecture Next.js évolutive. Nous vous livrons un panneau d'administration intuitif et une formation de 2 heures pour vous permettre d'ajouter des sections, des réalisations ou des actualités de façon 100% autonome.",
  },
]

const benefits = [
  {
    Icon: Layers,
    title: 'Architecture Multi-Pages',
    desc: "Jusqu'à 5 pages clés interconnectées pour structurer vos services sans surcharger l'écran du visiteur.",
  },
  {
    Icon: Sparkles,
    title: 'Animations Premium CSS/JS',
    desc: "Des micro-interactions fluides et luxueuses qui renforcent l'image haut de gamme de votre marque.",
  },
  {
    Icon: LayoutGrid,
    title: 'SEO Sectoriel Profond',
    desc: "Chaque page indépendante cible une thématique précise pour surperformer sur les moteurs de recherche.",
  },
  {
    Icon: Shield,
    title: 'Sécurité & Optimisation',
    desc: "Protection avancée, certificat SSL permanent et scores de performance au plus haut niveau du web.",
  },
]

const included = [
  "Jusqu'à 5 pages (Accueil, Services, Galerie...)",
  "Maquette UI/UX exclusive sur Figma",
  "Intégration d'animations fluides personnalisées",
  "Optimisation de vitesse extrême native",
  "Référencement SEO ciblé sur chaque page",
  "Hébergement NVMe ultra-rapide (1 an)",
  "Nom de domaine .com/.dz dédié (1 an)",
  "Bouton WhatsApp de réservation directe",
  "Interface d'administration pour vos contenus",
  "Support technique & suivi (30 jours)",
]

const notIncluded = [
  "Système de paiement et panier d'achat",
  "E-Commerce lourd avec gestion de stock",
  "Espace de connexion membre / Dashboard client",
  "Développement de fonctionnalités SaaS sur-mesure",
]

export default function VitrinePrestigePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-[#F9F9FB] text-zinc-900 antialiased">
      <Cursor />
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-white border-b border-zinc-100 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-16">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold block">
              Formule Institutionnelle
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vitrine <em className="font-light italic text-zinc-500">Prestige</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Une vitrine multi-pages d&apos;élite conçue pour installer une{' '}
              <strong className="text-zinc-700 font-medium">autorité visuelle incontestée</strong>.
              L&apos;écosystème idéal pour les instituts premium, cabinets professionnels et marques ambitieuses exigeant une présentation sectorielle ultra-détaillée.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Positionnement</span>
              <h3
                className="text-xl font-medium text-zinc-800"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Crédibilité & Évolution
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Parfait pour structurer une présentation complète : Accueil immersif, catalogues de soins/services, histoire de la marque, galerie de réalisations et modules de contact ciblés.
              </p>
            </div>
            <Link
              href="#tarifs"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-zinc-900 transition-colors group mt-6 no-underline"
            >
              Découvrir l&apos;investissement requis
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Public cible & avantages */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Gauche sticky */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
            Déploiement Complet
          </span>
          <h2
            className="text-3xl font-light tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pour les marques qui voient grand.
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Plus qu&apos;un simple site web, une vitrine Prestige fragmente vos expertises pour offrir une expérience de navigation mémorable et maximiser les points de conversion.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {["Instituts de Beauté", "Cliniques Privées", "Agences Immobilières", "Cabinets d'Avocats", "PME Ambitieuses", "Créateurs de Luxe"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200/60 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Droite : grille d'avantages */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-white border border-zinc-200/50 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="p-2.5 bg-amber-50 border border-amber-100 rounded-xl w-fit text-amber-600">
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-medium text-zinc-800">{title}</h4>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Investissement & livrables */}
      <section id="tarifs" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Bloc tarif gauche */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Tarification Claire
            </span>
            <h2
              className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Une formule complète <br />
              <em className="font-light italic text-zinc-500">sans compromis</em>
            </h2>

            <div className="p-8 bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                Hébergement & Domaine Inclus
              </span>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl font-light tracking-tight text-zinc-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  45 000
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">DA</span>
              </div>
              <p className="text-zinc-400 text-xs font-light">Forfait clé en main. Conception sur-mesure de A à Z.</p>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-colors duration-300 shadow-sm no-underline"
              >
                Démarrer ma Vitrine Prestige
              </a>
            </div>
          </div>

          {/* Table inclusions / exclusions droite */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/70 rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Ce qui est inclus
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-xs text-zinc-600 font-light">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-6 md:pt-0">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Ce qui demande une autre offre
              </h3>
              <ul className="space-y-3 opacity-60">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-xs text-zinc-400 font-light line-through">
                    <X className="w-3.5 h-3.5 text-zinc-300 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-50/50 border border-amber-100/60 rounded-xl">
                <p className="text-[11px] text-amber-800 font-light leading-relaxed">
                  <strong>Besoin d&apos;un panier d&apos;achat ?</strong> Si vous souhaitez vendre directement vos produits ou gérer vos stocks en ligne, consultez notre formule{' '}
                  <Link href="/services/ecommerce" className="italic underline underline-offset-2 hover:text-amber-600 transition-colors">
                    E-Commerce Élite
                  </Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
            Des questions ?
          </span>
          <h2
            className="text-3xl font-light tracking-tight text-zinc-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            FAQ — Clarté & Transparence
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200/60 rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-zinc-50/50 transition-colors"
                >
                  <span className="text-xs md:text-sm font-medium text-zinc-800">{faq.q}</span>
                  <div
                    className={`p-1 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-amber-50 text-amber-600 border-amber-200'
                        : 'bg-zinc-50 text-zinc-500 border-zinc-200'
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-zinc-100' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-zinc-500 font-light text-xs md:text-sm leading-relaxed bg-[#F9F9FB]/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </main>
  )
}
