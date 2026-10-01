import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import marbleStairs from '../assets/marble-stairs.jpg'
import mountainTerrace from '../assets/mountain-terrace.jpg'
import ScalableFramework from '../components/ScalableFramework'

const frameworkSteps = [
  ['S', 'STRATEGY', 'Define direction.'],
  ['C', 'CASH FLOW', 'Strengthen resilience.'],
  ['A', 'ANALYSIS', 'Turn data into insight.'],
  ['L', 'LEADERSHIP', 'Bring CFO discipline.'],
  ['A', 'ALIGNMENT', 'Connect capital and strategy.'],
  ['B', 'BUILD', 'Create foundations.'],
  ['L', 'LEVERAGE', 'Amplify what works.'],
  ['E', 'EXECUTE', 'Turn strategy into action.'],
]

export default function Home() {
  return (
    <>
      <section className="hero hero-full hero-overlay-text hero-light">
        <div className="hero-image">
          <HeroVideo name="hero-tower" />
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="eyebrow">An ecosystem of wealth creation</div>
          <h1>Build wealth.<br /><em>Scale with clarity.</em></h1>
          <p>We partner with businesses to build stronger financial foundations and with individuals to grow, preserve and thoughtfully allocate wealth.</p>
          <div className="hero-actions">
            <Link className="btn primary" to="/business">Explore solutions →</Link>
            <Link className="btn" to="/contact">Start a conversation</Link>
          </div>
        </div>

        <div className="hero-meta hero-meta-left">Strategy · Capital · Opportunity</div>
        <div className="hero-meta hero-meta-right">Built for growth<br />Designed for the long term</div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Financial clarity for businesses built to <em>grow.</em></h2>
            <p>Financial planning, FP&amp;A, cash flow, CFO and strategic advisory designed around better decisions.</p>
          </div>
          <div className="grid">
            <div className="card">
              <span className="no">01 / BUSINESS</span>
              <h3>Financial Strategy &amp; FP&amp;A</h3>
              <p>Budgets, forecasts, management reporting and scenario planning.</p>
              <Link to="/business">Explore →</Link>
            </div>
            <div className="card">
              <span className="no">02 / BUSINESS</span>
              <h3>Cash Flow Management</h3>
              <p>Liquidity visibility, working capital discipline and predictability.</p>
              <Link to="/business">Explore →</Link>
            </div>
            <div className="card">
              <span className="no">03 / BUSINESS</span>
              <h3>Fractional CFO</h3>
              <p>Senior financial leadership across planning, reporting and strategy.</p>
              <Link to="/business">Explore →</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="image-band">
            <div className="photo">
              <img
                src={marbleStairs}
                alt="Marble staircase rising through light-filled modern architecture"
              />
              <div className="photo-caption photo-caption-lg">Your Growth Partner</div>
            </div>
            <div className="photo-copy">
              <div className="eyebrow">01 — Build wealth through business</div>
              <h2 style={{ fontSize: 'clamp(35px,4vw,56px)', lineHeight: '.94', letterSpacing: '-.05em', margin: '0 0 18px' }}>
                A finance function should become a <em>competitive advantage.</em>
              </h2>
              <p>We connect planning, performance, cash flow and strategy so leadership can make better decisions with confidence.</p>
              <Link className="btn" style={{ borderColor: '#d8d4c8', color: '#f5f3ed', alignSelf: 'flex-start' }} to="/business">Business Solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <ScalableFramework steps={frameworkSteps} />

      <section>
        <div className="container">
          <div className="section-head">
            <h2>Capital, thoughtfully <em>allocated.</em></h2>
            <p>Private wealth solutions built around objectives, diversification, risk and long-term outcomes.</p>
          </div>
          <div className="split">
            <div className="big">From creating wealth to <em>compounding it.</em></div>
            <div className="copy">
              <p>We help individuals and families evaluate suitable public and private investment opportunities and build a coherent capital strategy.</p>
              <Link className="btn" to="/wealth">Explore Private Wealth →</Link>
            </div>
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
              <div className="photo-caption">Private Wealth / Long-Term Capital</div>
            </div>
            <div className="editorial-copy">
              <div className="eyebrow">02 — Grow &amp; preserve capital</div>
              <h3>Wealth, strategically <em>compounded.</em></h3>
              <p>A broader view of wealth — connecting diversification, liquidity, risk and long-term objectives.</p>
              <Link className="btn" to="/wealth">Private Wealth →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow">Let's create clarity</div>
              <h2>Clarity creates momentum.</h2>
            </div>
            <div>
              <p>Tell us where you are today, where you want to go and what is getting in the way.</p>
              <Link className="btn" to="/contact">Start a conversation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
