import { useState, useRef, useEffect } from 'react';
import { Section, SectionHeading, RevealGroup, Item } from './Section';
import useEnquiry from '../hooks/useEnquiry';

const TOURS = [
  {
    id: 'kerala',
    title: 'Wayanad & Kerala All Ladies Tour',
    eyebrow: 'Domestic Tour ex Calicut',
    duration: '4 Days / 3 Nights',
    description: 'Experience a warm welcome at Calicut station with fresh red roses. Discover mist-laden valleys, tranquil waterfalls, and the winding roads of Wayanad, designed exclusively for women’s groups seeking comfort, security, and connection.',
    highlights: [
      'Traditional welcome with red roses',
      'Dedicated woman-friendly accommodations',
      '24/7 on-ground support and guidance',
      'Private sightseeing transfers'
    ],
    destinationCode: 'Ladies Only: Wayanad & Kerala Tour',
    mediaType: 'video',
    videoMp4: '/images/ladies-only-tour/kerala-ladies-tour.mp4',
    videoWebm: '/images/ladies-only-tour/kerala-ladies-tour.webm',
    poster: '/images/ladies-only-tour/kerala-ladies-tour-poster.webp',
  },
  {
    id: 'thailand',
    title: 'Sanctuary of Truth Temple Tour',
    eyebrow: 'International Tour - Thailand',
    duration: 'Bespoke Curation',
    description: 'A special group tour to Pattaya’s iconic Sanctuary of Truth temple, tailored specifically for Jain guests. Enjoy absolute peace of mind with dedicated kitchen/catering support, pristine transfers, and curated cultural sightseeing.',
    highlights: [
      'Sanctuary of Truth temple entry',
      'Dedicated Jain catering arrangements',
      'Private group transfers & guides',
      'Tailor-made itineraries for women groups'
    ],
    destinationCode: 'Ladies Only: Thailand Sanctuary of Truth Tour',
    mediaType: 'interactive',
    videoMp4: '/images/ladies-only-tour/thailand-ladies-tour.mp4',
    videoWebm: '/images/ladies-only-tour/thailand-ladies-tour.webm',
    poster: '/images/ladies-only-tour/thailand-ladies-tour-poster.webp',
    images: [
      '/images/ladies-only-tour/thailand-ladies-tour-1.webp',
      '/images/ladies-only-tour/thailand-ladies-tour-2.webp',
    ],
  }
];

function CardVideoPlayer({ videoMp4, videoWebm, poster, title }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      // Pause website background music if it is playing
      window.dispatchEvent(new CustomEvent('pause-ambient-music'));

      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Video play failed:', err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div 
      className="relative w-full aspect-[4/3] bg-black overflow-hidden cursor-pointer group"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        muted={isMuted}
        loop
        className="w-full h-full object-cover"
        width={480}
        height={360}
      >
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay controls */}
      <div className="absolute inset-0 bg-ink/10 transition-colors duration-300 group-hover:bg-ink/30" />

      {/* Play/Pause Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className={`h-14 w-14 rounded-full bg-white/90 text-navy flex items-center justify-center shadow-md transition-transform duration-300 ${
            isPlaying ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          } group-hover:opacity-100 group-hover:scale-105`}
        >
          {isPlaying ? (
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Mute toggle button */}
      {isPlaying && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors duration-200 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          {isMuted ? (
            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          ) : (
            <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
          )}
        </button>
      )}

      {/* Screen Reader Video Status */}
      <span className="sr-only">Video player for {title}. Click to play or pause.</span>
    </div>
  );
}

function InteractiveGallery({ videoMp4, videoWebm, poster, images, title }) {
  const [activeMedia, setActiveMedia] = useState(0); // 0 = video, 1 = image1, 2 = image2

  return (
    <div className="relative w-full aspect-[4/3] bg-black overflow-hidden group">
      {/* Media Displays */}
      <div className="w-full h-full">
        {activeMedia === 0 ? (
          <CardVideoPlayer
            videoMp4={videoMp4}
            videoWebm={videoWebm}
            poster={poster}
            title={title}
          />
        ) : (
          <img
            src={images[activeMedia - 1]}
            alt={`${title} gallery photo ${activeMedia}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            width={480}
            height={360}
            loading="lazy"
          />
        )}
      </div>

      {/* Gallery Selector Controls */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full z-20 backdrop-blur-sm border border-white/10">
        <button
          type="button"
          onClick={() => setActiveMedia(0)}
          aria-label="View tour video"
          className={`flex items-center justify-center rounded-full transition-all duration-200 ${
            activeMedia === 0 
              ? 'bg-gold text-navy px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider' 
              : 'h-2.5 w-2.5 bg-white/60 hover:bg-white'
          }`}
        >
          {activeMedia === 0 ? 'Video' : ''}
        </button>
        {images.map((_, idx) => {
          const index = idx + 1;
          const isActive = activeMedia === index;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveMedia(index)}
              aria-label={`View tour photo ${index}`}
              className={`flex items-center justify-center rounded-full transition-all duration-200 ${
                isActive 
                  ? 'bg-gold text-navy px-3.5 py-0.5 text-[10px] font-bold uppercase tracking-wider' 
                  : 'h-2.5 w-2.5 bg-white/60 hover:bg-white'
              }`}
            >
              {isActive ? `Photo ${index}` : ''}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TourCard({ tour, index }) {
  const enquire = useEnquiry();
  const handleEnquire = (e) => {
    e.preventDefault();
    enquire(tour.destinationCode);
  };

  return (
    <Item className="flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft card-interactive transform-gpu translate-z-0 backface-hidden will-change-transform">
      {/* Media container */}
      <div className="relative">
        {tour.mediaType === 'video' ? (
          <CardVideoPlayer
            videoMp4={tour.videoMp4}
            videoWebm={tour.videoWebm}
            poster={tour.poster}
            title={tour.title}
          />
        ) : (
          <InteractiveGallery
            videoMp4={tour.videoMp4}
            videoWebm={tour.videoWebm}
            poster={tour.poster}
            images={tour.images}
            title={tour.title}
          />
        )}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-royal shadow-sm z-10">
          {tour.duration}
        </span>
      </div>

      {/* Info container */}
      <div className="flex flex-1 flex-col p-6 bg-white transform-gpu translate-z-0 backface-hidden will-change-transform">
        <span className="font-mono text-[10px] uppercase tracking-widemono text-royal block">{tour.eyebrow}</span>
        <h3 className="font-display text-xl font-bold leading-snug text-ink mt-2">{tour.title}</h3>
        <p className="mt-3 text-xs leading-relaxed text-body">{tour.description}</p>

        {/* Highlights bullets */}
        <ul className="mt-4 space-y-2 border-t border-hairline pt-4 flex-grow">
          {tour.highlights.map((highlight, hIdx) => (
            <li key={hIdx} className="flex items-start gap-2 text-[11px] text-body">
              <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between">
          <button
            type="button"
            onClick={handleEnquire}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-royal transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm pb-1 border-b border-navy/20 hover:border-royal"
          >
            Enquire Now
            <svg className="h-3.5 w-3.5 transition-transform duration-300 hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </Item>
  );
}

export default function LadiesOnlyTours() {
  return (
    <Section id="ladies-tours" className="bg-canvas border-t border-hairline">
      <SectionHeading
        eyebrow="04 - LADIES ONLY TOURS"
        title="Empowered Journeys, Perfect Curation"
        lead="Handcrafted itineraries for all-women travel groups. Combining absolute security, premium hotels, and customized local coordination with flexible dining options (including dedicated Jain catering)."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {TOURS.map((tour, index) => (
          <TourCard key={tour.id} tour={tour} index={index} />
        ))}
      </RevealGroup>
    </Section>
  );
}
