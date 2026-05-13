import { repositoryDocuments, repositorySafety } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function DocumentRepositoryPage() {
  useScrollReveal()

  return (
    <main className="repository-page">
      <section className="repository-hero">
        <p className="eyebrow">Institutional compliance</p>
        <div className="repository-hero__grid">
          <h1>Public Document Repository</h1>
          <p>
            Access official certification, affiliation records, and safety
            documentation as per regulatory mandates. Transparency,
            accountability, and academic excellence remain at the center of our
            institution.
          </p>
        </div>
      </section>

      <section className="repository-section">
        <div className="section-heading">
          <p className="eyebrow">Repository</p>
          <h2>Mandatory Disclosure (OASIS)</h2>
        </div>

        <div className="repository-grid">
          {repositoryDocuments.map((document) => (
            <article className="repository-card" key={document.title}>
              <div className="repository-card__icon">PDF</div>
              <div className="repository-card__body">
                <p className="repository-card__tag">{document.tag}</p>
                <h3>{document.title}</h3>
                <p>{document.meta}</p>
                <p>{document.size}</p>
              </div>
              <div className="repository-card__actions">
                <button className="button button--ghost" type="button">
                  View
                </button>
                <button className="button button--solid" type="button">
                  Download
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="repository-section">
        <div className="section-heading">
          <p className="eyebrow">Health & infrastructure</p>
          <h2>Safety records and wellness clearances</h2>
        </div>

        <div className="repository-safety-grid">
          {repositorySafety.map((item) => (
            <article className="repository-safety-card" key={item.title}>
              <span className="repository-safety-card__icon">+</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="repository-safety-card__footer">
                <span>{item.status}</span>
                <a href="/">Access document</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="repository-feature">
        <div className="repository-feature__copy">
          <p className="eyebrow eyebrow--light">Full digital edition</p>
          <h2>The Annual School Prospectus 2024-25</h2>
          <p>
            Discover our curriculum, faculty profiles, and pedagogical
            philosophy in one well-organized digital prospectus designed for
            parents, students, and academic partners.
          </p>
          <button className="button button--light" type="button">
            Explore Prospectus
          </button>
        </div>

        <div className="repository-feature__card" aria-hidden="true">
          <div className="repository-feature__card-title">DAV</div>
          <div className="repository-feature__card-line" />
          <div className="repository-feature__card-label">Academic excellence</div>
        </div>
      </section>
    </main>
  )
}
