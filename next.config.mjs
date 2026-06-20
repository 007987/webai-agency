/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100% statique — compatible Hostinger hébergement partagé
  // (génère un dossier `out/` contenant HTML/CSS/JS pur, à uploader en public_html/)
  output: 'export',

  // Le composant next/image en mode statique :
  // on désactive l'optimisation runtime (Hostinger partagé ne fait pas tourner Node)
  // → les images sont servies telles quelles depuis /public.
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  // Force un slash final pour la compatibilité Apache/Nginx Hostinger.
  // Évite les 404 sur /agence, /tarifs, /contact, etc.
  trailingSlash: true,
}

export default nextConfig
