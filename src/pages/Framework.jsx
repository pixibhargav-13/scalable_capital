import ScalableFramework from '../components/ScalableFramework'

const steps = [
  ['S', 'STRATEGY', 'Define direction, objectives and priorities.'],
  ['C', 'CASH FLOW', 'Strengthen liquidity and resilience.'],
  ['A', 'ANALYSIS', 'Turn financial and operational data into insight.'],
  ['L', 'LEADERSHIP', 'Bring CFO-level thinking and accountability.'],
  ['A', 'ALIGNMENT', 'Connect capital, people and strategy.'],
  ['B', 'BUILD', 'Create scalable systems and foundations.'],
  ['L', 'LEVERAGE', 'Use capital, technology and insight to amplify.'],
  ['E', 'EXECUTE', 'Turn strategy into measurable action.'],
]

const phases = [
  ['01', 'Diagnose', 'Understand the economics, financial position, objectives and constraints.'],
  ['02', 'Prioritise', 'Identify the few drivers and decisions that can create disproportionate impact.'],
  ['03', 'Execute', 'Build cadence, accountability and measurable actions around the plan.'],
]

export default function Framework() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Our Approach</div>
          <h1>The <em>SCALABLE</em><br />Framework.</h1>
          <p>A practical operating philosophy for building stronger financial foundations, making better decisions and scaling with discipline.</p>
        </div>
      </section>

      <ScalableFramework steps={steps} intro={false} />

      <section className="dark framework-phases">
        <div className="container">
          <div className="section-head">
            <h2>Designed to move from insight to <em>execution.</em></h2>
            <p>The framework is not a checklist. It is a way of connecting financial decisions to the operating reality of the business.</p>
          </div>
          <div className="grid">
            {phases.map(([no, title, desc]) => (
              <div className="card" key={no}>
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
