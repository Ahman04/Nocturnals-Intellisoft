import { Bot, Palette, Settings2 } from 'lucide-react'
import { motion } from 'framer-motion'
import aboutImage from '../assets/images/about.png'
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from '../lib/motion'

const highlights = [
  {
    icon: Bot,
    title: 'Agentic Intelligence',
    text: 'We build AI systems that automate work and support better decisions.',
  },
  {
    icon: Settings2,
    title: 'Engineering Excellence',
    text: 'We build scalable, reliable solutions with strong engineering standards.',
  },
  {
    icon: Palette,
    title: 'Human-Centered Design',
    text: 'We design powerful systems that stay simple and easy to use.',
  },
]

function About() {
  return (
    <section id="about" className="about-shell ambient-section">
      <motion.div
        className="about-copy"
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-kicker">About us</p>
        <h2 className="about-title">About Nocturnals Intellisoft</h2>

        <p className="about-paragraph">
          We are an agentic AI and software company focused on building
          intelligent systems, automation, and scalable digital solutions that
          drive business transformation.
        </p>

        <p className="about-paragraph">
          With expertise in modern software development and AI integration, we
          help businesses operate smarter, make better decisions, and scale
          efficiently.
        </p>

        <p className="about-paragraph">
          Guided by innovation, precision, and clean design, we do not just
          build software, we build intelligent systems for the future.
        </p>

        <motion.div
          className="about-highlights"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <motion.div key={item.title} className="about-highlight" variants={fadeUp}>
                <div className="about-highlight__icon">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="about-highlight__title">{item.title}</h3>
                  <p className="about-highlight__text">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      <motion.div
        className="about-media"
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="about-image-frame"
          whileHover={{ y: -6, rotate: -1, scale: 1.01 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <img
            src={aboutImage}
            alt="Nocturnals Intellisoft engineering workspace"
            className="about-image"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
