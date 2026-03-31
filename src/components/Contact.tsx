function Contact() {
  return (
    <section id="contact" className="section-shell pb-24">
      <div className="panel grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title max-w-xl">
            Start with a clear conversation about the problem, not a generic quote.
          </h2>
          <p className="mt-4 max-w-lg text-white/65">
            Share the delivery challenge, platform bottleneck, or modernization
            goal you are working through. We will shape the next step from there.
          </p>
        </div>

        <form className="grid gap-4">
          <input className="field" type="text" placeholder="Your name" />
          <input className="field" type="email" placeholder="Email address" />
          <textarea
            className="field min-h-36 resize-none"
            placeholder="What are you trying to solve?"
          />
          <button type="submit" className="btn btn-primary w-fit">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
