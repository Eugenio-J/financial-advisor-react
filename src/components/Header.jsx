import { useState, useEffect } from 'react'
import './Header.css'

export default function Header({ onCTAClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <a href="#" className="logo">Wealth & Clarity Advisory</a>
        <button onClick={onCTAClick} className="header-cta">
          Book Free Consultation
        </button>
      </div>
    </header>
  )
}
