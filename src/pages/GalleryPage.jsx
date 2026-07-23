import { useEffect, useState } from 'react';

// Blue Spice hasn't sent the tour gallery photos/videos yet. Drop new entries
// into these two arrays when they arrive — no other code changes needed.
const PHOTOS = [];

const VIDEOS = [];

export default function GalleryPage() {
  const [tab, setTab] = useState('photos');
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    document.title = "Tour Gallery: Photos & Videos · Blue Spice Holidays";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Photos and videos from Blue Spice Holidays tours across India and international destinations.");
    }
  }, []);

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Tour Gallery
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Moments from <span className="accent-serif text-brand-accent">Our Journeys</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Photos and videos from tours we've curated across India and abroad.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center gap-2 mb-12">
          <button
            onClick={() => setTab('photos')}
            className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
              tab === 'photos' ? 'bg-brand-ink text-white border-brand-ink' : 'bg-white text-brand-muted border-brand-surface-cool hover:border-brand-ink'
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setTab('videos')}
            className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors border ${
              tab === 'videos' ? 'bg-brand-ink text-white border-brand-ink' : 'bg-white text-brand-muted border-brand-surface-cool hover:border-brand-ink'
            }`}
          >
            Videos
          </button>
        </div>

        {tab === 'photos' ? (
          PHOTOS.length === 0 ? (
            <p className="text-center text-sm text-brand-muted py-12">
              Photos are being added soon. Check back shortly.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {PHOTOS.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setActivePhoto(photo)}
                  className="relative aspect-square overflow-hidden rounded-premium border border-brand-surface-cool bg-brand-ink group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  data-umami-event="Gallery Photo Click"
                  data-umami-event-photo={photo.id}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )
        ) : VIDEOS.length === 0 ? (
          <p className="text-center text-sm text-brand-muted py-12">
            Videos are being added soon. Check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEOS.map((video) => (
              <div key={video.id} className="rounded-premium overflow-hidden border border-brand-surface-cool shadow-soft bg-black">
                <video
                  poster={video.poster}
                  controls
                  playsInline
                  preload="none"
                  className="w-full aspect-video object-cover"
                >
                  <source src={video.src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <p className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-brand-muted">{video.title}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Photo Lightbox */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center select-none backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2.5 hover:bg-white/10 rounded-full z-50"
            onClick={() => setActivePhoto(null)}
            aria-label="Close lightbox"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={activePhoto.src}
            alt={activePhoto.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
