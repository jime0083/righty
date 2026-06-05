import type { ReactNode, CSSProperties } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type AnimationType = 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale' | 'blur'

interface ScrollRevealProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  className?: string
  style?: CSSProperties
}

export function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  style = {}
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const animationStyles: CSSProperties = {
    ...style,
    transitionProperty: 'opacity, transform, filter',
    transitionDuration: `${duration}s`,
    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    transitionDelay: `${delay}s`
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${animation} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={animationStyles}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
