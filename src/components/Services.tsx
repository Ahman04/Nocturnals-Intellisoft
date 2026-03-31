import { motion } from 'framer-motion'
import {
  AppWindow,
  Blocks,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CloudCog,
  Handshake,
  Network,
  type LucideIcon,
} from 'lucide-react'
import aiImage from '../assets/images/services image/AI.webp'
import apiImage from '../assets/images/services image/API.webp'
import customSoftwareImage from '../assets/images/services image/Custom Software.webp'
import dataAnalyticsImage from '../assets/images/services image/Data analytics.webp'
import devopsImage from '../assets/images/services image/DevOps.webp'
import enterpriseImage from '../assets/images/services image/Enterprise.webp'
import consultancyImage from '../assets/images/services image/sofware consultancy.webp'
import webAppImage from '../assets/images/services image/webapp.webp'
import { GlowCard } from './ui/spotlight-card'
import { fadeUp, staggerContainer } from '../lib/motion'

const services = [
  {
    image: webAppImage,
    icon: AppWindow,
    title: 'Web & Mobile App Development',
    text: 'Modern, responsive websites and mobile applications built with cutting-edge technologies and best practices.',
    tone: 'service-card--agent',
    glowColor: 'blue',
    label: 'Product Engineering',
  },
  {
    image: enterpriseImage,
    icon: Building2,
    title: 'Enterprise & Management Systems',
    text: 'Custom enterprise and management systems tailored to your business needs, including ERP, CRM, and more.',
    tone: 'service-card--automation',
    glowColor: 'orange',
    label: 'Operations Core',
  },
  {
    image: aiImage,
    icon: BrainCircuit,
    title: 'AI & Machine Learning Solutions',
    text: 'Advanced AI and machine learning models to automate tasks, enhance decision-making, and drive innovation across your business.',
    tone: 'service-card--ml',
    glowColor: 'purple',
    label: 'AI Systems',
  },
  {
    image: devopsImage,
    icon: CloudCog,
    title: 'DevOps & Cloud Solutions',
    text: 'Streamline deployment, scaling, and performance monitoring through modern DevOps practices and cloud-native solutions.',
    tone: 'service-card--cloud',
    glowColor: 'orange',
    label: 'Platform Reliability',
  },
  {
    image: consultancyImage,
    icon: Handshake,
    title: 'Software Consultancy',
    text: 'Expert guidance and strategic advice to help you make informed technology decisions and optimize your software solutions.',
    tone: 'service-card--chat',
    glowColor: 'red',
    label: 'Strategic Advisory',
  },
  {
    image: apiImage,
    icon: Network,
    title: 'API Development & Integration',
    text: 'Robust RESTful and GraphQL APIs with seamless third-party integrations, microservices architecture, and comprehensive API documentation.',
    tone: 'service-card--api',
    glowColor: 'red',
    label: 'Connected Systems',
  },
  {
    image: customSoftwareImage,
    icon: Blocks,
    title: 'Custom Software Development',
    text: 'We design and build scalable web and enterprise applications tailored to your business needs, ensuring performance, security, and long-term reliability.',
    tone: 'service-card--custom',
    glowColor: 'green',
    label: 'Tailored Platforms',
  },
  {
    image: dataAnalyticsImage,
    icon: ChartNoAxesCombined,
    title: 'Data Analytics & Intelligent Insights',
    text: 'We develop data-driven systems and dashboards that transform raw data into actionable insights for smarter business decisions.',
    tone: 'service-card--data',
    glowColor: 'green',
    label: 'Decision Intelligence',
  },
] satisfies Array<{
  image: string
  icon: LucideIcon
  title: string
  text: string
  tone: string
  glowColor: 'blue' | 'purple' | 'green' | 'red' | 'orange'
  label: string
}>

function Services() {
  return (
    <section id="services" className="services-shell">
      <motion.div
        className="services-heading"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p variants={fadeUp} className="services-heading__eyebrow">
          Services
        </motion.p>
        <motion.h2 variants={fadeUp} className="services-heading__title">
          Smart software for modern operations.
        </motion.h2>
        <motion.p variants={fadeUp} className="services-heading__copy">
          AI, analytics, cloud, and custom platforms built for real business use.
        </motion.p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="service-card-shell"
            variants={fadeUp}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <GlowCard
              customSize
              glowColor={service.glowColor}
              className={`service-card ${service.tone} h-full w-full`}
            >
              <div className="service-card__media">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__media-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="service-card__body">
                <div className="service-card__meta">
                  <span className="service-card__pill">{service.label}</span>
                  <span className="service-card__icon">
                    <service.icon className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.text}</p>
              </div>
            </GlowCard>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
