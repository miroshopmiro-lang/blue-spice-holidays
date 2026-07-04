import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Marquee from './Marquee';

const HERO_SLIDES = [
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    shortName: 'Backwaters',
    tagline: 'Serenity on Floating Palaces',
    description: 'Drift along tranquil emerald waterways on a luxury private houseboat, cocooned by swaying palms and slow-paced coastal rhythms.',
    video: '/images/kerala.mp4',
    fallback: '/images/hero-kerala-houseboat.png'
  },
  {
    id: 'munnar',
    name: 'Munnar Tea Estates',
    shortName: 'Munnar',
    tagline: 'Emerald Whispers of the Hills',
    description: 'Wander through rolling tea plantations, mist-laden valleys, and the gentle mountain breeze of the Western Ghats.',
    video: '/images/munnar.mp4',
    fallback: '/images/munnar-tea-trails.png'
  },
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    shortName: 'Taj Mahal',
    tagline: 'A Timeless Monument of Love',
    description: 'Marvel at the ethereal white marble glowing under the golden sunrise, capturing India’s rich architectural heritage.',
    video: '/images/taj-mahal.mp4',
    fallback: '/images/taj-mahal-hero.webp'
  },
  {
    id: 'maya-beach',
    name: 'Phi Phi & Maya Beach',
    shortName: 'Maya Beach',
    tagline: 'The Ultimate Tropical Escape',
    description: 'Relax on sun-kissed white sands framed by dramatic limestone cliffs and pristine turquoise waters of Thailand.',
    video: '/images/maya-beach.mp4',
    fallback: '/images/thailand-phiphi.webp'
  },
  {
    id: 'himalayas',
    name: 'The Great Himalayas',
    shortName: 'Himalayas',
    tagline: 'Whispers of the Snowy Giants',
    description: 'Gaze upon the eternal snow-clad peaks, pristine high-altitude valleys, and whispering pine forests of the giants.',
    video: '/images/himalaya.mp4',
    fallback: '/images/himalayas-hero.webp'
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

  useEffect(() => {
    if (reducedMotion) {
      setProgress(0);
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
  }, [index, activeSlide.id, reducedMotion]);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden bg-ink grain">
      {/* Background Media */}
      <div className="absolute inset-0 z-10 w-full h-full overflow-hidden bg-ink">
        {reducedMotion ? (
          <img
            src={activeSlide.fallback}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90 z-20"
          />
        ) : (
          HERO_SLIDES.map((slide, i) => {
            const isActive = i === index;
            const isOutgoing = i === prevIndex;
            const videoSrc = (isActive || isOutgoing) ? slide.video : '';

            return (
              <video
                id={`hero-video-${slide.id}`}
                key={slide.id}
                src={videoSrc}
                autoPlay={isActive}
                loop={false}
                muted={true}
                playsInline
                onEnded={isActive ? nextSlide : undefined}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  isActive ? 'opacity-90 z-20' : 'opacity-0 z-10 pointer-events-none'
                }`}
              />
            );
          })
        )}
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
            ESTABLISHED 2008 · CURATORS OF SLOW TRAVEL
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

          {/* Desktop Layout: 5 columns progress track */}
          <div className="hidden sm:grid grid-cols-5 gap-4 flex-1">


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
