import { useState } from 'react'
import { site } from '../siteConfig'

// Submissions are delivered to site.email via FormSubmit (no backend needed).
// The very first submission triggers a one-time activation email to that inbox.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`

const initial = { name: '', email: '', phone: '', interest: 'Business Solutions', message: '', _honey: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (form._honey) return // bot filled the hidden field
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          interest: form.interest,
          message: form.message,
          _subject: `New enquiry — ${form.interest} — ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false' || data.success === false) throw new Error('send failed')
      setStatus('success')
      setForm(initial)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="form-done">
        <div className="eyebrow">Message received</div>
        <h3>Thank you — we'll be in touch <em>shortly.</em></h3>
        <p>A member of our team will respond within one business day.</p>
        <button className="btn" type="button" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    )
  }

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry — ' + form.interest)}`

  return (
    <form className="contact-form" onSubmit={submit} noValidate={false}>
      <div className="field-row">
        <label className="field">
          <span>Full name *</span>
          <input name="name" value={form.name} onChange={update} required autoComplete="name" />
        </label>
        <label className="field">
          <span>Email *</span>
          <input type="email" name="email" value={form.email} onChange={update} required autoComplete="email" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Phone</span>
          <input type="tel" name="phone" value={form.phone} onChange={update} autoComplete="tel" />
        </label>
        <label className="field">
          <span>I'm interested in</span>
          <select name="interest" value={form.interest} onChange={update}>
            <option>Business Solutions</option>
            <option>Fractional CFO</option>
            <option>Private Wealth</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>How can we help? *</span>
        <textarea name="message" rows="5" value={form.message} onChange={update} required />
      </label>

      {/* Honeypot — hidden from people, tempting to bots */}
      <input type="text" name="_honey" value={form._honey} onChange={update} className="hp" tabIndex="-1" autoComplete="off" />

      {status === 'error' && (
        <p className="form-error">
          Something went wrong sending your message. Please try again, or <a href={mailto}>email us directly</a>.
        </p>
      )}

      <button className="btn btn-dark" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message →'}
      </button>
    </form>
  )
}
