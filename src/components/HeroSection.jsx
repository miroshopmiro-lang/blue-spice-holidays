import { useEffect, useRef, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Sparkle, Plane } from './Icons'

const slides = [
  {
    id: 'maldives',
    name: 'Maldives Beach',
    categories: ['International'],
    tagline: 'Island serenity, expertly held.',
    image: '/images/maldives-hero.webp',
    videoLandscapeMp4: '/images/maldives.mp4',
    videoPortraitMp4: '/images/maldives.mp4',
  },
  {
    id: 'tiger',
    name: 'Ranthambore & Wildlife',
    categories: ['India', 'Trending'],
    tagline: 'Spot the majestic Bengal tiger in its natural habitat.',
    image: '/images/tiger-hero.webp',
    videoLandscapeMp4: '/images/tiger.mp4',
    videoPortraitMp4: '/images/tiger.mp4',
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters',
    categories: ['India'],
    tagline: 'Backwaters, stillness, and unhurried luxury.',
    image: '/images/kerala-hero.webp',
    videoLandscapeMp4: '/images/kerala.mp4',
    videoPortraitMp4: '/images/kerala.mp4',
  },
  {
    id: 'himalayas',
    name: 'Himalayas',
    categories: ['India'],
    tagline: 'Himalayan calm, elevated.',
    image: '/images/himalayas-hero.webp',
    videoLandscapeMp4: '/images/himalayas.mp4',
    videoPortraitMp4: '/images/himalayas.mp4',
  },
  {
    id: 'taj-mahal',
    name: 'Agra & Taj Mahal',
    categories: ['India', 'Trending'],
    tagline: 'Sunrise over white marble, a monument to timeless love.',
    image: '/images/taj-mahal-hero.webp',
    videoLandscapeMp4: '/images/taj-mahal-landscape.mp4',
    videoPortraitMp4: '/images/taj-mahal-landscape.mp4',
  }
]

export default function HeroSection({ onBook }) {
  const root = useRef(null)
  const bgRef = useRef(null)
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const videoRefs = useRef([])
  const reduceMotion = useReducedMotion()
  const touchStartX = useRef(null)

  const goTo = useCallback((i) => setIndex(i), [])

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) < 40) return // too small, ignore
    if (dx < 0) {
      // swipe left → next
      setIndex((i) => (i + 1) % slides.length)
    } else {
      // swipe right → prev
      setIndex((i) => (i - 1 + slides.length) % slides.length)
    }
  }, [])

  const openDestination = useCallback((destinationName) => {
    navigate(`/contact?destination=${encodeURIComponent(destinationName)}`)
  }, [navigate])

  useEffect(() => {
    if (reduceMotion) return
    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.2,
      })
      const onMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20
        gsap.to(bgRef.current, { x, y, duration: 0.8, ease: 'power2.out' })
      }
      window.addEventListener('mousemove', onMove)
      return () => window.removeEventListener('mousemove', onMove)
    }, root)
    return () => ctx.revert()
  }, [reduceMotion])

  useEffect(() => {
    // Play the active video and pause others
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === index) {
        video.currentTime = 0
        video.play().catch((err) => {
          console.log('Video playback failed/interrupted: ', err)
        })
      } else {
        video.pause()
      }
    })
  }, [index])

  useEffect(() => {
    // Fallback: hide preloader after 3.5s regardless to prevent getting stuck
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleFirstVideoLoad = () => {
    setIsReady(true)
  }

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const active = slides[index]
  // track[0] is always active; track[i] maps to slides[(index+i) % length]
  const track = slides.map((_, i) => ({ slide: slides[(index + i) % slides.length], realIdx: (index + i) % slides.length }))
  const mobileTrack = [
    { slide: slides[(index - 1 + slides.length) % slides.length], realIdx: (index - 1 + slides.length) % slides.length },
    { slide: slides[index], realIdx: index },
    { slide: slides[(index + 1) % slides.length], realIdx: (index + 1) % slides.length },
  ]

  return (
    <section ref={root} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Luxury Preloader Overlay */}
      {!isReady && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-night text-white transition-opacity duration-700">
          <div className="flex flex-col items-center">
            <span className="font-script text-4xl mb-4 tracking-wider animate-pulse">Blue Spice</span>
            <div className="h-[2px] w-48 rounded-full bg-white/10 overflow-hidden relative">
              <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-blue-light animate-loading-bar" />
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/40">Curating Luxury…</p>
          </div>
        </div>
      )}

      <div ref={bgRef} className="absolute inset-[-20px]">
        {/* Fallback Static Image (rendered behind videos) */}
        <img
          src={active.image}
          alt=""
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 opacity-20"
        />

        {/* Preloaded video elements with opacity crossfades */}
        {slides.map((slide, i) => (
          <video
            key={slide.id}
            ref={(el) => (videoRefs.current[i] = el)}
            preload="auto"
            muted
            playsInline
            loop={false}
            onEnded={next}
            onLoadedData={i === 0 ? handleFirstVideoLoad : undefined}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === i ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <source src={slide.videoLandscapeMp4} type="video/mp4" />
          </video>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 z-20" />

      <div className="relative z-30 mx-auto flex h-full max-w-container flex-col justify-between px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-12">
        <div className="max-w-2xl pt-6 text-center lg:text-left">
          <h1 data-reveal className="text-balance text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Journeys Designed Around{' '}
            <span className="accent-serif text-gradient-blue">You.</span>
          </h1>
          <p data-reveal className="mt-5 mx-auto lg:mx-0 max-w-lg text-xs text-white/60 leading-relaxed md:text-base md:text-white/80 lg:text-lg">
            From exotic international getaways to curated domestic tours, grand weddings to corporate events - we craft experiences around how you want to feel.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          {/* bottom: compact booking + social proof (centered on mobile) */}
          <div data-reveal className="flex flex-col items-center gap-4 lg:items-start">
            <button onClick={onBook} className="group pill w-full justify-center lg:w-fit bg-blue-primary text-white font-semibold px-7 py-3.5 hover:bg-blue-light transition-colors duration-300">
              <Plane className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              Plan My Journey
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <div className="flex items-center gap-3 text-white">
              <div className="flex -space-x-2">
                <img src="/images/avatar-proof-1.webp" alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full border-2 border-white/70 object-cover" />
                <img src="/images/avatar-proof-2.webp" alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full border-2 border-white/70 object-cover" />
                <img src="/images/avatar-proof-3.webp" alt="" width={36} height={36} loading="lazy" className="h-9 w-9 rounded-full border-2 border-white/70 object-cover" />
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/70 bg-transparent text-[10px] font-bold text-white uppercase">+</span>
              </div>
              <span className="text-sm"><strong>1500+</strong> Happy Travellers</span>
            </div>
          </div>

          {/* Desktop sliding track */}
          <div data-reveal className="hidden md:block w-auto">
            <div className="flex items-end justify-start gap-3 overflow-hidden">
              {track.map(({ slide: d, realIdx }, i) => {
                const isActive = i === 0
                return (
                  <div
                    key={`desk-${d.id}`}
                    onClick={() => !isActive && goTo(realIdx)}
                    className={`relative shrink-0 overflow-hidden rounded-card transition-all duration-500 ${
                      isActive ? 'h-56 w-72' : 'h-44 w-24 cursor-pointer hover:opacity-80'
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={d.name}
                      width={400}
                      height={320}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 ${!isActive ? 'group-hover:scale-105' : ''} ${d.id === 'taj-mahal' ? 'object-bottom' : ''}`}
                    />
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-14 text-white">
                          <p className="text-xs uppercase tracking-wider text-white/70">{d.categories[0]}</p>
                          <h3 className="text-lg font-semibold leading-tight">{d.name}</h3>
                          <p className="text-xs text-white/80 accent-serif">{d.tagline}</p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); openDestination(d.name) }}
                          aria-label={`Inquire about ${d.name}`}
                          className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink hover:bg-blue-light hover:text-white transition-colors duration-200"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    )}
                  </div>
                )
              })}
            </div>
            {/* Desktop progress indicator */}
            <div className="mt-4 flex items-center gap-4 text-white">
              <span className="shrink-0 text-sm tabular-nums">{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
              <div className="h-1 flex-1 rounded-full bg-white/20">
                <div className="h-full rounded-full bg-blue-light transition-all duration-500" style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Mobile sliding track (Active in Center) — swipe to change */}
          <div
            data-reveal
            className="block md:hidden w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'pan-y' }}
          >
            <div className="flex items-center justify-center gap-2 overflow-hidden px-4">
              {mobileTrack.map(({ slide: d, realIdx }, i) => {
                const isActive = i === 1
                return (
                  <div
                    key={`mob-${d.id}`}
                    className={`relative shrink-0 overflow-hidden rounded-card transition-all duration-500 ${
                      isActive ? 'h-[230px] w-[158px]' : 'h-[173px] w-[72px] opacity-50'
                    }`}
                  >
                    <img
                      src={d.image}
                      alt={d.name}
                      width={400}
                      height={320}
                      loading="lazy"
                      className={`h-full w-full object-cover ${d.id === 'taj-mahal' ? 'object-bottom' : ''}`}
                    />
                    {isActive && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-10 text-white">
                          <h3 className="text-sm font-semibold leading-tight">{d.name}</h3>
                          <p className="text-[10px] text-white/80 line-clamp-2 mt-0.5 leading-tight">{d.tagline}</p>
                        </div>
                        <button
                          onClick={() => openDestination(d.name)}
                          aria-label={`Inquire about ${d.name}`}
                          className="absolute bottom-3 right-3 grid h-7 w-7 place-items-center rounded-full bg-white text-ink hover:bg-blue-light hover:text-white transition-colors duration-200"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
            {/* Mobile progress indicator */}
            <div className="mt-4 flex items-center justify-center gap-4 text-white px-8">
              <span className="shrink-0 text-xs tabular-nums">{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
              <div className="h-0.5 flex-1 rounded-full bg-white/20">
                <div className="h-full rounded-full bg-blue-light transition-all duration-500" style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
