import { useState, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../data/travelData';

function StarRow() {
  return <span className="text-brand-accent" aria-hidden="true">★★★★★</span>;
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.2c0-.6-.05-1.2-.16-1.8H12v3.4h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.1Z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H3.1a10 10 0 0 0 0 9l3.3-2.6Z" />
      <path fill="#EA4335" d="M12 6.4c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 0 0 3.1 7.5l3.3 2.6C7.2 8.1 9.4 6.4 12 6.4Z" />
    </svg>
  );
}

function TrustpilotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00B67A" d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17l-6.2 3.6 1.6-6.7L2.2 8.9l6.9-.6L12 2Z" />
    </svg>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback((next) => {
    setIndex((i) => (next + count) % count);
    setIsPlaying(false);
  }, [count]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      setReducedMotion(mq.matches);
      if (mq.matches) setIsPlaying(false);
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count, isPlaying]);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-brand-surface">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-muted">In Their Words</p>
            <h2 className="serif-font mt-4 text-3xl font-bold text-brand-ink sm:text-4xl">Travelers who trusted us with their stories</h2>
          </div>

          <div className="flex items-center gap-4 rounded-none border border-brand-surface-cool bg-white px-5 py-3">
            <div className="flex items-center gap-2 border-r border-brand-surface-cool pr-4">
              <GoogleIcon />
              <TrustpilotIcon />
            </div>
            <div>
              <p className="text-sm font-medium text-brand-ink"><span className="text-brand-accent">★</span> Rated 4.9/5 stars</p>
              <p className="text-xs text-brand-muted">by 210+ families</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12">
          <figure className="rounded-none border-l-4 border-brand-accent bg-brand-surface-cool/30 p-10 sm:p-16 relative">
            <span className="text-brand-accent/15 text-8xl absolute top-4 left-6 serif-font pointer-events-none" aria-hidden="true">“</span>
            <div className="relative z-10">
              <StarRow />
              <blockquote className="serif-font mt-4 text-xl sm:text-2xl font-medium italic leading-relaxed text-brand-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src={t.photo} alt={t.author} width={48} height={48} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm font-medium text-brand-ink">{t.author} · <span className="text-brand-muted">{t.city}</span></p>
                  <p className="mt-0.5 text-sm text-brand-muted">{t.trip} · {t.date}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-green-700">✓ Verified Blue Spice Holiday</p>
                </div>
              </figcaption>
            </div>
          </figure>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => { setIndex(i); setIsPlaying(false); }}
                  aria-label={`Show review ${i + 1}`}
                  className={`h-2 rounded-button transition-[width,background-color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${i === index ? 'w-6 bg-brand-accent' : 'w-2 bg-brand-surface-cool'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying(p => !p)}
                aria-label={isPlaying ? "Pause auto-rotation" : "Play auto-rotation"}
                className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-surface-cool text-brand-ink hover:bg-brand-surface-cool focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="3" height="16" /><rect x="16" y="4" width="3" height="16" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                )}
              </button>
              <button type="button" onClick={() => go(index - 1)} aria-label="Previous" className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-surface-cool text-brand-ink hover:bg-brand-surface-cool focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button type="button" onClick={() => go(index + 1)} aria-label="Next" className="flex h-9 w-9 items-center justify-center rounded-button border border-brand-surface-cool text-brand-ink hover:bg-brand-surface-cool focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
