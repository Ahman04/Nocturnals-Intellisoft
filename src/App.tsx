import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industries from './components/Industries'
import MissionVision from './components/MissionVision'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Technologies from './components/Technologies'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="site-shell" style={{} as CSSProperties}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Industries />
      <Technologies />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
