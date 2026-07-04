// CSS-only infinite marquee (no JS per-frame work). Duplicated track for seamless loop.
// Pauses on hover and fully disables under prefers-reduced-motion.
export default function Marquee({ items, className = '', textClassName = 'text-navy/80' }) {
  return (
    <div className={`group relative flex overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((item, i) => (
          <span key={`a-${i}`} className={`font-sans text-xs md:text-sm font-semibold uppercase tracking-wider ${textClassName}`}>
            {item}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((item, i) => (
          <span key={`b-${i}`} className={`font-sans text-xs md:text-sm font-semibold uppercase tracking-wider ${textClassName}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
