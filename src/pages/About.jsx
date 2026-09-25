const values = [
  ['01', 'Independent Thinking', 'Focus on the underlying economics and the decisions that matter.'],
  ['02', 'Practical Partnership', 'Work alongside management rather than simply deliver reports.'],
  ['03', 'Long-Term Perspective', 'Build systems and capital strategies designed to compound over time.'],
]

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">About Scalability Capital</div>
          <h1>More than advisors.<br />A partner for the <em>next stage.</em></h1>
          <p>We believe financial expertise should help people and businesses make better decisions — not simply explain the past.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <p className="big">One philosophy. <em>Two sides of wealth creation.</em></p>
            <div className="copy">
              <p>For businesses, we bring financial analysis, planning and strategic thinking together to create clarity and stronger foundations for growth.</p>
              <p>For individuals, we apply the same discipline to capital allocation, diversification and long-term wealth creation.</p>
              <p>Our role is to become a trusted strategic partner where financial complexity can otherwise slow decisions down.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="editorial-grid">
            <div className="photo">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1800&q=90"
                alt="Bright contemporary office with natural light and plants"
              />
              <div className="photo-caption">The Scalability Capital Perspective</div>
            </div>
            <div className="editorial-copy">
              <div className="eyebrow">Our philosophy</div>
              <h3>Clarity over complexity.<br /><em>Long term over short term.</em></h3>
              <p>Premium financial advice should feel calm, precise and useful — with enough depth to support important decisions without unnecessary complexity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <div className="section-head">
            <h2>Clarity over complexity.<br /><em>Long term over short term.</em></h2>
            <p>Our work is grounded in disciplined analysis, practical execution and a long-term view of value creation.</p>
          </div>
          <div className="grid" style={{ background: '#34372f', borderColor: '#34372f' }}>
            {values.map(([no, title, desc]) => (
              <div className="card" style={{ background: 'var(--dark)' }} key={no}>
                <span className="no">{no}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
