const stacks = [
  'React and TypeScript',
  'Node.js and API platforms',
  'Cloud-native infrastructure',
  'Data pipelines and analytics',
  'Automation tooling and AI services',
  'CI/CD and observability stacks',
]

function Technologies() {
  return (
    <section id="technologies" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Technologies</p>
        <h2 className="section-title">Modern stacks chosen for reliability, maintainability, and delivery speed.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {stacks.map((stack) => (
          <div key={stack} className="panel">
            <p className="font-medium text-mist">{stack}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Technologies
