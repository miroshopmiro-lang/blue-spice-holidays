import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Captions are permanently locked to specific item objects by ID & file src.
// Adding, removing, or reordering items in this array will NEVER shift these captions.
const GALLERY_ITEMS = [
  // Videos first (Items 1 to 6)
  { id: 'gallery_22', type: 'video', src: '/gallery/gallery-video-01.mp4', alt: 'Blue Spice Tour Video 1' },
  { id: 'gallery_23', type: 'video', src: '/gallery/gallery-video-02.mp4', alt: 'Kashmir Tour Guest Review', caption: 'Kashmir Tour Feedback 😍✈️ · Heartfelt Guest Appreciation & Unforgettable Memories' },
  { id: 'gallery_24', type: 'video', src: '/gallery/gallery-video-03.mp4', alt: 'Yesha Jain Kerala Tour Feedback', caption: "Yesha Jain's Kerala Tour Review 🌴✨ · Personalised Houseboat & Heritage Experience" },
  { id: 'gallery_25', type: 'video', src: '/gallery/gallery-video-04.mp4', alt: 'Blue Spice Tour Video 4' },
  { id: 'ladies_vid_1', type: 'video', src: '/images/ladies-only-tour/kerala-ladies-tour.mp4', alt: 'Kerala Ladies Only Tour Video' },
  { id: 'ladies_vid_2', type: 'video', src: '/images/ladies-only-tour/thailand-ladies-tour.mp4', alt: 'Amritsar & Himachal Ladies Tour', caption: 'Amritsar & Himachal Ladies Only Tour 🏔️ Sacred Golden Temple & Cedar Valleys' },

  // Photos (Items 7 to 27)
  { id: 'gallery_1', type: 'photo', src: '/gallery/gallery-photo-01.jpeg', alt: 'Blue Spice Tour Moment 1' },
  { id: 'gallery_2', type: 'photo', src: '/gallery/gallery-photo-02.jpeg', alt: 'Blue Spice Tour Moment 2' },
  { id: 'gallery_3', type: 'photo', src: '/gallery/gallery-photo-03.jpeg', alt: 'Blue Spice Tour Moment 3' },
  { id: 'gallery_4', type: 'photo', src: '/gallery/gallery-photo-04.jpeg', alt: 'Blue Spice Tour Moment 4' },
  { id: 'gallery_5', type: 'photo', src: '/gallery/gallery-photo-05.jpeg', alt: 'Blue Spice Tour Moment 5' },
  { id: 'gallery_6', type: 'photo', src: '/gallery/gallery-photo-06.jpeg', alt: 'Blue Spice Tour Moment 6' },
  { id: 'gallery_7', type: 'photo', src: '/gallery/gallery-photo-07.jpeg', alt: 'Blue Spice Tour Moment 7' },
  { id: 'gallery_8', type: 'photo', src: '/gallery/gallery-photo-08.jpeg', alt: 'Guests enjoy Kashmir Dal Lake boating', caption: 'Guests Enjoying Complimentary Shikara Boating on Dal Lake, Kashmir 🚣‍♂️✨' },
  { id: 'gallery_9', type: 'photo', src: '/gallery/gallery-photo-09.jpeg', alt: 'Golden Bridge Ba Na Hills Vietnam', caption: 'The Iconic Golden Bridge at Ba Na Hills, Vietnam 🌁 Giant Stone Hands & Cloudland Vistas' },
  { id: 'gallery_10', type: 'photo', src: '/gallery/gallery-photo-10.jpeg', alt: 'Blue Spice Tour Moment 10' },
  { id: 'gallery_11', type: 'photo', src: '/gallery/gallery-photo-11.jpeg', alt: 'Blue Spice Tour Moment 11' },
  { id: 'gallery_13', type: 'photo', src: '/gallery/gallery-photo-13.jpeg', alt: 'Blue Spice Tour Moment 13' },
  { id: 'gallery_14', type: 'photo', src: '/gallery/gallery-photo-14.jpeg', alt: 'Blue Spice Tour Moment 14' },
  { id: 'gallery_15', type: 'photo', src: '/gallery/gallery-photo-15.jpeg', alt: 'Blue Spice Tour Moment 15' },
  { id: 'gallery_16', type: 'photo', src: '/gallery/gallery-photo-16.jpeg', alt: 'Blue Spice Tour Moment 16' },
  { id: 'gallery_17', type: 'photo', src: '/gallery/gallery-photo-17.jpeg', alt: 'Luxury Coach Expeditions in Vietnam', caption: 'Luxury Coach Expeditions in Vietnam 🚌 Premium Comfort & Seamless Group Transfers' },
  { id: 'gallery_18', type: 'photo', src: '/gallery/gallery-photo-18.jpeg', alt: 'Blue Spice Tour Moment 18' },
  { id: 'gallery_19', type: 'photo', src: '/gallery/gallery-photo-19.jpeg', alt: 'International Group Tours with Luxury Facilities', caption: 'International Group Tours with Luxury Facilities ✈️ VIP Ground Handling & 5-Star Stays' },
  { id: 'gallery_20', type: 'photo', src: '/gallery/gallery-photo-20.jpeg', alt: 'Blue Spice Tour Moment 20' },
  { id: 'gallery_21', type: 'photo', src: '/gallery/gallery-photo-21.jpeg', alt: 'Blue Spice Tour Moment 21' },
  { id: 'ladies_sanctuary', type: 'photo', src: '/images/ladies-only-tour/thailand-sanctuary-of-truth.webp', alt: 'Ladies group tour to Sanctuary of Truth temple Thailand jain guest', caption: 'All-Ladies Sanctuary of Truth Temple Tour, Thailand 🛕 Dedicated Jain Catering & Custom Curations' },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all' | 'video' | 'photo'

  useEffect(() => {
    document.title = "Tour Gallery · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Photos and videos from Blue Spice Holidays tours across India and international destinations.");
    }
  }, []);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (filter === 'video') return item.type === 'video';
    if (filter === 'photo') return item.type === 'photo';
    return true;
  });

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

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
            Real snapshots and unscripted video highlights captured on tour with our travelers.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-surface-cool pb-4 mb-8 gap-4">
          <div>
            <h2 className="serif-font text-2xl font-bold text-slate-900">All Moments</h2>
            <p className="text-xs text-brand-muted mt-0.5">Tour videos featured at the top, followed by photo memories.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => { setFilter('all'); setSelectedIndex(null); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-brand-ink text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              All ({GALLERY_ITEMS.length})
            </button>
            <button
              type="button"
              onClick={() => { setFilter('video'); setSelectedIndex(null); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                filter === 'video'
                  ? 'bg-brand-accent text-brand-ink shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              Videos ({GALLERY_ITEMS.filter(x => x.type === 'video').length})
            </button>
            <button
              type="button"
              onClick={() => { setFilter('photo'); setSelectedIndex(null); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'photo'
                  ? 'bg-brand-ink text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              Photos ({GALLERY_ITEMS.filter(x => x.type === 'photo').length})
            </button>
          </div>
        </div>

        {/* Row-based Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-soft group cursor-pointer aspect-[16/10]"
              onClick={() => setSelectedIndex(idx)}
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full bg-black flex items-center justify-center">
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
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-semibold uppercase px-2.5 py-1 rounded-full flex items-center gap-1 z-10">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    Video
                  </span>
                  {item.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3.5 pt-8 z-10">
                      <p className="text-white text-xs font-semibold leading-snug drop-shadow-md">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                    loading="lazy"
                  />
                  {item.caption ? (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3.5 pt-8 z-10">
                      <p className="text-white text-xs font-semibold leading-snug drop-shadow-md">
                        {item.caption}
                      </p>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15 3h6v6M14 10l6-6M9 21H3v-6M10 14l-6 6" />
                        </svg>
                        View Photo
                      </span>
                    </div>
                  )}
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
                {selectedIndex + 1} / {filteredItems.length}
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
                  setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
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
                  setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 bg-white/10 hover:bg-white/25 text-white rounded-full shadow-lg transition-all hover:scale-110 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Active Caption Banner */}
            {activeItem.caption && (
              <div className="z-50 mb-3 max-w-2xl px-5 py-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-medium text-xs sm:text-sm text-center shadow-2xl">
                {activeItem.caption}
              </div>
            )}

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
