const reasons = [
  'Senior-level execution from discovery through delivery.',
  'Clear communication, realistic milestones, and technical rigor.',
  'Systems thinking that balances speed, maintainability, and scale.',
]

function WhyChooseUs() {
  return (
    <section id="whychooseus" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Why choose us</p>
        <h2 className="section-title">Depth where it matters, simplicity where it counts.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason} className="panel">
            <p className="text-white/70">{reason}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
