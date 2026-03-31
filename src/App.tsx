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
  return (
    <div className="site-shell">
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
