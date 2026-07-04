import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Image that drifts vertically within its frame as the card scrolls past.
// Image is oversized (h-[120%]) so the drift never reveals an edge.
// On mobile, the scroll animation is disabled to prevent GPU thrashing and jitter.
export default function ParallaxImage({ src, alt, width, height, className = '' }) {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({ 
    target: isMobile ? null : ref, 
    offset: ['start end', 'end start'] 
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        style={isMobile ? {} : { y }}
        className={`absolute inset-x-0 top-[-10%] h-[120%] w-full object-cover will-change-transform motion-reduce:!transform-none ${className}`}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />
    </div>
  )
}

