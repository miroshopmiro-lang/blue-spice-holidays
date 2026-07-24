import { useEffect, useState } from 'react';

// Currencies shown on the forex page — the ones Blue Spice's destinations
// actually need (Gulf, Europe, UK, SE Asia, Nepal, Australia/Canada/Japan).
export const CURRENCIES = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'AED', name: 'UAE Dirham' },
  { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'THB', name: 'Thai Baht' },
  { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'NPR', name: 'Nepalese Rupee' },
];

// Last-resort values so the page still renders a table if both APIs are
// unreachable. Deliberately NOT presented as current — when these are in use
// the UI says so and hides the timestamp. Snapshot taken 24 Jul 2026.
const FALLBACK_RATES = {
  USD: 88.30, EUR: 103.51, GBP: 118.74, AED: 24.04, SGD: 68.32, THB: 2.72,
  MYR: 20.94, AUD: 61.59, CAD: 62.70, JPY: 0.57, CHF: 108.10, NPR: 0.63,
};

const CODES = CURRENCIES.map((c) => c.code);

// Both sources are free, keyless and CORS-enabled — no API key to leak in a
// client bundle and no per-call cost. Rates refresh about once a day, which is
// the right granularity for an indicative travel-money table.

// exchangerate-api's open endpoint: USD-based, so INR per unit of X is
// rates.INR / rates.X. Ships a real "last updated" timestamp.
async function fetchPrimary(signal) {
  const res = await fetch('https://open.er-api.com/v6/latest/USD', { signal });
  if (!res.ok) throw new Error(`primary ${res.status}`);
  const data = await res.json();
  if (data.result !== 'success' || !data.rates?.INR) throw new Error('primary payload');

  const inrPerUsd = data.rates.INR;
  const rates = {};
  for (const code of CODES) {
    const perUsd = data.rates[code];
    if (perUsd) rates[code] = inrPerUsd / perUsd;
  }
  return { rates, updatedAt: data.time_last_update_utc || null };
}

// jsdelivr-hosted currency-api: INR-based, giving units of X per 1 INR, so
// invert for INR per unit. Used only if the primary is down.
async function fetchFallback(signal) {
  const res = await fetch(
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json',
    { signal }
  );
  if (!res.ok) throw new Error(`fallback ${res.status}`);
  const data = await res.json();
  const table = data.inr;
  if (!table) throw new Error('fallback payload');

  const rates = {};
  for (const code of CODES) {
    const perInr = table[code.toLowerCase()];
    if (perInr) rates[code] = 1 / perInr;
  }
  return { rates, updatedAt: data.date || null };
}

/**
 * Live INR exchange rates, keyed by currency code, expressed as
 * "1 unit of that currency = N INR".
 *
 * status: 'loading' until a source answers, then 'live', or 'stale' if both
 * sources failed and the hardcoded snapshot is being shown instead.
 */
export default function useForexRates() {
  const [state, setState] = useState({
    rates: FALLBACK_RATES,
    updatedAt: null,
    status: 'loading',
  });

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    (async () => {
      for (const fetcher of [fetchPrimary, fetchFallback]) {
        try {
          const { rates, updatedAt } = await fetcher(controller.signal);
          if (cancelled) return;
          // Only accept a source that actually covered the listed currencies.
          if (Object.keys(rates).length < CODES.length) continue;
          setState({ rates, updatedAt, status: 'live' });
          return;
        } catch (err) {
          if (err.name === 'AbortError') return;
          // Try the next source.
        }
      }
      if (!cancelled) {
        setState({ rates: FALLBACK_RATES, updatedAt: null, status: 'stale' });
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return state;
}
