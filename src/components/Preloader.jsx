import { useState, useEffect } from 'react'
import logoLight from '../assets/logo-light.png'

export default function Preloader() {
  // Show once per browser session so refreshes within a visit don't replay it.
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem('sc_intro_done')
    } catch {
      return true
    }
  })
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (!show) return
    document.body.style.overflow = 'hidden'

    const leaveAt = setTimeout(() => setLeaving(true), 4400)
    const doneAt = setTimeout(() => {
      setShow(false)
      try {
        sessionStorage.setItem('sc_intro_done', '1')
      } catch {}
    }, 5250)

    return () => {
      clearTimeout(leaveAt)
      clearTimeout(doneAt)
      document.body.style.overflow = ''
    }
  }, [show])

  if (!show) return null

  return (
    <div className={`preloader${leaving ? ' leaving' : ''}`} aria-hidden="true">
      <div className="preloader-glow" />
      <div className="preloader-inner">
        <img className="preloader-logo" src={logoLight} alt="" />
        <div className="preloader-rule" />
        <div className="preloader-tag">STRATEGIC FINANCE · ADVISORY · PRIVATE WEALTH</div>
      </div>
    </div>
  )
}
