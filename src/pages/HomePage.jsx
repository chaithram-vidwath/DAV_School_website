import { useScrollReveal } from '../hooks/useScrollReveal'
import { achievements, facilities, leaders } from '../data/siteData'
import Chairman from '../assets/N.SACHIDANANDA-MURTHY-CHAIRMAN.jpg'
import Secretary from '../assets/R.ANAND-SECRETARY.jpg'
import CEO from '../assets/JAYASHREE.S.MURTHY-C.E.O.jpg'
import Principal from '../assets/Principal-Kavya-Shree-Basappa.jpg'
import entranceImg from '../assets/Entrance.jpg'
import labImg from '../assets/ScienceLab.jpg'
import busImg from '../assets/School-Bus.jpg'
import playgroundImg from '../assets/sportsstadium.jpg'
import { useState, useEffect } from 'react'

export default function HomePage({ onNavigate }) {
  useScrollReveal()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: entranceImg,
      title: "Nurturing Minds, Shaping Futures.",
      subtitle: "Welcome to D.A.V. Public School, Mysuru. We blend Vedic values with modern scientific temperament."
    },
    {
      image: labImg,
      title: "Fueling Scientific Curiosity",
      subtitle: "Our advanced laboratories provide a hands-on environment for research, innovation, and discovery."
    },
    {
      image: busImg,
      title: "Safe & Reliable Transport",
      subtitle: "A fleet of well-maintained school buses ensures a secure and comfortable commute for every student."
    },
    {
      image: playgroundImg,
      title: "Excellence on the Field",
      subtitle: "Expansive playgrounds and sports facilities to foster teamwork, health, and athletic spirit."
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const leaderImages = {
    'Sri N. Sachiddananda Murthy': Chairman,
    'Sri R. Anand': Secretary,
    'Smt Jayashree S. Murthy': CEO,
    'Smt Dr. Kavya Shree Basappa': Principal
  }

  return (
    <main className="homepage">
      {/* HERO CAROUSEL */}
      <section className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero__overlay" />
            <div className="hero__copy">
              <p className="eyebrow eyebrow--light">Est. 2003 | Legacy of Excellence</p>
              <h1 className="color-white">{slide.title}</h1>
              <p className="hero-description-light">{slide.subtitle}</p>
              <div className="hero__actions">
                <button
                  className="button button--solid admissions-pill-bar"
                  onClick={() => onNavigate('admissions')}
                >
                  ADMISSIONS 2026-27
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-arrow carousel-arrow--prev"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className="carousel-arrow carousel-arrow--next"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          aria-label="Next slide"
        >
          ›
        </button>
      </section>


      <section className="facilities-section">
        <div className="section-heading">
          <p className="eyebrow">Why families choose us</p>
          <h2>An ecosystem that supports learning beyond the classroom</h2>
        </div>

        <div className="facilities-grid">
          {facilities.map((item) => (
            <article className="facility-card" key={item.title}>
              <span className="facility-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* LEADERSHIP GREETING - Staggered Overlapping Design */}
      <section className="principal-staggered-section">
        <div className="principal-staggered-grid">
          {/* THE STAGGERED PROFILE UNIT */}
          <div className="profile-staggered-pair">
            <article className="stagger-card stagger-card--image">
              <div
                className="portrait-sharp-stagger"
                style={{ backgroundImage: `url(${Principal})` }}
              />
            </article>
            <article className="stagger-card stagger-card--name">
              <strong className="stagger-name">Smt. Dr. Kavya Shree Basappa</strong>
              <span className="stagger-role">Principal, DAV Public School</span>
            </article>
          </div>

          {/* THE MESSAGE CONTENT */}
          <div className="principal-staggered-message">
            <p className="eyebrow">Leadership Greeting</p>
            <h2 className="heading-teal">Message from the Principal</h2>
            <div className="message-text-staggered">
              <p>
                "At DAV Public School, we believe every child is unique. Our focus is to create a stimulating learning environment that promotes intellectual growth, emotional well-being, and moral responsibility through a strong partnership between school and parents."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Academic Profile Grid - Home Page Version */}
      <section className="home-academic-grid reveal">
        <div className="home-profile-container">
          <div className="home-profile-card">
            <div className="home-profile-icon">🎓</div>
            <h3>Pre-KG to Grade X</h3>
            <p>Classes Offered</p>
          </div>
          <div className="home-profile-card">
            <div className="home-profile-icon">📜</div>
            <h3>CBSE Board Pattern</h3>
            <p>Examination System</p>
          </div>
          <div className="home-profile-card">
            <div className="home-profile-icon">👥</div>
            <h3>1,932</h3>
            <p>Total Students</p>
          </div>
          <div className="home-profile-card">
            <div className="home-profile-icon">📏</div>
            <h3>35</h3>
            <p>Class Strength</p>
          </div>
          <div className="home-profile-card home-profile-card--wide">
            <div className="home-profile-icon">📚</div>
            <div className="home-profile-details">
              <h3>Core Subjects</h3>
              <p>English, Hindi, Kannada, Mathematics, Science, Social Science & Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="section-heading">
          <p className="eyebrow">Key Achievements</p>
          <h2>Steady outcomes backed by culture, consistency, and care</h2>
        </div>

        <div className="achievements-grid">
          <article className="achievement-card achievement-card--featured">
            <span className="achievement-card__value">{achievements[0].value}</span>
            <h3>{achievements[0].title}</h3>
            <p>{achievements[0].detail}</p>
          </article>

          <div className="achievement-list">
            {achievements.slice(1).map((item) => (
              <article className="achievement-row" key={item.title}>
                <span className="achievement-row__value">{item.value}</span>
                <p>{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>



      <section className="management-section">
        <div className="section-heading">
          <p className="eyebrow">School Management</p>
          <h2>Leadership that keeps vision, governance, and care aligned</h2>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader) => (
            <article className={`leader-card ${leader.tone}`} key={leader.name}>
              <div
                className="leader-card__portrait"
                aria-hidden="true"
                style={{ background: `url(${leaderImages[leader.name]}) center/cover no-repeat` }}
              />
              <div className="leader-card__meta">
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-panel">
        <p className="eyebrow eyebrow--light">Admissions open for 2026-27</p>
        <h2 className="color-white">Let&apos;s help your child begin a confident school journey</h2>
        <p>
          Visit the campus, speak with our team, and understand how the DAV
          approach supports both academic and personal development.
        </p>
      </section>
    </main>
  )
}
