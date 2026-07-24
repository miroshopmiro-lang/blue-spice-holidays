import { useEffect, useState } from 'react';
import useEnquiry from '../hooks/useEnquiry';
import useForexRates, { CURRENCIES } from '../hooks/useForexRates';

// Rates come back as INR per 1 unit of foreign currency. Small-denomination
// currencies (JPY, NPR, THB) need more decimals to stay meaningful in a table.
function formatRate(rate) {
  if (!rate) return '—';
  return rate < 5 ? rate.toFixed(4) : rate.toFixed(2);
}

export default function ForexPage() {
  const [inrAmount, setInrAmount] = useState('10000');
  const [currency, setCurrency] = useState('USD');
  const [submitted, setSubmitted] = useState(false);
  const enquire = useEnquiry();
  const { rates, updatedAt, status } = useForexRates();

  useEffect(() => {
    document.title = 'Forex Assistance & Live Exchange Rates · Blue Spice Holidays';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Live indicative exchange rates, multi-currency forex cards and home delivery of currency notes, arranged by Blue Spice Holidays.'
      );
    }
  }, []);

  const rate = rates[currency];
  const amount = parseFloat(inrAmount);
  // Convert live as the inputs change — the old "Calculate" button showed a
  // result that silently went stale the moment either field was edited.
  const converted =
    rate && Number.isFinite(amount) && amount > 0
      ? (amount / rate).toLocaleString('en-IN', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : null;

  const handleRequest = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      enquire(`Forex inquiry: Buy ${currency} worth ₹${inrAmount}`);
    }, 1500);
  };

  const rateNote =
    status === 'loading'
      ? 'Fetching the latest rates…'
      : status === 'live'
        ? `Live interbank mid-market rate${updatedAt ? ` · updated ${updatedAt}` : ''}`
        : 'Live rate feed unavailable — showing our last recorded reference rates.';

  return (
    <div className="bg-brand-surface pt-24 min-h-screen text-brand-ink">
      {/* Banner / Header */}
      <section className="relative bg-brand-ink text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-ink to-brand-ink opacity-90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/30">
            Foreign Exchange Solutions
          </span>
          <h1 className="serif-font text-4xl sm:text-5xl font-bold mt-4 leading-tight">
            Seamless Travel, <span className="accent-serif text-brand-accent">Secure Currency</span>
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-base sm:text-lg">
            Lock in competitive exchange rates with home delivery of currency notes and multi-currency forex cards.
          </p>
        </div>
      </section>

      {/* Forex Conversion & Inquiry Grid */}
      <section className="relative -mt-10 z-20 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Live Rates & Converter */}
        <div className="bg-white rounded-premium border border-brand-surface-cool shadow-2xl p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-muted">Currency Exchange Converter</h2>
              {status === 'live' && (
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="forex-amount" className="block text-xs font-bold uppercase text-brand-muted mb-1">Enter Amount (INR)</label>
                <input
                  id="forex-amount"
                  name="amount"
                  type="number"
                  min="0"
                  value={inrAmount}
                  onChange={(e) => setInrAmount(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 font-semibold"
                />
              </div>
              <div>
                <label htmlFor="forex-currency" className="block text-xs font-bold uppercase text-brand-muted mb-1">Convert To</label>
                <select
                  id="forex-currency"
                  name="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
                >
                  {CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} - {c.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-brand-surface-cool/30 border border-brand-surface-cool p-4 rounded-premium text-center" aria-live="polite">
            <span className="text-xs text-brand-muted uppercase font-bold block">Estimated Value</span>
            <span className="serif-font text-2xl font-bold text-brand-ink mt-1 block [font-variant-numeric:tabular-nums] break-words">
              {converted ? `${converted} ${currency}` : '—'}
            </span>
            <span className="text-[10px] text-brand-muted block mt-1">
              {rate ? `1 ${currency} = ₹${formatRate(rate)} · ` : ''}Indicative only. Your final card/cash rate is confirmed by our specialist at the time of order.
            </span>
          </div>
        </div>

        {/* Forex Delivery & card Inquiry Form */}
        <div className="bg-white rounded-premium border border-brand-surface-cool shadow-2xl p-6 md:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-4">Request Forex Cards / Cash Delivery</h2>
          <form onSubmit={handleRequest} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="forex-needed-currency" className="block text-xs font-bold uppercase text-brand-muted mb-1">Currency Needed</label>
                <input
                  id="forex-needed-currency"
                  name="neededCurrency"
                  type="text"
                  value={currency}
                  disabled
                  className="w-full bg-brand-surface-cool/40 border border-brand-surface-cool rounded-sm px-4 py-3 text-sm font-bold text-brand-ink"
                />
              </div>
              <div>
                <label htmlFor="forex-needed-amount" className="block text-xs font-bold uppercase text-brand-muted mb-1">Required Amount</label>
                <input
                  id="forex-needed-amount"
                  name="neededAmount"
                  type="text"
                  value={`INR ~${inrAmount}`}
                  disabled
                  className="w-full bg-brand-surface-cool/40 border border-brand-surface-cool rounded-sm px-4 py-3 text-sm font-bold text-brand-ink"
                />
              </div>
            </div>
            <div>
              <label htmlFor="forex-preference" className="block text-xs font-bold uppercase text-brand-muted mb-1">Forex Delivery Preference</label>
              <select
                id="forex-preference"
                name="preference"
                className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 cursor-pointer"
              >
                <option value="both">Multi-Currency Card &amp; Physical Cash</option>
                <option value="card">Prepaid Forex Card Only</option>
                <option value="cash">Home Delivery Cash Only</option>
              </select>
            </div>
            <div>
              <label htmlFor="forex-address" className="block text-xs font-bold uppercase text-brand-muted mb-1">Delivery Address</label>
              <textarea
                id="forex-address"
                name="address"
                rows="2"
                placeholder="Where should our currency specialist dispatch your card/cash?"
                className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-accent text-brand-ink font-bold uppercase tracking-wider text-xs py-4 rounded-premium hover:bg-brand-accent-hover transition-colors duration-300 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
            >
              {submitted ? 'Routing to Specialist Planner…' : 'Submit Forex Order'}
            </button>
          </form>
        </div>

      </section>

      {/* Rates Table */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="serif-font text-2xl font-bold text-brand-ink text-center mb-2">Indicative Rates (1 Unit = INR)</h2>
        <p className="text-center text-xs text-brand-muted mb-8">{rateNote}</p>

        <div className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-surface-cool/30 border-b border-brand-surface-cool">
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted">Currency Code</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted">Currency Name</th>
                  <th scope="col" className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted text-right whitespace-nowrap">Exchange Rate (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-surface-cool">
                {CURRENCIES.map((c) => (
                  <tr key={c.code} className="hover:bg-brand-surface transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-brand-ink">{c.code}</td>
                    <td className="px-6 py-4 text-sm text-brand-muted">{c.name}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-brand-ink text-right [font-variant-numeric:tabular-nums] whitespace-nowrap">
                      {status === 'loading' ? '…' : `₹${formatRate(rates[c.code])}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-[11px] text-brand-muted mt-5 max-w-2xl mx-auto leading-relaxed">
          These are mid-market reference rates shown for guidance. Retail buying and selling rates for
          currency notes and forex cards differ, and are quoted and locked by our specialist when your
          order is placed.
        </p>
      </section>
    </div>
  );
}
