import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import logoNocturnals from '../assets/images/logoNocturnals.png'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Why Us', href: '#whychooseus' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28)

      let current = '#hero'

      navItems.forEach((item) => {
        const section = document.querySelector(item.href)

        if (!section) {
          return
        }

        const top = section.getBoundingClientRect().top + window.scrollY

        if (window.scrollY >= top - 140) {
          current = item.href
        }
      })

      setActiveHref(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`nav-shell sticky top-0 z-50 ${
        isScrolled ? 'nav-shell--compact' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#hero" className="flex items-center gap-4">
          <img
            src={logoNocturnals}
            alt="Nocturnals Intellisoft logo"
            className="h-14 w-14 object-contain"
          />
          <div>
            <p className="font-display text-[2rem] font-semibold leading-none tracking-tight text-white">
              Nocturnals
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.38em] text-white">
              Intellisoft
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link text-sm font-medium transition hover:text-white ${
                activeHref === item.href ? 'nav-link--active' : 'text-[#d9e4ff]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact-form"
            className="rounded-xl bg-[#1437d4] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a42f2]"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#0a2347]/96 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#d9e4ff] transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact-form"
              className="mt-3 w-full rounded-xl bg-[#1437d4] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1a42f2]"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  )
}

export default Navbar
