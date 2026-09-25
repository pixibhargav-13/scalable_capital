import { Link } from 'react-router-dom'

// The SCALABLE framework as a journey: a gold line runs from complexity to
// clarity, and the eight letters sit on it as stops that spell the word. When
// the row scrolls into view the line draws across and the stops light up in
// turn. Used on Home and on the Our Approach page (longer copy, no intro).
export default function ScalableFramework({ steps, intro = true }) {
  return (
    <section className={`scalable${intro ? '' : ' scalable-plain'}`}>
      <div className="container">
        {intro && (
          <div className="section-head">
            <div>
              <div className="eyebrow">Our signature approach</div>
              <h2>The <em>Scalable</em> Framework</h2>
            </div>
            <p>Our signature approach to moving businesses from financial complexity to clarity and scalable growth.</p>
          </div>
        )}

        <div className="journey">
          <div className="journey-ends" aria-hidden="true">
            <span>Complexity</span>
            <span>Clarity &amp; scalable growth</span>
          </div>
          <ol className="journey-steps">
            {steps.map(([letter, title, desc], i) => (
              <li className="journey-step" key={i} style={{ '--i': i }}>
                <span className="journey-node" aria-hidden="true">{letter}</span>
                <span className="journey-no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{title.charAt(0) + title.slice(1).toLowerCase()}</h3>
                <p>{desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {intro && (
          <div className="journey-foot">
            <p><strong>SCALABLE</strong> is the operating philosophy behind how we create durable financial and strategic advantage.</p>
            <Link className="btn" to="/framework">Explore our approach →</Link>
          </div>
        )}
      </div>
    </section>
  )
}
