import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_ITEMS = [
  { id: 'gallery_1', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.56.26 (1).jpeg', alt: 'Blue Spice Tour Moment 1' },
  { id: 'gallery_2', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.56.26.jpeg', alt: 'Blue Spice Tour Moment 2' },
  { id: 'gallery_3', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.56.27.jpeg', alt: 'Blue Spice Tour Moment 3' },
  { id: 'gallery_4', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.56.28.jpeg', alt: 'Blue Spice Tour Moment 4' },
  { id: 'gallery_5', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.56.29.jpeg', alt: 'Blue Spice Tour Moment 5' },
  { id: 'gallery_6', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.57.10 (1).jpeg', alt: 'Blue Spice Tour Moment 6' },
  { id: 'gallery_7', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.57.10.jpeg', alt: 'Blue Spice Tour Moment 7' },
  { id: 'gallery_8', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.57.11.jpeg', alt: 'Blue Spice Tour Moment 8' },
  { id: 'gallery_9', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.59.32.jpeg', alt: 'Blue Spice Tour Moment 9' },
  { id: 'gallery_10', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.59.33.jpeg', alt: 'Blue Spice Tour Moment 10' },
  { id: 'gallery_11', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.59.34.jpeg', alt: 'Blue Spice Tour Moment 11' },
  { id: 'gallery_12', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.59.3b4.jpeg', alt: 'Blue Spice Tour Moment 12' },
  { id: 'gallery_13', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 12.591.32.jpeg', alt: 'Blue Spice Tour Moment 13' },
  { id: 'gallery_14', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13.00.00.jpeg', alt: 'Blue Spice Tour Moment 14' },
  { id: 'gallery_15', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13.01.01.jpeg', alt: 'Blue Spice Tour Moment 15' },
  { id: 'gallery_16', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13.04.01.jpeg', alt: 'Blue Spice Tour Moment 16' },
  { id: 'gallery_17', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13.05.05.jpeg', alt: 'Blue Spice Tour Moment 17' },
  { id: 'gallery_18', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13.05.06.jpeg', alt: 'Blue Spice Tour Moment 18' },
  { id: 'gallery_19', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13.055.05.jpeg', alt: 'Blue Spice Tour Moment 19' },
  { id: 'gallery_20', type: 'photo', src: '/gallery/WhatsApp Image 2026-07-28 at 13das.07.29.jpeg', alt: 'Blue Spice Tour Moment 20' },
  { id: 'gallery_21', type: 'photo', src: '/gallery/WhatsApp Image 2026-0dw7-28 at 13.05.06.jpeg', alt: 'Blue Spice Tour Moment 21' },
  { id: 'gallery_22', type: 'video', src: '/gallery/WhatsApp Video 2026-07-28 at 13.03.33.mp4', alt: 'Blue Spice Tour Highlights Video' },
  { id: 'gallery_23', type: 'video', src: '/gallery/WhatsApp Video 2026-07-28 at 15.20.41.mp4', alt: 'Blue Spice Tour Video' },
  { id: 'gallery_24', type: 'video', src: '/gallery/WhatsApp Video 2026-07-28 at 15.21.48.mp4', alt: 'Blue Spice Tour Video' },
  { id: 'gallery_25', type: 'video', src: '/gallery/WhatsApp Video 2026-07-28 at 15.23.13.mp4', alt: 'Blue Spice Tour Video' },
  { id: 'ladies_vid_1', type: 'video', src: '/images/ladies-only-tour/kerala-ladies-tour.mp4', alt: 'Kerala Ladies Only Tour Video' },
  { id: 'ladies_vid_2', type: 'video', src: '/images/ladies-only-tour/thailand-ladies-tour.mp4', alt: 'Thailand Ladies Only Tour Video' },
  { id: 'ladies_vid_3', type: 'video', src: '/Ladies only tour/WhatsApp Video 2026-07-19 at 11.12.15.mp4', alt: 'Ladies Only Tour Video 1' },
  { id: 'ladies_vid_4', type: 'video', src: '/Ladies only tour/WhatsApp Video 2026-07-19 at 11.21.13.mp4', alt: 'Ladies Only Tour Video 2' },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    document.title = "Tour Gallery · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Photos and videos from Blue Spice Holidays tours across India and international destinations.");
    }
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const activeItem = selectedIndex !== null ? GALLERY_ITEMS[selectedIndex] : null;

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Hero Banner */}
      <section className="relative bg-brand-ink text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30 font-mono">
            Moments &amp; Memories
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Our Tour <span className="accent-serif text-brand-accent">Gallery</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Real snapshots and unscripted moments captured on tour with our travelers.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-brand-surface-cool pb-4 mb-8">
          <h2 className="serif-font text-2xl font-bold text-slate-900">All Moments</h2>
          <span className="text-xs font-mono font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
            {GALLERY_ITEMS.length} Items
          </span>
        </div>

        {/* Modern Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-soft group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              {item.type === 'video' ? (
                <div className="relative w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M14 10l6-6M9 21H3v-6M10 14l-6 6" />
                      </svg>
                      View Photo
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-8 backdrop-blur-md select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Bar */}
            <div className="w-full max-w-6xl flex items-center justify-between z-50 text-white/80">
              <span className="text-xs font-mono tracking-widest uppercase">
                {selectedIndex + 1} / {GALLERY_ITEMS.length}
              </span>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-105"
                aria-label="Close modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Media Content */}
            <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4" onClick={(e) => e.stopPropagation()}>
              {activeItem.type === 'video' ? (
                <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <video
                    src={activeItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <motion.img
                  key={activeItem.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25 }}
                  src={activeItem.src}
                  alt={activeItem.alt}
                  className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
                />
              )}

              {/* Prev / Next Navigation */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3.5 bg-white/10 hover:bg-white/25 text-white rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 bg-white/10 hover:bg-white/25 text-white rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Bottom Caption / Controls Note */}
            <div className="text-center z-50 text-white/50 text-xs font-mono">
              Use <span className="text-white font-bold">←</span> / <span className="text-white font-bold">→</span> arrow keys to navigate · <span className="text-white font-bold">ESC</span> to exit
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
