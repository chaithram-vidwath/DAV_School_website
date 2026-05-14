import { navItems } from '../data/siteData'
import logo from '../assets/Logo.png'

const directPages = new Set(['home', 'documents', 'facilities', 'gallery', 'admissions', 'faculty-staff', 'about-us', 'contact-us', 'academics'])

export default function TopNav({ activePage, onNavigateHome, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand-button" type="button" onClick={onNavigateHome}>
        <img src={logo} alt="DAV Public School Logo" className="logo-img" />
        <span className="brand-text">DAV Public School</span>
      </button>

      <nav className="main-nav" aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="nav-link"
            data-active={activePage === item.id}
            onClick={() => {
              if (directPages.has(item.id)) {
                onNavigate(item.id)
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        className="header-cta"
        type="button"
        onClick={() => onNavigate('application-form')}
      >
        Apply Now
      </button>
    </header>
  )
}
