import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
const ServicesHubPage = lazy(() => import('./pages/ServicesHubPage'));
const SpecialToursHubPage = lazy(() => import('./pages/SpecialToursHubPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const DomesticHolidaysPage = lazy(() => import('./pages/DomesticHolidaysPage'));
const InternationalHolidaysPage = lazy(() => import('./pages/InternationalHolidaysPage'));
const LadiesToursPage = lazy(() => import('./pages/LadiesToursPage'));
const SpiritualToursPage = lazy(() => import('./pages/SpiritualToursPage'));
const DestinationWeddingsPage = lazy(() => import('./pages/DestinationWeddingsPage'));
const WellnessRetreatsPage = lazy(() => import('./pages/WellnessRetreatsPage'));
const FlightsPage = lazy(() => import('./pages/FlightsPage'));
const ForexPage = lazy(() => import('./pages/ForexPage'));
const CruisesPage = lazy(() => import('./pages/CruisesPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const BrochuresPage = lazy(() => import('./pages/BrochuresPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CollaboratePage = lazy(() => import('./pages/CollaboratePage'));
const ReferPage = lazy(() => import('./pages/ReferPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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

              {/* Holidays */}
              <Route path="/holidays" element={<HolidaysHubPage />} />
              <Route path="/holidays/domestic" element={<DomesticHolidaysPage />} />
              <Route path="/holidays/international" element={<InternationalHolidaysPage />} />
              <Route path="/holidays/ladies" element={<LadiesToursPage />} />
              <Route path="/holidays/spiritual" element={<SpiritualToursPage />} />
              <Route path="/holidays/:slug" element={<CategoryPage group="holidays" />} />

              {/* Services */}
              <Route path="/services" element={<ServicesHubPage />} />
              <Route path="/services/flights" element={<FlightsPage />} />
              <Route path="/services/forex" element={<ForexPage />} />
              <Route path="/services/destination-weddings" element={<DestinationWeddingsPage />} />
              <Route path="/services/:slug" element={<CategoryPage group="services" />} />

              {/* SPL Tour */}
              <Route path="/special-tours" element={<SpecialToursHubPage />} />
              <Route path="/special-tours/:slug" element={<CategoryPage group="special-tours" />} />

              {/* Flat menu pages */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/brochures" element={<BrochuresPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/collaborate" element={<CollaboratePage />} />
              <Route path="/refer" element={<ReferPage />} />

              {/* Kept live, footer-linked only (not in the client's 9-menu spec) */}
              <Route path="/wellness" element={<WellnessRetreatsPage />} />
              <Route path="/cruises" element={<CruisesPage />} />

              {/* Redirects for old links */}
              <Route path="/darshan" element={<Navigate to="/holidays/spiritual" replace />} />
              <Route path="/flights" element={<Navigate to="/services/flights" replace />} />
              <Route path="/forex" element={<Navigate to="/services/forex" replace />} />

              <Route path="*" element={<NotFoundPage />} />
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
