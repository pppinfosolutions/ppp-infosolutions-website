import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number counting up from 0 to `end` once visible.
 * `end` can include non-numeric characters (e.g. "360°") — only the
 * numeric portion is animated, the rest is preserved as a suffix/prefix.
 */
export function useCountUp(rawValue, { duration = 1200 } = {}) {
  const match = String(rawValue).match(/^(\D*)(\d+)(\D*)$/)
  const [ref, setRef] = useState(null)
  const [display, setDisplay] = useState(rawValue)
  const started = useRef(false)

  useEffect(() => {
    if (!match || !ref) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const [, prefix, numStr, suffix] = match
    const end = parseInt(numStr, 10)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * end)
            setDisplay(`${prefix}${current}${suffix}`)
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, match, duration])

  return [setRef, display]
}
