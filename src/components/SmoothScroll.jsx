import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenisRef.current = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])
  return children
}
