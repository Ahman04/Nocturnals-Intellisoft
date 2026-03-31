import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Exceptional service and outstanding results. The team’s expertise in modern technologies is impressive.',
    name: 'Robert Mwenda',
    role: 'Medical Doctor',
  },
  {
    quote:
      'Working with Nocturnals was a game-changer. They understood our vision and brought it to life with cutting-edge technology.',
    name: 'Ahmed Hassan',
    role: 'Cybersecurity Engineer',
  },
  {
    quote:
      'Nocturnals transformed our business with their innovative approach and technical expertise. Highly recommended!',
    name: 'Hussein Mohamed',
    role: 'Entrepreneur, Startup Founder',
  },
  {
    quote:
      'Professional, responsive, and genuinely invested in our success. They built exactly what we needed.',
    name: 'Amina Yusuf',
    role: 'Operations Manager',
  },
]

const sliderCards = [...testimonials, ...testimonials]

function Testimonials() {
  return (
    <section className="testimonials-shell" aria-label="Client testimonials">
      <div className="testimonials-heading">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-copy">
          Real feedback from businesses we&apos;ve helped transform.
        </p>
      </div>

      <div className="testimonials-viewport">
        <div className="testimonials-track">
          {sliderCards.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="testimonial-card"
              aria-hidden={index >= testimonials.length}
            >
              <div className="testimonial-stars" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div>
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
