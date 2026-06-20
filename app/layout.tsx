import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { SITE } from '@/lib/seo'
import { organizationSchema, websiteSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

/**
 * Metadata racine — héritée par toutes les pages.
 * `metadataBase` permet à Next.js de résoudre les URLs relatives
 * (canonical, OG image) en URLs absolues.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: SITE.titleTemplate,
  },
  description: SITE.defaultDescription,
  keywords: SITE.keywords as unknown as string[],
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/',
      'en-US': '/en',
      'ar-DZ': '/ar',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    locale: SITE.locale,
    alternateLocale: [...SITE.alternateLocales],
    images: [
      {
        url: SITE.og.image,
        width: SITE.og.width,
        height: SITE.og.height,
        alt: SITE.og.imageAlt,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitter,
    creator: SITE.twitter,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [SITE.og.image],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // À renseigner après inscription dans la Search Console correspondante.
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

/**
 * Viewport — séparé du metadata depuis Next.js 14.
 */
export const viewport: Viewport = {
  themeColor: '#FBFBFA',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* JSON-LD Schema.org — injecté en SSR, zéro coût runtime */}
        <JsonLd id="schema-organization" data={organizationSchema()} />
        <JsonLd id="schema-website" data={websiteSchema()} />
      </head>
      <body>{children}</body>
    </html>
  )
}
