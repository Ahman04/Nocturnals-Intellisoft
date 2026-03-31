const solutions = [
  {
    title: 'Product acceleration',
    text: 'Launch new capabilities faster with a sharper roadmap-to-release pipeline.',
  },
  {
    title: 'Operational intelligence',
    text: 'Connect data, automation, and reporting into a system leaders can actually use.',
  },
  {
    title: 'Platform resilience',
    text: 'Reduce incidents and improve confidence with observability, guardrails, and better architecture.',
  },
]

function Solutions() {
  return (
    <section id="solutions" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Solutions</p>
        <h2 className="section-title">Designed around business pressure, not generic delivery packages.</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {solutions.map((solution) => (
          <div key={solution.title} className="panel">
            <h3 className="font-display text-2xl font-semibold text-white">
              {solution.title}
            </h3>
            <p className="mt-3 text-white/64">{solution.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Solutions
