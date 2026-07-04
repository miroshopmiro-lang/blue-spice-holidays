import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustRibbon from './components/TrustRibbon';
import CuratedPackages from './components/CuratedPackages';
import PopularDestinations from './components/PopularDestinations';
import BespokeServices from './components/BespokeServices';
import WeddingsEvents from './components/WeddingsEvents';
import FullscreenPromoCards from './components/FullscreenPromoCards';
import CustomItineraryForm from './components/CustomItineraryForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

// Subpages
import HolidaysHubPage from './pages/HolidaysHubPage';
import DomesticHolidaysPage from './pages/DomesticHolidaysPage';
import InternationalHolidaysPage from './pages/InternationalHolidaysPage';
import WellnessRetreatsPage from './pages/WellnessRetreatsPage';
import FlightsPage from './pages/FlightsPage';
import ForexPage from './pages/ForexPage';
import CruisesPage from './pages/CruisesPage';
import DarshanPage from './pages/DarshanPage';

// Scroll to top helper on page transitions
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow target element to render
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

// Homepage layout
function Home() {
  return (
    <>
      <HeroSection />
      <TrustRibbon />
      <PopularDestinations />
      <BespokeServices />
      <CuratedPackages />
      <WeddingsEvents />
      <FullscreenPromoCards />
      <CustomItineraryForm />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-surface text-brand-ink flex flex-col justify-between">
        <Header />
        <main id="main-content" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/holidays" element={<HolidaysHubPage />} />
            <Route path="/holidays/domestic" element={<DomesticHolidaysPage />} />
            <Route path="/holidays/international" element={<InternationalHolidaysPage />} />
            <Route path="/wellness" element={<WellnessRetreatsPage />} />
            <Route path="/flights" element={<FlightsPage />} />
            <Route path="/forex" element={<ForexPage />} />
            <Route path="/cruises" element={<CruisesPage />} />
            <Route path="/darshan" element={<DarshanPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}
