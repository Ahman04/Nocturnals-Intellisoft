import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { motion } from 'framer-motion'
import hero1 from '../assets/images/HERO1.png'
import hero2 from '../assets/images/HERO2.png'
import hero3 from '../assets/images/hero3.png'

const metrics = [
  { label: 'Solutions delivered', value: '50+' },
  { label: 'Industries supported', value: '10+' },
  { label: 'Long-term client focus', value: '100%' },
]

const slides = [
  {
    image: hero1,
    eyebrow: 'Welcome to the Future',
    title: ['Building Agentic AI', 'for Smarter Businesses'],
    description: {
      lead: 'Nocturnals Intellisoft',
      rest: ' builds AI-driven software, intelligent automation, and modern digital systems for organizations ready to operate smarter.',
    },
    primaryCta: 'Get a quote',
    secondaryCta: 'View Our Work',
  },
  {
    image: hero2,
    eyebrow: 'AI-First Engineering',
    title: ['Agentic AI', 'for Smarter Operations'],
    description: {
      lead: 'Nocturnals Intellisoft',
      rest: ' creates AI agents, workflow automation, and enterprise platforms that turn practical business processes into scalable intelligent systems.',
    },
    primaryCta: 'Start a project',
    secondaryCta: 'Explore Solutions',
  },
  {
    image: hero3,
    eyebrow: 'Connected Intelligence',
    title: ['Global Systems', 'Powered by AI'],
    description: {
      lead: 'Nocturnals Intellisoft',
      rest: ' builds connected software platforms, automation systems, and enterprise AI solutions designed to operate reliably at scale.',
    },
    primaryCta: 'Build with us',
    secondaryCta: 'See Capabilities',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  return (
    <section id="hero" className="hero-stage relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-image absolute inset-0 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />

      <button
        type="button"
        aria-label="Previous slide"
        className="hero-arrow hero-arrow--left hidden lg:inline-flex"
        onClick={goToPrevious}
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        className="hero-arrow hero-arrow--right hidden lg:inline-flex"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="relative mx-auto flex min-h-[calc(100svh-81px)] max-w-[96rem] flex-col items-center justify-center px-3 py-12 text-center sm:px-4 lg:px-6 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-[86rem] pt-4"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur">
            <Sparkles className="h-4 w-4" />
            {slides[activeSlide].eyebrow}
          </div>
          <h1 className="mx-auto max-w-[78rem] font-display text-[3.1rem] font-bold leading-[0.9] tracking-[-0.055em] text-white sm:text-[4.25rem] lg:text-[5.95rem]">
            {slides[activeSlide].title[0]}
            <span className="block text-[#93c5fd]">
              {slides[activeSlide].title[1]}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-[60rem] text-[1rem] leading-7 text-white sm:text-[1.2rem] sm:leading-8">
            <span className="font-bold text-white">
              {slides[activeSlide].description.lead}
            </span>
            <span>{slides[activeSlide].description.rest}</span>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1450ff] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(20,80,255,0.35)] transition hover:bg-[#2962ff]"
            >
              {slides[activeSlide].primaryCta}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/12 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/18"
            >
              {slides[activeSlide].secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
          className="mt-12 w-full max-w-5xl"
        >
          <div className="hero-metric-strip grid gap-6 border-t border-white/25 px-6 pt-8 sm:grid-cols-3 lg:px-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.25 + index * 0.08,
                  ease: 'easeOut',
                }}
                className="text-center"
              >
                <p className="font-display text-[3rem] font-semibold tracking-[-0.04em] text-[#bfdbfe] lg:text-[3.35rem]">
                  {metric.value}
                </p>
                <p className="mt-1 text-[0.98rem] text-white">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 pb-6 text-center lg:px-10">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
        >
          Scroll to explore
          <ChevronDown className="h-4 w-4" />
        </a>
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition ${
                index === activeSlide
                  ? 'h-2 w-8 bg-[#1450ff]'
                  : 'h-2 w-2 bg-white/30'
              }`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
