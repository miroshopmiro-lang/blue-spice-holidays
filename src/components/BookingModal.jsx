import { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Close, ArrowUpRight } from './Icons'
import { brand } from '../data/siteData'

export default function BookingModal({ open, onClose, defaultTrip = '' }) {
  const [sent, setSent] = useState(false)
  const [trip, setTrip] = useState('')
  const titleId = useId()
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    if (open) {
      setTrip(defaultTrip || '')
    }
  }, [open, defaultTrip])

  useEffect(() => {
    if (!open) return
    triggerRef.current = document.activeElement
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50)
    return () => {
      document.removeEventListener('keydown', onKey)
      clearTimeout(t)
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus()
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 [overscroll-behavior:contain]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-md rounded-card bg-white p-7"
          >
            <button onClick={onClose} className="absolute right-5 top-5 text-ink-soft hover:text-ink" aria-label="Close dialog"><Close /></button>
            <h3 id={titleId} className="text-2xl font-bold text-ink">Plan Your Journey</h3>
            <p className="mt-1 text-sm text-ink-soft">No planning fees. No-obligation quote within 24 hours.</p>
            {sent ? (
               <p aria-live="polite" className="mt-6 rounded-2xl bg-surface p-4 text-sm text-ink">Thank you! Our team will reach out shortly. For urgent plans, WhatsApp us at {brand.phone}.</p>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div>
                  <label htmlFor={`${titleId}-name`} className="mb-1 block text-sm font-medium text-ink">Name</label>
                  <input ref={firstFieldRef} id={`${titleId}-name`} name="name" type="text" autoComplete="name" required placeholder="e.g. Priya Sharma" className="w-full rounded-2xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-blue-primary" />
                </div>
                <div>
                  <label htmlFor={`${titleId}-email`} className="mb-1 block text-sm font-medium text-ink">Email</label>
                  <input id={`${titleId}-email`} name="email" type="email" autoComplete="email" inputMode="email" spellCheck={false} required placeholder="e.g. priya@email.com" className="w-full rounded-2xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-blue-primary" />
                </div>
                <div>
                  <label htmlFor={`${titleId}-trip`} className="mb-1 block text-sm font-medium text-ink">Destination & dates</label>
                  <input id={`${titleId}-trip`} name="trip" type="text" required value={trip} onChange={(e) => setTrip(e.target.value)} placeholder="e.g. Bali, Oct 12-19" className="w-full rounded-2xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-blue-primary" />
                </div>
                <button type="submit" className="pill w-full justify-center bg-night text-white font-semibold hover:bg-blue-primary">Request Quote <ArrowUpRight aria-hidden="true" /></button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
