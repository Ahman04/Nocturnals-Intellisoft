const industries = [
  'Fintech',
  'Health systems',
  'Logistics',
  'Education',
  'Retail operations',
  'Public sector delivery',
]

function Industries() {
  return (
    <section id="industries" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Industries</p>
        <h2 className="section-title">Built to adapt across regulated, fast-moving, and operationally complex sectors.</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {industries.map((industry) => (
          <span key={industry} className="pill">
            {industry}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Industries
