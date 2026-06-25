import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from './components/SmoothScroll'
import Header from './components/Header'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
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
  const [booking, setBooking] = useState(false)
  const [defaultTrip, setDefaultTrip] = useState('')
  const openBooking = (destination = '') => {
    setDefaultTrip(destination)
    setBooking(true)
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
      <Footer />
      <BookingModal open={booking} onClose={() => setBooking(false)} defaultTrip={defaultTrip} />
    </SmoothScroll>
  )
}
