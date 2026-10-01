import { Link } from 'react-router-dom'
import mountainTerrace from '../assets/mountain-terrace.jpg'

const services = [
  ['01', 'Financial Strategy & FP&A', 'Budgeting, forecasting, management reporting, scenario planning and financial models.'],
  ['02', 'Cash Flow Management', 'Cash forecasting, working capital analysis, liquidity planning and cash controls.'],
  ['03', 'Fractional CFO', 'CFO-level leadership across reporting, planning, performance and strategic decisions.'],
  ['04', 'Strategic Advisory', 'Growth, pricing, investment, operating model and capital allocation decisions.'],
  ['05', 'Growth Intelligence', 'KPI architecture, profitability analysis, dashboards and performance insight.'],
  ['06', 'Business Scaling', 'Processes, controls and financial infrastructure for sustainable growth.'],
]

export default function Business() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Business Growth</div>
          <h1>Financial intelligence for the <em>next stage.</em></h1>
          <p>We work alongside founders and leadership teams to create visibility, discipline and decision support across the financial life of the business.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>From numbers to <em>decisions.</em></h2>
            <p>Our services are designed to work together, not as disconnected projects.</p>
          </div>
          <div className="grid">
            {services.map(([no, title, desc]) => (
              <div className="card" key={no}>
                <span className="no">{no}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="editorial-grid">
            <div className="photo">
              <img
                src={mountainTerrace}
                alt="Marble terrace overlooking a mountain lake at sunset"
              />
              <div className="photo-caption">Structure / Precision / Growth</div>
            </div>
            <div className="editorial-copy">
              <div className="eyebrow">How we work</div>
              <h3>From numbers to <em>decisions.</em></h3>
              <p>Our role is to make finance useful at the moment a decision is being made — not weeks after it.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <div className="split">
            <div>
              <div className="eyebrow">Built around your stage</div>
              <p className="big">A finance function should become a <em>competitive advantage.</em></p>
            </div>
            <div className="copy">
              <p>Whether the business is building its first planning process, preparing for rapid growth or professionalising its finance function, we tailor the level of support to the decisions that matter now.</p>
              <p>We can operate as a strategic finance partner, an extension of management or a fractional CFO function.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow">Business Solutions</div>
              <h2>Make the numbers work harder.</h2>
            </div>
            <div>
              <p>Let's discuss what your business needs next.</p>
              <Link className="btn" to="/contact">Talk to us →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
