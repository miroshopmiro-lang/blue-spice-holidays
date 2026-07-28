import { useNavigate, useLocation } from 'react-router-dom';

// Every "Enquire Now" CTA on the site pre-fills the custom itinerary
// form and brings it into view. We navigate to the dedicated `/custom-itinerary`
// page and pass destination & month details via query parameters.
export default function useEnquiry() {
  const navigate = useNavigate();
  const location = useLocation();

  return (destination, month = 'Any month') => {
    const firePrefill = () => {
      window.dispatchEvent(
        new CustomEvent('prefill-itinerary', { detail: { destination, month } })
      );
    };

    // If already on /custom-itinerary, just prefill and scroll into view
    if (location.pathname === '/custom-itinerary') {
      firePrefill();
      const formEl = document.getElementById('custom-name') || document.getElementById('custom');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Navigate to dedicated Custom Itinerary page with destination in query params & state
    const searchParams = new URLSearchParams();
    if (destination) searchParams.set('destination', destination);
    if (month) searchParams.set('month', month);

    navigate({
      pathname: '/custom-itinerary',
      search: searchParams.toString()
    }, {
      state: { destination, month }
    });
  };
}
