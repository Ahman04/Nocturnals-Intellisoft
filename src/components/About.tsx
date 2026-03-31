import { Bot, Palette, Settings2 } from 'lucide-react'
import aboutImage from '../assets/images/HERO1.png'

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
    <section id="about" className="about-shell">
      <div className="about-copy">
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

        <div className="about-highlights">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="about-highlight">
                <div className="about-highlight__icon">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="about-highlight__title">{item.title}</h3>
                  <p className="about-highlight__text">{item.text}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="about-media">
        <div className="about-image-frame">
          <img
            src={aboutImage}
            alt="Nocturnals Intellisoft engineering workspace"
            className="about-image"
          />
        </div>
      </div>
    </section>
  )
}

export default About
