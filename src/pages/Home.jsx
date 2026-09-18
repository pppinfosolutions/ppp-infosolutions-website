import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { useCountUp } from '../hooks/useCountUp'
import logoFull from '../assets/logo.png'
import './Home.css'

const pillars = [
  {
    tag: 'AnyCasting',
    title: 'Casting Simulation',
    text: 'Predict shrinkage, porosity and mould-filling behaviour before metal ever gets poured — cut defects and rework at the source.',
  },
  {
    tag: 'CAE',
    title: 'Simulation Software',
    text: 'Structural, thermal and flow simulation tools that shorten validation cycles and give your design team confidence early.',
  },
  {
    tag: 'CAD/CAE',
    title: 'Engineering Services',
    text: 'Hands-on modelling, analysis and simulation support delivered by engineers who work inside your project, not around it.',
  },
]

const stats = [
  { value: '3', label: 'core disciplines' },
  { value: '360°', label: 'design-to-validation support' },
  { value: '1', label: 'partner for CAD, CAE & casting' },
]

function Stat({ value, label }) {
  const [ref, display] = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <span className="stat-value">{display}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-mesh" aria-hidden="true"></div>
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="hero-scan" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-1" aria-hidden="true"></div>
        <div className="hero-orb hero-orb-2" aria-hidden="true"></div>
        <div className="hero-ring hero-ring-1" aria-hidden="true"></div>
        <div className="hero-ring hero-ring-2" aria-hidden="true"></div>

        <div className="container hero-inner">
          <div className="hero-logo-wrap rise-in" style={{ animationDelay: '0ms' }}>
            <div className="hero-logo-glow" aria-hidden="true"></div>
            <img src={logoFull} alt="PPP Infosolutions — Casting Simulation, CAE Simulation Software, CAD/CAE Engineering Services" className="hero-logo" />
          </div>

          <h1 className="hero-title rise-in" style={{ animationDelay: '140ms' }}>
            Simulate the outcome<br />before you commit to it.
          </h1>
          <p className="hero-sub rise-in" style={{ animationDelay: '260ms' }}>
            One partner for casting simulation, CAE simulation software, and hands-on CAD/CAE
            engineering — so problems surface on screen, not on the shop floor.
          </p>
          <div className="hero-actions rise-in" style={{ animationDelay: '380ms' }}>
            <Link to="/contact" className="btn btn-ember">Talk to an engineer</Link>
            <Link to="/products" className="btn btn-outline hero-outline">See our products</Link>
          </div>
        </div>

        <div className="hero-fade" aria-hidden="true"></div>
      </section>

      <section className="section stats-section">
        <div className="container stats-row">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <Stat value={s.value} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pillars-section">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow-line">
              <span className="stroke"></span>
              <span>WHAT WE DO</span>
            </div>
            <h2>Three disciplines, one simulation-first mindset.</h2>
          </Reveal>

          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className="pillar-card">
                <span className="pillar-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="pillar-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container cta-band-inner">
          <Reveal>
            <h2>Have a casting or CAE problem worth simulating first?</h2>
            <p className="cta-sub">Send us your requirement — we'll get back with how we'd approach it.</p>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
