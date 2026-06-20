'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check, Server, Zap, Cpu, ArrowRight, HelpCircle, HardDrive, Globe } from 'lucide-react'
import Cursor     from '@/components/Cursor'
import Navbar     from '@/components/Navbar'
import CtaSection from '@/components/CtaSection'
import Footer     from '@/components/Footer'

const faqs = [
  {
    q: "Qu'est-ce que l'hébergement NVMe par rapport à un hébergement classique ?",
    a: "Les disques NVMe (Non-Volatile Memory Express) sont jusqu'à 10 fois plus rapides que les disques SSD traditionnels. Cela permet à votre base de données et à vos scripts de s'exécuter instantanément, offrant une vitesse de chargement minimale à vos utilisateurs.",
  },
  {
    q: "Le nom de domaine est-il inclus dans le renouvellement ?",
    a: "Oui, un nom de domaine standard (.com, .net, ou .dz selon disponibilité) est entièrement inclus et configuré gratuitement avec votre forfait annuel d'hébergement.",
  },
  {
    q: "Comment se passent les sauvegardes de mon site ?",
    a: "La sécurité est automatisée. Nous programmons des sauvegardes complètes de vos fichiers et de vos bases de données chaque semaine. En cas de mauvaise manipulation, votre site peut être restauré en un clic.",
  },
  {
    q: "Puis-je migrer mon site actuel sur vos serveurs ?",
    a: "Absolument. Si vous disposez déjà d'un site chez un autre hébergeur, nos équipes s'occupent de transférer l'intégralité de vos fichiers et bases de données vers notre infrastructure NVMe gratuitement et sans aucune coupure pour vos clients.",
  },
]

const benefits = [
  {
    Icon: HardDrive,
    title: 'Stockage Pur NVMe',
    desc: "Accès ultra-rapide aux scripts et fichiers du site pour un temps de réponse initial du serveur quasi-instantané.",
  },
  {
    Icon: Zap,
    title: 'Bande Passante Non Mesurée',
    desc: "Aucune limitation du trafic. Votre site reste performant même en cas d'afflux massif de visiteurs simultanés.",
  },
  {
    Icon: Cpu,
    title: 'Ressources Dédiées',
    desc: "Allocation optimisée de la mémoire RAM et du CPU pour éviter les ralentissements liés aux autres sites.",
  },
  {
    Icon: Globe,
    title: 'Sécurité SSL Pro',
    desc: "Chiffrement de bout en bout avec certificat HTTPS inclus pour rassurer vos visiteurs et valider les critères de Google.",
  },
]

const starterIncluded = [
  'Espace de stockage NVMe optimisé',
  'Nom de domaine inclus (.com ou similaire, 1 an)',
  'Certificat de sécurité SSL (HTTPS) permanent',
  'Bande passante mensuelle non mesurée',
  'Sauvegardes de sécurité automatiques hebdomadaires',
  'Support technique standard par e-mail / ticket',
]

const proIncluded = [
  'Espace disque NVMe étendu haute capacité',
  'Nom de domaine Pro au choix inclus (.com, .net, .dz)',
  'Certificat SSL Wildcard (sécurise aussi les sous-domaines)',
  'Ressources CPU & RAM dédiées accrues',
  'Sauvegardes de sécurité automatiques quotidiennes',
  'Bande passante ultra-prioritaire sur le réseau',
  'Support technique prioritaire WhatsApp (7j/7)',
]

export default function HostingPage() {
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
              Performance & Haute Disponibilité
            </span>
            <h1
              className="text-4xl md:text-6xl font-light tracking-tight text-zinc-900 leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Hébergement <em className="font-light italic text-zinc-500">Cloud NVMe</em>
            </h1>
            <p className="text-zinc-500 font-light text-base md:text-lg max-w-2xl leading-relaxed">
              Propulsez votre site web sur des serveurs de dernière génération. Une infrastructure optimisée pour la vitesse, sécurisée contre les menaces et configurée pour garantir une disponibilité totale en ligne.
            </p>
          </div>
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between min-h-[250px]">
            <div className="space-y-2">
              <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-medium">Garantie Technique</span>
              <h3 className="text-xl font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                Vitesse & Sérénité
              </h3>
              <p className="text-zinc-500 text-xs font-light leading-relaxed">
                Un site rapide améliore l&apos;expérience utilisateur et booste votre référencement Google. Nous gérons toute la complexité technique des serveurs pour vous laisser vous concentrer sur votre business.
              </p>
            </div>
            <Link
              href="#tarifs"
              className="inline-flex items-center gap-2 text-xs font-medium text-amber-600 hover:text-zinc-900 transition-colors group mt-6 no-underline"
            >
              Découvrir les forfaits annuels
              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Avantages */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Gauche sticky */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold block">
            Architecture Réseau
          </span>
          <h2 className="text-3xl font-light tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Une technologie de pointe pour vos fichiers.
          </h2>
          <p className="text-zinc-500 font-light text-sm leading-relaxed">
            Ne laissez pas un hébergement d&apos;ancienne génération ralentir votre croissance ou compromettre la sécurité de vos données clients.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            {['Serveurs NVMe', 'Certificats SSL', 'Bande Passante Illimitée', 'Sauvegardes Auto', 'Uptime 99.9%'].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium text-zinc-600 bg-white border border-zinc-200/60 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Droite : grille bénéfices */}
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

      {/* 3. Tarifs : 2 formules */}
      <section id="tarifs" className="bg-white border-t border-b border-zinc-100 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">

          <div className="max-w-2xl space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-600 font-semibold block">
              Abonnements Annuels
            </span>
            <h2
              className="text-3xl font-light tracking-tight text-zinc-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Des infrastructures adaptées{' '}
              <em className="font-light italic text-zinc-500">à votre échelle</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Formule 1 : Starter */}
            <div className="bg-[#F9F9FB] border border-zinc-200/70 rounded-2xl p-8 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-zinc-200/60 pb-4">
                  <div className="space-y-1">
                    <span className="p-1.5 bg-white border border-zinc-200 rounded-lg text-zinc-400 inline-block mb-1">
                      <Server className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-lg font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                      Hébergement Starter
                    </h3>
                    <p className="text-zinc-400 text-[11px] font-light">Idéal pour les sites vitrines et OnePage.</p>
                  </div>
                  <div className="flex items-baseline gap-0.5 bg-white border border-zinc-200/60 px-4 py-2 rounded-xl shadow-sm">
                    <span className="text-2xl font-light tracking-tight text-zinc-900">6 500</span>
                    <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">&nbsp;DA / An</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {starterIncluded.map((item) => (
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
                Activer le forfait Starter
              </a>
            </div>

            {/* Formule 2 : Pro */}
            <div className="bg-white border border-amber-200/70 rounded-2xl p-8 flex flex-col justify-between space-y-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-600 text-white text-[8px] uppercase tracking-widest font-semibold px-4 py-1 rounded-bl-xl">
                Performance Max
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-zinc-100 pb-4">
                  <div className="space-y-1">
                    <span className="p-1.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-600 inline-block mb-1">
                      <Cpu className="w-3.5 h-3.5" />
                    </span>
                    <h3 className="text-lg font-medium text-zinc-800" style={{ fontFamily: 'var(--font-display)' }}>
                      Hébergement Pro
                    </h3>
                    <p className="text-zinc-400 text-[11px] font-light">Taillé pour l&apos;E-Commerce et les forts trafics.</p>
                  </div>
                  <div className="flex items-baseline gap-0.5 bg-amber-50 border border-amber-100 px-4 py-2 rounded-xl">
                    <span className="text-2xl font-light tracking-tight text-amber-800">13 000</span>
                    <span className="text-[10px] font-medium text-amber-700 uppercase tracking-wider">&nbsp;DA / An</span>
                  </div>
                </div>

                <ul className="space-y-3.5">
                  {proIncluded.map((item, index) => (
                    <li key={item} className="flex items-start gap-3 text-xs text-zinc-600 font-light">
                      <Check className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span className={index === 0 || index === 4 ? 'font-medium text-zinc-800' : ''}>{item}</span>
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
                Déployer l&apos;Hébergement Pro
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
            FAQ — Clarté Infrastructure
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
