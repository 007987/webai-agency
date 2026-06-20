'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, X, ShoppingBag, Zap, CreditCard, BarChart3, ArrowRight, HelpCircle } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: "Quelle plateforme utilisez-vous pour la gestion de la boutique ?",
    a: "Nous lions une architecture Next.js ultra-rapide en Front-End à un système d'administration de pointe (comme Shopify Headless ou Medusa/Stripe). Cela vous donne un tableau de bord ultra-simple pour gérer vos produits, stocks et commandes, sans compromettre la vitesse du site.",
  },
  {
    q: "Quels sont les moyens de paiement intégrés ?",
    a: "Nous intégrons nativement le paiement à la livraison (COD) avec formulaires optimisés, ainsi que des passerelles de paiement par carte (comme Chargily, Satim ou Stripe selon votre ciblage de clientèle internationale).",
  },
  {
    q: "Le site peut-il supporter un grand nombre de connexions simultanées ?",
    a: "Absolument. Grâce à notre architecture Next.js déployée sur des réseaux de serveurs mondiaux (CDN), votre boutique reste instantanée (chargement < 1.5s), même lors de pics de trafic ou de campagnes publicitaires intenses.",
  },
  {
    q: "Proposez-vous une formation pour gérer les commandes ?",
    a: "Oui, un accompagnement complet est inclus. Nous vous transmettons une série de vidéos explicatives personnalisées et réalisons une session en direct pour que vous et vos équipes soyez 100% autonomes dès le premier jour.",
  },
]

const benefits = [
  {
    Icon: ShoppingBag,
    title: "Tunnel d'Achat en 1 Clic",
    desc: "Un parcours d'achat ultra-rapide et simplifié, idéal pour capturer les achats impulsifs sur mobile.",
  },
  {
    Icon: Zap,
    title: 'Vitesse & Fluidité Absolue',
    desc: "Des pages qui se chargent instantanément grâce au rendu statique dynamique pour maximiser vos ventes.",
  },
  {
    Icon: CreditCard,
    title: 'Gestion Simplifiée des Stocks',
    desc: "Un tableau de bord épuré pour suivre vos ventes, modifier vos prix et gérer vos stocks en quelques secondes.",
  },
  {
    Icon: BarChart3,
    title: 'Analyses & Tracking Natifs',
    desc: "Pixels de suivi et outils de statistiques intégrés pour mesurer précisément le retour sur investissement de vos publicités.",
  },
]

const included = [
  "Design E-Commerce haut de gamme",
  "Catalogue produits dynamique & épuré",
  "Panier d'achat & Page de paiement fluide",
  "Formulaire de commande express (COD)",
  "Intégration Passerelles de paiement (Cartes)",
  "Tableau de bord de gestion des stocks",
  "Hébergement cloud NVMe haute capacité (1 an)",
  "Nom de domaine professionnel (1 an)",
  "Optimisation SEO pour vos fiches produits",
  "Formation complète à l'utilisation (2h)",
  "Support technique dédié (30 jours)",
]

const notIncluded = [
  "Rédaction de vos fiches produits",
  "Prises de vues ou photographies de vos articles",
  "Gestion et configuration de vos campagnes publicitaires",
  "Abonnements d'applications tierces payantes",
]

export default function EcommercePage() {
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
              Formule Croissance & Vente
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              E-Commerce <em className="font-light italic text-zinc-500">Élite</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Une machine de vente en ligne combinant un{' '}
              <strong className="text-zinc-700 font-medium">design minimaliste haut de gamme</strong>{' '}
              et une vitesse d&apos;exécution chirurgicale. Conçue spécifiquement pour maximiser votre taux de conversion et offrir une expérience d&apos;achat fluide.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Performance Commerciale</span>
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                Échelle & Automatisation
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Idéal pour les marques de cosmétiques, créateurs de mode, boutiques de produits premium et marques de prêt-à-porter souhaitant s&apos;affranchir des limitations des réseaux sociaux pour automatiser leurs ventes.
              </p>
            </div>
            <Link
              href="#tarifs"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-zinc-900 transition-colors group mt-6 no-underline"
            >
              Consulter le forfait d&apos;investissement
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
            Infrastructure Robuste
          </span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Pensé pour convertir chaque visiteur.
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Chaque seconde de chargement en trop fait perdre des clients. Notre architecture technique garantit une vitesse instantanée pour supprimer les abandons de panier.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {["Marques de Cosmétiques", "Prêt-à-Porter Premium", "Boutiques d'Accessoires", "Créateurs & Designers", "E-Commerçants Ambitieux"].map((tag) => (
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

      {/* 3. Investissement */}
      <section id="tarifs" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Bloc tarif gauche */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Forfait Clé en main
            </span>
            <h2
              className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Votre écosystème commercial <br />
              <em className="font-light italic text-zinc-500">au tarif optimisé</em>
            </h2>

            <div className="p-8 bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                Hébergement NVMe Pro Inclus
              </span>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl font-light tracking-tight text-zinc-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  85 000
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">DA</span>
              </div>
              <p className="text-zinc-400 text-xs font-light">
                Aucun pourcentage prélevé sur vos ventes. Vous êtes 100% propriétaire de votre boutique.
              </p>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-colors duration-300 shadow-sm no-underline"
              >
                Lancer ma Boutique Élite
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
                Non inclus par défaut
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
                  <strong>Besoin d&apos;une stratégie publicitaire ?</strong> Nous pouvons vous mettre en relation directe avec nos partenaires experts en Community Management et Media Buying.
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
            FAQ — Réponses Élite
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
