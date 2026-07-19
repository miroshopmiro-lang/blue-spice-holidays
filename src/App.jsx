import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustCrown from './components/TrustCrown';
import TrustRibbon from './components/TrustRibbon';
import CuratedPackages from './components/CuratedPackages';
import PopularDestinations from './components/PopularDestinations';
import BespokeServices from './components/BespokeServices';
import WeddingsEvents from './components/WeddingsEvents';
import LadiesOnlyTours from './components/LadiesOnlyTours';
import FullscreenPromoCards from './components/FullscreenPromoCards';
import CustomItineraryForm from './components/CustomItineraryForm';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import AmbientMusic from './components/AmbientMusic';

// Subpages using React lazy loading
const HolidaysHubPage = lazy(() => import('./pages/HolidaysHubPage'));
const DomesticHolidaysPage = lazy(() => import('./pages/DomesticHolidaysPage'));
const InternationalHolidaysPage = lazy(() => import('./pages/InternationalHolidaysPage'));
const WellnessRetreatsPage = lazy(() => import('./pages/WellnessRetreatsPage'));
const FlightsPage = lazy(() => import('./pages/FlightsPage'));
const ForexPage = lazy(() => import('./pages/ForexPage'));
const CruisesPage = lazy(() => import('./pages/CruisesPage'));
const DarshanPage = lazy(() => import('./pages/DarshanPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const BrochuresPage = lazy(() => import('./pages/BrochuresPage'));

// Premium, minimal page loader matching the luxury travel brand aesthetic
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh] w-full" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        <span className="text-xs uppercase font-mono tracking-[0.25em] text-royal/60">Loading Journey...</span>
      </div>
    </div>
  );
}

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
      <TrustCrown />
      <PopularDestinations />
      <BespokeServices />
      <CuratedPackages />
      <LadiesOnlyTours />
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
          <Suspense fallback={<PageLoader />}>
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
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/brochures" element={<BrochuresPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppWidget />
        <AmbientMusic />
      </div>
    </BrowserRouter>
  );
}
