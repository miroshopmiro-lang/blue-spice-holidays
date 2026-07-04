import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PANELS = [
  {
    tag: 'DOMESTIC CURATION',
    image: '/images/domestic_curation_hero.webp',
    link: '/holidays/domestic',
    actionText: 'EXPLORE DOMESTIC CURATION',
    items: [
      { label: 'Tea Hills of Munnar', icon: '🌿' },
      { label: 'Royal Rajasthan', icon: '🏰' },
      { label: 'Desert Camps', icon: '⛺' },
      { label: 'Kashmir Valleys', icon: '🏔' },
    ],
  },
  {
    tag: 'GLOBAL ESCAPES',
    image: '/images/global_escapes_hero.webp',
    link: '/holidays/international',
    actionText: 'DESIGN INTERNATIONAL ESCAPE',
    items: [
      { label: 'Maldives Beach Villas', icon: '🏝' },
      { label: 'Bali Heritage Temples', icon: '🛕' },
      { label: 'Thailand Islands', icon: '⛵' },
      { label: 'Singapore Escapes', icon: '🌆' },
    ],
  },
  {
    tag: 'HOLISTIC WELLNESS',
    image: '/images/ayurveda.webp',
    link: '/wellness',
    actionText: 'REQUEST WELLNESS CURATION',
    items: [
      { label: 'Ayurvedic Therapies', icon: '🌺' },
      { label: 'Meditation Sanctuaries', icon: '🧘' },
      { label: 'Kerala Forest Retreats', icon: '🌲' },
      { label: 'Yoga Curation', icon: '☮️' },
    ],
  },
];

/* ── Single cross-fading panel (tag + pills + CTA + image) ── */
function Panel({ panel, index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  // Opacity ranges per panel segment within the scroll progress [0, 1]
  let inputRange, outputRange;

  if (index === 0) {
    // First slide: visible immediately, hold until mid, fade out with overlap into next
    inputRange = [start, mid, end];
    outputRange = [1, 1, 0];
  } else if (index === total - 1) {
    // Last slide: fade in from previous segment, hold from mid onward
    inputRange = [start, mid, end];
    outputRange = [0, 1, 1];
  } else {
    // Middle slides: fade in during first half, fade out during second half
    inputRange = [start, mid, end];
    outputRange = [0, 1, 0];
  }

  const opacity = useTransform(progress, inputRange, outputRange);
  const shouldReduceMotion = useReducedMotion();
  const yVal = useTransform(progress, [start, end], ['22px', '-22px']);
  const y = shouldReduceMotion ? 0 : yVal;

  // Completely hide inactive panels: visibility prevents GPU compositing artifacts
  // from backdrop-filter children and ensures truly invisible elements
  const visibility = useTransform(opacity, (v) => (v > 0.01 ? 'visible' : 'hidden'));

  // Bring active panel to front so it paints above fading-out panels
  const zIndex = useTransform(opacity, (v) => (v > 0.5 ? 2 : v > 0.01 ? 1 : 0));

  // Disable pointer events when opacity is below 50% to prevent invisible CTA blocking
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? 'auto' : 'none'));

  return (
    <motion.div
      style={{ opacity, y, pointerEvents, visibility, zIndex }}
      className="absolute inset-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center h-full w-full"
    >
      {/* Left: tag + pills + CTA */}
      <div className="md:col-span-5 flex flex-col justify-center">
        <span className="font-mono text-[10px] uppercase tracking-widemono text-gold/80">
          {panel.tag}
        </span>

        <ul className="mt-5 flex flex-wrap gap-2">
          {panel.items.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-[11px] text-white/80 backdrop-blur-sm"
            >
              <span aria-hidden="true" className="text-[13px]">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>

        <Link
          to={panel.link}
          className="group mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widemono text-gold hover:text-white transition-colors duration-300 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          {panel.actionText}
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Right: image card */}
      <div className="md:col-span-7 relative aspect-[16/9] md:aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 shadow-float mt-2 md:mt-0">
        <img
          src={panel.image}
          alt={panel.tag}
          width={640}
          height={440}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" aria-hidden="true" />
      </div>
    </motion.div>
  );
}

/* ── Left-rail number indicator ── */
function NumberTick({ index, total, progress }) {
  const start = index / total;
  const end = (index + 1) / total;
  const mid = (start + end) / 2;

  const isActive = useTransform(
    progress,
    [start, mid - 0.05, mid + 0.05, end],
    [0, 1, 1, index === total - 1 ? 1 : 0],
  );
  const color = useTransform(isActive, [0, 1], ['rgba(255,255,255,0.25)', '#D4AF37']);
  const scale = useTransform(isActive, [0, 1], [0.85, 1]);
  const barOpacity = useTransform(isActive, [0, 1], [0, 1]);

  return (
    <motion.div style={{ scale }} className="flex items-center gap-1.5">
      <motion.span
        style={{ opacity: barOpacity, backgroundColor: '#D4AF37' }}
        className="block w-[2px] h-4 rounded-full"
        aria-hidden="true"
      />
      <motion.span style={{ color }} className="font-mono text-[11px] tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </motion.span>
    </motion.div>
  );
}

export default function FullscreenPromoCards() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={ref}
      id="holiday-curations"
      className="relative bg-ink text-white"
      style={{ height: '400vh' }}
      aria-label="Holiday Curations"
    >
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden grain">
        {/* Decorative radial glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(50% 60% at 90% 10%, rgba(212,175,55,0.18) 0%, transparent 60%), radial-gradient(60% 70% at 0% 100%, rgba(42,125,225,0.22) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        {/* Main layout: [number-rail] [static-left] [scrolling-right] */}
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[auto_0.75fr_1.25fr] gap-4 md:gap-8 lg:gap-12 items-center">

          {/* Number rail — hidden on mobile */}
          <div className="hidden lg:flex flex-col items-center gap-6 shrink-0 select-none" aria-hidden="true">
            <span
              className="font-mono text-[9px] uppercase tracking-widemono text-gold/50 [writing-mode:vertical-lr] rotate-180 mb-2"
            >
              04 – HOLIDAY CURATIONS
            </span>
            {PANELS.map((_, i) => (
              <NumberTick key={i} index={i} total={PANELS.length} progress={scrollYProgress} />
            ))}
          </div>

          {/* Static left column — heading never changes */}
          <div className="flex flex-col justify-center">
            {/* Mobile-only eyebrow */}
            <p className="lg:hidden font-mono text-[9px] uppercase tracking-widemono text-gold mb-4">
              04 – HOLIDAY CURATIONS
            </p>
            <p className="hidden lg:block font-mono text-[10px] uppercase tracking-widemono text-gold mb-4">
              EXPLORE OUR CURATIONS
            </p>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tightest leading-[1.08] text-white">
              Tailored<br />Escapes<span className="text-gold">.</span>
            </h2>
            <span className="mt-3 lg:mt-5 block h-0.5 w-10 bg-gradient-to-r from-gold to-gold/20" aria-hidden="true" />
            <p className="mt-3 lg:mt-5 max-w-xs text-[14px] leading-relaxed text-white/65">
              Explore hand-picked domestic escapes, global paradises, and holistic wellness retreats designed around how you want to travel.
            </p>

            {/* Dot indicator — mobile (shown below desc) */}
            <div className="mt-4 flex lg:hidden items-center gap-3">
              {PANELS.map((_, i) => (
                <NumberTick key={i} index={i} total={PANELS.length} progress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* Scrolling right column — cross-fading panels */}
          <div className="relative min-h-[460px] sm:min-h-[460px] md:min-h-[440px] w-full">
            {PANELS.map((panel, i) => (
              <Panel
                key={panel.tag}
                panel={panel}
                index={i}
                total={PANELS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
