import { admissionJourney, eligibilityRows, keyDates, mandatoryDocuments, } from '../data/siteData'
import campusImage from '../assets/Campus-1.jpg'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function AdmissionsPage({ onStartApplication }) {
  useScrollReveal()

  return (
    <main className="admissions-page">
      <section
        className="admissions-hero"
        style={{ backgroundImage: `url(${campusImage})` }}
      >

        <div className="admissions-hero__overlay" />
        <div className="admissions-hero__content">
          <div className="admissions-badge">Admissions Open</div>
          <h1>Admission 2026-27</h1>
          <p>
            Join an institution where tradition meets innovation. We invite
            young minds to embark on a journey of excellence, character, and
            lifelong learning.
          </p>
          <div className="admissions-hero__actions">
            <button
              className="button button--admissions-primary"
              type="button"
              onClick={onStartApplication}
            >
              Start Your Application
            </button>
            <button className="button button--admissions-secondary" type="button">
              Download Admission Policy
            </button>
          </div>
        </div>
      </section>

      <section className="admissions-journey">
        <div className="section-heading section-heading--dark">
          <p className="eyebrow">Admissions Process</p>
          <h2>The Admission Journey</h2>
          <span className="section-accent" />
        </div>

        <div className="admissions-journey__grid">
          {admissionJourney.map((item) => (
            <article className="journey-card" key={item.step}>
              <div className="journey-card__content">
                <span className="journey-card__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="journey-card__arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-eligibility">
        <div className="admissions-eligibility__intro">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow">Entry readiness</p>
            <h2>Eligibility & Age Criteria</h2>
          </div>

          <p className="admissions-eligibility__copy">
            We adhere to standardized age requirements to ensure the developmental
            readiness of every student entering our halls.
          </p>

          <article className="admissions-note">
            <span>Note</span>
            <p>Age is calculated as of March 31st of the academic year.</p>
          </article>
        </div>

        <div className="admissions-table">
          <div className="admissions-table__header">
            <span>Grade</span>
            <span>Min Age</span>
            <span>Max Age</span>
          </div>

          {eligibilityRows.map((row) => (
            <div className="admissions-table__row" key={row.grade}>
              <span className="admissions-table__grade">{row.grade}</span>
              <span>{row.min}</span>
              <span>{row.max}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="admissions-documents">
        <div className="section-heading section-heading--center section-heading--dark">
          <h2>Mandatory Documents</h2>
          <span className="section-accent" />
        </div>

        <div className="admissions-documents__grid">
          {mandatoryDocuments.map((item) => (
            <article
              className={`document-card ${item.tone ?? 'document-card--plain'}`}
              key={item.title}
            >
              <div className="document-card__icon" aria-hidden="true">
                {item.tone === 'document-card--portal' ? '□' : '◆'}
              </div>
              <div className="document-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.note ? <span className="document-card__note">{item.note}</span> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-dates">
        <div className="admissions-dates__content">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow">Calendar</p>
            <h2>Key Dates</h2>
          </div>

          <p className="admissions-dates__intro">
            Important milestones to help your family stay prepared during the
            admissions cycle.
          </p>

          <article className="admissions-notice">
            <span>Notice</span>
            <p>Entrance test results are usually declared within 7 working days.</p>
          </article>
        </div>

        <div className="admissions-dates__list">
          {keyDates.map((item) => (
            <article className="date-card" key={item.title}>
              <div className="date-card__badge">
                <span>{item.month}</span>
                <strong>{item.day}</strong>
              </div>
              <div className="date-card__body">
                <h3>{item.title}</h3>
                <p>{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="admissions-cta">
        <div className="admissions-cta__glow admissions-cta__glow--one" />
        <div className="admissions-cta__glow admissions-cta__glow--two" />
        <div className="admissions-cta__content">
          <h2>Take the first step toward a meaningful academic journey.</h2>
          <p>
            Speak with our admissions team and discover how DAV Public School
            can support your child’s next chapter.
          </p>
        </div>
        <button className="admissions-cta__button" type="button" onClick={onStartApplication}>
          Contact Admissions
        </button>
      </section>
    </main>
  )
}
