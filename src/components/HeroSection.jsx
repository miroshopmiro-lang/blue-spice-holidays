import { useEffect, useMemo, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Marquee from './Marquee';

const HERO_SLIDES = [
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    shortName: 'Taj Mahal',
    tagline: 'A Timeless Monument of Love',
    description: 'Marvel at the ethereal white marble glowing under the golden sunrise, capturing India’s rich architectural heritage.',
    video: '/images/taj-mahal.webm'
  },
  {
    id: 'rajasthan',
    name: 'Royal Rajasthan',
    shortName: 'Rajasthan',
    tagline: 'Heritage, Fortresses & The Blue City',
    description: 'Wander through the maze of blue-painted streets in Jodhpur, gaze at majestic hill fortresses, and immerse yourself in the vibrant colors of desert heritage.',
    video: '/images/rajasthan.webm'
  },
  {
    id: 'goa-beach',
    name: 'Goa Beaches',
    shortName: 'Goa',
    tagline: 'Sun-Kissed Golden Shores',
    description: 'Bask in the serene coastal charm, sway with the palms, and feel the gentle waves along Goa’s pristine beaches.',
    video: '/images/goa-beach.webm'
  },
  {
    id: 'munnar',
    name: 'Munnar Tea Estates',
    shortName: 'Munnar',
    tagline: 'Emerald Whispers of the Hills',
    description: 'Wander through rolling tea plantations, mist-laden valleys, and the gentle mountain breeze of the Western Ghats.',
    video: '/images/munnar.webm'
  },
  {
    id: 'kerala-waterfalls',
    name: 'Kerala Waterfalls',
    shortName: 'Waterfalls',
    tagline: 'Cascades of Athirappilly',
    description: 'Witness the roaring grandeur of forest waterfalls crashing down into deep green glades, cocooned by tropical wilderness.',
    video: '/images/kerala-waterfalls.webm'
  },
  {
    id: 'kerala-wildlife',
    name: 'Kerala Wildlife',
    shortName: 'Wildlife',
    tagline: 'Sanctuaries of the Wilderness',
    description: 'Encounter majestic Asian elephants roaming freely in their natural jungle habitat, set amidst the ancient rain forests of Western Ghats.',
    video: '/images/kerala-wildlife.webm'
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    shortName: 'Backwaters',
    tagline: 'Serenity on Floating Palaces',
    description: 'Drift along tranquil emerald waterways on a luxury private houseboat, cocooned by swaying palms and slow-paced coastal rhythms.',
    video: '/images/kerala.webm'
  },
  {
    id: 'dubai',
    name: 'Dubai & Burj Khalifa',
    shortName: 'Dubai',
    tagline: 'Skylines of Wonder & Luxury',
    description: 'Soar above the iconic Burj Khalifa, witness architectural wonders, and immerse yourself in the luxurious charm of this global oasis.',
    video: '/images/dubai.webm'
  },
  {
    id: 'london',
    name: 'London Landmarks',
    shortName: 'London',
    tagline: 'Classic Elegance & Historic Bridges',
    description: 'Savor the timeless beauty of London. Glide past the historic Big Ben and iconic bridges spanning the majestic River Thames.',
    video: '/images/london.webm'
  },
  {
    id: 'maya-beach',
    name: 'Phi Phi & Maya Beach',
    shortName: 'Maya Beach',
    tagline: 'The Ultimate Tropical Escape',
    description: 'Relax on sun-kissed white sands framed by dramatic limestone cliffs and pristine turquoise waters of Thailand.',
    video: '/images/maya-beach.webm'
  },
  {
    id: 'himalayas',
    name: 'Himalayan Wellness',
    shortName: 'Wellness',
    tagline: 'Yoga, Meditation & Rejuvenation',
    description: 'Find absolute peace and spiritual harmony in the serene high-altitude valleys, perfect for yoga, rejuvenation, and quiet reflection.',
    video: '/images/himalaya-v2.webm'
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


export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const sectionRef = useRef(null);

  const activeSlide = HERO_SLIDES[index];
  const nextSlideObj = HERO_SLIDES[(index + 1) % HERO_SLIDES.length];

  const nextSlide = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setPrevIndex(index);
    setIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
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

  // Handle playing/pausing preloaded videos based on active slide, viewport visibility, and tab focus
  useEffect(() => {
    if (reducedMotion) return;

    HERO_SLIDES.forEach((slide, i) => {
      const video = document.getElementById(`hero-video-${slide.id}`);
      if (video) {
        if (i === index && isVisible && isTabVisible) {
          // Double-check element muted state explicitly to prevent browser blocking playback
          video.muted = true;
          video.play().catch((err) => {
            console.warn(`Autoplay blocked or interrupted for video ${slide.id}:`, err);
          });
        } else {
          video.pause();
        }
      }
    });
  }, [index, reducedMotion, isVisible, isTabVisible]);

  // Track and update progress bar
  useEffect(() => {
    if (reducedMotion || !isVisible || !isTabVisible) {
      return;
    }
    let frameId;
    const updateProgress = () => {
      const video = document.getElementById(`hero-video-${activeSlide.id}`);
      if (video && video.duration) {
        const pct = (video.currentTime / video.duration) * 100;
        setProgress(pct);
      }
      frameId = requestAnimationFrame(updateProgress);
    };

    frameId = requestAnimationFrame(updateProgress);
    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [index, activeSlide.id, reducedMotion, isVisible, isTabVisible]);

  return (
    <section ref={sectionRef} id="top" className="relative h-screen w-full overflow-hidden bg-ink grain">
      {/* Background Media */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-ink">
        {HERO_SLIDES.map((slide, i) => {
          const isActive = i === index;

          return (
            <video
              id={`hero-video-${slide.id}`}
              key={slide.id}
              src={slide.video}
              preload="auto"
              autoPlay={isActive && !reducedMotion}
              loop={false}
              muted={true}
              playsInline
              disablePictureInPicture={true}
              disableRemotePlayback={true}
              controlsList="nodownload nofullscreen noremoteplayback"
              onEnded={isActive && !reducedMotion ? nextSlide : undefined}
              style={{ willChange: 'opacity' }}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isActive ? 'opacity-90 z-20' : 'opacity-0 z-10 pointer-events-none'
                }`}
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
                    <div className="h-full bg-gold" style={{ width: `${progress}%` }} />

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
                    setProgress(0);
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
                      className={`h-full bg-gold transition-opacity duration-300 ${isActive ? 'opacity-100' : 'w-0 opacity-0'
                        }`}
                      style={{ width: isActive ? `${progress}%` : '0%' }}
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
