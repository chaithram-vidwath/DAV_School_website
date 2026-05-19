import { useState } from 'react'
import { navItems } from '../data/siteData'
import logo from '../assets/Logo.png'

const directPages = new Set(['home', 'documents', 'facilities', 'gallery', 'admissions', 'faculty-staff', 'about-us', 'contact-us', 'academics'])

export default function TopNav({ activePage, onNavigateHome, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigation = (id) => {
    setIsMobileMenuOpen(false)
    if (id === 'home') {
      onNavigateHome()
    } else if (directPages.has(id) || id === 'application-form') {
      onNavigate(id)
    }
  }
  return (
    <header className="topbar">
      <button className="brand-button" type="button" onClick={onNavigateHome}>
        <img src={logo} alt="DAV Public School Logo" className="logo-img" />
        <span className="brand-text">DAV Public School</span>
      </button>

      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`} aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav-link"
            data-active={activePage === item.id}
            onClick={() => handleNavigation(item.id)}
          >
            {item.label}
          </button>
        ))}
        
        <button
          className="header-cta mobile-visible"
          type="button"
          onClick={() => handleNavigation('application-form')}
        >
          Apply Now
        </button>
      </nav>

      <button
        className="header-cta desktop-only"
        type="button"
        onClick={() => handleNavigation('application-form')}
      >
        Apply Now
      </button>
      
      <button 
        className={`mobile-menu-toggle hamburger ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}
