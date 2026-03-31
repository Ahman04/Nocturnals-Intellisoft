const points = [
  'Cross-functional consulting across product, engineering, and infrastructure.',
  'Delivery models tailored for startups, scale-ups, and enterprise transformation programs.',
  'A hands-on operating style focused on measurable execution, not slide decks.',
]

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">About us</p>
        <h2 className="section-title">A practical technology partner built for execution.</h2>
        <p className="section-copy">
          We help organizations make sharper technical decisions, align delivery
          around outcomes, and build systems that hold up under real operating
          pressure.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((point) => (
          <div key={point} className="panel">
            <p className="text-white/72">{point}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
