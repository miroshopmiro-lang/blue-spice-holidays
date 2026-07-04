import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useCanHover, useReducedMotion } from '../hooks/useMediaQuery'

// Magnetic hover wrapper. Desktop + fine-pointer only; no-op on touch / reduced-motion.
// Uses motion values + spring (compositor transforms) - never triggers React re-renders.
export function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const canHover = useCanHover()
  const reduced = useReducedMotion()
  const enabled = canHover && !reduced

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 15, mass: 0.2 })
  const sy = useSpring(y, { stiffness: 180, damping: 15, mass: 0.2 })

  function handleMove(e) {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  if (!enabled) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}
