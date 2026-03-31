import aiImage from '../assets/images/services image/AI .png'
import apiImage from '../assets/images/services image/API.png'
import customSoftwareImage from '../assets/images/services image/Custom Software.png'
import dataAnalyticsImage from '../assets/images/services image/Data analytics .png'
import devopsImage from '../assets/images/services image/DevOps.png'
import enterpriseImage from '../assets/images/services image/Enterprise.png'
import consultancyImage from '../assets/images/services image/sofware consultancy.png'
import webAppImage from '../assets/images/services image/webapp.png'

const services = [
  {
    image: webAppImage,
    title: 'Web & Mobile App Development',
    text: 'Modern, responsive websites and mobile applications built with cutting-edge technologies and best practices.',
    tone: 'service-card--agent',
  },
  {
    image: enterpriseImage,
    title: 'Enterprise & Management Systems',
    text: 'Custom enterprise and management systems tailored to your business needs, including ERP, CRM, and more.',
    tone: 'service-card--automation',
  },
  {
    image: aiImage,
    title: 'AI & Machine Learning Solutions',
    text: 'Advanced AI and machine learning models to automate tasks, enhance decision-making, and drive innovation across your business.',
    tone: 'service-card--ml',
  },
  {
    image: devopsImage,
    title: 'DevOps & Cloud Solutions',
    text: 'Streamline deployment, scaling, and performance monitoring through modern DevOps practices and cloud-native solutions.',
    tone: 'service-card--cloud',
  },
  {
    image: consultancyImage,
    title: 'Software Consultancy',
    text: 'Expert guidance and strategic advice to help you make informed technology decisions and optimize your software solutions.',
    tone: 'service-card--chat',
  },
  {
    image: apiImage,
    title: 'API Development & Integration',
    text: 'Robust RESTful and GraphQL APIs with seamless third-party integrations, microservices architecture, and comprehensive API documentation.',
    tone: 'service-card--api',
  },
  {
    image: customSoftwareImage,
    title: 'Custom Software Development',
    text: 'We design and build scalable web and enterprise applications tailored to your business needs, ensuring performance, security, and long-term reliability.',
    tone: 'service-card--custom',
  },
  {
    image: dataAnalyticsImage,
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
            <div className="service-card__media">
              <img
                src={service.image}
                alt={service.title}
                className="service-card__media-image"
                loading="lazy"
              />
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
