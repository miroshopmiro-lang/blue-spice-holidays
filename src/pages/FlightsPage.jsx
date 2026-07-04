import { useState } from 'react';

const FEATURED_ROUTES = [
  { id: 1, from: 'Mumbai (BOM)', to: 'London (LHR)', airline: 'British Airways', price: '₹72,400', type: 'Direct' },
  { id: 2, from: 'Delhi (DEL)', to: 'Malé (MLE)', airline: 'IndiGo / SpiceJet', price: '₹28,900', type: 'Direct' },
  { id: 3, from: 'Bangalore (BLR)', to: 'Singapore (SIN)', airline: 'Singapore Airlines', price: '₹34,200', type: 'Direct' },
  { id: 4, from: 'Mumbai (BOM)', to: 'Phuket (HKT)', airline: 'Thai Airways', price: '₹26,500', type: 'Direct' },
];

export default function FlightsPage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [cabin, setCabin] = useState('Economy');
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      window.dispatchEvent(
        new CustomEvent('prefill-itinerary', { 
          detail: { 
            destination: `Flight from ${from || 'your city'} to ${to || 'destination'} on ${date || 'any date'} (${cabin} class)`, 
            month: 'Any month' 
          } 
        })
      );
      const el = document.getElementById('custom');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner / Header */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Premium Air Curation
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Flights Tailored to <span className="accent-serif text-brand-accent">Your Schedule</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Direct airline integrations, business/first class optimization, and private charters handled with a single point of contact.
          </p>
        </div>
      </section>

      {/* Flight Search Widget */}
      <section className="relative -mt-10 z-20 max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-premium border border-brand-surface-cool shadow-2xl p-6 md:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-4">Request Flight Curation</h2>
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="flight-from" className="block text-xs font-bold uppercase text-brand-muted mb-1">Departure City</label>
              <input 
                id="flight-from"
                name="from"
                autoComplete="off"
                type="text" 
                placeholder="e.g. Mumbai (BOM)" 
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                required
              />
            </div>
            <div>
              <label htmlFor="flight-to" className="block text-xs font-bold uppercase text-brand-muted mb-1">Arrival City</label>
              <input 
                id="flight-to"
                name="to"
                autoComplete="off"
                type="text" 
                placeholder="e.g. London (LHR)" 
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                required
              />
            </div>
            <div>
              <label htmlFor="flight-date" className="block text-xs font-bold uppercase text-brand-muted mb-1">Departure Date</label>
              <input 
                id="flight-date"
                name="date"
                type="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                required
              />
            </div>
            <div>
              <label htmlFor="flight-cabin" className="block text-xs font-bold uppercase text-brand-muted mb-1">Cabin Class</label>
              <select 
                id="flight-cabin"
                name="cabin"
                value={cabin}
                onChange={(e) => setCabin(e.target.value)}
                className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business Class">Business Class</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
            <div className="sm:col-span-2 md:col-span-4 mt-2">
              <button 
                type="submit" 
                className="w-full bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-4 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                {submitted ? 'Routing to Specialist Planner…' : 'Search & Consult Flights'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">THE BLUE SPICE PROMISE</p>
          <h2 className="serif-font text-3xl font-bold text-brand-ink mt-2 sm:text-4xl">Why Book Air with Us?</h2>
          <p className="mt-3 text-brand-muted text-sm sm:text-base">We handle complex multi-city flight schedules, corporate group itineraries, and luxury additions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-brand-surface-cool p-8 rounded-premium shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <h3 className="serif-font text-lg font-bold text-brand-ink">Preferred Airline Deals</h3>
            <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
              Direct contracts with premium airline partners. Access private fares and seat upgrades on international trunk routes.
            </p>
          </div>

          <div className="bg-white border border-brand-surface-cool p-8 rounded-premium shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 018.716 2.253M12 3a9.003 9.003 0 00-8.716 2.253" />
              </svg>
            </div>
            <h3 className="serif-font text-lg font-bold text-brand-ink">Multi-City & Complex Routes</h3>
            <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
              Expert split-ticketing and multi-stop flight alignments designed to maximize layover comfort and minimize travel time.
            </p>
          </div>

          <div className="bg-white border border-brand-surface-cool p-8 rounded-premium shadow-sm">
            <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-8.24 0m9.96-.01a3 3 0 00-4.3 0m1.13-1.89a3 3 0 00-4.3 0M22.5 12a9.75 9.75 0 01-19.5 0M2.25 12a9.75 9.75 0 0019.5 0" />
              </svg>
            </div>
            <h3 className="serif-font text-lg font-bold text-brand-ink">VIP Meet & Greet</h3>
            <p className="mt-2 text-xs sm:text-sm text-brand-muted leading-relaxed">
              Fast-track immigration support, airport lounge clearances, and tarmac chauffeur links at major international hubs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Flights */}
      <section className="bg-brand-surface-cool/30 py-20 border-t border-b border-brand-surface-cool">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">POPULAR CURATIONS</p>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-brand-ink mt-2">Trending Routes</h2>
            </div>
            <p className="text-sm text-brand-muted mt-2 md:mt-0">Prices are indicative. All flights are quoted live at time of booking.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ROUTES.map((route) => (
              <div key={route.id} className="bg-white border border-brand-surface-cool p-6 rounded-premium shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs uppercase tracking-wider text-brand-accent font-semibold mb-2">{route.airline}</div>
                <div className="flex items-center justify-between">
                  <span className="serif-font text-lg font-bold text-brand-ink">{route.from}</span>
                  <span className="text-brand-muted text-xs">➔</span>
                  <span className="serif-font text-lg font-bold text-brand-ink">{route.to}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs border-t border-brand-surface-cool pt-4">
                  <span className="text-brand-muted">{route.type}</span>
                  <span className="font-bold text-brand-ink text-sm [font-variant-numeric:tabular-nums]">Starting {route.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
