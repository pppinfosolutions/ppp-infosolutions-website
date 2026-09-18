import { useReveal } from '../hooks/useReveal'

/**
 * Wraps children and fades/slides them up once scrolled into view.
 * `delay` (ms) staggers groups of items for one orchestrated reveal.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
