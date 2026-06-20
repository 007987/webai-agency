'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, Search, Target, Zap, BarChart3, ArrowRight, HelpCircle } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: 'Quels sont les délais pour voir les premiers résultats SEO ?',
    a: "Le référencement naturel est une stratégie à moyen/long terme. Contrairement à la publicité payante (SEA), les premiers résultats tangibles (gain de positions significatif, augmentation du trafic organique) apparaissent généralement entre 3 et 6 mois après la mise en place des optimisations techniques et sémantiques.",
  },
  {
    q: 'Proposez-vous une garantie de positionnement en première page ?',
    a: "Non, et aucun expert SEO sérieux ne peut le garantir de manière éthique. Les algorithmes de Google changent constamment et dépendent de centaines de facteurs externes (concurrence, historique du domaine, etc.). Notre engagement est de mettre en place les meilleures pratiques techniques, sémantiques et structurelles pour maximiser vos chances et obtenir la meilleure visibilité possible.",
  },
  {
    q: "Qu'est-ce que l'optimisation locale via Google Maps ?",
    a: "C'est un pilier crucial pour les entreprises physiques ou de services locaux. Nous optimisons votre fiche Google Business Profile (anciennement Google My Business) pour qu'elle apparaisse en tête du 'Pack Local' (la carte Google) lors des recherches géolocalisées (ex: 'coiffeur Alger', 'agence web near me'). Cela booste drastiquement les appels et les visites en magasin.",
  },
  {
    q: 'Fournissez-vous des rapports de suivi de performance ?',
    a: "Oui, la transparence est essentielle. Chaque intervention mensuelle s'accompagne d'un rapport détaillé consolidant l'évolution de vos positions sur les mots-clés stratégiques, le trafic organique généré via Google Search Console et les conversions attribuées au SEO.",
  },
]

const benefits = [
  {
    Icon: Search,
    title: 'Trafic Qualifié Durable',
    desc: "Ciblez des utilisateurs qui recherchent activement vos produits ou services. Un clic SEO est un clic d'intention, plus enclin à la conversion.",
  },
  {
    Icon: Zap,
    title: 'Positionnement & Autorité',
    desc: "Être en tête des résultats Google est perçu comme un gage de qualité et de leadership. Installez votre marque comme la référence incontestée de votre secteur.",
  },
  {
    Icon: Target,
    title: 'SEO Local Google Maps',
    desc: "Boostez votre visibilité auprès des clients géolocalisés à Alger. Apparaissez en tête lors des recherches 'proche de moi' pour attirer plus d'appels et de visites.",
  },
  {
    Icon: BarChart3,
    title: 'Rentabilité à Long Terme',
    desc: "Contrairement au SEA où chaque clic coûte, le SEO est un investissement qui continue de générer du trafic qualifié gratuitement une fois les optimisations en place.",
  },
]

const techActions = [
  'Audit technique sémantique et structurel complet',
  'Optimisation des balises Meta Titres et Descriptions',
  'Structure de titres (H1, H2) et maillage interne',
  'Optimisation de vitesse et performance NVMe',
  'Indexation Search Console & Google Business Profile',
  'Configuration du sitemap.xml et robots.txt',
  "Correctifs de code et problèmes d'exploration",
]

const strategy = [
  'Recherche et Ciblage de Mots-clés Stratégiques',
  'Analyse de Concurrence et Parts de Marché',
  'Suivi Hebdomadaire des Positions Clés',
  'Rapport Mensuel de Performance consolidé',
  'Rédaction de Contenus Optimisés (option)',
  'Stratégie de Netlinking & Autorité (option)',
]

export default function SeoPage() {
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
              Formule Visibilité Organique
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Optimisation <em className="font-light italic text-zinc-500">SEO</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Propulsez votre site en tête des résultats de recherche Google. Notre méthodologie technique et sémantique de pointe vise à{' '}
              <strong className="text-zinc-700 font-medium">capter un trafic qualifié et durable</strong>, sans dépendre de la publicité payante. Transformez votre visibilité en source constante de prospects.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Objectif Stratégique</span>
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                Acquisition & Autorité
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Idéal pour les entreprises souhaitant pérenniser leur présence en ligne, attirer des clients prêts à acheter, ou s&apos;installer comme leader d&apos;opinion dans leur secteur, que ce soit à Alger ou à l&apos;international.
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

        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">Public Cible</span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Ce service est-il fait pour vous&nbsp;?
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            L&apos;optimisation SEO est un levier d&apos;acquisition universel. Que vous soyez une PME locale ou une marque d&apos;envergure, être visible là où vos clients cherchent est crucial.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['PME Ambitieuses', 'Sites E-Commerce', 'Services Professionnels', 'Cabinets & Cliniques', 'Entreprises Locales Alger', 'Startups Tech'].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200/60 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

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

      {/* 3. Tarif */}
      <section id="tarifs" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Gauche : prix */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Tarification Transparente
            </span>
            <h2
              className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Une stratégie complète <br />
              <em className="font-light italic text-zinc-500">sans coûts cachés</em>
            </h2>

            <div className="p-8 bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                Forfait Unique & Audit Offert
              </span>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl font-light tracking-tight text-zinc-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  9 000
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">DA / Mois</span>
              </div>
              <p className="text-zinc-400 text-xs font-light">
                Tarif fixe, accompagnement stratégique sémantique et technique, rapports de performance inclus.
              </p>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-colors duration-300 shadow-sm no-underline"
              >
                Boostez ma Visibilité
              </a>
            </div>
          </div>

          {/* Droite : actions */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/70 rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Actions Techniques & On-Page
              </h3>
              <ul className="space-y-3">
                {techActions.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-xs text-zinc-600 font-light">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-6 md:pt-0">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Stratégie & Suivi
              </h3>
              <ul className="space-y-3">
                {strategy.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-xs text-zinc-600 font-light">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-50/50 border border-amber-100/60 rounded-xl">
                <p className="text-[11px] text-amber-800 font-light leading-relaxed">
                  <strong>Besoin d&apos;un audit initial gratuit ?</strong> Si vous souhaitez évaluer l&apos;état actuel de votre site, contactez-nous pour une analyse stratégique offerte.
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
            FAQ — Clarté Technique
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
                    isOpen ? 'max-h-60 border-t border-zinc-100' : 'max-h-0'
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
