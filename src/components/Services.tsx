const services = [
  'Custom software engineering',
  'Cloud architecture and modernization',
  'DevOps and delivery acceleration',
  'AI workflow integration',
]

function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="section-heading">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">Capabilities that move from strategy to shipping.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={service} className="panel">
            <p className="text-sm uppercase tracking-[0.24em] text-signal/70">
              {`0${index + 1}`}
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
