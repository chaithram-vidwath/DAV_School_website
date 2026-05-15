import { academicSections } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import academicsHero from '../assets/Lab.jpg'
import environmentImg from '../assets/playground.jpg'
import indoorImg from '../assets/library.jpg'

export default function AcademicsPage() {
  useScrollReveal()

  return (
    <main className="academics-page">
      {/* HERO */}
      <section className="academics-hero">
        <div 
          className="academics-hero__visual" 
          style={{ backgroundImage: `url(${academicsHero})` }}
          aria-hidden="true" 
        />
        <div className="academics-hero__overlay" />
        <div className="academics-hero__content">
          <p className="eyebrow eyebrow--light">Academic Excellence</p>
          <h1>Intellectual & Personal Growth</h1>
          <p>
            At DAV, we follow a curriculum that balances rigorous academic standards 
            with creative exploration, preparing students for the challenges of tomorrow 
            through a holistic learning approach.
          </p>
        </div>
      </section>

      {/* CORE INFO */}
      <section className="academics-intro">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Academic Foundation</p>
          <h2>A Legacy of Excellence</h2>
        </div>
        <div className="academics-intro__card">
           <p>
            D.A.V. Public School is affiliated with the Central Board of Secondary Education (CBSE). 
            We follow a rigorous academic framework from <strong>Pre-KG to Grade X</strong>, 
            blending traditional values with 21st-century skills like Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* Academic Profile Grid */}
      <section className="academic-profile-grid reveal">
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-icon">🎓</div>
            <h3>Pre-KG to Grade X</h3>
            <p>Classes Offered</p>
          </div>
          <div className="profile-card">
            <div className="profile-icon">📜</div>
            <h3>CBSE Board Pattern</h3>
            <p>Examination System</p>
          </div>
          <div className="profile-card">
            <div className="profile-icon">👥</div>
            <h3>1,932</h3>
            <p>Total Students</p>
          </div>
          <div className="profile-card">
            <div className="profile-icon">📏</div>
            <h3>35</h3>
            <p>Class Strength</p>
          </div>
          <div className="profile-card profile-card--wide">
            <div className="profile-icon">📚</div>
            <div className="profile-details">
              <h3>Core Subjects</h3>
              <p>English, Hindi, Kannada, Mathematics, Science, Social Science & Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC PILLARS */}
      <section className="academics-pillars">
        <div className="academics-pillars__grid">
          {academicSections.map((section) => (
            <article key={section.id} className="pillar-card">
              <div className="pillar-card__header">
                <h3>{section.title}</h3>
                <span className="pillar-card__accent" />
              </div>

              {section.description && (
                <p className="pillar-card__description">
                  {section.description}
                </p>
              )}

              <ul className="pillar-card__list">
                {section.points.map((point, index) => (
                  <li key={index}>
                    <span className="pillar-card__bullet">◆</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* LEARNING ENVIRONMENT */}
      <section className="academics-environment">
        <div className="academics-environment__content">
          <div className="section-heading">
            <p className="eyebrow">Environment</p>
            <h2>Beyond the Classroom</h2>
          </div>
          <p>
            We believe that learning happens everywhere. Our campus is designed 
            to be a living textbook, where corridors, playgrounds, and common 
            spaces spark curiosity and encourage collaboration.
          </p>
        </div>
        <div className="academics-environment__gallery">
           <img src={environmentImg} alt="School Playground" className="academics-env-img academics-env-img--main" />
           <img src={indoorImg} alt="Library Study Space" className="academics-env-img academics-env-img--sub" />
        </div>
      </section>

      {/* CTA */}
      <section className="academics-cta">
        <h2>Ready to join our academic community?</h2>
        <p>Explore our admissions process or get in touch with our team to learn more.</p>
      </section>
    </main>
  )
}
