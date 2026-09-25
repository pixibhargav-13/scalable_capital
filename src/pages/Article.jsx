import { Link, useParams } from 'react-router-dom'
import { getInsight, insights } from '../data/insights'
import InsightCard from '../components/InsightCard'

function Block({ b }) {
  if (b.h2) return <h2>{b.h2}</h2>
  if (b.quote) return <blockquote>{b.quote}</blockquote>
  if (b.list) return <ul>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>
  return <p>{b.p}</p>
}

export default function Article() {
  const { slug } = useParams()
  const article = getInsight(slug)

  if (!article) {
    return (
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Insights</div>
          <h1>Article not <em>found.</em></h1>
          <p>The article you are looking for may have moved.</p>
          <Link className="btn primary" to="/insights">Back to Insights →</Link>
        </div>
      </section>
    )
  }

  // Same-category articles first, then the rest.
  const related = [
    ...insights.filter((i) => i.slug !== slug && i.category === article.category),
    ...insights.filter((i) => i.slug !== slug && i.category !== article.category),
  ].slice(0, 3)

  return (
    <>
      <section className="hero article-hero">
        <div className="container">
          <Link to="/insights" className="back-link">← All insights</Link>
          <div className="eyebrow">{article.category}</div>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <div className="article-meta">
            <span>Scalability Capital</span>
            <span>{article.date}</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="article-cover-wrap">
        <div className="container">
          <div className="photo article-cover">
            <img src={article.image} alt={article.title} />
            <div className="photo-caption">{article.caption}</div>
          </div>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <article className="article-body">
            {article.body.map((b, i) => <Block key={i} b={b} />)}
            <p className="article-disclaimer">
              This article is for general information only and does not constitute financial, investment, tax or legal advice.
              Please seek advice suited to your specific circumstances before making decisions.
            </p>
          </article>
        </div>
      </section>

      <section className="dark">
        <div className="container">
          <div className="section-head">
            <h2>Continue <em>reading.</em></h2>
            <p>More perspectives on strategic finance, business growth and private wealth.</p>
          </div>
          <div className="insight-grid on-dark">
            {related.map((item) => <InsightCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <div className="eyebrow">Put ideas into action</div>
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
