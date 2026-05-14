import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import AdmissionsPage from './pages/AdmissionsPage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import DocumentRepositoryPage from './pages/DocumentRepositoryPage'
import FacilitiesPage from './pages/FacilitiesPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import FacultyPage from './pages/FacultyPage'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import Footer from './components/Footer'



function App() {
  const [activePage, setActivePage] = useState('home')


  useEffect(() => {
    const cursor = document.getElementById('custom-cursor')

    const updateCursorPosition = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const addHoverState = () => {
      cursor.classList.add('hover')
    }

    const removeHoverState = () => {
      cursor.classList.remove('hover')
    }

    // Update cursor position on mouse move
    window.addEventListener('mousemove', updateCursorPosition)

    // Add hover effect to clickable elements
    const clickableElements = document.querySelectorAll('a, button, .button, [role="button"]')
    clickableElements.forEach(element => {
      element.addEventListener('mouseenter', addHoverState)
      element.addEventListener('mouseleave', removeHoverState)
    })

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      clickableElements.forEach(element => {
        element.removeEventListener('mouseenter', addHoverState)
        element.removeEventListener('mouseleave', removeHoverState)
      })
    }
  }, [])

  return (
    <div className="page-shell">
      <div className="cursor" id="custom-cursor"></div>
      <TopNav
        activePage={activePage}
        onNavigateHome={() => setActivePage('home')}
        onNavigate={setActivePage}
      />

      {activePage === 'documents' ? (
        <DocumentRepositoryPage />
      ) : activePage === 'facilities' ? (
        <FacilitiesPage />
      ) : activePage === 'gallery' ? (
        <GalleryPage />
      ) : activePage === 'application-form' ? (
        <ApplicationFormPage onBack={() => setActivePage('admissions')} />
      ) : activePage === 'admissions' ? (
        <AdmissionsPage onStartApplication={() => setActivePage('application-form')} />
      ) : activePage === 'contact-us' ? (
        <ContactPage />
      ) : activePage === 'faculty-staff' ? (
        <FacultyPage />
      ) : activePage === 'about-us' ? (
        <AboutPage />
      ) : activePage === 'academics' ? (
        <AcademicsPage />
      ) : (
        <HomePage onNavigate={setActivePage} />
      )}
      <Footer onNavigate={setActivePage} />
    </div>
  )
}

export default App
