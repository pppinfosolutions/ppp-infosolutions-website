import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import './Inner.css'

const products = [
  {
    tag: 'CASTING SIMULATION',
    name: 'AnyCasting',
    text: 'Full-scale casting process simulation — mould filling, solidification, shrinkage and porosity prediction — so defects get caught before metal is poured, not after.',
    points: ['Mould filling & solidification analysis', 'Shrinkage & porosity prediction', 'Gating & riser optimisation'],
  },
  {
    tag: 'CAE',
    name: 'Simulation Software',
    text: 'Structural, thermal and flow simulation tools that plug into your existing design workflow, giving engineering teams answers earlier in the development cycle.',
    points: ['Structural & thermal analysis', 'Flow & process simulation', 'Design validation before tooling'],
  },
]

export default function Products() {
  return (
    <>
      <section className="page-hero-dark">
        <div className="container">
          <div className="eyebrow-line rise-in"><span className="stroke"></span><span>PRODUCTS</span></div>
          <h1 className="rise-in" style={{ animationDelay: '90ms' }}>Simulation software built for manufacturing decisions.</h1>
          <p className="page-hero-sub rise-in" style={{ animationDelay: '200ms' }}>
            We represent and support simulation tools that give foundries and design teams a
            clear, quantified view of how a part will actually behave.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-list">
            {products.map((p, i) => (
              <Reveal as="div" key={p.name} delay={i * 100} className="product-row">
                <div className="product-row-head">
                  <span className="pillar-tag">{p.tag}</span>
                  <h2>{p.name}</h2>
                </div>
                <div className="product-row-body">
                  <p className="body-text">{p.text}</p>
                  <ul className="check-list">
                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="inline-cta">
            <p>Want a walkthrough of either product for your specific part or process?</p>
            <Link to="/contact" className="btn btn-primary">Request a demo</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
