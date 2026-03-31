import {
  ShieldCheck,
  BrainCircuit,
  RefreshCw,
  TrendingUp,
  Bot,
  Target,
} from 'lucide-react'

const reasons = [
  {
    title: 'Enterprise-Grade Security',
    text: 'We implement robust security practices, including encryption, secure architectures, and compliance with industry standards to protect your systems and data.',
    icon: ShieldCheck,
    tone: 'why-card--green',
  },
  {
    title: 'Experienced Engineering Team',
    text: 'Our team of skilled developers and engineers brings deep expertise in full-stack development, AI systems, and scalable infrastructure.',
    icon: BrainCircuit,
    tone: 'why-card--purple',
  },
  {
    title: 'Continuous Support & Optimization',
    text: 'We provide ongoing support, monitoring, and system improvements to ensure reliability, performance, and long-term success.',
    icon: RefreshCw,
    tone: 'why-card--cyan',
  },
  {
    title: 'Scalable & Future-Ready Systems',
    text: 'Our solutions are built to grow with your business, using modern architectures that support scalability, flexibility, and evolving technologies.',
    icon: TrendingUp,
    tone: 'why-card--orange',
  },
  {
    title: 'Practical AI Solutions',
    text: 'We focus on building AI systems that solve real problems, not just theoretical models—delivering measurable value and efficiency.',
    icon: Bot,
    tone: 'why-card--red',
  },
  {
    title: 'Business-Focused Results',
    text: 'Every solution we build is aligned with your business goals, ensuring real impact, improved operations, and long-term return on investment.',
    icon: Target,
    tone: 'why-card--pink',
  },
]

function WhyChooseUs() {
  return (
    <section id="whychooseus" className="why-shell">
      <div className="why-heading">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-copy">
          We deliver enterprise software solutions that combine technical excellence,
          strategic thinking, and proven methodologies to achieve measurable business
          outcomes.
        </p>
      </div>
      <div className="why-grid">
        {reasons.map((reason) => {
          const Icon = reason.icon

          return (
            <article key={reason.title} className={`why-card ${reason.tone}`}>
              <div className="why-card__icon">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="why-card__title">{reason.title}</h3>
              <p className="why-card__text">{reason.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default WhyChooseUs
