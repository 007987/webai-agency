'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight, Globe, Sparkles, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group no-underline" aria-label="WEBAI — accueil">
          <Image
            src="/images/brand/webai-logo.png"
            alt="WEBAI"
            width={701}
            height={435}
            priority
            style={{ height: 36, width: 'auto' }}
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 h-full">

          {/* Services dropdown */}
          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 hover:text-amber-600 transition-colors h-full">
              Services
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180 text-amber-600' : 'text-zinc-400'
                }`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-20 right-1/2 translate-x-1/2 w-[720px] bg-white/95 backdrop-blur-xl border border-zinc-200/60 rounded-2xl p-8 shadow-xl shadow-zinc-200/40 transition-all duration-300 origin-top ${
                isServicesOpen
                  ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
                  : 'opacity-0 pointer-events-none -translate-y-2 scale-95'
              }`}
            >
              <div className="grid grid-cols-3 gap-8">

                {/* Pilier 1 : Développement */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-100 pb-2">
                    <Globe className="w-3.5 h-3.5 text-zinc-400" />
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold">Développement</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { label: 'Site OnePage Impact', sub: 'Architecture épurée, focus conversion.', href: '/services/onepage' },
                      { label: 'Vitrine Prestige', sub: 'Idéal pour les marques & instituts.', href: '/services/vitrine' },
                      { label: 'E-Commerce Élite', sub: "Optimisé avec tunnels d'achat fluides.", href: '/services/ecommerce' },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="group flex flex-col no-underline">
                          <span className="text-xs font-medium text-zinc-800 group-hover:text-amber-600 transition-colors">{item.label}</span>
                          <span className="text-[10px] text-zinc-400 font-light mt-0.5">{item.sub}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pilier 2 : Visibilité & Design */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-100 pb-2">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold">Visibilité & Design</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { label: 'Identité Visuelle', sub: 'Logos & chartes graphiques couture.', href: '/services/design' },
                      { label: 'Stratégie SMO', sub: 'Optimisation & grilles réseaux sociaux.', href: '/services/smo' },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="group flex flex-col no-underline">
                          <span className="text-xs font-medium text-zinc-800 group-hover:text-amber-600 transition-colors">{item.label}</span>
                          <span className="text-[10px] text-zinc-400 font-light mt-0.5">{item.sub}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pilier 3 : Performance */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-100 pb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold">Performance</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { label: 'Hébergement NVMe Pro', sub: 'Vitesse maximale & serveurs sécurisés.', href: '/services/hebergement' },
                      { label: 'Référencement SEO', sub: 'Indexation native pour Google.', href: '/services/seo' },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="group flex flex-col no-underline">
                          <span className="text-xs font-medium text-zinc-800 group-hover:text-amber-600 transition-colors">{item.label}</span>
                          <span className="text-[10px] text-zinc-400 font-light mt-0.5">{item.sub}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Pied du dropdown */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-light">Analyse stratégique initiale offerte.</span>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-amber-600 hover:text-zinc-900 transition-colors group no-underline"
                >
                  Découvrir notre offre complète
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Liens directs */}
          {[
            ['Tarifs', '/tarifs'],
            ['Agence', '/agence'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 hover:text-amber-600 transition-colors no-underline"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center bg-zinc-950 text-white text-[10px] uppercase tracking-[0.15em] font-medium px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-sm shadow-zinc-950/10 no-underline"
        >
          Lancer un projet
        </Link>

      </div>
    </header>
  )
}
