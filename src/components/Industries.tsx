import {
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Landmark,
  TrendingUp,
  Globe,
} from 'lucide-react'

const industries = [
  {
    title: 'Corporate',
    icon: BriefcaseBusiness,
    tone: 'industry-card--corporate',
  },
  {
    title: 'Finance & Marketing',
    icon: TrendingUp,
    tone: 'industry-card--finance',
  },
  {
    title: 'Government',
    icon: Landmark,
    tone: 'industry-card--government',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    tone: 'industry-card--education',
  },
  {
    title: 'Healthcare',
    icon: Heart,
    tone: 'industry-card--healthcare',
  },
  {
    title: 'Any Industry',
    icon: Globe,
    tone: 'industry-card--any',
  },
]

function Industries() {
  return (
    <section id="industries" className="industries-shell">
      <div className="industries-heading">
        <h2 className="industries-title">Industries We Serve</h2>
        <p className="industries-copy">
          Expertise across diverse sectors with proven success in delivering tailored
          solutions.
        </p>
      </div>
      <div className="industries-grid">
        {industries.map((industry) => {
          const Icon = industry.icon

          return (
            <article key={industry.title} className={`industry-card ${industry.tone}`}>
              <div className="industry-card__icon">
                <Icon className="h-8 w-8" />
              </div>
              <h3 className="industry-card__title">{industry.title}</h3>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Industries
