'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, X, ShieldCheck, RefreshCw, Activity, Clock, ArrowRight, HelpCircle } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: "Que se passe-t-il si mon site tombe en panne un week-end ?",
    a: "Notre formule inclut une surveillance automatisée 24h/7j. Si une anomalie critique ou une panne survient, une alerte est immédiatement envoyée à notre équipe technique pour intervenir dans les plus brefs délais, même les jours non ouvrables.",
  },
  {
    q: "Les modifications de contenu (textes, images) sont-elles incluses ?",
    a: "Oui. Le forfait comprend jusqu'à 3 interventions mensuelles légères pour actualiser vos textes, modifier des photos de vos galeries ou mettre à jour les coordonnées de votre entreprise sans surcoût.",
  },
  {
    q: "Pourquoi la mise à jour des scripts et extensions est-elle obligatoire ?",
    a: "Le web évolue constamment. Ne pas mettre à jour l'architecture (Next.js, packages, API tierces) expose votre site à des failles de sécurité majeures et à des pertes de performances. La maintenance garantit un site imperméable aux attaques.",
  },
  {
    q: "Puis-je résilier le contrat de maintenance annuelle ?",
    a: "Le forfait est sans engagement de renouvellement d'une année sur l'autre. À la fin de la période de 12 mois, vous êtes libre de renouveler ou de reprendre la gestion technique de votre infrastructure en totale autonomie.",
  },
]

const benefits = [
  {
    Icon: ShieldCheck,
    title: 'Sécurité & Imperméabilité',
    desc: "Application immédiate des correctifs de sécurité critiques pour protéger vos formulaires et données contre le piratage.",
  },
  {
    Icon: RefreshCw,
    title: "Mises à Jour de l'Architecture",
    desc: "Actualisation régulière du code source et des modules dépendants pour maintenir une compatibilité parfaite avec les navigateurs.",
  },
  {
    Icon: Activity,
    title: "Supervision de l'Uptime",
    desc: "Des robots de contrôle testent la disponibilité de votre site toutes les 5 minutes pour garantir zéro coupure invisible.",
  },
  {
    Icon: Clock,
    title: 'Interventions sur Demande',
    desc: "Un besoin d'ajustement ou d'ajout de texte de dernière minute ? Nos techniciens effectuent les modifications sous 24h à 48h.",
  },
]

const included = [
  'Mises à jour mensuelles de la structure du code',
  'Surveillance anti-piratage et pare-feu actif',
  'Sauvegardes hebdomadaires automatiques (Cloud externe)',
  'Résolution prioritaire en cas de panne serveur',
  "Jusqu'à 3 interventions mensuelles (textes / images)",
  "Rapports trimestriels de performance et d'Uptime",
  'Optimisation et nettoyage de la base de données',
  'Suivi de la validité de votre certificat SSL',
]

const notIncluded = [
  "Refonte graphique complète d'une page",
  'Développement de nouvelles fonctionnalités majeures',
  'Création et intégration de nouvelles pages entières',
  'Rédaction de nouveaux contenus textuels de blogs',
]

export default function MaintenancePage() {
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
              Tranquillité d&apos;Esprit & Continuité
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Suivi & <em className="font-light italic text-zinc-500">Maintenance</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Assurez la pérennité, la sécurité et l&apos;évolution de votre plateforme. Un service technique sur-mesure conçu pour protéger vos données, prévenir les pannes et maintenir la vitesse de votre site au sommet de ses performances.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Garantie Opérationnelle</span>
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                Zéro Bug, Zéro Stress
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Pendant que nous veillons sur l&apos;infrastructure technique, la sécurité de vos serveurs et les mises à jour de sécurité, vous vous concentrez à 100% sur le développement de votre entreprise.
              </p>
            </div>
            <Link
              href="#tarifs"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-zinc-900 transition-colors group mt-6 no-underline"
            >
              Consulter le coût du forfait annuel
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Avantages */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
            Protection Active
          </span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Une surveillance proactive, pas seulement réactive.
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Un bug ou une page inaccessible fait fuir vos clients et détruit votre image de marque. Nous intervenons en amont pour bloquer les anomalies avant qu&apos;elles ne soient visibles.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Surveillance 24/7', 'Correctifs Légers', 'Mises à Jour Noyau', 'Sauvegardes Externes', 'Optimisation Continue'].map((tag) => (
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

          {/* Gauche */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Forfait Sérénité
            </span>
            <h2
              className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Une infrastructure sous <br />
              <em className="font-light italic text-zinc-500">haute surveillance</em>
            </h2>

            <div className="p-8 bg-[#F9F9FB] border border-zinc-200/60 rounded-2xl space-y-4">
              <span className="inline-block bg-amber-100 text-amber-800 text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full">
                Contrat annuel renouvelable
              </span>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-5xl font-light tracking-tight text-zinc-900"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  9 000
                </span>
                <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">DA / An</span>
              </div>
              <p className="text-zinc-400 text-xs font-light">
                Équivaut à moins de 800 DA par mois pour sécuriser l&apos;intégralité de votre business numérique.
              </p>
              <a
                href="https://wa.me/213XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block bg-zinc-950 text-white text-xs uppercase tracking-widest font-medium py-4 rounded-xl hover:bg-zinc-800 transition-colors duration-300 shadow-sm no-underline"
              >
                Sécuriser mon Site Web
              </a>
            </div>
          </div>

          {/* Droite : inclusions / exclusions */}
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
                Ce qui demande un devis
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
                  <strong>Besoin d&apos;une nouvelle page ?</strong> Si votre activité grandit et nécessite une extension d&apos;architecture, nos tarifs de développement à l&apos;acte restent ultra-compétitifs pour nos clients sous contrat.
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
            Une incertitude ?
          </span>
          <h2
            className="text-3xl font-light tracking-tight text-zinc-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            FAQ — Transparence Technique
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
