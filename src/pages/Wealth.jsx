const areas = [
  ['01', 'Private Markets', 'Evaluate private equity and selected private-market opportunities where appropriate.'],
  ['02', 'Public Investments', 'Build diversified exposure through mutual funds and other market-based investments.'],
  ['03', 'Wealth Strategy', 'Align investments, liquidity, risk and long-term objectives within one capital plan.'],
  ['04', 'Ongoing Perspective', 'Review and adapt the strategy as goals, markets and circumstances change.'],
]

export default function Wealth() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Private Wealth</div>
          <h1>Capital, thoughtfully <em>allocated.</em></h1>
          <p>We help individuals and families approach wealth as a connected capital strategy — not a collection of individual investments.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <p className="big">From creating wealth to <em>preserving and compounding it.</em></p>
            </div>
            <div className="copy">
              <p>We help clients evaluate suitable investment opportunities across public and private markets, with decisions grounded in objectives, diversification, risk and time horizon.</p>
              <p>Our approach is designed to bring structure and perspective to capital allocation as circumstances evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="editorial-grid">
            <div className="photo">
              <img
                src="https://images.unsplash.com/photo-1500004621732-74cd4ad4d53e?auto=format&fit=crop&w=1800&q=90"
                alt="Light-filled white architectural corridor"
              />
              <div className="photo-caption">Private Wealth / Perspective / Legacy</div>
            </div>
            <div className="editorial-copy">
              <div className="eyebrow">Private capital</div>
              <h3>Wealth is a <em>long-term architecture.</em></h3>
              <p>The goal is not simply to own more. It is to allocate capital intentionally, with a clear view of what each investment is meant to achieve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <div className="section-head">
            <h2>A broader view of <em>wealth.</em></h2>
            <p>Four connected areas help keep capital aligned with the bigger picture.</p>
          </div>
          <div className="list">
            {areas.map(([n, title, desc]) => (
              <div className="list-item" key={n}>
                <span className="n">{n}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="dark-panel">
            <div className="eyebrow">Private Wealth</div>
            <h2 style={{ fontSize: 'clamp(35px,4vw,55px)', lineHeight: '.95', letterSpacing: '-.05em', marginBottom: 0 }}>
              The objective isn't simply to <span className="gold">own more.</span><br />It's to allocate better.
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}
