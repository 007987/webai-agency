import type { Metadata } from 'next'
import Cursor            from '@/components/Cursor'
import Navbar            from '@/components/Navbar'
import Hero              from '@/components/Hero'
import Stats             from '@/components/Stats'
import ServicesShowcase  from '@/components/ServicesShowcase'
import BentoShowcase     from '@/components/BentoShowcase'
import WhyChoose    from '@/components/WhyChoose'
import Steps        from '@/components/Steps'
import Realisations from '@/components/Realisations'
import FaqSection   from '@/components/FaqSection'
import CtaSection   from '@/components/CtaSection'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'WEBAI Agency — Studio de Design Digital & Développement Web de Prestige',
  description:
    "WEBAI Agency : architectures web Next.js premium, design UI/UX éditorial, e-commerce haute performance. Marques d'exception en Algérie, France, Qatar et Moyen-Orient.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'WEBAI Agency — Studio de Design Digital de Prestige',
    description:
      "Architectures web Next.js premium pour marques d'exception — design minimaliste, e-commerce haute performance, SEO international.",
    url: '/',
  },
}

export default function HomePage() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <Hero />
      <Stats />
      <ServicesShowcase />
      <WhyChoose />
      <BentoShowcase />
      <Steps />
      <Realisations />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
