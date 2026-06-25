import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Play, ArrowLeft, ArrowRight, ArrowUpRight } from './Icons'
import { serviceBadges } from '../data/travelData'
import { testimonials } from '../data/testimonials'
import { destinations } from '../data/travelData'

const showcase = destinations.filter((d) => d.id !== 'taj-mahal').slice(0, 4)

export default function WhySection() {
  const review = testimonials[0]
  const [shot, setShot] = useState(0)
  const active = showcase[shot]
  const next = () => setShot((s) => (s + 1) % showcase.length)
  const prev = () => setShot((s) => (s - 1 + showcase.length) % showcase.length)

  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-container grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="pill bg-surface text-ink"><Star className="w-4 h-4 text-sunset" /> Why Blue Spice</span>
          <h2 className="mt-5 text-balance text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Every Detail Handled With{' '}
            <span className="accent-serif text-gradient-blue">Precision & Care</span>
          </h2>
          <p className="mt-4 text-ink-soft max-w-md">
            Personalized service, competitive pricing, and seamless planning - the reasons discerning travellers choose us for unforgettable experiences.
          </p>

          <div className="mt-8 rounded-card bg-surface p-6">
            <div className="flex items-center gap-1 text-sunset">
              <span className="sr-only">Rated 5 out of 5</span>
              {Array.from({ length: review.rating }).map((_, i) => <Star key={i} aria-hidden="true" />)}
              <span className="ml-2 text-sm font-semibold text-ink">5.0 Google Rating</span>
            </div>
            <p className="mt-3 text-ink-soft text-sm leading-relaxed">{review.text}</p>
            <div className="mt-4 flex items-center gap-3">
              {review.avatar
                ? <img src={review.avatar} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                : <span className="h-10 w-10 rounded-full bg-blue-primary" aria-hidden="true" />}
              <div>
                <p className="text-sm font-semibold text-ink">{review.name}</p>
                <div className="flex gap-2 mt-1">
                  <span className="pill bg-white text-ink text-xs py-1">Trip to {review.trip}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold text-ink mb-3">Our service includes</p>
            <div className="flex flex-wrap gap-2">
              {serviceBadges.map((b) => (
                <span key={b} className="pill bg-surface-cool text-ink text-xs">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: image slider card + video highlights card */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-card"
          >
            <img src={active.image} alt={active.name} width={1200} height={800} loading="lazy" className="h-80 w-full object-cover transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs text-white/70">Curated Experience</p>
              <p className="font-semibold">{active.name} / {active.categories[0]}</p>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={prev} className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink hover:bg-white" aria-label="Previous"><ArrowLeft className="w-4 h-4" /></button>
              <button onClick={next} className="grid h-9 w-9 place-items-center rounded-full bg-white/90 text-ink hover:bg-white" aria-label="Next"><ArrowRight className="w-4 h-4" /></button>
            </div>
          </motion.div>

          <div className="group relative overflow-hidden rounded-card bg-night">
            <video
              src="/images/highlight-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-56 w-full object-cover opacity-50"
            />
            <div className="absolute bottom-0 inset-x-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <div>
                <p className="text-xs text-white/60">Video Highlights</p>
                <p className="font-semibold">Journeys, in motion</p>
              </div>
              <Link to="/gallery" className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-colors">
                View All Documentation
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"><ArrowUpRight className="w-4 h-4" /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
