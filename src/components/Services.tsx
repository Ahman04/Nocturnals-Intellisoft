import {
  Bolt,
  BrainCircuit,
  Braces,
  Cloud,
  Code2,
  Database,
  Network,
  PanelsTopLeft,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web & Mobile App Development',
    text: 'Modern, responsive websites and mobile applications built with cutting-edge technologies and best practices.',
    tone: 'service-card--agent',
  },
  {
    icon: Bolt,
    title: 'Enterprise & Management Systems',
    text: 'Custom enterprise and management systems tailored to your business needs, including ERP, CRM, and more.',
    tone: 'service-card--automation',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning Solutions',
    text: 'Advanced AI and machine learning models to automate tasks, enhance decision-making, and drive innovation across your business.',
    tone: 'service-card--ml',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud Solutions',
    text: 'Streamline deployment, scaling, and performance monitoring through modern DevOps practices and cloud-native solutions.',
    tone: 'service-card--cloud',
  },
  {
    icon: Braces,
    title: 'Software Consultancy',
    text: 'Expert guidance and strategic advice to help you make informed technology decisions and optimize your software solutions.',
    tone: 'service-card--chat',
  },
  {
    icon: Network,
    title: 'API Development & Integration',
    text: 'Robust RESTful and GraphQL APIs with seamless third-party integrations, microservices architecture, and comprehensive API documentation.',
    tone: 'service-card--api',
  },
  {
    icon: PanelsTopLeft,
    title: 'Custom Software Development',
    text: 'We design and build scalable web and enterprise applications tailored to your business needs, ensuring performance, security, and long-term reliability.',
    tone: 'service-card--custom',
  },
  {
    icon: Database,
    title: 'Data Analytics & Intelligent Insights',
    text: 'We develop data-driven systems and dashboards that transform raw data into actionable insights for smarter business decisions.',
    tone: 'service-card--data',
  },
]

function Services() {
  return (
    <section id="services" className="services-shell">
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className={`service-card ${service.tone}`}>
            <div className="service-card__media" aria-hidden="true">
              <service.icon className="service-card__media-icon" />
            </div>
            <div className="service-card__body">
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
