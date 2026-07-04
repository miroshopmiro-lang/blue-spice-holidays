import { Section, SectionHeading, RevealGroup, Item } from './Section';
import ParallaxImage from './ParallaxImage';

const TRAVEL_SERVICES = [
  {
    title: 'Domestic & International Flights',
    outcome: 'Best fares, priority routing, and a single point of contact for every itinerary.',
    image: '/images/services/flights.webp'
  },
  {
    title: 'Holiday Packages',
    outcome: 'Curated luxury escapes designed around how you want to feel, not just where you go.',
    image: '/images/services/holidays.webp'
  },
  {
    title: 'Corporate Travel',
    outcome: 'Predictable, policy-aligned travel that keeps your teams moving and your costs clear.',
    image: '/images/services/corporate.webp'
  },
  {
    title: 'Visa Assistance',
    outcome: 'Fast, documented, expert-handled approvals so deadlines are never at risk.',
    image: '/images/services/visa.webp'
  },
  {
    title: 'Forex Assistance',
    outcome: 'Competitive exchange rates, travel cards, and currency needs sorted before you depart.',
    image: '/images/forex assistance.webp'
  },
  {
    title: 'Cruise Experiences',
    outcome: 'Premium cabins and shore programmes arranged with care.',
    image: '/images/services/cruise.webp'
  }
];

function ServiceTile({ service, index }) {
  const handleEnquire = (e) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent('prefill-itinerary', {
        detail: {
          destination: `Service: ${service.title}`,
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
      className="group relative flex min-w-0 items-end overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-soft card-interactive grain min-h-[220px]"
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

export default function BespokeServices() {
  return (
    <Section id="services-grid" className="bg-tint">
      <SectionHeading
        eyebrow="03 - TRAVEL SERVICES"
        title="Everything your journey requires, under one roof"
        lead="From first enquiry to final arrival, Blue Spice coordinates every detail so you experience only the result."
      />

      <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRAVEL_SERVICES.map((service, index) => (
          <ServiceTile key={service.title} service={service} index={index} />
        ))}
      </RevealGroup>
    </Section>
  );
}
