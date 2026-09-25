import { useEffect, useRef, useState } from 'react'
import { site } from '../siteConfig'

const regions = ['India', 'UAE']
const greeting = encodeURIComponent("Hello Scalability Capital, I'd like to start a conversation.")

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5z"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
      />
      <path
        d="M9.2 7.6c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6 0l.7-.5c.2-.1.4-.1.6 0l1.9.8c.4.2.4.4.4.6v.5c0 .3 0 .6-.4.8-.6.4-1.4.6-2.2.5-2.9-.5-5.4-3-5.9-5.9-.1-.8.1-1.6.5-2.2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return
    const onDown = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className={`wa-float${open ? ' open' : ''}`} ref={ref}>
      <div className="wa-panel" role="dialog" aria-label="Chat on WhatsApp" aria-hidden={!open}>
        <div className="wa-panel-head">
          <div className="eyebrow" style={{ margin: 0 }}>Chat on WhatsApp</div>
          <p>Choose a line and we'll reply as soon as possible.</p>
        </div>
        {site.phonesRaw.map((raw, i) => (
          <a
            key={raw}
            className="wa-option"
            href={`https://wa.me/${raw.replace('+', '')}?text=${greeting}`}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
          >
            <span className="wa-region">{regions[i]}</span>
            <span className="wa-number">{site.phones[i]}</span>
            <span className="wa-arrow">→</span>
          </a>
        ))}
      </div>

      <button
        className="wa-button"
        aria-label={open ? 'Close WhatsApp options' : 'Chat with us on WhatsApp'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="wa-icon"><ChatIcon /></span>
        <span className="wa-close" aria-hidden="true">×</span>
      </button>
    </div>
  )
}
