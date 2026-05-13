import { facilities } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FacilitiesPage() {
  useScrollReveal()

  return (
    <main className="facilities-page">
      <section className="facilities-hero">
        <div className="facilities-hero__media" aria-hidden="true" />
        <div className="facilities-hero__overlay" />
        <div className="facilities-hero__content">
          <p className="eyebrow eyebrow--light">Our environment</p>
          <h1>Architecture designed for ambition</h1>
          <p>
            At DAV Public School, our campus is more than a collection of
            buildings. It is a living learning environment designed to inspire
            curiosity, discipline, wellness, and confidence.
          </p>
        </div>
      </section>

      <section className="facility-narrative facility-narrative--reverse">
        <div className="facility-narrative__copy">
          <p className="eyebrow">Laboratories & research</p>
          <h2>Spaces for inquiry</h2>
          <p>
            Our science and STEM environments give students room to test ideas,
            work collaboratively, and build confidence through practical
            discovery. Learning here is designed to be hands-on, visible, and
            memorable.
          </p>
          <button className="facility-link" type="button">
            Explore the STEM Wing
          </button>
        </div>
        <div className="facility-narrative__image facility-narrative__image--lab" aria-hidden="true" />
      </section>

      <section className="facility-narrative">
        <div className="facility-narrative__image facility-narrative__image--library" aria-hidden="true" />
        <div className="facility-narrative__copy">
          <p className="eyebrow">The Learning Commons</p>
          <h2>Quiet for reflection</h2>
          <p>
            The library and reading commons are designed as calm intellectual
            spaces for independent study, guided reading, and academic depth.
            They support both focus and a strong reading culture across grades.
          </p>
          <button className="facility-link" type="button">
            View Reading Resources
          </button>
        </div>
      </section>

      <section className="facility-arts">
        <div className="facility-arts__copy">
          <p className="eyebrow">Creative studios</p>
          <h2>Expressions of self</h2>
          <p>
            From art rooms and music practice spaces to performance-ready halls,
            our creative environments encourage students to build confidence,
            aesthetic sensibility, and a voice of their own.
          </p>
          <button className="facility-link" type="button">
            View the Activity Spaces
          </button>
        </div>
        <div className="facility-arts__gallery">
          <div className="facility-arts__tile facility-arts__tile--one" aria-hidden="true" />
          <div className="facility-arts__tile facility-arts__tile--two" aria-hidden="true" />
        </div>
      </section>

      <section className="facility-bento">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Integrated excellence</p>
          <h2>Spaces that support the full student experience</h2>
        </div>

        <div className="facility-bento__grid">
          <article className="facility-bento__card facility-bento__card--large">
            <div>
              <h3>Aquatic and sports infrastructure</h3>
              <p>
                Structured movement, team culture, and physical confidence are
                supported through dedicated sports zones and supervised activity
                spaces.
              </p>
            </div>
            <div className="facility-bento__visual facility-bento__visual--pool" aria-hidden="true" />
          </article>

          <article className="facility-bento__card facility-bento__card--primary">
            <span className="facilities-overview__icon" aria-hidden="true">
              ⚽
            </span>
            <h3>Varsity fields</h3>
            <p>Outdoor play, drills, assemblies, and house-level competition zones.</p>
          </article>

          <article className="facility-bento__card">
            <span className="facilities-overview__icon" aria-hidden="true">
              🍽️
            </span>
            <h3>Student dining</h3>
            <p>Nutritious meals served in a clean, supervised community setting.</p>
          </article>

          <article className="facility-bento__card facility-bento__card--wide">
            <div>
              <h3>Meditation and wellness garden</h3>
              <p>
                A quieter zone for mindfulness, reflection, and emotional
                balance within the school day.
              </p>
            </div>
            <div className="facility-bento__visual facility-bento__visual--garden" aria-hidden="true" />
          </article>
        </div>
      </section>

      <section className="facility-cta">
        <div>
          <p className="eyebrow eyebrow--light">Visit the campus</p>
          <h2>Experience the campus in person</h2>
        </div>
        <div className="facility-cta__actions">
          <button className="button button--light" type="button">
            Book a Private Tour
          </button>
          <button className="button facility-cta__ghost" type="button">
            Download Campus Map
          </button>
        </div>
      </section>
    </main>
  )
}
