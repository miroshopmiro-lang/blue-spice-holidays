import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_ITEMS = [
  // Videos first
  {
    id: 'gallery_22',
    type: 'video',
    src: '/gallery/gallery-video-01.mp4',
    alt: 'Luxury Coach Escort Vietnam',
    caption: 'VIP Luxury Coach Escort Vietnam 🚌💫 — Premium Transfers & Group Comfort'
  },
  {
    id: 'gallery_23',
    type: 'video',
    src: '/gallery/gallery-video-02.mp4',
    alt: 'Blue Spice Tour Highlights Video 2',
    caption: 'Unscripted Tour Highlights & Scenic Landscapes 🎥✨'
  },
  {
    id: 'gallery_24',
    type: 'video',
    src: '/gallery/gallery-video-03.mp4',
    alt: 'International Group Tours with Luxury Facilities',
    caption: 'International Group Tours with 5-Star Luxury Facilities ✈️🌟 — Guided Escorts & VIP Stays'
  },
  {
    id: 'gallery_25',
    type: 'video',
    src: '/gallery/gallery-video-04.mp4',
    alt: 'Blue Spice Tour Highlights Video 4',
    caption: 'Curated Heritage & Island Expeditions 🏝️ VIP Group Escort'
  },
  {
    id: 'ladies_vid_1',
    type: 'video',
    src: '/images/ladies-only-tour/kerala-ladies-tour.mp4',
    alt: 'Kerala Ladies Only Tour Video',
    caption: 'Kerala Ladies Only Tour 🌿🌸 — Houseboat Cruise & Backwater Serenity'
  },
  {
    id: 'ladies_vid_2',
    type: 'video',
    src: '/images/ladies-only-tour/thailand-ladies-tour.mp4',
    alt: 'Thailand Ladies Only Tour Video',
    caption: 'Thailand Ladies Only Getaway 🏝️✨ — Tropical Island Escapes & Cultural Fun'
  },

  // Photos
  {
    id: 'gallery_1',
    type: 'photo',
    src: '/gallery/gallery-photo-01.jpeg',
    alt: 'Blue Spice Tour Moment 1',
    caption: 'Unforgettable Journey Highlights 📸✨ — Happy Travelers with Blue Spice Holidays'
  },
  {
    id: 'gallery_2',
    type: 'photo',
    src: '/gallery/gallery-photo-02.jpeg',
    alt: 'Kashmir Tour Guest Feedback 😍✈️',
    caption: 'Kashmir Tour Guest Feedback 😍✈️ — Unforgettable Snow & Paradise Journey'
  },
  {
    id: 'gallery_3',
    type: 'photo',
    src: '/gallery/gallery-photo-03.jpeg',
    alt: 'Yesha Jain Kerala Tour Feedback',
    caption: "Yesha Jain's Kerala Tour Review 🌿✨ — Bespoke Backwater & Munnar Experience"
  },
  {
    id: 'gallery_4',
    type: 'photo',
    src: '/gallery/gallery-photo-04.jpeg',
    alt: 'Blue Spice Tour Moment 4',
    caption: 'Scenic Destination Exploration 🌄 — Premium Private Sightseeing'
  },
  {
    id: 'gallery_5',
    type: 'photo',
    src: '/gallery/gallery-photo-05.jpeg',
    alt: 'Blue Spice Tour Moment 5',
    caption: 'Luxury Heritage Stays 🏰 — Handpicked Comfort & Hospitality'
  },
  {
    id: 'gallery_6',
    type: 'photo',
    src: '/gallery/gallery-photo-06.jpeg',
    alt: 'Amritsar & Himachal Ladies Tour',
    caption: 'Amritsar & Himachal Ladies Tour 🏔️🌸 — Exclusive Women-Only Group Departure'
  },
  {
    id: 'gallery_7',
    type: 'photo',
    src: '/gallery/gallery-photo-07.jpeg',
    alt: 'Blue Spice Tour Moment 7',
    caption: 'Coastal Island Getaway 🏖️ — Sun, Sand & Crystal Waters'
  },
  {
    id: 'gallery_8',
    type: 'photo',
    src: '/gallery/gallery-photo-08.jpeg',
    alt: 'Blue Spice Tour Moment 8',
    caption: 'Memorable Group Outings 🚌 — Seamless Multi-City Coordination'
  },
  {
    id: 'gallery_9',
    type: 'photo',
    src: '/gallery/gallery-photo-09.jpeg',
    alt: 'Blue Spice Tour Moment 9',
    caption: 'Authentic Local Culture & Cuisine 🍲 — Curated Culinary Stops'
  },
  {
    id: 'gallery_10',
    type: 'photo',
    src: '/gallery/gallery-photo-10.jpeg',
    alt: 'Blue Spice Tour Moment 10',
    caption: 'VIP Temple & Heritage Visits 🛕 — Peaceful Spiritual Experiences'
  },
  {
    id: 'gallery_11',
    type: 'photo',
    src: '/gallery/gallery-photo-11.jpeg',
    alt: 'Blue Spice Tour Moment 11',
    caption: 'Pristine Nature Trails 🌲 — Mountain Air & Cedar Forests'
  },
  {
    id: 'gallery_13',
    type: 'photo',
    src: '/gallery/gallery-photo-13.jpeg',
    alt: 'Blue Spice Tour Moment 13',
    caption: 'Group Family Vacation Memories 👨‍👩‍👧‍👦 — Tailored Comfort for All Ages'
  },
  {
    id: 'gallery_14',
    type: 'photo',
    src: '/gallery/gallery-photo-14.jpeg',
    alt: 'Guests Enjoy Kashmir Dal Lake Complimentary Boating',
    caption: 'Complimentary Dal Lake Boating in Kashmir 🚣‍♂️❄️ — Guests Enjoying Serene Waters'
  },
  {
    id: 'gallery_15',
    type: 'photo',
    src: '/gallery/gallery-photo-15.jpeg',
    alt: 'Golden Bridge Ba Na Hills Vietnam',
    caption: 'Golden Bridge at Ba Na Hills, Vietnam 🌁✨ — Iconic Hands of the Gods Walkway'
  },
  {
    id: 'gallery_16',
    type: 'photo',
    src: '/gallery/gallery-photo-16.jpeg',
    alt: 'Blue Spice Tour Moment 16',
    caption: 'Private Yacht & Boating Excursions 🛥️ — Unhurried Luxury Escapes'
  },
  {
    id: 'gallery_17',
    type: 'photo',
    src: '/gallery/gallery-photo-17.jpeg',
    alt: 'Blue Spice Tour Moment 17',
    caption: 'Desert Dune Safari Adventure 🐪 — Sunset Photography & Cultural Nights'
  },
  {
    id: 'gallery_18',
    type: 'photo',
    src: '/gallery/gallery-photo-18.jpeg',
    alt: 'Blue Spice Tour Moment 18',
    caption: 'Emerald Tea Plantations Walk 🍃 — Fresh Hill Station Retreats'
  },
  {
    id: 'gallery_19',
    type: 'photo',
    src: '/gallery/gallery-photo-19.jpeg',
    alt: 'Blue Spice Tour Moment 19',
    caption: 'Bespoke Honeymoon Escapes 💖 — Candlelit Dinners & Private Villa Stays'
  },
  {
    id: 'gallery_20',
    type: 'photo',
    src: '/gallery/gallery-photo-20.jpeg',
    alt: 'Luxury Coach Vietnam',
    caption: 'VIP Luxury Coach Vietnam 🚌💫 — Smooth Group Travel & Premium Chauffeurs'
  },
  {
    id: 'gallery_21',
    type: 'photo',
    src: '/gallery/gallery-photo-21.jpeg',
    alt: 'Blue Spice Tour Moment 21',
    caption: 'Celebrity & Diplomat Escort 🛡️ — Discreet Protocol & VIP Logistics'
  },
  {
    id: 'ladies_sanctuary',
    type: 'photo',
    src: '/images/ladies-only-tour/thailand-sanctuary-of-truth.webp',
    alt: 'Ladies Group Tour to Sanctuary of Truth Temple Thailand Jain Guest',
    caption: 'Ladies Group Tour to Sanctuary of Truth Temple, Thailand 🛕🌸 — Gourmet Jain Meal Facilities'
  },
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
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
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
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3.5 pt-8 opacity-90 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs font-semibold leading-snug truncate">{item.caption}</p>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 block"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3.5">
                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2">{item.caption}</p>
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
                  className="max-h-[75vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-white/10"
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

            {/* Lightbox Caption & Controls Note */}
            <div className="flex flex-col items-center gap-2 text-center z-50 max-w-2xl px-4">
              <p className="text-white text-sm font-semibold tracking-wide bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-md">
                {activeItem.caption}
              </p>
              <div className="text-white/50 text-[11px] font-mono">
                Use <span className="text-white font-bold">←</span> / <span className="text-white font-bold">→</span> arrow keys to navigate · <span className="text-white font-bold">ESC</span> to exit
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
