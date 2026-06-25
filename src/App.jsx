import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import Home from './pages/Home'
import PackagesPage from './pages/PackagesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  useEffect(() => {
    const pageTitles = {
      '/': 'Home',
      '/packages': 'Packages',
      '/gallery': 'Gallery',
      '/contact': 'Contact',
    }
    const pageName = pageTitles[pathname]
    document.title = pageName 
      ? `${pageName} | Blue Spice Holidays - Warmth & Luxury`
      : 'Blue Spice Holidays | Warmth & Luxury Across Every Journey'
  }, [pathname])

  const openBooking = (destination = '') => {
    if (destination && typeof destination === 'string') {
      navigate(`/contact?destination=${encodeURIComponent(destination)}`)
    } else {
      navigate('/contact')
    }
  }

  return (
    <SmoothScroll>
      <ScrollToTop />
      <Header onBook={() => openBooking('')} />
      <Routes>
        <Route path="/" element={<Home onBook={openBooking} />} />
        <Route path="/packages" element={<PackagesPage onBook={openBooking} />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <WhatsAppWidget />
      <Footer />
    </SmoothScroll>
  )
}
