'use client'
import Link from 'next/link'
import Image from 'next/image'

const NAV = [
  ['Services', '/services'],
  ['Tarifs',   '/tarifs'],
  ['Agence',   '/agence'],
  ['Contact',  '/contact'],
] as const

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-10 md:py-12"
      style={{ background: '#F2EFE8', borderTop: '1px solid rgba(17,16,9,0.08)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center no-underline shrink-0" aria-label="WEBAI — Retour à l'accueil">
          <Image
            src="/images/brand/webai-logo.png"
            alt="WEBAI Agency"
            width={701}
            height={435}
            style={{ height: 44, width: 'auto' }}
          />
        </Link>

        {/* Navigation secondaire */}
        <nav
          aria-label="Navigation pied de page"
          className="flex flex-wrap gap-5 md:gap-6"
        >
          {NAV.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="text-[10px] uppercase tracking-[0.2em] no-underline transition-colors duration-300"
              style={{ color: 'rgba(17,16,9,0.45)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#111009')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'rgba(17,16,9,0.45)')}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mention de copyright */}
        <p className="text-xs md:text-sm font-light text-gray-500 text-center md:text-right">
          © 2026{' '}
          <Link
            href="/"
            className="font-medium text-gray-500 hover:text-gray-900 hover:underline underline-offset-4 transition-colors duration-300"
          >
            WEBAI
          </Link>
          . Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
