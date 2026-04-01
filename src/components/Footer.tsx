import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import logoImage from '../assets/images/logoNocturnals.png'
import worldImage from '../assets/images/world.jpeg'
import { fadeUp, staggerContainer } from '../lib/motion'

const capabilityLinks = [
  'AI copilots',
  'Workflow automation',
  'Prediction engines',
  'Cloud-native platforms',
  'Data intelligence',
]

const stackLinks = [
  'LLM orchestration',
  'MLOps pipelines',
  'API architecture',
  'Observability',
  'Secure deployment',
]

const companyLinks = [
  'AI strategy',
  'Delivery squad',
  'Research culture',
  'Product partnership',
  'Launch support',
]

function Footer() {
  return (
    <footer className="site-footer">
      <motion.div
        className="footer-main"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="footer-hero" variants={fadeUp}>
          <div className="footer-hero__content">
            <p className="footer-hero__label">Ready to deploy intelligence?</p>
            <h4 className="footer-hero__title">
              Turn your next product into an AI-powered operating system.
            </h4>
          </div>
          <div className="footer-hero__visual" aria-hidden="true">
            <img
              src={worldImage}
              alt=""
              className="footer-hero__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <a href="#contact-form" className="footer-hero__button">
            Start a build sprint
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="footer-grid">
          <motion.div className="footer-brand" variants={fadeUp}>
            <div className="footer-brand__head">
              <img
                src={logoImage}
                alt="Nocturnals Intellisoft logo"
                className="footer-brand__logo"
                loading="lazy"
                decoding="async"
              />
              <div>
                <h4 className="footer-brand__title">Nocturnals</h4>
                <p className="footer-brand__eyebrow">Intellisoft</p>
              </div>
            </div>
            <p className="footer-brand__copy">
              AI products, automation systems, and cloud delivery for modern businesses.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="footer-column__title">Capabilities</h4>
            <ul className="footer-list">
              {capabilityLinks.map((item) => (
                <li key={item}>
                  <a href="#services" className="footer-list__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="footer-column__title">Architecture</h4>
            <ul className="footer-list">
              {stackLinks.map((item) => (
                <li key={item}>
                  <a href="#technologies" className="footer-list__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="footer-column__title">Partnership</h4>
            <ul className="footer-list">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#about" className="footer-list__link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div className="footer-bottom" variants={fadeUp}>
          <p>&copy; 2026 Nocturnals Intellisoft. All rights reserved.</p>
          <p>Built with intelligence. Delivered with precision.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
