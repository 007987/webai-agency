'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, Palette, Sparkles, Sliders, ShieldCheck, ArrowRight, HelpCircle, Eye, Columns } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: "Sous quels formats livrez-vous le logo ?",
    a: "Tous nos logos sont livrés sous formats vectoriels complets (AI, EPS, SVG) pour garantir une qualité d'impression infinie, ainsi que sous formats standards (PNG transparent, JPG) adaptés à tous vos profils de réseaux sociaux et outils digitaux.",
  },
  {
    q: "Combien de propositions de design recevrai-je ?",
    a: "Pour la formule Logo Couture, nous développons 2 pistes créatives uniques et distinctes. Pour l'Identité Complète, nous explorons 3 concepts poussés. Vous choisissez ensuite la piste idéale que nous affinons ensemble.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le Brand Book (Charte Graphique) ?",
    a: "Il s'agit du document de référence de votre marque. Il consigne vos codes couleurs exacts (Hex, RVB, CMJN), les règles typographiques (polices de titres et paragraphes), ainsi que les directives d'utilisation de votre logo sur fonds clairs, sombres ou imagés.",
  },
  {
    q: "Quels sont les délais de création graphique ?",
    a: "Les premières propositions de logos sont livrées sous 3 à 5 jours ouvrables. Le déploiement de la charte complète et des éléments annexes demande entre 5 et 7 jours après validation du logo final.",
  },
]

const benefits = [
  {
    Icon: Palette,
    title: 'Recherche Typographique',
    desc: "Sélection de polices de caractères exclusives qui reflètent parfaitement le caractère et l'élégance de votre entreprise.",
  },
  {
    Icon: Sparkles,
    title: 'Univers Chromatique unique',
    desc: "Création d'une palette de couleurs cohérente et harmonieuse, déclinable sur tous vos supports physiques et web.",
  },
  {
    Icon: Sliders,
    title: 'Précision Vectorielle',
    desc: "Vos fichiers sont construits au pixel près, garantissant un affichage net sur smartphone et sur d'immenses panneaux publicitaires.",
  },
  {
    Icon: ShieldCheck,
    title: 'Normes de Marque Relues',
    desc: "Livraison d'un guide d'utilisation clair pour maintenir une cohérence d'image totale au fil du temps.",
  },
]

const logoIncluded = [
  'Recherche conceptuelle et stylistique',
  '2 pistes de logos uniques proposées',
  'Ajustements et révisions sur la piste choisie',
  'Palette de couleurs primaires associée',
  'Fichiers HD livrés (PNG transparent, JPG)',
  'Formats vectoriels complets inclus (SVG, AI)',
]

const identityIncluded = [
  "Toutes les inclusions du pack 'Logo Couture'",
  '3 pistes créatives avancées et détaillées',
  "Logo secondaire (Submark / Icône d'application)",
  'Charte Graphique complète (Brand Book PDF)',
  'Codes couleur exacts (Web, Print, CMJN, Hex)',
  'Typographies de marque sélectionnées',
  'Kit Réseaux Sociaux (Bannières & 3 Templates de posts)',
  'Design de Carte de Visite haut de gamme prêt à imprimer',
]

export default function BrandingDesignPage() {
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
              Studio Graphique & Direction Artistique
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Identité & <em className="font-light italic text-zinc-500">Logo Design</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              L&apos;esthétique minimaliste au service de l&apos;impact commercial. Nous concevons des identités mémorables, épurées et haut de gamme, façonnées pour capter l&apos;attention de vos clients idéaux et ancrer votre crédibilité.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Philosophie Visuelle</span>
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                Épure & Distinction
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Pas de fioritures inutiles. Nous suivons des codes de design stricts inspirés des plus grandes marques modernes pour que votre identité visuelle traverse les années sans perdre sa force.
              </p>
            </div>
            <Link
              href="#tarifs"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-zinc-900 transition-colors group mt-6 no-underline"
            >
              Voir nos formules de tarification
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Avantages stratégiques */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Gauche Sticky */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
            Pourquoi Soigner son Image ?
          </span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Le design est le premier vecteur de confiance.
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Avant même de lire vos textes ou de découvrir vos tarifs, vos prospects jugent votre professionnalisme à travers votre logo et vos choix graphiques.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Créations Vectorielles', 'Harmonie des Couleurs', 'Typographies Couture', 'Réseaux Sociaux', 'Supports Imprimés'].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200/60 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Droite : Grille bénéfices */}
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

      {/* 3. Investissement : 2 formules */}
      <section id="tarifs" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Des Tarifs Adaptés
            </span>
            <h2
              className="text-3xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Deux formules de design{' '}
              <em className="font-light italic text-zinc-500">selon vos besoins</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Formule 1 : Logo Couture */}
            <div className="bg-[#F9F9FB] border border-zinc-200/70 rounded-2xl p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-zinc-200/60 pb-4">
                  <div className="space-y-1">
                    <span className="p-1.5 bg-white border border-zinc-200 rounded-lg text-zinc-400 inline-block mb-1">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-lg font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                      Logo Couture
                    </h3>
                    <p className="text-zinc-400 text-[11px] font-light">L&apos;essentiel pour démarrer avec élégance.</p>
                  </div>
                  <div className="flex items-baseline gap-1 bg-white border border-zinc-200/60 px-4 py-2 rounded-xl shadow-sm">
                    <span className="text-2xl font-light tracking-tight text-zinc-900">5 000</span>
                    <span className="text-[10px] font-medium text-zinc-500 uppercase">DA</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {logoIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-zinc-600 font-light">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-3.5 rounded-xl hover:bg-zinc-800 transition-colors shadow-sm no-underline"
              >
                Commander mon Logo
              </a>
            </div>

            {/* Formule 2 : Identité Complète */}
            <div className="bg-white border border-amber-200/70 rounded-2xl p-8 flex flex-col justify-between space-y-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-[8px] uppercase tracking-widest font-semibold px-4 py-1 rounded-bl-xl">
                Recommandé
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-zinc-100 pb-4">
                  <div className="space-y-1">
                    <span className="p-1.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-600 inline-block mb-1">
                      <Columns className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-lg font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                      Identité Complète
                    </h3>
                    <p className="text-zinc-400 text-[11px] font-light">L&apos;écosystème graphique haut de gamme complet.</p>
                  </div>
                  <div className="flex items-baseline gap-1 bg-amber-50 border border-amber-100 px-4 py-2 rounded-xl">
                    <span className="text-2xl font-light tracking-tight text-amber-800">9 000</span>
                    <span className="text-[10px] font-medium text-amber-700 uppercase">DA</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {identityIncluded.map((item, index) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-zinc-600 font-light">
                      <Check className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span className={index > 0 && index < 3 ? 'font-medium text-zinc-800' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-amber-600 text-white text-xs uppercase tracking-widest font-medium py-3.5 rounded-xl hover:bg-amber-700 transition-colors shadow-sm no-underline"
              >
                Déployer mon Identité Complète
              </a>
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
            FAQ — Clarté Artistique
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
