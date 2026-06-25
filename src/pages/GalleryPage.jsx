import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryData } from '../data/galleryData'
import { Close } from '../components/Icons'

export default function GalleryPage() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <main className="bg-white">
      <div className="section-pad bg-night text-white text-center">
        <div className="mx-auto max-w-container pt-12">
          <h1 className="text-balance text-4xl sm:text-5xl font-bold">The <span className="accent-serif text-gradient-blue">Gallery</span></h1>
          <p className="mx-auto mt-4 max-w-lg text-white/60">Select any image to expand it. A glimpse of the journeys we craft.</p>
        </div>
      </div>

      <section className="section-pad">
        <div className="mx-auto max-w-container columns-1 gap-4 md:columns-3 [&>*]:mb-4">
          {galleryData.map((img) => (
            <motion.button
              key={img.id}
              type="button"
              layoutId={`img-${img.id}`}
              onClick={() => setActive(img)}
              aria-label={`Expand image: ${img.alt}`}
              className="block w-full cursor-zoom-in overflow-hidden rounded-card break-inside-avoid"
            >
              <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" className="w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 [overscroll-behavior:contain]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button className="absolute right-6 top-6 text-white" aria-label="Close image" onClick={() => setActive(null)}><Close className="w-8 h-8" /></button>
            <motion.figure layoutId={`img-${active.id}`} className="max-w-4xl overflow-hidden rounded-card" onClick={(e) => e.stopPropagation()}>
              <img src={active.src} alt={active.alt} width={1200} height={800} className="max-h-[80vh] w-full object-contain" />
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
