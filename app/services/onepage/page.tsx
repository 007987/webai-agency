'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, X, Smartphone, Zap, Search, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: "Quel est le délai de livraison réel ?",
    a: "Le site est entièrement conçu, testé et mis en ligne sous 3 à 5 jours ouvrables, dès réception de vos contenus de base (textes, images, accès).",
  },
  {
    q: "Puis-je gérer le contenu moi-même après la livraison ?",
    a: "Absolument. Chaque site est livré avec une interface d'administration ultra-simplifiée et une formation vidéo personnalisée pour modifier vos textes et images en totale autonomie.",
  },
  {
    q: "Le site est-il optimisé pour les moteurs de recherche ?",
    a: "Oui, nous intégrons un SEO technique natif : balisage sémantique, structure fluide pour les robots Google et optimisations de performance pour un indexage rapide.",
  },
  {
    q: "Proposez-vous un accompagnement après le lancement ?",
    a: "Chaque projet inclut un support technique gratuit pendant 30 jours pour répondre à vos questions et garantir la parfaite stabilité de votre plateforme.",
  },
]

const benefits = [
  {
    Icon: Zap,
    title: 'Conversion Maximale',
    desc: "Aucun menu complexe. L'utilisateur suit un parcours millimétré vers votre appel à l'action.",
  },
  {
    Icon: Smartphone,
    title: 'Mobile-First Absolu',
    desc: "Plus de 70% de vos clients vous découvrent sur mobile. L'expérience de scroll est fluide et instantanée.",
  },
  {
    Icon: Search,
    title: 'SEO Technique Intégré',
    desc: "Optimisation de l'architecture sémantique pour assurer une indexation performante sur les moteurs.",
  },
  {
    Icon: MessageSquare,
    title: 'Friction Zéro via WhatsApp',
    desc: "Intégration de boutons natifs pour permettre à vos prospects de vous contacter d'un simple clic.",
  },
]

const included = [
  "Design haut de gamme sur-mesure",
  "Section Hero à fort impact visuel",
  "Formulaire ou bouton WhatsApp direct",
  "Optimisation de vitesse extrême (< 2s)",
  "SEO On-Page initial (balises, meta)",
  "Hébergement NVMe ultra-rapide (1 an)",
  "Nom de domaine .com/.dz inclus (1 an)",
  "Livraison rapide en 3 à 5 jours",
  "2 sessions de révisions incluses",
  "Support post-livraison pendant 30 jours",
]

const notIncluded = [
  "Plusieurs pages indépendantes",
  "E-Commerce complet avec panier",
  "Espace membre ou connexion client",
  "Système de blog ou actualités complexe",
]

export default function OnePageServicePage() {
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
              Formule Performance
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Site OnePage <em className="font-light italic text-zinc-500">Impact</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Une page unique architecturée autour d&apos;une seule mission :{' '}
              <strong className="text-zinc-700 font-medium">convertir vos visiteurs en clients</strong>.
              La solution d&apos;élite pour lancer ou propulser votre activité avec une efficacité maximale et zéro distraction.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Objectif Principal</span>
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                Acquisition & Clarté
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Idéal pour les lancements de produits, les offres de consultants, d&apos;artisans premium ou de structures souhaitant capter des prospects qualifiés sans friction technique.
              </p>
            </div>
            <Link
              href="#tarifs"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-zinc-900 transition-colors group mt-6 no-underline"
            >
              Consulter l&apos;investissement requis
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Public cible & bénéfices */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Gauche : Pour qui ? */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">Public Cible</span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Ce service est-il fait pour vous&nbsp;?
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            La structure mono-page élimine la déperdition d&apos;attention. Elle est spécifiquement calibrée pour valoriser une offre unique et déclencher l&apos;action.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Auto-Entrepreneurs', 'Artisans Premium', 'Coaches & Formateurs', 'Photographes', 'Services Locaux', 'Consultants Solo'].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200/60 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Droite : Bénéfices */}
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

      {/* 3. Investissement & pack */}
      <section id="tarifs" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Gauche : Prix */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Tarification Transparente
            </span>
            <h2
              className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ce qui est inclus dans <br />
              <em className="font-light italic text-zinc-500">votre investissement</em>
            </h2>

            <div className="p-8 bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                Domaine + Hébergement Offerts
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-light tracking-tight text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>
                  25 000
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">DA</span>
              </div>
              <p className="text-zinc-400 text-xs font-light">Tarif fixe, forfait clé en main, aucun frais caché.</p>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-colors duration-300 shadow-sm no-underline"
              >
                Démarrer mon OnePage
              </a>
            </div>
          </div>

          {/* Droite : Table des fonctionnalités */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/70 rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Livrables Inclus
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
                Destiné aux projets simples
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
                  <strong>Besoin de plus d&apos;options ?</strong> Si votre projet évolue vers une architecture multi-pages, découvrez notre formule{' '}
                  <Link href="/services/vitrine" className="italic underline underline-offset-2 hover:text-amber-600 transition-colors">
                    Vitrine Prestige
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
            Questions Fréquentes
          </span>
          <h2
            className="text-3xl font-light tracking-tight text-zinc-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            FAQ — Toutes vos réponses
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
                    isOpen ? 'max-h-40 border-t border-zinc-100' : 'max-h-0'
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
