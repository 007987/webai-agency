import Cursor        from '@/components/Cursor'
import Navbar        from '@/components/Navbar'
import PageHero      from '@/components/PageHero'
import ServiceDetail from '@/components/ServiceDetail'
import CtaSection    from '@/components/CtaSection'
import Footer        from '@/components/Footer'

export const metadata = {
  title: 'Catalogue Digital Pro — YOUCEF web/AI',
  description: 'Création de site catalogue en Algérie pour showrooms, fabricants et marques. Pages illimitées, produits illimités. À partir de 69 000 DA.',
}

const data = {
  definition: {
    title: 'Le site Catalogue Digital Pro, qu\'est-ce que c\'est ?',
    paragraphs: [
      'Le Catalogue Digital Pro est la solution idéale pour exposer une large gamme de produits en ligne sans système de paiement immédiat. C\'est un site vitrine enrichi, pensé pour présenter vos collections avec élégance — showrooms de meubles, marques de cosmétiques, fabricants, grossistes.',
      'Contrairement à un e-commerce classique, le catalogue numérique ne nécessite pas de gestion de commandes en ligne. Vos clients parcourent vos produits, les sélectionnent, et vous contactent directement pour la commande — un modèle parfaitement adapté aux habitudes d\'achat algériennes.',
      'Avec des pages et des produits illimités, un back-office d\'administration intuitif et un design unique et personnalisé, votre catalogue digital devient un outil de prospection commerciale puissant — accessible depuis n\'importe quel appareil, à toute heure.',
    ],
  },
  pourQui: {
    description: 'Le Catalogue Digital Pro est conçu pour les entreprises qui ont beaucoup à montrer mais pas nécessairement à vendre directement en ligne. Si votre processus de vente passe par un devis, une commande personnalisée ou une visite en showroom, ce site est fait pour vous.',
    targets: ['Showrooms Meubles', 'Fabricants', 'Grossistes', 'Marques Cosmétiques', 'Fournisseurs B2B', 'Décoration Intérieure', 'Bijouteries', 'Librairies', 'Matériaux Construction', 'Import/Export'],
  },
  benefits: {
    title: 'Un catalogue en ligne peut-il augmenter vos ventes ?',
    items: [
      'Visibilité permanente de toute votre gamme — vos produits sont accessibles 24h/24 sans mobiliser votre équipe commerciale',
      'Catalogue illimité sans surcoût — ajoutez autant de produits et catégories que vous le souhaitez depuis votre back-office',
      'Qualifiez vos prospects avant le contact — les clients qui vous appellent ont déjà vu votre catalogue et sont prêts à commander',
      'Référencement SEO produits — apparaissez sur Google quand vos clients cherchent vos produits en Algérie',
      'Gestion des catégories intuitive — organisez votre offre pour une navigation fluide et une expérience d\'achat agréable',
      'Responsive et rapide — consultable depuis les showrooms partenaires, en déplacement ou depuis n\'importe quel téléphone',
    ],
  },
  cards: [
    {
      name: 'Catalogue Digital Pro',
      price: '69 000',
      unit: 'DA',
      badge: 'Domaine + Hébergement offerts',
      highlighted: false,
      ctaLabel: 'Créer mon Catalogue Digital',
      features: [
        { text: 'Nombre de pages illimité', included: true },
        { text: 'Nombre de menus illimité', included: true },
        { text: 'Nombre de produits illimité', included: true },
        { text: 'Thème unique et personnalisé à votre marque', included: true },
        { text: 'Design responsive — optimisé mobile et desktop', included: true },
        { text: 'Formulaire de contact et demande de devis', included: true },
        { text: 'Back-office administration (gestion autonome)', included: true },
        { text: 'Gestion des catégories de produits', included: true },
        { text: 'Fiches produits avec photos et descriptions', included: true },
        { text: 'SEO On-Page produits et catégories', included: true },
        { text: 'Hébergement NVMe 1 an offert', included: true },
        { text: 'Nom de domaine offert', included: true },
        { text: 'Système de blog et actualités', included: false },
        { text: 'Espace membre / Connexion client', included: false },
        { text: 'Panier d\'achat en ligne', included: false },
        { text: 'Paiement en ligne (CIB / Dahabia)', included: false },
      ],
    },
  ],
}

export default function CataloguePage() {
  return (
    <main>
      <Cursor />
      <Navbar />
      <PageHero
        label="Site Web · Catalogue"
        title="Catalogue Digital"
        titleEm="Pro"
        sub="Exposez l'intégralité de vos collections en ligne. Pages, produits et catégories illimités — avec un back-office d'administration que vous gérez en toute autonomie."
        img="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=85&auto=format&fit=crop"
        imgAlt="Site catalogue digital Algérie"
      />
      <ServiceDetail {...data} />
      <CtaSection />
      <Footer />
    </main>
  )
}
