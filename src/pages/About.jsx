import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import './Inner.css'

const values = [
  { title: 'Simulate first', text: 'We believe problems are cheapest to fix on screen, not on the shop floor.' },
  { title: 'Stay hands-on', text: 'Our engineers work alongside your team through the project, not just at handoff.' },
  { title: 'Keep it practical', text: 'Every recommendation is built to be manufacturable, not just theoretically correct.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="Engineers first, software vendors second."
        sub="PPP Infosolutions works at the intersection of casting, simulation and CAD/CAE engineering — helping manufacturers validate designs before they commit to tooling."
      />

      <section className="section">
        <div className="container narrow">
          <Reveal as="p" className="lead-text">
            PPP Infosolutions was built around a simple idea: the earlier you can see a problem in
            simulation, the cheaper it is to fix. We bring together casting simulation, CAE
            simulation software and direct engineering services so manufacturers don't have to
            juggle separate vendors for tools that should work together.
          </Reveal>
          <Reveal as="p" className="body-text" delay={100}>
            Our team works with foundries, component manufacturers and design teams who need
            confidence in a part before it goes to tooling — whether that means running an
            AnyCasting shrinkage study, setting up a structural or thermal simulation, or
            providing hands-on CAD/CAE support for a project that's short on internal bandwidth.
          </Reveal>
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow-line"><span className="stroke"></span><span>HOW WE WORK</span></div>
            <h2>What guides every project.</h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
