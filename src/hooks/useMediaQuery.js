import { useEffect, useState } from 'react'

// Lightweight media-query hook. Used to gate desktop-only / motion-sensitive effects.
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

export function useReducedMotion() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

// True only for precise pointers (mouse) on wider screens.
export function useCanHover() {
  return useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 1024px)')
}
