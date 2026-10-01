import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { nav, site } from '../siteConfig'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <nav>
      <div className="container nav">
        <Link className="logo" to="/" aria-label={site.name}>
          <img src={logo} alt="" />
          <span className="logo-word">SCALABILITY <span>CAPITAL</span></span>
        </Link>

        <div className="links">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
        </div>

        <Link className="nav-cta" to="/contact">Start a conversation</Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-links${open ? ' open' : ''}`}>
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
        ))}
      </div>
    </nav>
  )
}
