import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarifs transparents — Sites & E-Commerce premium · WEBAI',
  description:
    "Forfaits clé en main WEBAI Agency : OnePage 25 000 DA, Vitrine Prestige 45 000 DA, Pack E-Commerce 85 000 DA. Hébergement NVMe et maintenance annuelle inclus. Aucun frais caché.",
  alternates: { canonical: '/tarifs' },
  openGraph: {
    title: 'Tarifs WEBAI Agency — Sites & E-Commerce premium',
    description:
      'Forfaits transparents — création web, e-commerce, infrastructure et suivi technique.',
    url: '/tarifs',
  },
}

export default function TarifsLayout({ children }: { children: React.ReactNode }) {
  return children
}
