import { Link } from 'react-router-dom'

// The SCALABLE framework in the original black layout: eight columns divided
// by hairlines, each led by a gold letter ring. Hovering a column lifts it,
// fills its ring and draws a gold rule across the top while the others dim.
// Used on Home and on the Our Approach page (longer copy, no intro).
export default function ScalableFramework({ steps, intro = true }) {
  return (
    <section className={`scalable dark${intro ? '' : ' scalable-plain'}`}>
      <div className="container">
        {intro && (
          <div className="section-head">
            <div>
              <div className="eyebrow">Our signature approach</div>
              <h2>The <em>SCALABLE</em> Framework</h2>
            </div>
            <p>Our signature approach to moving businesses from financial complexity to clarity and scalable growth.</p>
          </div>
        )}

        <ol className="framework">
          {steps.map(([letter, title, desc], i) => (
            <li className="step" key={i} style={{ '--i': i }}>
              <span className="letter" aria-hidden="true">{letter}</span>
              <span className="step-no">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </li>
          ))}
        </ol>

        {intro && (
          <div className="framework-foot">
            <p><em>SCALABLE</em> is the operating philosophy behind how we create durable financial and strategic advantage.</p>
            <Link className="btn" to="/framework">Explore our approach →</Link>
          </div>
        )}
      </div>
    </section>
  )
}
