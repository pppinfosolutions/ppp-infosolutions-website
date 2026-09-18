import { useEffect, useRef, useState } from 'react'

/**
 * Adds a "visible" flag once an element scrolls into view, so it can be
 * animated in. Respects prefers-reduced-motion by revealing immediately.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
