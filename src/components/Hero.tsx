import { ArrowRight, ChevronDown, ShieldCheck, Workflow, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

const metrics = [
  { label: 'Delivery squads launched', value: '18+' },
  { label: 'Operational uptime maintained', value: '99.95%' },
  { label: 'Average acceleration after handoff', value: '3.2x' },
]

const capabilityCards = [
  {
    icon: Workflow,
    title: 'Software delivery systems',
    text: 'We design repeatable engineering workflows that reduce bottlenecks across product, QA, and operations.',
  },
  {
    icon: ShieldCheck,
    title: 'Resilient digital platforms',
    text: 'Cloud-first architectures, observability, and security controls tuned for teams that cannot afford downtime.',
  },
  {
    icon: Wrench,
    title: 'Applied automation',
    text: 'From internal tooling to AI-assisted operations, we remove repetitive work and expose real decision leverage.',
  },
]

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <div className="relative mx-auto grid min-h-[calc(100svh-81px)] max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="pill mb-6">
            Digital transformation for bold operators
          </div>
          <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            Engineering
            <span className="text-signal"> clarity</span> into every product,
            process, and platform.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            Nocturnals Intellisoft partners with ambitious teams to ship better
            software, modernize operations, and turn technical complexity into a
            reliable competitive advantage.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn btn-primary">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="btn btn-secondary">
              Explore our approach
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.2 + index * 0.08,
                  ease: 'easeOut',
                }}
                className="panel"
              >
                <p className="font-display text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/58">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-signal/20 via-transparent to-amberglow/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-ambient backdrop-blur">
            <div className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Active engagement
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  Enterprise modernization sprint
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                On track
              </span>
            </div>

            <div className="mt-4 space-y-4">
              {capabilityCards.map((card, index) => {
                const Icon = card.icon

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.25 + index * 0.08,
                      ease: 'easeOut',
                    }}
                    className="rounded-[1.5rem] border border-white/10 bg-[#081729]/80 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/6 text-signal">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-white">
                          {card.title}
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-white/62">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-gradient-to-r from-signal/10 via-white/[0.02] to-amberglow/10 px-5 py-4">
              <div>
                <p className="text-sm text-white/60">Discovery session</p>
                <p className="font-display text-lg font-semibold text-white">
                  Strategy, architecture, and delivery alignment in one room
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Reserve slot
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto hidden max-w-7xl px-6 pb-8 lg:block lg:px-10">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-white/48 transition hover:text-white/70"
        >
          Scroll for more
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}

export default Hero
