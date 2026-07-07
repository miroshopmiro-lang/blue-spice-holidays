import { useEffect, useMemo, useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import Marquee from './Marquee';

const HERO_SLIDES = [
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    shortName: 'Taj Mahal',
    tagline: 'A Timeless Monument of Love',
    description: 'Marvel at the ethereal white marble glowing under the golden sunrise, capturing India’s rich architectural heritage.',
    video: '/images/taj-mahal.webm',
    poster: '/images/taj-mahal-poster.webp'
  },
  {
    id: 'rajasthan',
    name: 'Royal Rajasthan',
    shortName: 'Rajasthan',
    tagline: 'Heritage, Fortresses & The Blue City',
    description: 'Wander through the maze of blue-painted streets in Jodhpur, gaze at majestic hill fortresses, and immerse yourself in the vibrant colors of desert heritage.',
    video: '/images/rajasthan.webm',
    poster: '/images/rajasthan-poster.webp'
  },
  {
    id: 'goa-beach',
    name: 'Goa Beaches',
    shortName: 'Goa',
    tagline: 'Sun-Kissed Golden Shores',
    description: 'Bask in the serene coastal charm, sway with the palms, and feel the gentle waves along Goa’s pristine beaches.',
    video: '/images/goa-beach.webm',
    poster: '/images/goa-beach-poster.webp'
  },
  {
    id: 'munnar',
    name: 'Munnar Tea Estates',
    shortName: 'Munnar',
    tagline: 'Emerald Whispers of the Hills',
    description: 'Wander through rolling tea plantations, mist-laden valleys, and the gentle mountain breeze of the Western Ghats.',
    video: '/images/munnar.webm',
    poster: '/images/munnar-poster.webp'
  },
  {
    id: 'kerala-waterfalls',
    name: 'Kerala Waterfalls',
    shortName: 'Waterfalls',
    tagline: 'Cascades of Athirappilly',
    description: 'Witness the roaring grandeur of forest waterfalls crashing down into deep green glades, cocooned by tropical wilderness.',
    video: '/images/kerala-waterfalls.webm',
    poster: '/images/kerala-waterfalls-poster.webp'
  },
  {
    id: 'kerala-wildlife',
    name: 'Kerala Wildlife',
    shortName: 'Wildlife',
    tagline: 'Sanctuaries of the Wilderness',
    description: 'Encounter majestic Asian elephants roaming freely in their natural jungle habitat, set amidst the ancient rain forests of Western Ghats.',
    video: '/images/kerala-wildlife.webm',
    poster: '/images/kerala-wildlife-poster.webp'
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    shortName: 'Backwaters',
    tagline: 'Serenity on Floating Palaces',
    description: 'Drift along tranquil emerald waterways on a luxury private houseboat, cocooned by swaying palms and slow-paced coastal rhythms.',
    video: '/images/kerala.webm',
    poster: '/images/kerala-poster.webp'
  },
  {
    id: 'dubai',
    name: 'Dubai & Burj Khalifa',
    shortName: 'Dubai',
    tagline: 'Skylines of Wonder & Luxury',
    description: 'Soar above the iconic Burj Khalifa, witness architectural wonders, and immerse yourself in the luxurious charm of this global oasis.',
    video: '/images/dubai.webm',
    poster: '/images/dubai-poster.webp'
  },
  {
    id: 'london',
    name: 'London Landmarks',
    shortName: 'London',
    tagline: 'Classic Elegance & Historic Bridges',
    description: 'Savor the timeless beauty of London. Glide past the historic Big Ben and iconic bridges spanning the majestic River Thames.',
    video: '/images/london.webm',
    poster: '/images/london-poster.webp'
  },
  {
    id: 'maya-beach',
    name: 'Phi Phi & Maya Beach',
    shortName: 'Maya Beach',
    tagline: 'The Ultimate Tropical Escape',
    description: 'Relax on sun-kissed white sands framed by dramatic limestone cliffs and pristine turquoise waters of Thailand.',
    video: '/images/maya-beach.webm',
    poster: '/images/maya-beach-poster.webp'
  },
  {
    id: 'himalayas',
    name: 'Himalayan Wellness',
    shortName: 'Wellness',
    tagline: 'Yoga, Meditation & Rejuvenation',
    description: 'Find absolute peace and spiritual harmony in the serene high-altitude valleys, perfect for yoga, rejuvenation, and quiet reflection.',
    video: '/images/himalaya-v2.webm',
    poster: '/images/himalaya-v2-poster.webp'
  },
  {
    id: 'himalayas-2',
    name: 'Himalayan Wellness',
    shortName: 'Himalayas',
    tagline: 'Ancient Peaks, Timeless Peace',
    description: 'Let the majestic snow-capped Himalayas inspire stillness — a sanctuary above the clouds where every breath is a step toward renewal.',
    video: '/images/himalaya-v1.webm',
    poster: '/images/himalaya-v1-poster.webp'
  }
];

const MARQUEE_ITEMS = [
  'Bespoke Family Journeys',
  'Luxury Cruise Expeditions',
  'VIP Temple Darshans',
  'Helicopter Charters',
  'Tailored Honeymoons',
  'Holistic Wellness Retreats',
  'Corporate Retreats',
  'Premium Forex Assistance',
  'Private Jet Charters',
  'Curated International Escapes'
];

const HeroVideo = memo(function HeroVideo({ slide, isActive, isPrev, isNext, nextSlide, reducedMotion, isVisible, isTabVisible, activeVideoRef }) {
  const videoRef = useRef(null);

  // Initialize source immediately if page has already loaded to prevent mounting delay
  const [videoSrc, setVideoSrc] = useState(() => {
    if (typeof document !== 'undefined' && document.readyState === 'complete') {
      return slide.video;
    }
    return null;
  });

  // Delay loading the video source until core page assets (CSS, fonts) are loaded (only if page isn't complete yet)
  useEffect(() => {
    if (videoSrc) return;

    if (document.readyState === 'complete') {
      const timer = setTimeout(() => {
        setVideoSrc(slide.video);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        setVideoSrc(slide.video);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [slide.video, videoSrc]);

  // Handle play/pause state dynamically
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion || !videoSrc) return;

    if (isActive && isVisible && isTabVisible) {
      video.muted = true;
      video.play().catch((err) => {
        if (err.name !== 'AbortError') {
          console.warn(`Autoplay blocked or interrupted for video ${slide.id}:`, err);
        }
      });
    } else {
      video.pause();
    }
  }, [isActive, isVisible, isTabVisible, reducedMotion, slide.id, videoSrc]);

  // Sync reference when this video becomes active
  useEffect(() => {
    if (isActive && activeVideoRef) {
      activeVideoRef.current = videoRef.current;
    }
  }, [isActive, activeVideoRef, videoSrc]);

  return (
    <video
      ref={(el) => {
        videoRef.current = el;
        if (isActive && activeVideoRef) {
          activeVideoRef.current = el;
        }
      }}
      id={`hero-video-${slide.id}`}
      src={videoSrc || undefined}
      poster={slide.poster}
      preload={isActive || isNext ? "auto" : "metadata"}
      loop={false}
      muted={true}
      playsInline
      disablePictureInPicture={true}
      disableRemotePlayback={true}
      controlsList="nodownload nofullscreen noremoteplayback"
      onEnded={isActive && !reducedMotion ? nextSlide : undefined}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
        (slide.id === 'himalayas' || slide.id === 'himalayas-2') ? 'object-[65%_center] sm:object-center' : 'object-center'
      } ${isActive ? 'opacity-90 z-20' : 'opacity-0 z-10 pointer-events-none'}`}
    />
  );
});

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const sectionRef = useRef(null);
  const activeVideoRef = useRef(null);

  // Refs for direct DOM manipulation of progress bars (avoids 60fps React state re-renders)
  const mobileProgressRef = useRef(null);
  const desktopProgressRefs = useRef([]);

  const activeSlide = HERO_SLIDES[index];
  const nextSlideObj = HERO_SLIDES[(index + 1) % HERO_SLIDES.length];

  // Initialize desktop refs array
  if (desktopProgressRefs.current.length === 0) {
    desktopProgressRefs.current = HERO_SLIDES.map(() => null);
  }

  const nextSlide = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Detect section visibility in viewport to pause activity when scrolled away
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Listen for tab focus/blur and browser minimizing (Page Visibility API)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (prevIndex === null) return;
    const timer = setTimeout(() => {
      setPrevIndex(null);
    }, 1000); // clear outgoing slide after transition duration
    return () => clearTimeout(timer);
  }, [index, prevIndex]);

  // Reset progress bar widths on index change
  useEffect(() => {
    if (mobileProgressRef.current) {
      mobileProgressRef.current.style.width = '0%';
    }
    desktopProgressRefs.current.forEach((el) => {
      if (el) el.style.width = '0%';
    });
  }, [index]);

  // Track and update progress bars directly in DOM to bypass React re-renders at 60fps
  useEffect(() => {
    if (reducedMotion || !isVisible || !isTabVisible) {
      return;
    }
    let frameId;
    const updateProgress = () => {
      const video = activeVideoRef.current;
      if (video && video.duration) {
        const pct = (video.currentTime / video.duration) * 100;

        // Update mobile progress bar
        if (mobileProgressRef.current) {
          mobileProgressRef.current.style.width = `${pct}%`;
        }

        // Update active desktop progress bar
        const activeDesktopBar = desktopProgressRefs.current[index];
        if (activeDesktopBar) {
          activeDesktopBar.style.width = `${pct}%`;
        }
      }
      frameId = requestAnimationFrame(updateProgress);
    };

    frameId = requestAnimationFrame(updateProgress);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [index, reducedMotion, isVisible, isTabVisible]);

  return (
    <section ref={sectionRef} id="top" className="relative h-screen w-full overflow-hidden bg-ink grain">
      {/* Background Media */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-ink">
        {HERO_SLIDES.map((slide, i) => {
          const isActive = i === index;
          const isPrev = i === prevIndex;
          const isNext = i === (index + 1) % HERO_SLIDES.length;

          // Dynamic Rendering: Only mount active, fading out, or next (preloading) slide in DOM
          if (!isActive && !isPrev && !isNext) return null;

          return (
            <HeroVideo
              key={slide.id}
              slide={slide}
              isActive={isActive}
              isPrev={isPrev}
              isNext={isNext}
              nextSlide={nextSlide}
              reducedMotion={reducedMotion}
              isVisible={isVisible}
              isTabVisible={isTabVisible}
              activeVideoRef={activeVideoRef}
            />
          );
        })}
      </div>


      {/* Soft left-to-right and bottom gradient overlay for localized text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />

      {/* Content overlay */}
      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-between px-6 pb-28 pt-32 lg:px-8">
        <div className="flex flex-1 flex-col justify-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold font-mono"
          >
            BORN IN 2008 · MICRO LEVEL CUSTOMISED PLANNING

          </motion.p>

          <motion.h1
            key={`title-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-7xl tracking-tight"
          >
            {activeSlide.name}
            <span className="block mt-2 text-gold text-2xl sm:text-3xl lg:text-4xl font-normal italic font-display">
              — {activeSlide.tagline}
            </span>
          </motion.h1>

          <motion.p
            key={`desc-${index}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-sm text-white/80 sm:text-base leading-relaxed font-sans"
          >
            {activeSlide.description}
          </motion.p>
        </div>

        {/* Navigation row */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 gap-6 z-30">
          {/* Mobile Layout: Arrow Navigation + Category names */}
          <div className="flex sm:hidden items-center justify-between w-full">
            <div className="flex items-center gap-6">
              <button
                onClick={prevSlide}
                className="text-white hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label="Previous slide"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex items-center gap-6">
                <div className="relative flex flex-col pt-1.5 min-w-[70px]">
                  <div className="absolute top-0 inset-x-0 h-[2.5px] bg-white/10 rounded-full overflow-hidden">
                    <div
                      ref={mobileProgressRef}
                      className="h-full bg-gold"
                      style={{ width: '0%' }}
                    />
                  </div>
                  <span className="text-sm font-bold text-white tracking-wide">{activeSlide.shortName}</span>
                </div>

                <div className="flex flex-col pt-1.5 opacity-30">
                  <div className="h-[2.5px] w-full bg-white/10 rounded-full" />
                  <span className="text-sm font-bold text-white tracking-wide">{nextSlideObj.shortName}</span>
                </div>
              </div>

              <button
                onClick={nextSlide}
                className="text-white hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                aria-label="Next slide"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>


          </div>

          {/* Desktop Layout: Dynamic progress track */}
          <div
            className="hidden sm:grid gap-4 flex-1"
            style={{ gridTemplateColumns: `repeat(${HERO_SLIDES.length}, minmax(0, 1fr))` }}
          >


            {HERO_SLIDES.map((slide, i) => {
              const isActive = i === index;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    setPrevIndex(index);
                    setIndex(i);
                  }}
                  aria-label={`Select slide ${i + 1}: ${slide.name}`}
                  className="group flex flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 font-sans rounded-md p-1"
                >
                  <span
                    className={`text-[10px] font-bold font-mono tracking-wider transition-colors duration-300 ${isActive ? 'text-gold' : 'text-white/50 group-hover:text-white'
                      }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    className={`mt-1 text-xs font-semibold truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                      }`}
                  >
                    {slide.name}
                  </span>

                  <div className="mt-2 h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      ref={(el) => {
                        desktopProgressRefs.current[i] = el;
                      }}
                      className={`h-full bg-gold transition-opacity duration-300 ${isActive ? 'opacity-100' : 'w-0 opacity-0'
                        }`}
                      style={{ width: '0%' }}
                    />

                  </div>
                </button>
              );
            })}
          </div>


        </div>
      </div>

      {/* Inspo-style Infinite Loop Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/10 bg-black/35 py-3.5 backdrop-blur-[2px]">
        <Marquee items={MARQUEE_ITEMS} textClassName="text-white/80" />
      </div>
    </section>
  );
}
