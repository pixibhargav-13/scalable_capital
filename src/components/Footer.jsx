import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { nav, site } from '../siteConfig'

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <div className="footer-col">
          <div className="footer-brand">
            <img src={logo} alt="Scalability Capital logo" />
          </div>
          <span style={{ marginTop: 10 }}>{site.tagline}</span>
          <span>© {new Date().getFullYear()} Scalability Capital</span>
        </div>

        <div className="footer-col">
          <strong style={{ color: '#20211e', letterSpacing: '.1em' }}>EXPLORE</strong>
          {nav.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
        </div>

        <div className="footer-col">
          <strong style={{ color: '#20211e', letterSpacing: '.1em' }}>CONTACT</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.phones.map((p, i) => (
            <a key={p} href={`tel:${site.phonesRaw[i]}`}>{p}</a>
          ))}
          <a href={`https://${site.domain}`}>{site.domain}</a>
        </div>
      </div>
    </footer>
  )
}
