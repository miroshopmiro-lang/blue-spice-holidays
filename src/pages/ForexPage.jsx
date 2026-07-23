import { useState } from 'react';
import useEnquiry from '../hooks/useEnquiry';

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', rate: 83.45 },
  { code: 'EUR', name: 'Euro', rate: 90.12 },
  { code: 'GBP', name: 'British Pound', rate: 105.80 },
  { code: 'AED', name: 'UAE Dirham', rate: 22.72 },
  { code: 'SGD', name: 'Singapore Dollar', rate: 61.90 },
  { code: 'THB', name: 'Thai Baht', rate: 2.28 },
];

export default function ForexPage() {
  const [inrAmount, setInrAmount] = useState('10000');
  const [currency, setCurrency] = useState('USD');
  const [converted, setConverted] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const enquire = useEnquiry();

  const handleConvert = (e) => {
    e.preventDefault();
    const currObj = CURRENCIES.find((c) => c.code === currency);
    if (currObj) {
      const value = (parseFloat(inrAmount) / currObj.rate).toFixed(2);
      setConverted(`${value} ${currency}`);
    }
  };

  const handleRequest = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      enquire(`Forex inquiry: Buy ${currency} worth ₹${inrAmount}`);
    }, 1500);
  };

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
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-muted mb-4">Currency Exchange Converter</h2>
            <form onSubmit={handleConvert} className="space-y-4">
              <div>
                <label htmlFor="forex-amount" className="block text-xs font-bold uppercase text-brand-muted mb-1">Enter Amount (INR)</label>
                <input 
                  id="forex-amount"
                  name="amount"
                  type="number" 
                  value={inrAmount}
                  onChange={(e) => setInrAmount(e.target.value)}
                  className="w-full bg-brand-surface border border-brand-surface-cool rounded-sm px-4 py-3 text-sm focus:border-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 font-semibold"
                  required
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
              <button 
                type="submit" 
                className="w-full bg-brand-ink text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-premium hover:bg-brand-accent hover:text-brand-ink transition-colors duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Calculate Exchange Value
              </button>
            </form>
          </div>

          {converted && (
            <div className="mt-6 bg-brand-surface-cool/30 border border-brand-surface-cool p-4 rounded-premium text-center">
              <span className="text-xs text-brand-muted uppercase font-bold block">Estimated Value</span>
              <span className="serif-font text-2xl font-bold text-brand-ink mt-1 block [font-variant-numeric:tabular-nums]">{converted}</span>
              <span className="text-[10px] text-brand-muted block mt-1">Rates are indicative. Subject to current exchange guidelines.</span>
            </div>
          )}
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
                <option value="both">Multi-Currency Card & Physical Cash</option>
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
        <h3 className="serif-font text-2xl font-bold text-brand-ink text-center mb-8">Indicative Buying Rates (1 Unit = INR)</h3>
        <div className="bg-white border border-brand-surface-cool rounded-premium overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-surface-cool/30 border-b border-brand-surface-cool">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted">Currency Code</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted">Currency Name</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-muted text-right">Exchange Rate (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-surface-cool">
              {CURRENCIES.map((c) => (
                <tr key={c.code} className="hover:bg-brand-surface transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-brand-ink">{c.code}</td>
                  <td className="px-6 py-4 text-sm text-brand-muted">{c.name}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-brand-ink text-right [font-variant-numeric:tabular-nums]">₹{c.rate.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
