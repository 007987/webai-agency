import Image from 'next/image'

interface ImageBannerProps {
  src: string
  alt: string
  height?: number
  label?: string
  /** kept for backward compatibility — no longer used for a dark scrim */
  overlay?: string
}

export default function ImageBanner({
  src,
  alt,
  height = 380,
  label,
}: ImageBannerProps) {
  return (
    <div
      className="img-banner relative w-full overflow-hidden"
      style={{
        height,
        borderTop: '1px solid rgba(17,16,9,0.06)',
        borderBottom: '1px solid rgba(17,16,9,0.06)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        sizes="100vw"
      />
      {/* Airy cream scrim — keeps the image bright while fusing edges into the light theme */}
      <div className="absolute inset-0" style={{
        background:
          'linear-gradient(to top, rgba(247,245,241,0.55) 0%, rgba(247,245,241,0.12) 30%, rgba(247,245,241,0) 55%, rgba(247,245,241,0.18) 100%)',
      }} />
      <div className="absolute inset-0" style={{
        background:
          'linear-gradient(105deg, rgba(247,245,241,0.4) 0%, transparent 30%, transparent 75%, rgba(247,245,241,0.35) 100%)',
      }} />
      {label && (
        <div className="absolute bottom-8 left-12 z-10">
          <span
            className="inline-block text-[9px] uppercase tracking-[0.3em] font-medium px-4 py-2.5 rounded-full"
            style={{
              color: '#111009',
              background: 'rgba(255,255,255,0.82)',
              border: '1px solid rgba(17,16,9,0.06)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 8px 30px rgba(17,16,9,0.08)',
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  )
}
