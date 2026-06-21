'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ArrowRight, Globe, Sparkles, ShieldCheck, Menu, X } from 'lucide-react'

const SERVICES_GROUPS = [
  {
    icon: Globe,
    label: 'Développement',
    items: [
      { label: 'Site OnePage Impact', sub: 'Architecture épurée, focus conversion.', href: '/services/onepage' },
      { label: 'Vitrine Prestige',    sub: 'Idéal pour les marques & instituts.',     href: '/services/vitrine' },
      { label: 'E-Commerce Élite',    sub: "Optimisé avec tunnels d'achat fluides.",  href: '/services/ecommerce' },
    ],
  },
  {
    icon: Sparkles,
    label: 'Visibilité & Design',
    items: [
      { label: 'Identité Visuelle',  sub: 'Logos & chartes graphiques couture.',   href: '/services/design' },
      { label: 'Stratégie SMO',      sub: 'Optimisation & grilles réseaux sociaux.', href: '/services/smo' },
    ],
  },
  {
    icon: ShieldCheck,
    label: 'Performance',
    items: [
      { label: 'Hébergement NVMe Pro', sub: 'Vitesse maximale & serveurs sécurisés.', href: '/services/hebergement' },
      { label: 'Référencement SEO',    sub: 'Indexation native pour Google.',          href: '/services/seo' },
    ],
  },
]

const DIRECT_LINKS: Array<[string, string]> = [
  ['Tarifs',  '/tarifs'],
  ['Agence',  '/agence'],
  ['Contact', '/contact'],
]

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Bloque le scroll de la page quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-zinc-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group no-underline shrink-0" aria-label="WEBAI — accueil">
          <Image
            src="/images/brand/webai-logo.png"
            alt="WEBAI"
            width={701}
            height={435}
            priority
            style={{ height: 32, width: 'auto' }}
            className="md:!h-9"
          />
        </Link>

        {/* ─── Navigation desktop ──────────────────────── */}
        <nav className="hidden md:flex items-center gap-8 h-full">

          <div
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button type="button" className="flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 hover:text-amber-600 transition-colors h-full">
              Services
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-amber-600' : 'text-zinc-400'}`} />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white/95 backdrop-blur-xl border border-zinc-200/60 rounded-2xl p-8 shadow-xl shadow-zinc-200/40 transition-all duration-300 origin-top ${
                isServicesOpen
                  ? 'opacity-100 pointer-events-auto translate-y-0 scale-100'
                  : 'opacity-0 pointer-events-none -translate-y-2 scale-95'
              }`}
            >
              <div className="grid grid-cols-3 gap-8">
                {SERVICES_GROUPS.map((group) => {
                  const Icon = group.icon
                  return (
                    <div key={group.label} className="space-y-4">
                      <div className="flex items-center gap-2 text-zinc-400 border-b border-zinc-100 pb-2">
                        <Icon className="w-3.5 h-3.5 text-zinc-400" />
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold">{group.label}</h4>
                      </div>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link href={item.href} className="group flex flex-col no-underline">
                              <span className="text-xs font-medium text-zinc-800 group-hover:text-amber-600 transition-colors">{item.label}</span>
                              <span className="text-[10px] text-zinc-400 font-light mt-0.5">{item.sub}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-between items-center">
                <span className="text-[10px] text-zinc-400 font-light">Analyse stratégique initiale offerte.</span>
                <Link href="/services" className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-amber-600 hover:text-zinc-900 transition-colors group no-underline">
                  Découvrir notre offre complète
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {DIRECT_LINKS.map(([label, href]) => (
            <Link key={label} href={href} className="text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-600 hover:text-amber-600 transition-colors no-underline">
              {label}
            </Link>
          ))}
        </nav>

        {/* ─── Actions à droite ────────────────────────── */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center bg-zinc-950 text-white text-[10px] uppercase tracking-[0.15em] font-medium px-4 md:px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-sm shadow-zinc-950/10 no-underline"
          >
            Lancer un projet
          </Link>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            className="md:hidden w-10 h-10 -mr-2 flex items-center justify-center rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ─── Menu plein écran mobile ──────────────────── */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-6 py-8 space-y-8">

          {/* Liens directs */}
          <nav className="flex flex-col">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-4 border-b border-zinc-100 text-left"
              aria-expanded={mobileServicesOpen}
            >
              <span className="text-sm uppercase tracking-[0.18em] font-medium text-zinc-900">Services</span>
              <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Sous-menu Services */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 space-y-5 pl-3">
                {SERVICES_GROUPS.map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <p className="text-[9px] uppercase tracking-[0.3em] font-semibold text-amber-600">{group.label}</p>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1.5 text-sm font-medium text-zinc-800 no-underline"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-amber-600 no-underline pt-2"
                >
                  Découvrir notre offre complète
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {DIRECT_LINKS.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 border-b border-zinc-100 text-sm uppercase tracking-[0.18em] font-medium text-zinc-900 no-underline"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA mobile */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-zinc-950 text-white text-xs uppercase tracking-[0.18em] font-medium py-4 rounded-xl no-underline"
          >
            Lancer un projet
          </Link>
        </div>
      </div>
    </header>
  )
}
