import React, { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange'
  size?: 'sm' | 'md' | 'lg'
  width?: string | number
  height?: string | number
  customSize?: boolean
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 },
} as const

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96',
} as const

const glowCardStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
    );
    filter: brightness(2);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)), transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) {
      return
    }

    const bounds = cardRef.current.getBoundingClientRect()
    const centerX = bounds.width / 2
    const centerY = bounds.height / 2

    cardRef.current.style.setProperty('--x', centerX.toFixed(2))
    cardRef.current.style.setProperty('--xp', '0.5')
    cardRef.current.style.setProperty('--y', centerY.toFixed(2))
    cardRef.current.style.setProperty('--yp', '0.5')
  }, [])

  const syncPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) {
      return
    }

    const bounds = cardRef.current.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top

    cardRef.current.style.setProperty('--x', x.toFixed(2))
    cardRef.current.style.setProperty(
      '--xp',
      (event.clientX / window.innerWidth).toFixed(2),
    )
    cardRef.current.style.setProperty('--y', y.toFixed(2))
    cardRef.current.style.setProperty(
      '--yp',
      (event.clientY / window.innerHeight).toFixed(2),
    )
  }

  const resetPointer = () => {
    if (!cardRef.current) {
      return
    }

    const bounds = cardRef.current.getBoundingClientRect()
    const centerX = bounds.width / 2
    const centerY = bounds.height / 2

    cardRef.current.style.setProperty('--x', centerX.toFixed(2))
    cardRef.current.style.setProperty('--xp', '0.5')
    cardRef.current.style.setProperty('--y', centerY.toFixed(2))
    cardRef.current.style.setProperty('--yp', '0.5')
  }

  const { base, spread } = glowColorMap[glowColor]

  const getSizeClasses = () => {
    if (customSize) {
      return ''
    }

    return sizeMap[size]
  }

  const getInlineStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      ['--base' as never]: `${base}`,
      ['--spread' as never]: `${spread}`,
      ['--radius' as never]: '14',
      ['--border' as never]: '3',
      ['--backdrop' as never]: 'hsl(0 0% 60% / 0.12)',
      ['--backup-border' as never]: 'var(--backdrop)',
      ['--size' as never]: '200',
      ['--outer' as never]: '1',
      ['--border-size' as never]: 'calc(var(--border, 2) * 1px)',
      ['--spotlight-size' as never]: 'calc(var(--size, 150) * 1px)',
      ['--hue' as never]:
        'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize:
        'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    }

    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width
    }

    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height
    }

    return baseStyles
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: glowCardStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        onPointerMove={syncPointer}
        onPointerLeave={resetPointer}
        className={`${getSizeClasses()} ${!customSize ? 'aspect-[3/4]' : ''} relative grid grid-rows-[1fr_auto] gap-4 rounded-2xl p-4 shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px] ${className}`}
      >
        <div data-glow />
        {children}
      </div>
    </>
  )
}

export { GlowCard }
