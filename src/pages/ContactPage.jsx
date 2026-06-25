import { useId, useState } from 'react'
import { brand, social } from '../data/siteData'
import { ArrowUpRight } from '../components/Icons'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const baseId = useId()
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const valid = form.name && emailValid && form.subject && form.message

  const field = (key, { type = 'text', autoComplete, label, placeholder, spellCheck } = {}) => {
    const id = `${baseId}-${key}`
    const ok = form[key] && (key !== 'email' || emailValid)
    return (
      <div>
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-white/80">{label}</label>
        <input
          id={id}
          name={key}
          type={type}
          autoComplete={autoComplete}
          spellCheck={spellCheck}
          inputMode={type === 'email' ? 'email' : undefined}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={placeholder}
          aria-invalid={key === 'email' && form.email ? !emailValid : undefined}
          className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors ${
            ok ? 'border-blue-light' : 'border-white/15 focus:border-white/40'
          }`}
        />
        <p aria-live="polite" className="min-h-[1rem]">
          {key === 'email' && form.email && !emailValid && (
            <span className="mt-1 pl-1 text-xs text-sunset">Enter a valid email address, e.g. name@email.com</span>
          )}
        </p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-night text-white">
      <div className="mx-auto grid max-w-container gap-10 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <h1 className="text-balance text-4xl sm:text-5xl font-bold">Let&rsquo;s Plan Something <span className="accent-serif text-gradient-blue">Unforgettable</span></h1>
          <p className="mt-4 max-w-md text-white/70">Reach out for a no-obligation quote. Our team responds within 24 hours.</p>
          <dl className="mt-8 space-y-4 text-sm">
            <div><dt className="text-white/50">Phone / WhatsApp</dt><dd><a className="hover:text-blue-light" href={`tel:${brand.phone}`} translate="no">{brand.phone}</a></dd></div>
            <div><dt className="text-white/50">Email</dt><dd><a className="hover:text-blue-light" href={`mailto:${brand.email}`} translate="no">{brand.email}</a></dd></div>
            <div><dt className="text-white/50">Website</dt><dd><a className="hover:text-blue-light" href={brand.website} target="_blank" rel="noreferrer" translate="no">{brand.website}</a></dd></div>
            <div><dt className="text-white/50">Principal Consultant</dt><dd>{brand.principal}</dd></div>
          </dl>
          <div className="mt-6 flex gap-3">
            <a href={social.facebook} target="_blank" rel="noreferrer" className="pill glass-panel text-white text-xs">Facebook</a>
            <a href={social.instagram} target="_blank" rel="noreferrer" className="pill glass-panel text-white text-xs">Instagram</a>
            <a href={social.youtube} target="_blank" rel="noreferrer" className="pill glass-panel text-white text-xs">YouTube</a>
          </div>
        </div>

        <div className="glass-panel rounded-card p-7">
          {sent ? (
            <p aria-live="polite" className="text-white">Thank you, {form.name}! We&rsquo;ll be in touch shortly.</p>
          ) : (
            <form className="space-y-3" noValidate onSubmit={(e) => { e.preventDefault(); if (valid) setSent(true) }}>
              {field('name', { autoComplete: 'name', label: 'Name', placeholder: 'e.g. Priya Sharma' })}
              {field('email', { type: 'email', autoComplete: 'email', spellCheck: false, label: 'Email', placeholder: 'e.g. priya@email.com' })}
              {field('subject', { label: 'Subject', placeholder: 'e.g. Honeymoon in the Maldives' })}
              <div>
                <label htmlFor={`${baseId}-message`} className="mb-1 block text-sm font-medium text-white/80">Message</label>
                <textarea
                  id={`${baseId}-message`}
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your trip…"
                  rows={4}
                  className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors ${form.message ? 'border-blue-light' : 'border-white/15 focus:border-white/40'}`}
                />
              </div>
              <button type="submit" aria-disabled={!valid} className="pill w-full justify-center bg-white text-ink font-semibold hover:bg-blue-light hover:text-white">
                Send Message <ArrowUpRight aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  )
}
