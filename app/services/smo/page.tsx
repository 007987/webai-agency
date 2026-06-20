'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Check, Layout, Calendar, Sparkles, BarChart3, HelpCircle } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: 'Gérez-vous la publication quotidienne des posts ?',
    a: "Notre service se concentre sur la stratégie, le design des templates et le calendrier éditorial. Nous vous livrons tous les outils (visuels et textes) prêts à l'emploi. La publication manuelle reste à votre charge pour garder une proximité authentique avec votre audience, mais nous pouvons automatiser le processus si besoin.",
  },
  {
    q: "Qu'est-ce qu'une 'Ligne Éditoriale' ?",
    a: "C'est l'âme de votre communication. Nous définissons votre ton (luxueux, amical, expert), vos piliers de contenu et votre style visuel. L'objectif est qu'un client reconnaisse votre marque en une seconde, même sans voir votre logo.",
  },
  {
    q: 'Les templates sont-ils modifiables ?',
    a: 'Absolument. Nous créons vos modèles sur Figma ou Canva Pro. Vous recevez des structures épurées et premium que vous pouvez réutiliser indéfiniment pour vos futures annonces, stories ou promotions.',
  },
  {
    q: 'Quels réseaux sociaux ciblez-vous ?',
    a: "Nous nous concentrons sur les plateformes à fort impact visuel et business : Instagram (pour l'image de marque), TikTok (pour la portée virale) et LinkedIn (pour l'autorité professionnelle).",
  },
]

const benefits = [
  {
    Icon: Layout,
    title: 'Grille Esthétique',
    desc: "Une architecture visuelle cohérente (Grid Design) qui capte l'attention dès la première seconde de visite sur votre profil.",
  },
  {
    Icon: Calendar,
    title: 'Calendrier Stratégique',
    desc: 'Planification rigoureuse de vos contenus sur 30 jours pour maintenir une présence constante sans stress.',
  },
  {
    Icon: Sparkles,
    title: 'Templates Sur-Mesure',
    desc: 'Création de modèles exclusifs (Figma/Canva) pour vos stories et posts, garantissant une qualité studio à chaque publication.',
  },
  {
    Icon: BarChart3,
    title: 'Analyse de Performance',
    desc: "Suivi des statistiques clés pour ajuster votre ligne éditoriale et maximiser l'engagement de votre communauté.",
  },
]

const designIncluded = [
  'Audit complet de vos profils existants',
  'Optimisation des Bios et liens (Linktree pro)',
  'Définition de la Ligne Éditoriale (Ton & Style)',
  'Design de 9 templates de posts (Carré/Portrait)',
  'Design de 5 templates de Stories',
  "Design des couvertures 'Highlights' (La Une)",
  "Sélection d'une palette de couleurs réseaux",
]

const strategyIncluded = [
  'Recherche de Hashtags & Mots-clés cibles',
  'Calendrier éditorial sur 30 jours (Trello/PDF)',
  'Rédaction des légendes (Captions) optimisées',
  'Conseils en stratégie de Reels / Vidéo courte',
  "Rapport mensuel d'engagement & croissance",
  'Support prioritaire via WhatsApp',
]

export default function SmoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-[#F9F9FB] text-zinc-900 antialiased">
      <Cursor />
      <Navbar />

      {/* 1. Hero */}
      <section className="relative min-h-[65vh] flex items-center bg-white border-b border-zinc-100 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-16 relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber-600 font-semibold block">
              Optimisation des Réseaux Sociaux
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Stratégie <em className="font-light italic text-zinc-500">SMO</em> & <br />
              Image de Marque
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Transformez vos réseaux sociaux en une vitrine d&apos;exception. Nous concevons une{' '}
              <strong className="text-zinc-700 font-medium">identité visuelle magnétique</strong> et une stratégie de contenu rigoureuse pour convertir vos abonnés en clients fidèles.
            </p>
          </div>

          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100/10 to-zinc-100/30 blur-2xl rounded-full opacity-50" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-200/80 shadow-sm bg-white">
              <Image
                src="/images/agence/phones-luxury.jpg"
                alt="Mockup Instagram minimaliste — WEBAI SMO"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover brightness-[1.10] contrast-[0.95]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Public cible & bénéfices */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">Votre Influence</span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Dominez votre écosystème social
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Le SMO n&apos;est pas seulement une question de &laquo;&nbsp;likes&nbsp;&raquo;. C&apos;est l&apos;art de bâtir une autorité numérique qui inspire confiance et déclenche l&apos;achat.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Marques de Luxe', 'Instituts de Beauté', 'E-commerçants', 'Coachs & Experts', 'Showrooms Alger', 'Services Premium'].map((tag) => (
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
            <div
              key={title}
              className="bg-white border border-zinc-200/50 p-6 rounded-2xl shadow-sm space-y-3 group hover:border-amber-200 transition-colors"
            >
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
              Investissement Social
            </span>
            <h2
              className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cultivez votre <br />
              <em className="font-light italic text-zinc-500">autorité digitale</em>
            </h2>

            <div className="p-8 bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                Forfait Mensuel Stratégique
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
                Accompagnement complet, design inclus, sans engagement longue durée.
              </p>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-colors shadow-sm no-underline"
              >
                Auditer mon profil
              </a>
            </div>
          </div>

          {/* Droite : livrables */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/70 rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Identité & Design
              </h3>
              <ul className="space-y-3">
                {designIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-xs text-zinc-600 font-light">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-6 md:pt-0">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 border-b border-zinc-100 pb-2">
                Stratégie & Diffusion
              </h3>
              <ul className="space-y-3">
                {strategyIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-xs text-zinc-600 font-light">
                    <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-amber-50/50 border border-amber-100/60 rounded-xl">
                <p className="text-[11px] text-amber-800 font-light leading-relaxed">
                  <strong>Boost Publicitaire ?</strong> Nous pouvons coupler votre SMO avec des campagnes Meta Ads (Facebook/Instagram) pour accélérer vos résultats.
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
            FAQ — Vision Stratégique
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
