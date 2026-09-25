import { useState } from 'react'
import { Link } from 'react-router-dom'
import { insights, categories } from '../data/insights'
import InsightCard from '../components/InsightCard'

export default function Insights() {
  const [active, setActive] = useState('All')
  const [filtered, setFiltered] = useState(false)
  const [featured, ...rest] = insights
  const list = active === 'All' ? rest : insights.filter((i) => i.category === active)

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Insights</div>
          <h1>Ideas for building <em>better.</em></h1>
          <p>Perspectives on financial strategy, business growth, cash flow, capital allocation and wealth creation.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Featured</div>
          <Link to={`/insights/${featured.slug}`} className="editorial-grid featured-insight">
            <div className="photo">
              <img src={featured.image} alt={featured.title} />
              <div className="photo-caption">{featured.caption}</div>
            </div>
            <div className="editorial-copy">
              <div className="insight-meta">{featured.category} · {featured.date} · {featured.readTime}</div>
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <span className="btn">Read article →</span>
            </div>
          </Link>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>Latest <em>thinking.</em></h2>
            <p>Practical perspectives on the decisions founders, finance leaders and investors face as they grow.</p>
          </div>

          <div className="filter-chips" role="tablist" aria-label="Filter insights by category">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                className={`chip${active === c ? ' active' : ''}`}
                onClick={() => {
                  setActive(c)
                  setFiltered(true)
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className={`insight-grid${filtered ? ' filtered' : ''}`} key={active}>
            {list.map((item) => (
              <InsightCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow">Have a question?</div>
              <h2>Let's talk it through.</h2>
            </div>
            <div>
              <p>If an idea here resonates with a decision you are facing, we would be glad to discuss it.</p>
              <Link className="btn" to="/contact">Start a conversation →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
