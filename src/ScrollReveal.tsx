import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  /** Slight horizontal drift for alternating rhythm */
  variant?: 'up' | 'up-left' | 'up-right' | 'scale'
}

export function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  variant = 'up',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setOn(true)
        obs.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const style = { '--reveal-delay': `${delayMs}ms` } as CSSProperties

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${on ? 'reveal-visible' : ''} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
