import { useState } from 'react'
import { Sparkle, ArrowUpRight, Check } from './Icons'
import { cn } from '../lib/cn'

const itineraries = [
  {
    id: 'maldives',
    title: 'Maldives Island Escape',
    duration: '4 Days / 3 Nights',
    bestTime: 'Nov - April (Dry Season)',
    weather: '28°C · Sunny & Tropical',
    stamp: 'ISLAND LUXURY · MALDIVES',
    description: 'An overwater paradise curated with private transfers, coral-reef safaris, and secluded dinners on the sand.',
    days: [
      { day: 'Day 01', title: 'Arrival by Private Seaplane', details: 'VIP airport arrival service at Malé, followed by a breathtaking seaplane transfer to your resort island.' },
      { day: 'Day 02', title: 'Ocean Safari & Sunset Yacht Cruise', details: 'Private snorkeling tour guided by a resident marine biologist, followed by a champagne sunset cruise.' },
      { day: 'Day 03', title: 'Overwater Spa & Private Sandbank Dinner', details: 'Rejuvenate with a bespoke couple’s spa session, then dine on a private sandbank with a dedicated personal chef.' },
      { day: 'Day 04', title: 'Sunrise Meditation & Departure', details: 'Enjoy a private beach yoga session at dawn, followed by breakfast and a seaplane return transfer.' }
    ]
  },
  {
    id: 'kerala',
    title: 'Kerala Serenity & Houseboat',
    duration: '5 Days / 4 Nights',
    bestTime: 'Sept - March (Cool Season)',
    weather: '26°C · Mild & Rejuvenating',
    stamp: 'GOD’S OWN COUNTRY · KERALA',
    description: 'Immerse in the tranquil hills of Munnar, tea garden heritage, and a luxury overnight cruise on Cochin backwaters.',
    days: [
      { day: 'Day 01', title: 'Cochin Heritage & Spice Stroll', details: 'Bespoke guided walking tour of Fort Kochi’s historic quarters, Jewish Town, and traditional markets.' },
      { day: 'Day 02', title: 'Munnar Mist & Tea Plantation Estates', details: 'Scenic drive to Munnar. Stay in a luxury tea bungalow and enjoy a private tea sommelier tasting.' },
      { day: 'Day 03', title: 'Ayurvedic Wellness & Organic Spice Tour', details: 'Private visit to a sustainable spice plantation, followed by a restorative traditional Abhyanga massage.' },
      { day: 'Day 04', title: 'Private Houseboat Overnighter', details: 'Board an premium private houseboat in Alleppey. Cruise serene canals while your chef prepares fresh local cuisine.' },
      { day: 'Day 05', title: 'Leisurely Breakfast & Cochin Departure', details: 'Morning cruise check-out, followed by a private transfer back to Cochin International Airport.' }
    ]
  },
  {
    id: 'taj',
    title: 'Royal Rajasthan & Taj Mahal',
    duration: '5 Days / 4 Nights',
    bestTime: 'Oct - April (Winter Season)',
    weather: '22°C · Pleasant & Sunny',
    stamp: 'ROYAL HERITAGE · AGRA-JAIPUR',
    description: 'Walk through marble halls at sunrise, explore royal palaces in the Pink City, and stay in restored historic retreats.',
    days: [
      { day: 'Day 01', title: 'Delhi VIP Welcome & Agra Transfer', details: 'Airport VIP meet-and-assist service, private luxury sedan transfer to Agra. Evening check-in.' },
      { day: 'Day 02', title: 'Sunrise Taj Mahal & Agra Fort', details: 'Priority early-morning entry to Taj Mahal with our expert historian. Afternoon tour of Agra Fort.' },
      { day: 'Day 03', title: 'Jaipur Palace Welcome', details: 'Drive to the Pink City of Jaipur. Restored palace check-in with a traditional rose-petal welcome.' },
      { day: 'Day 04', title: 'Amber Fort & Private City Palace Chambers', details: 'Guided exploration of Amber Fort, plus exclusive access to the royal family’s private chambers in City Palace.' },
      { day: 'Day 05', title: 'Jaipur Crafts & Delhi Departure', details: 'Curated shopping for authentic carpets and block prints, followed by a luxury transfer back to Delhi.' }
    ]
  }
]

export default function JourneyPlanner() {
  const [activeTab, setActiveTab] = useState('maldives')
  const [customizations, setCustomizations] = useState({
    vipAirports: true,
    fiveStarPalaces: false,
    privateGuide: true
  })
  
  const itinerary = itineraries.find(item => item.id === activeTab)

  const toggleCustom = (key) => {
    setCustomizations(prev => ({ ...prev, [key]: !prev[key] }))
  }

  // Generate mailto / inquiry details
  const getInquiryLink = () => {
    const selectedCustoms = []
    if (customizations.vipAirports) selectedCustoms.push('VIP Airport Services')
    if (customizations.fiveStarPalaces) selectedCustoms.push('Ultra-Luxury / Palace Upgrades')
    if (customizations.privateGuide) selectedCustoms.push('Private Guide & Historian')
    
    const customsStr = selectedCustoms.length > 0 ? ` with ${selectedCustoms.join(', ')}` : ''
    const subject = `Custom Itinerary: ${itinerary.title}`
    const body = `Hi Blue Spice Holidays,\n\nI am interested in booking a custom itinerary for the "${itinerary.title}" (${itinerary.duration})${customsStr}.\n\nPlease contact me with more information.\n\nThank you!`
    
    return `/contact?destination=${encodeURIComponent(itinerary.title)}&message=${encodeURIComponent(body)}`
  }

  return (
    <section className="section-pad bg-surface border-t border-ink/5">
      <div className="mx-auto max-w-container">
        
        {/* Header */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-12">
          <div>
            <span className="pill bg-surface-cool text-ink">
              <Sparkle className="w-4 h-4 text-sunset" /> Custom Journeys
            </span>
            <h2 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.1]">
              Interactive <span className="accent-serif text-gradient-blue">Journey Planner</span>
            </h2>
            <p className="mt-4 text-ink-soft max-w-xl">
              Preview our custom itineraries, toggle luxury enhancements, and stamp your preferences to create your dream escape.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap justify-center gap-2">
            {itineraries.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={cn(
                  'pill font-semibold text-xs transition-all duration-300',
                  activeTab === t.id
                    ? 'bg-night text-white shadow-md'
                    : 'bg-white text-ink hover:bg-surface-cool border border-ink/5'
                )}
              >
                {t.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Builder Area */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Left panel: Weather, Stamp & Customizer (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Passport Stamp & Weather Card */}
            <div className="relative overflow-hidden rounded-card bg-white p-7 border border-ink/5 shadow-sm">
              {/* Dynamic Passport Stamp */}
              <div 
                className="absolute right-4 top-4 select-none opacity-90 transition-all duration-700 pointer-events-none"
                style={{ transform: 'rotate(-12deg)' }}
              >
                <div className="flex flex-col items-center justify-center border-4 border-dashed border-sunset/40 rounded-full h-28 w-28 p-1 text-center font-bold text-[9px] text-sunset tracking-wider">
                  <div className="border border-sunset/20 rounded-full h-full w-full flex flex-col items-center justify-center p-2">
                    <span className="text-[7px] uppercase font-sans tracking-widest text-sunset/65">BLUE SPICE</span>
                    <span className="font-script text-[11px] leading-none my-0.5 text-sunset">Bespoke</span>
                    <span className="text-[6px] tracking-tighter leading-none mt-0.5">★ APPROVED ★</span>
                  </div>
                </div>
              </div>

              <span className="text-xs uppercase tracking-wider text-ink-soft">Destination Profile</span>
              <h3 className="text-2xl font-bold text-ink mt-1">{itinerary.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed pr-24">
                {itinerary.description}
              </p>

              {/* Weather & Travel Widgets */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-ink/5 pt-6">
                <div className="bg-surface p-4 rounded-2xl">
                  <span className="text-[10px] uppercase tracking-wider text-ink-soft block mb-1">Best Time to Visit</span>
                  <span className="text-xs font-semibold text-ink">{itinerary.bestTime}</span>
                </div>
                <div className="bg-surface p-4 rounded-2xl">
                  <span className="text-[10px] uppercase tracking-wider text-ink-soft block mb-1">Ideal Weather</span>
                  <span className="text-xs font-semibold text-ink">{itinerary.weather}</span>
                </div>
              </div>
            </div>

            {/* Customizer Panel */}
            <div className="rounded-card bg-night text-white p-7 shadow-xl">
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <Sparkle className="w-5 h-5 text-sunset" /> Custom Enhancements
              </h4>
              <p className="mt-2 text-xs text-white/60">
                Tailor this template. Toggle items to dynamically stamp your preferences onto the journey.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  { key: 'vipAirports', label: 'VIP Airport Meet & Assist', desc: 'Fast-track security and private lounge access' },
                  { key: 'fiveStarPalaces', label: 'Stays: 5★ Palace / Villa Upgrade', desc: 'Premium luxury suites with private butler' },
                  { key: 'privateGuide', label: 'Dedicated Private Historian & Guide', desc: 'Exclusive local narration and private transport' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleCustom(item.key)}
                    className="flex w-full items-start justify-between text-left p-3 rounded-2xl hover:bg-white/5 transition-colors border border-white/5"
                  >
                    <div className="pr-4">
                      <span className="text-sm font-semibold block">{item.label}</span>
                      <span className="text-[10px] text-white/55 block mt-0.5">{item.desc}</span>
                    </div>
                    <div className={cn(
                      'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all',
                      customizations[item.key]
                        ? 'bg-sunset border-sunset text-white'
                        : 'border-white/20'
                    )}>
                      {customizations[item.key] && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: Timeline (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-card p-7 border border-ink/5 shadow-sm relative">
            <div className="flex items-center justify-between mb-8 border-b border-ink/5 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ink-soft">Curated Schedule</span>
                <h4 className="text-lg font-bold text-ink mt-0.5">{itinerary.duration}</h4>
              </div>
              <span className="pill bg-surface text-ink text-xs font-semibold">
                {itinerary.days.length} Steps
              </span>
            </div>

            {/* Timeline Tree */}
            <div className="relative border-l border-ink/10 pl-6 ml-3 space-y-8">
              {itinerary.days.map((day, idx) => (
                <div key={day.day} className="relative group/day">
                  
                  {/* Timeline point */}
                  <div className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white border-2 border-sunset transition-transform duration-300 group-hover/day:scale-125">
                    <span className="h-1.5 w-1.5 rounded-full bg-sunset" />
                  </div>

                  {/* Day marker */}
                  <span className="text-[10px] uppercase font-bold tracking-widest text-sunset block leading-none mb-1">
                    {day.day}
                  </span>

                  {/* Day Content */}
                  <h5 className="text-base font-bold text-ink transition-colors duration-300 group-hover/day:text-blue-primary">
                    {day.title}
                  </h5>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                    {day.details}
                  </p>
                  
                  {/* Dynamic Upgrade Badges on Timeline items */}
                  {idx === 0 && customizations.vipAirports && (
                    <span className="inline-flex mt-2 items-center gap-1 text-[9px] font-semibold bg-sunset/10 text-sunset px-2.5 py-1 rounded-full">
                      ★ VIP Airport Services Included
                    </span>
                  )}
                  {idx === 2 && customizations.fiveStarPalaces && (
                    <span className="inline-flex mt-2 items-center gap-1 text-[9px] font-semibold bg-sunset/10 text-sunset px-2.5 py-1 rounded-full">
                      ★ Upgraded to Ultra-Luxury
                    </span>
                  )}
                  {idx === 1 && customizations.privateGuide && (
                    <span className="inline-flex mt-2 items-center gap-1 text-[9px] font-semibold bg-sunset/10 text-sunset px-2.5 py-1 rounded-full">
                      ★ Private Guide Accompanied
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Action Call */}
            <div className="mt-8 pt-6 border-t border-ink/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-ink-soft max-w-sm">
                This is a base outline. Click below to prefill this plan and customizations into your inquiry.
              </p>
              <a
                href={getInquiryLink()}
                className="pill bg-night text-white hover:bg-blue-primary text-xs font-semibold inline-flex items-center gap-2 justify-center shadow-md transition-all hover:shadow-lg"
              >
                Inquire About This Plan <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
