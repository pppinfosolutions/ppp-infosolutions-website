import './PageHero.css'

export default function PageHero({ eyebrow, title, sub }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="eyebrow-line">
          <span className="stroke"></span>
          <span>{eyebrow}</span>
        </div>
        <h1>{title}</h1>
        {sub && <p className="page-hero-sub">{sub}</p>}
      </div>
    </section>
  )
}
