import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import './Inner.css'

const services = [
  { n: '01', title: 'CAD Modelling', text: 'Solid and surface modelling for parts, assemblies and tooling, built to be simulation- and manufacturing-ready.' },
  { n: '02', title: 'CAE Analysis', text: 'Structural, thermal and flow simulation to validate a design before it reaches physical testing.' },
  { n: '03', title: 'Casting Simulation Studies', text: 'AnyCasting-driven studies covering mould filling, solidification, shrinkage and porosity risk.' },
  { n: '04', title: 'Design Validation', text: 'Independent review and simulation-backed validation of designs ahead of tooling commitment.' },
  { n: '05', title: 'Software Support & Training', text: 'Implementation, onboarding and training for teams adopting simulation tools in-house.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="CAD/CAE engineering support, end to end."
        sub="From first model to final validation, we work as an extension of your engineering team."
      />

      <section className="section">
        <div className="container narrow">
          <div className="services-list">
            {services.map((s, i) => (
              <Reveal as="div" key={s.n} delay={i * 70} className="service-row">
                <span className="service-num">{s.n}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="inline-cta">
            <p>Tell us what you're working on — we'll scope the right combination of services.</p>
            <Link to="/contact" className="btn btn-primary">Get a quote</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
