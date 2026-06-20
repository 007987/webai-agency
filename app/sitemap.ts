import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

/**
 * Sitemap dynamique natif Next.js (App Router).
 * Servi automatiquement sous /sitemap.xml — pas besoin de configuration serveur.
 *
 * Priorités :
 *   1.0 → page d'accueil
 *   0.9 → pages stratégiques (services, tarifs)
 *   0.8 → vitrines services individuels & agence
 *   0.6 → contact
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, '')
  const now = new Date()

  const routes: Array<{
    path: string
    priority: number
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  }> = [
    { path: '/',                       priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services',               priority: 0.9, changeFrequency: 'monthly' },
    { path: '/tarifs',                 priority: 0.9, changeFrequency: 'monthly' },
    { path: '/agence',                 priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/onepage',       priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/vitrine',       priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/ecommerce',     priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/hebergement',   priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/maintenance',   priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/design',        priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/seo',           priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/smo',           priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact',                priority: 0.6, changeFrequency: 'yearly' },
  ]

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
