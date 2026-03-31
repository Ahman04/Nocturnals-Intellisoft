import { Eye, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import missionVisionImage from '../assets/images/misssionvisoion.png'
import { fadeLeft, fadeRight, staggerContainer } from '../lib/motion'

type TextSegment = {
  text: string
  highlight?: boolean
}

const cards = [
  {
    icon: Target,
    title: 'Mission',
    label: 'Execution Mandate',
    stat: 'Built for dependable AI operations',
    text: [
      { text: 'Our mission is to build ' },
      { text: 'reliable, secure, and high-quality AI-driven', highlight: true },
      { text: ' software that solves ' },
      { text: 'real-world problems', highlight: true },
      { text: ' with ' },
      { text: 'precision', highlight: true },
      { text: ' and ' },
      { text: 'integrity', highlight: true },
      { text: '. We focus on delivering ' },
      { text: 'practical intelligence, engineered systems, and scalable solutions', highlight: true },
      { text: ' that empower businesses to make better decisions, operate efficiently, and grow sustainably.' },
    ],
    textSecondary: [
      { text: 'We are committed to ' },
      { text: 'excellence', highlight: true },
      { text: ' in engineering, ' },
      { text: 'responsible use of AI', highlight: true },
      { text: ', and ' },
      { text: 'long-term value creation', highlight: true },
      { text: ' over short-term trends.' },
    ],
  },
  {
    icon: Eye,
    title: 'Vision',
    label: 'Future Direction',
    stat: 'Designed for long-horizon industry change',
    text: [
      { text: 'Our vision is to become a ' },
      { text: 'trusted global AI technology company', highlight: true },
      { text: ' that shapes the future of ' },
      { text: 'intelligent systems', highlight: true },
      { text: ' across critical industries. We aim to lead the next generation of software where artificial intelligence is ' },
      { text: 'transparent, secure', highlight: true },
      { text: ', and deeply integrated into everyday operations, not as a buzzword, but as ' },
      { text: 'dependable infrastructure', highlight: true },
      { text: '.' },
    ],
    textSecondary: [
      { text: 'We envision a future where AI ' },
      { text: 'enhances human capability', highlight: true },
      { text: ', strengthens industries, and drives progress through ' },
      { text: 'quality, ethics, and innovation', highlight: true },
      { text: '.' },
    ],
  },
]

function renderSegments(segments: TextSegment[]) {
  return segments.map((segment, index) => (
    <span
      key={`${segment.text}-${index}`}
      className={segment.highlight ? 'mission-card__emphasis' : undefined}
    >
      {segment.text}
    </span>
  ))
}

function MissionVision() {
  return (
    <section className="mission-shell ambient-section" aria-label="Mission and vision">
      <motion.div
        className="mission-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mission-intro" variants={fadeLeft}>
          <img
            src={missionVisionImage}
            alt="Nocturnals Intellisoft team and AI workspace"
            className="mission-intro__image"
          />
          <div className="mission-intro__overlay">
            <span className="mission-intro__chip">AI-first execution</span>
            <span className="mission-intro__chip">Reliable systems</span>
          </div>
        </motion.div>

        {cards.map((card, index) => {
          const Icon = card.icon

          return (
            <motion.article
              key={card.title}
              className={`mission-card mission-card--${card.title.toLowerCase()}`}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              whileHover={{ y: -6 }}
            >
              <p className="mission-card__label">{card.label}</p>
              <div className="mission-card__header">
                <div className="mission-card__icon">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="mission-card__title">{card.title}</h2>
                  <p className="mission-card__stat">{card.stat}</p>
                </div>
              </div>
              <p className="mission-card__text">{renderSegments(card.text)}</p>
              <p className="mission-card__text">
                {renderSegments(card.textSecondary)}
              </p>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}

export default MissionVision
