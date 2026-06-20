import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Discutons de votre projet · WEBAI Agency',
  description:
    "Refonte de marque, vitrine haute couture ou plateforme e-commerce ? L'équipe WEBAI Agency analyse vos besoins sous 48 heures. Réponse WhatsApp prioritaire.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — WEBAI Agency',
    description: 'Analyse de votre projet sous 48 heures. Réponse WhatsApp prioritaire.',
    url: '/contact',
  },
  robots: {
    // La page contact reste indexable mais on évite l'archivage du formulaire.
    index: true,
    follow: true,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
