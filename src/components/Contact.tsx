import {
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Send,
} from 'lucide-react'

const contactItems = [
  {
    title: 'Address',
    value: 'Kolobot Road, Nairobi, Kenya',
    icon: MapPin,
    tone: 'contact-card__item-icon--blue',
  },
  {
    title: 'Phone',
    value: '+254 717 219 448',
    icon: Phone,
    tone: 'contact-card__item-icon--indigo',
  },
  {
    title: 'Email',
    value: 'info@nocturnalsoftware.com',
    icon: Mail,
    tone: 'contact-card__item-icon--slate',
  },
  {
    title: 'WhatsApp',
    value: '+254 717 219 448',
    icon: MessageCircleMore,
    tone: 'contact-card__item-icon--green',
  },
]

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

function Contact() {
  return (
    <section id="contact" className="contact-shell">
      <div className="contact-shell__glow contact-shell__glow--left" />
      <div className="contact-shell__glow contact-shell__glow--right" />

      <div className="contact-shell__inner">
        <div className="contact-heading">
          <p className="contact-kicker">Contact</p>
          <h2 className="contact-title">
            Have questions or ready to get started? Contact us today.
          </h2>
          <p className="contact-copy">
            Speak with our team about AI systems, automation, custom software, or
            digital modernization. We will help you shape the next practical step.
          </p>
        </div>

        <div className="contact-grid">
          <article className="contact-card">
            <h3 className="contact-card__title">Get In Touch</h3>

            <div className="contact-card__info-list">
              {contactItems.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="contact-card__info-item">
                    <div className={`contact-card__item-icon ${item.tone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="contact-card__item-label">{item.title}</p>
                      <p className="contact-card__item-value">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="contact-card__divider" />

            <div className="contact-card__hours">
              <div className="contact-card__hours-header">
                <div className="contact-card__item-icon contact-card__item-icon--slate">
                  <Clock3 className="h-5 w-5" />
                </div>
                <h4 className="contact-card__hours-title">Business Hours</h4>
              </div>

              <div className="contact-card__hours-list">
                {businessHours.map((item) => (
                  <div key={item.day} className="contact-card__hours-row">
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="contact-card contact-card--form">
            <h3 className="contact-card__title contact-card__title--accent">
              Send Us a Message
            </h3>

            <form className="contact-form">
              <label className="contact-form__field">
                <span className="contact-form__label">Full Name</span>
                <input
                  className="contact-form__input"
                  type="text"
                  placeholder="Your name"
                />
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">Email Address</span>
                <input
                  className="contact-form__input"
                  type="email"
                  placeholder="Your email address"
                />
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">Phone Number</span>
                <input
                  className="contact-form__input"
                  type="tel"
                  placeholder="Your phone number"
                />
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">Message</span>
                <textarea
                  className="contact-form__input contact-form__input--textarea"
                  placeholder="Tell us what you are trying to build or improve"
                />
              </label>

              <button type="submit" className="contact-form__submit">
                Send Message
                <Send className="h-4 w-4" />
              </button>

              <p className="contact-form__note">
                Your message will be sent to our team via email.
              </p>
            </form>
          </article>
        </div>

        <div className="contact-map contact-map--wide">
          <div className="contact-map__frame">
            <iframe
              title="Nocturnals Intellisoft location map"
              src="https://www.google.com/maps?q=Kolobot%20Road%2C%20Nairobi%2C%20Kenya&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
