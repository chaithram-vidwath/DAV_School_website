import { useScrollReveal } from '../hooks/useScrollReveal'
import { achievements, facilities, leaders } from '../data/siteData'

export default function HomePage({ onNavigate }) {
  useScrollReveal()

  return (
    <main className="homepage">
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Est. 1886 | Legacy of Excellence</p>
          <h1>
            Nurturing Minds,
            <br />
            Shaping Futures.
          </h1>
          <p>
            Combining Vedic values with modern scientific temperament to create
            the global citizens of tomorrow.
          </p>
          <div className="hero__actions">
            <button
              className="button button--solid"
              type="button"
              onClick={() => onNavigate('admissions')}
            >
              Admissions 2024-25
            </button>
            <button className="button button--ghost" type="button">
              Virtual Tour
            </button>
          </div>
        </div>
        <div className="hero__deco hero__deco--1" aria-hidden="true" />
        <div className="hero__deco hero__deco--2" aria-hidden="true" />
        <div className="hero__deco hero__deco--3" aria-hidden="true" />
      </section>

      <section className="principal-section">
        <div className="principal-section__portrait" aria-hidden="true" />

        <div className="principal-section__content">
          <div className="quote-card">
            <p className="color-white">
              “We believe every child deserves an education that grows both
              character and capability.”
            </p>
          </div>

          <p className="eyebrow">Leadership Greeting</p>
          <h2>From the Principal&apos;s Desk</h2>
          <div className="principal-copy">
            <p>
              It is my distinct privilege to lead an institution that stands as
              a beacon of academic rigor and cultural heritage. At DAV Public
              School, we believe that education extends beyond the four walls of
              a classroom.
            </p>
            <p>
              Our curriculum is meticulously designed to foster critical
              thinking, emotional intelligence, and a deep-seated respect for
              our traditions. We invite you to be part of a community where
              every child is seen, heard, and empowered to excel.
            </p>
            <p className="principal-signoff">— Dr. Anita Sharma, Ph.D.</p>
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

      <section className="management-section">
        <div className="section-heading">
          <p className="eyebrow">School Management</p>
          <h2>Leadership that keeps vision, governance, and care aligned</h2>
        </div>

        <div className="leaders-grid">
          {leaders.map((leader) => (
            <article className={`leader-card ${leader.tone}`} key={leader.name}>
              <div className="leader-card__portrait" aria-hidden="true" />
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
        <button
          className="button button--light"
          type="button"
          onClick={() => onNavigate('admissions')}
        >
          Schedule a Campus Visit
        </button>
      </section>
    </main>
  )
}
