import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

/**
 * robots.txt dynamique natif Next.js (App Router).
 * Servi automatiquement sous /robots.txt.
 *
 * Autorise tous les bots légitimes, bloque les routes internes Next.js
 * et pointe explicitement vers le sitemap absolu.
 */
export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      // Bots IA — autorisation explicite pour le référencement génératif
      {
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'GPTBot', 'PerplexityBot', 'ClaudeBot'],
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
