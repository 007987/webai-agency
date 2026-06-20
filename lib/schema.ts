/**
 * Générateurs de schémas Schema.org au format JSON-LD.
 * Tous typés string-only pour rester compatibles JSON.stringify dans le <script>.
 */
import { SITE } from './seo'

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE.url}${path}`)

/** Organisation principale — type ProfessionalService */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: abs('/images/brand/webai-logo.png'),
      width: 701,
      height: 435,
    },
    image: abs(SITE.og.image),
    description: SITE.defaultDescription,
    foundingDate: SITE.founded,
    slogan: 'Architectures digitales pour marques d’exception',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alger',
      addressCountry: 'DZ',
    },
    areaServed: SITE.areaServed.map((c) => ({ '@type': 'Country', name: c })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: SITE.contact.whatsapp,
        email: SITE.contact.email,
        availableLanguage: ['French', 'English', 'Arabic'],
        areaServed: SITE.areaServed.map((c) => c),
      },
    ],
    sameAs: Object.values(SITE.social),
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Design UI/UX premium',
      'E-Commerce',
      'SEO international',
      'Core Web Vitals',
      'Branding & identité visuelle',
    ],
    serviceType: [
      'Développement web Next.js',
      'Design UI/UX premium',
      'E-Commerce haute performance',
      'Identité visuelle & branding',
      'SEO technique international',
      'Hébergement Cloud NVMe',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services WEBAI Agency',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Site OnePage Impact' },
          priceCurrency: 'DZD',
          price: '25000',
          url: abs('/services/onepage'),
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Vitrine Prestige' },
          priceCurrency: 'DZD',
          price: '45000',
          url: abs('/services/vitrine'),
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Pack E-Commerce Élite' },
          priceCurrency: 'DZD',
          price: '85000',
          url: abs('/services/ecommerce'),
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Hébergement NVMe Pro' },
          priceCurrency: 'DZD',
          price: '13000',
          url: abs('/services/hebergement'),
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Identité Visuelle Complète' },
          priceCurrency: 'DZD',
          price: '9000',
          url: abs('/services/design'),
        },
      ],
    },
  } as const
}

/** Schéma WebSite avec SearchAction */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: ['fr-FR', 'en-US', 'ar-DZ'],
    publisher: { '@id': `${SITE.url}/#organization` },
  } as const
}

/** Schéma Breadcrumb */
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.url),
    })),
  } as const
}

/** Schéma FAQ (utilisable sur les pages services et tarifs) */
export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  } as const
}
