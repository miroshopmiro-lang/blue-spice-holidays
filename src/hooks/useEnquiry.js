import { useNavigate } from 'react-router-dom';

// Every "Enquire Now" CTA on the site needs to (a) prefill the custom itinerary
// form and (b) bring it into view. On the homepage the form is already mounted,
// so this is a same-page scroll. On every other route it isn't mounted at all
// (previously these CTAs silently did nothing) — so we navigate home first and
// poll briefly for the form to mount before firing the prefill event and scrolling.
export default function useEnquiry() {
  const navigate = useNavigate();

  return (destination, month = 'Any month') => {
    const fire = () => {
      window.dispatchEvent(new CustomEvent('prefill-itinerary', { detail: { destination, month } }));
    };

    const existing = document.getElementById('custom');
    if (existing) {
      fire();
      existing.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    navigate('/#custom');

    let attempts = 0;
    const tryFire = () => {
      const el = document.getElementById('custom');
      if (el) {
        fire();
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 20) {
        attempts += 1;
        setTimeout(tryFire, 100);
      }
    };
    setTimeout(tryFire, 50);
  };
}
