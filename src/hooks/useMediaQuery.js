import { useEffect, useState } from 'react'

// Lightweight media-query hook. Used to gate desktop-only / motion-sensitive effects.
export function useMediaQuery(query) {
  // Resolve synchronously on the very first render rather than defaulting to
  // false and correcting in an effect. That default made every phone render
  // once as "desktop", so the hero mounted the 720p sources and fired a request
  // for each before the effect swapped it to the 480p set — and if the match
  // changed between first paint and the listener attaching, the wrong rendition
  // could stick (observed: desktop viewports serving the mobile 480p videos).
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia(query).matches
  })

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
