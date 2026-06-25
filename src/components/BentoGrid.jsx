import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const tiles = [
  { id: 1, src: '/images/gallery-1.webp', alt: 'Sailing along high cliffs in a beautiful bay', position: 'bottom' },
  { id: 3, src: '/images/gallery-3.webp', alt: 'Tranquil sunset over scenic rivers and valleys' },
  { id: 4, src: '/images/gallery-4.webp', alt: 'Luxury retreat nestled in lush green hills', position: 'center 65%' },
  { id: 7, src: '/images/gallery-7.webp', alt: 'Stunning overwater villas above crystal clear waters', position: 'top' },
  { id: 'video-placeholder', src: '', alt: 'Video Highlight', isEmpty: true }
]

export default function BentoGrid() {
  return (
    <section className="section-pad bg-surface">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink">
          Moments We’ve <span className="accent-serif text-gradient-blue">Crafted</span>
        </h2>
        <div className="mt-8 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Link
              key={t.id}
              to="/gallery"
              className={`group relative block overflow-hidden rounded-card ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <motion.div
                whileHover={{ scale: 0.99 }}
                className="h-full w-full"
              >
                {!t.isEmpty ? (
                  <>
                    <img
                      src={t.src}
                      alt={t.alt}
                      width={800}
                      height={600}
                      style={t.position ? { objectPosition: t.position } : undefined}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-night shadow-lg transition-transform duration-300 hover:scale-105">
                        View Gallery
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-night via-night/95 to-blue-primary/40 text-white p-6 transition-all duration-500 group-hover:from-night group-hover:to-blue-primary/60">
                    <svg className="w-12 h-12 text-blue-light/80 group-hover:scale-110 group-hover:text-blue-light transition-all duration-500 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                    <span className="text-sm font-semibold tracking-wider uppercase text-white/90">Video Highlights</span>
                    <span className="text-xs text-blue-light/70 accent-serif mt-1">Coming Soon</span>
                  </div>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
