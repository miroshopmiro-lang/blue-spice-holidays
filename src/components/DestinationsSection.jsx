import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Sparkle, ArrowUpRight, ArrowLeft, ArrowRight } from './Icons'
import { destinations, destinationCategories } from '../data/travelData'

export default function DestinationsSection({ onBook }) {
  const [tab, setTab] = useState(destinationCategories[0])
  const items = destinations.filter((d) => d.categories.includes(tab))
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  const safeIndex = Math.min(index, Math.max(items.length - 1, 0))
  const track = items.map((_, i) => items[(safeIndex + i) % items.length])

  const changeTab = (c) => { setTab(c); setIndex(0) }
  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  return (
    <section id="destinations" className="section-pad bg-surface scroll-mt-24">
      <div className="mx-auto max-w-container text-center">
        <span className="pill bg-white text-ink"><Sparkle className="w-4 h-4 text-sunset" /> Our Destinations</span>
        <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-ink">
          Curated Journeys For A Seamless &{' '}
          <span className="accent-serif text-gradient-blue">Memorable Adventure</span>
        </h2>
      </div>

      {/* tabs: horizontal scroll on mobile, centered on >= sm */}
      <div role="tablist" aria-label="Destination categories" className="mt-8 flex flex-nowrap justify-start gap-2 overflow-x-auto px-4 no-scrollbar sm:justify-center sm:flex-wrap">
        {destinationCategories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={tab === c}
            onClick={() => changeTab(c)}
            className={`pill shrink-0 ${tab === c ? 'bg-night text-white' : 'bg-white text-ink hover:bg-surface-cool'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* horizontal sliding track with Framer Motion layout morphing */}
      <div className="mx-auto mt-12 max-w-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex items-stretch gap-5 overflow-hidden"
          >
            {track.map((d, i) => {
              const isActive = i === 0
              return (
                <motion.div
                  key={d.id}
                  layout
                  transition={reduceMotion ? { duration: 0 } : { layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                  className="shrink-0"
                >
                  {isActive ? (
                    <motion.div layout className="flex w-72 flex-col items-center rounded-card bg-white p-7 text-center shadow-sm">
                      <div className="h-44 w-44 overflow-hidden rounded-full">
                        <img src={d.image} alt={d.name} width={400} height={400} loading="lazy" className="h-full w-full object-cover" />
                      </div>
                      <h3 className="mt-5">
                        <button
                          onClick={() => onBook?.(d.name)}
                          className="flex items-center gap-2 text-xl font-semibold text-ink hover:text-blue-primary transition-colors"
                        >
                          {d.name} <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </h3>
                      <p className="mt-2 text-sm text-ink-soft accent-serif">{d.tagline}</p>
                    </motion.div>
                  ) : (
                    <motion.div layout className="relative h-80 w-56 overflow-hidden rounded-card">
                      <img src={d.image} alt={d.name} width={400} height={480} loading="lazy" className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                        <h3 className="text-lg font-semibold">{d.name}</h3>
                        <p className="text-xs text-white/80 accent-serif">{d.tagline}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center gap-5">
          <button onClick={prev} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-white" aria-label="Previous"><ArrowLeft className="w-4 h-4" /></button>
          <div role="progressbar" aria-valuemin={1} aria-valuemax={Math.max(items.length, 1)} aria-valuenow={safeIndex + 1} aria-label="Destination slider progress" className="h-px flex-1 bg-ink/15">
            <div className="h-px bg-ink transition-all duration-500" style={{ width: `${((safeIndex + 1) / Math.max(items.length, 1)) * 100}%` }} />
          </div>
          <button onClick={next} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-ink hover:bg-ink hover:text-white" aria-label="Next"><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  )
}
