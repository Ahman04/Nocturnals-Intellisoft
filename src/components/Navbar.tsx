import { useState } from 'react'
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

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0a2347] shadow-[0_8px_24px_rgba(0,0,0,0.14)] backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logoNocturnals}
            alt="Nocturnals Intellisoft logo"
            className="h-12 w-12 object-contain"
          />
          <div>
            <p className="font-display text-[1.45rem] font-semibold leading-none tracking-tight text-white">
              Nocturnals
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-white/68">
              Intellisoft
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#d9e4ff] transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
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
              href="#contact"
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
