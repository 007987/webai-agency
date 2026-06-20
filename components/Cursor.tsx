'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fine pointers only — touch/coarse devices keep the native cursor.
    if (!window.matchMedia('(pointer: fine)').matches) return
    const ring = ringRef.current
    if (!ring) return

    const root = document.documentElement
    root.classList.add('has-custom-cursor')

    let mx = -100, my = -100, rx = -100, ry = -100
    let ready = false
    let rafId = 0
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (!ready) { ready = true; rx = mx; ry = my; ring.classList.add('ready') }
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      rx = lerp(rx, mx, 0.2); ry = lerp(ry, my, 0.2)
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const addHov = () => document.body.classList.add('cursor-hover')
    const remHov = () => document.body.classList.remove('cursor-hover')
    // Delegated hover detection — also covers elements mounted later (dropdowns).
    const onOver = (e: Event) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) addHov()
    }
    const onOut = (e: Event) => {
      if ((e.target as Element).closest('a, button, [data-hover]')) remHov()
    }
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
      root.classList.remove('has-custom-cursor')
      document.body.classList.remove('cursor-hover')
    }
  }, [])

  return (
    <div ref={ringRef} className="cur-ring" aria-hidden="true">
      <span className="cur-ring-inner" />
    </div>
  )
}
