import { useEffect, useRef } from 'react'
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
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="site-shell">
      <div ref={progressRef} className="scroll-progress" />
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
