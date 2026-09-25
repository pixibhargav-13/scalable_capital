import { Link } from 'react-router-dom'

export default function InsightCard({ item }) {
  return (
    <Link to={`/insights/${item.slug}`} className="insight-card">
      <div className="insight-thumb">
        <img src={item.image.replace('w=2000', 'w=900')} alt="" loading="lazy" />
      </div>
      <div className="insight-body">
        <div className="insight-meta">{item.category} · {item.readTime}</div>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <span className="insight-link">Read article →</span>
      </div>
    </Link>
  )
}
