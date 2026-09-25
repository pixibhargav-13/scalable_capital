import { site } from '../siteConfig'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const wa = (raw) => `https://wa.me/${raw.replace('+', '')}`

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Start a conversation</div>
          <h1>Let's create <em>clarity.</em></h1>
          <p>Tell us where you are today, where you want to go and what is getting in the way.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="contact-layout">
            <div>
              <p className="big" style={{ marginBottom: 36 }}>The right conversation can change the <em>trajectory.</em></p>
              <ContactForm />
            </div>

            <div className="dark-panel">
              <div className="eyebrow">Get in touch</div>
              <h2 style={{ fontSize: 34, lineHeight: 1 }}>Scalability Capital</h2>

              <div className="contact-label">Email</div>
              <p className="contact-line">
                <a className="gold" href={`mailto:${site.email}`}>{site.email}</a>
              </p>

              <div className="contact-label">India</div>
              <p className="contact-line">
                <a href={`tel:${site.phonesRaw[0]}`}>{site.phones[0]}</a>
                <a className="wa-inline" href={wa(site.phonesRaw[0])} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>

              <div className="contact-label">UAE</div>
              <p className="contact-line">
                <a href={`tel:${site.phonesRaw[1]}`}>{site.phones[1]}</a>
                <a className="wa-inline" href={wa(site.phonesRaw[1])} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>

              <div className="contact-label">Online</div>
              <p className="contact-line">
                <a href={`https://${site.domain}`}>{site.domain}</a>
              </p>

              <p style={{ marginTop: 22 }}>Business advisory, strategic finance and private wealth conversations. We typically respond within one business day.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
