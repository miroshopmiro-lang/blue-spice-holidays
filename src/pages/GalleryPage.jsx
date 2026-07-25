import { useEffect, useState } from 'react';

// Drop all new tour photos and videos here in a single array.
// Photo example: { id: 'item1', type: 'photo', title: 'Tour Photo', src: '/gallery/photo.jpg', alt: 'Tour Photo' }
// Video example: { id: 'item2', type: 'video', title: 'Tour Video', src: '/gallery/video.mp4', poster: '/gallery/poster.jpg' }
const GALLERY_ITEMS = [];

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    document.title = "Tour Gallery · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Photos and videos from Blue Spice Holidays tours across India, Nepal, Bhutan, and international destinations.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Hero Banner */}
      <section className="relative bg-brand-ink text-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Tour Gallery
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Moments from <span className="accent-serif text-brand-accent">Our Journeys</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Photos and videos from our curated tours across India and around the globe.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex items-center justify-between border-b border-brand-surface-cool pb-4 mb-8">
          <h2 className="serif-font text-2xl font-bold text-slate-900">Media Gallery</h2>
          <span className="text-xs font-mono font-semibold text-slate-500">{GALLERY_ITEMS.length} Items</span>
        </div>

        {GALLERY_ITEMS.length === 0 ? (
          <div className="text-center py-20 px-4 bg-white rounded-premium border border-slate-200/80 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-400 mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </div>
            <p className="text-sm font-medium text-slate-600">Photos and videos will be displayed here soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {GALLERY_ITEMS.map((item) => (
              item.type === 'video' ? (
                /* Unified Video Card */
                <div key={item.id} className="rounded-premium overflow-hidden border border-slate-200 bg-white shadow-soft group flex flex-col justify-between">
                  <div className="relative aspect-video bg-black">
                    <video
                      poster={item.poster}
                      controls
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover"
                    >
                      <source src={item.src} type={item.mimeType || "video/mp4"} />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {item.title && (
                    <div className="p-3 bg-white">
                      <h3 className="text-xs font-semibold text-brand-ink line-clamp-2">{item.title}</h3>
                    </div>
                  )}
                </div>
              ) : (
                /* Unified Photo Card */
                <div
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className="group relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-premium border border-slate-200/80 bg-slate-900 shadow-soft cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  data-umami-event="Gallery Photo Click"
                  data-umami-event-photo={item.id}
                >
                  <img
                    src={item.src}
                    alt={item.alt || item.title || 'Tour Photo'}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {item.title && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                      <p className="text-xs font-semibold text-white line-clamp-2">
                        {item.title}
                      </p>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
        )}

      </section>

      {/* Photo Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 select-none backdrop-blur-md animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full z-50"
            onClick={() => setActivePhoto(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt || activePhoto.title || 'Tour Photo'}
              className="max-h-[75vh] max-w-[90vw] object-contain shadow-2xl rounded-lg border border-white/10"
            />
            {activePhoto.title && (
              <div className="mt-4 text-center">
                <p className="text-base font-semibold text-white">{activePhoto.title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
