import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, brand } from '../data/siteData'
import { ArrowUpRight, Menu, Close } from './Icons'
import { cn } from '../lib/cn'

export default function Header({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname, hash])

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          'w-full max-w-container flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500',
          scrolled ? 'glass-panel bg-black/30 shadow-lg' : 'glass-panel'
        )}
      >
        <Link to="/" className="flex items-center gap-2 pl-2">
          <span className="font-script text-2xl text-white" translate="no">Blue Spice</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => {
            const active = l.to === pathname || (l.to === '/' && pathname === '/' && !hash)
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={cn(
                    'pill text-white/80 hover:text-white',
                    active && 'bg-white text-ink hover:text-ink'
                  )}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={onBook}
            className="pill bg-white text-ink font-semibold hover:bg-blue-light hover:text-white"
            aria-label="Book Now"
          >
            Book Now <ArrowUpRight />
          </button>
          <button className="md:hidden text-white p-2" onClick={() => setOpen((v) => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav">
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="absolute top-20 inset-x-4 glass-panel bg-black/60 rounded-card p-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="block px-4 py-3 rounded-2xl text-white/90 hover:bg-white/10">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
