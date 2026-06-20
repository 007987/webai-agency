'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden border-b border-zinc-100">

      {/* Trame de précision style Linear / engineering */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 px-6 md:px-12 py-12">

        {/* ── COLONNE GAUCHE — Message (7/12) ── */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200/60 rounded-full">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              Studio de création digitale Élite
            </span>
          </div>

          <h1
            className="text-5xl sm:text-7xl font-light tracking-tight text-zinc-900 leading-[1.05]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            L&apos;architecture <em className="font-light italic text-zinc-500">digitale</em> <br />
            qui propulse les marques <br />
            <span className="relative inline-block">
              d&apos;exception
              <svg
                className="absolute -bottom-2 left-0 w-full h-2 text-amber-600/30"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="text-zinc-500 font-light text-base md:text-xl max-w-xl leading-relaxed">
            Nous ne créons pas seulement des sites internet. Nous bâtissons des actifs numériques haute-performance, fusionnant un design minimaliste et une vitesse d&apos;exécution absolue.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-5">
            <a
              href="https://wa.me/213XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-zinc-950 text-white text-[11px] uppercase tracking-[0.2em] font-medium px-10 py-5 rounded-xl hover:bg-zinc-800 transition-all duration-300 shadow-xl shadow-zinc-200 no-underline"
            >
              Lancer un projet
            </a>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto text-center text-zinc-600 hover:text-zinc-900 font-medium text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 group transition-colors no-underline"
            >
              Nos réalisations
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>

        </div>

        {/* ── COLONNE DROITE — Visuel (5/12) ── */}
        <div className="lg:col-span-5 relative group">
          {/* Halo derrière l'image — très discret */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-100/5 to-zinc-100/30 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 shadow-sm transform hover:scale-[1.01] transition-transform duration-500 aspect-square">
            <Image
              src="/images/hero/phantom-industries.jpg"
              alt="Phantom Industries — Mockup site web premium par WEBAI"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover brightness-[1.20] contrast-[0.90] saturate-[1.05]"
            />
            {/* Overlay blanc ultra-léger pour fondre l'image avec le fond blanc */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5 pointer-events-none" />
          </div>

          {/* Badge performance flottant */}
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                Performance : 99.8%
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
