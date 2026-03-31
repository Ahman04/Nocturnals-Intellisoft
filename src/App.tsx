import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Industries from './components/Industries'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Solutions from './components/Solutions'
import Technologies from './components/Technologies'
import WhyChooseUs from './components/WhyChooseUs'

function App() {
  return (
    <div className="bg-ink text-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
