import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

function CountUp({ value }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setDisplayValue(value);
      return;
    }

    // Match digits + decimals, and capture non-digit suffixes (like +, %, etc.)
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2];
    const duration = 1600; // duration of count animation in ms
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // Ease-out quad

      const current = easeProgress * targetNum;

      if (Number.isInteger(targetNum)) {
        setDisplayValue(Math.floor(current) + suffix);
      } else {
        setDisplayValue(current.toFixed(0) + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}</span>;
}

const TRUST_ITEMS = [
  { value: '15 +', title: 'Years of service', sub: 'Designing, Planning and tour support since 2009' },
  { value: 'Worldwide', title: 'Destinations', sub: 'Custom itineraries across India and globally' },
  { value: '100%', title: 'Customized', sub: 'Itineraries built around your pace' },
  { value: '24/7', title: 'Specialist Support', sub: 'On-trip direct support line' },
];


export default function TrustRibbon() {
  const ref = useRef(null);

  return (
    <section
      id="stats"
      ref={ref}
      className="relative overflow-hidden bg-brand-ink py-16 text-white grain"
      style={{ colorScheme: 'dark' }}
    >
      {/* Radial mesh background overlays */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(50% 80% at 15% 0%, rgba(42,125,225,0.3) 0%, transparent 60%), radial-gradient(50% 80% at 90% 100%, rgba(212,175,55,0.2) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl relative z-10 px-6 lg:px-8">
        <dl
          className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.title}
              className="text-center flex flex-col items-center justify-between h-full"
            >
              <div className="w-full">
                <dt className="sr-only">{item.title}</dt>
                <dd className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl [font-variant-numeric:tabular-nums]">
                  <CountUp value={item.value} />
                </dd>
                <p className="mt-2.5 font-mono text-[11px] uppercase tracking-widemono text-white/80">
                  {item.title}
                </p>
              </div>
              <p className="mt-2 text-xs text-white/50 leading-relaxed max-w-[200px]">
                {item.sub}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
