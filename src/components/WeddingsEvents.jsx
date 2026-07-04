import { Section, SectionHeading, RevealGroup, Item } from './Section';
import ParallaxImage from './ParallaxImage';

const WEDDINGS_SERVICES = [
  {
    title: 'Destination Weddings',
    outcome: 'Flawless celebrations in the world’s most beautiful venues, coordinated from guest arrivals to the final reception.',
    image: '/images/destination-weddings.webp'
  },
  {
    title: 'Luxury Wedding Cars',
    outcome: 'Prestige vehicles (sedans, SUVs, and vintage classics) dressed for your big day and chauffeured to perfection.',
    image: '/images/luxury -car.webp'
  },
  {
    title: 'Luxury Coach & Group Bus',
    outcome: 'Stylish, comfortable coach and bus transfers for large wedding parties, corporate groups, and delegations.',
    image: '/images/luxury-coach.webp'
  },
  {
    title: 'Bouncer & Security Services',
    outcome: 'Professional security personnel for events, ensuring guest safety and smooth crowd management throughout.',
    image: '/images/bouncer.webp'
  },
  {
    title: 'Conferences, Meetings & Training',
    outcome: 'Professional event production, technical setup, and end-to-end logistics for high-impact conferences, corporate meetings, and training seminars.',
    image: '/images/Conferences,meeting.training.webp'
  }
];

function WeddingTile({ service, index }) {
  const handleEnquire = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('prefill-itinerary', {
        detail: {
          destination: `Wedding & Event: ${service.title}`,
          month: 'Any month'
        }
      })
    );
    const el = document.getElementById('custom');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Item
      className="group relative flex min-w-0 items-end overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-soft transition-[transform,box-shadow] duration-500 ease-lux hover:-translate-y-1 hover:shadow-float grain min-h-[220px]"
    >
      {/* Fallback image */}
      <div className="img-fallback absolute inset-0" aria-hidden="true" />

      {/* Parallax Background Image */}
      <ParallaxImage
        src={service.image}
        alt={service.title}
        width={400}
        height={264}
      />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full text-left">
        <span className="font-mono text-[11px] text-gold" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-xs leading-relaxed text-white/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {service.outcome}
        </p>

        {/* CTA */}
        <button
          onClick={handleEnquire}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold tracking-wide hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          Enquire Now
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <span className="mt-4 block h-px w-10 bg-gold/70 transition-[width] duration-500 group-hover:w-20" aria-hidden="true" />
      </div>
    </Item>
  );
}

export default function WeddingsEvents() {
  return (
    <Section id="weddings-grid" className="bg-canvas">
      <SectionHeading
        eyebrow="05 - WEDDINGS & EVENTS"
        title="Every Occasion Elevated"
        lead="From destination weddings to executive conferences, we manage the logistics, hospitality, and transportation so every moment lands."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {WEDDINGS_SERVICES.map((service, index) => (
          <WeddingTile key={service.title} service={service} index={index} />
        ))}
      </RevealGroup>
    </Section>
  );
}
