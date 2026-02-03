import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import HowItWorks from './components/HowItWorks'
import TrustSection from './components/TrustSection'
import LeadForm from './components/LeadForm'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const scrollToForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Header onCTAClick={scrollToForm} />
      <Hero onCTAClick={scrollToForm} />
      <ProblemSection />
      <HowItWorks />
      <TrustSection />
      <LeadForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
      <FinalCTA onCTAClick={scrollToForm} />
      <Footer />
    </div>
  )
}

export default App
