import { BriefcaseBusiness, GitBranch, Mail, Send } from 'lucide-react'
import abdikhafarImage from '../assets/images/OUR TEAM IMAGE/abdikhafar.jpeg'
import brianImage from '../assets/images/OUR TEAM IMAGE/brian.jpeg'
import williamImage from '../assets/images/OUR TEAM IMAGE/william.png'

const members = [
  {
    name: 'Abdikhafar Mohamed Issack',
    title:
      'Founder Nocturnal Software Solutions • Full Stack Software Engineer • DevSecOps • AI/ML Engineer,',
    bio:
      'A versatile tech innovator skilled in full-stack development, DevSecOps, AI/ML, and cloud engineering — known for crafting scalable, secure, and impactful digital solutions. With a track record of award-winning projects, he turns complex ideas into reliable systems that fuel business growth and innovation.',
    image: abdikhafarImage,
  },
  {
    name: 'George Williams Ochieng',
    title: 'Co-founder Nocturnal Software Solutions,',
    bio:
      'A dedicated technology professional committed to driving innovation and delivering exceptional software solutions. Passionate about building transformative digital experiences that make a meaningful impact.',
    image: williamImage,
  },
  {
    name: 'Brian Thomas Mboya',
    title:
      'Investment and Credit Risk Management Professional • Actuarial Science Graduate • Rust and Power BI Developer',
    bio:
      'A financial professional with expertise in investment and credit risk management. As an R and Power BI developer, he builds scalable systems and data visualization solutions that transform complex financial data into actionable insights for data-driven decision-making.',
    image: brianImage,
  },
]

function Team() {
  return (
    <section id="team" className="team-shell">
      <div className="team-heading">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-copy">
          The talented individuals behind our innovative solutions and exceptional
          service.
        </p>
      </div>

      <div className="team-grid">
        {members.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-card__image-wrap">
              <img
                src={member.image}
                alt={member.name}
                className="team-card__image"
              />
            </div>

            <div className="team-card__body">
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.title}</p>
              <p className="team-card__bio">{member.bio}</p>

              <div className="team-card__socials" aria-label={`${member.name} social links`}>
                <a href="#team" className="team-card__social">
                  <BriefcaseBusiness className="h-5 w-5" />
                </a>
                <a href="#team" className="team-card__social team-card__social--muted">
                  <GitBranch className="h-5 w-5" />
                </a>
                <a href="#team" className="team-card__social">
                  <Send className="h-5 w-5" />
                </a>
                <a href="#team" className="team-card__social team-card__social--muted">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Team
