import type { Metadata } from 'next'

/**
 * Metadata pour la route /agence.
 * Définie dans un layout server pour pouvoir co-exister avec
 * une page.tsx en 'use client'.
 */
export const metadata: Metadata = {
  title: "L'Agence — Studio de design digital premium · WEBAI",
  description:
    "Découvrez WEBAI Agency : ingénierie Next.js, direction artistique minimaliste, e-commerce haute performance et portfolio de marques d'exception en Algérie, France, Qatar et Moyen-Orient.",
  alternates: { canonical: '/agence' },
  openGraph: {
    title: "L'Agence WEBAI — Studio de design digital premium",
    description:
      'Ingénierie Next.js, direction artistique minimaliste et portfolio premium — 30+ projets livrés à l’international.',
    url: '/agence',
  },
}

export default function AgenceLayout({ children }: { children: React.ReactNode }) {
  return children
}
