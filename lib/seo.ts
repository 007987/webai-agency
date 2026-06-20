/**
 * Source unique des constantes SEO du site WEBAI Agency.
 * URL canonique configurable via NEXT_PUBLIC_SITE_URL (variable d'env).
 */

const FALLBACK_URL = 'https://webai-agency.com'

export const SITE = {
  name: 'WEBAI Agency',
  shortName: 'WEBAI',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL,
  locale: 'fr_FR',
  alternateLocales: ['en_US', 'ar_DZ'] as const,

  defaultTitle: 'WEBAI Agency — Studio de Design Digital & Développement Web de Prestige',
  titleTemplate: '%s · WEBAI Agency',
  defaultDescription:
    "WEBAI Agency conçoit des plateformes web sur-mesure pour des marques d'exception — design minimaliste, performance Next.js et SEO international. Algérie · France · Qatar · Moyen-Orient.",

  keywords: [
    'agence web premium',
    'studio digital de prestige',
    'design minimaliste',
    'développement Next.js',
    'UI/UX luxe',
    'e-commerce haute performance',
    'site vitrine sur-mesure',
    'agence web Alger',
    'agence web Paris',
    'WEBAI',
  ],

  og: {
    image: '/og/webai-cover.jpg',
    imageAlt: 'WEBAI Agency — Studio de Design Digital de Prestige',
    width: 1200,
    height: 630,
  },

  twitter: '@webai_agency',

  social: {
    instagram: 'https://www.instagram.com/webai.agency',
    linkedin: 'https://www.linkedin.com/company/webai-agency',
    behance: 'https://www.behance.net/webai-agency',
    dribbble: 'https://dribbble.com/webai',
  },

  contact: {
    whatsapp: '+213XXXXXXXXX',
    email: 'contact@webai-agency.com',
  },

  founded: '2022',
  areaServed: ['DZ', 'FR', 'QA', 'SA', 'AE', 'BE', 'JP'] as const,
} as const

export const SITE_URL = SITE.url
