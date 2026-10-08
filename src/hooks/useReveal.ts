import { useEffect, useRef } from 'react'

/** Adds .is-in to .reveal / .line-mask children when the container scrolls into view */
export function useRevealGroup<T extends HTMLElement>(stagger = 120) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll<HTMLElement>('.reveal, .line-mask')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const t = e.target as HTMLElement
          const idx = Number(t.dataset.idx || 0)
          t.style.transitionDelay = `${idx * stagger}ms`
          t.classList.add('is-in')
          io.unobserve(t)
        })
      },
      { threshold: 0.15 },
    )
    targets.forEach((t) => io.observe(t))
    return () => io.disconnect()
  }, [stagger])

  return ref
}
