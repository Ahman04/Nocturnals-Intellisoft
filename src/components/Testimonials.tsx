import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/motion'

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
      <motion.div
        className="testimonials-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonials-copy">
          Real feedback from businesses we&apos;ve helped transform.
        </p>
      </motion.div>

      <div className="testimonials-viewport">
        <div className="testimonials-track">
          {sliderCards.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
              className="testimonial-card"
              aria-hidden={index >= testimonials.length}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <motion.div
                className="testimonial-stars"
                aria-label="5 star rating"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 fill-current" />
                ))}
              </motion.div>

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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
