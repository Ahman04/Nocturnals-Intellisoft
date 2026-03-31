import { ArrowRight, Radar } from 'lucide-react'
import { motion } from 'framer-motion'
import footerImage from '../assets/images/footer.png'
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
        <motion.div className="footer-topline" variants={fadeUp}>
          <span className="footer-topline__pill">
            <Radar className="h-4 w-4" />
            AI-native delivery network
          </span>
          <p className="footer-topline__copy">
            We design products where automation, data, and machine intelligence
            are part of the operating model from day one.
          </p>
        </motion.div>

        <div className="footer-grid">
          <motion.div className="footer-brand" variants={fadeUp}>
            <div className="footer-brand__media">
              <img
                src={footerImage}
                alt="Abstract AI systems network"
                className="footer-brand__image"
              />
            </div>
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

        <motion.div className="footer-cta-panel" variants={fadeUp}>
          <div>
            <p className="footer-cta-panel__label">Ready to deploy intelligence?</p>
            <h4 className="footer-cta-panel__title">
              Turn your next product into an AI-powered operating system.
            </h4>
          </div>
          <a href="#contact-form" className="footer-cta-panel__button">
            Start a build sprint
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div className="footer-bottom" variants={fadeUp}>
          <p>&copy; 2026 Nocturnals Intellisoft. All rights reserved.</p>
          <p>AI products, automation systems, and cloud delivery for modern businesses.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
