import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { achievements, leaders } from '../data/siteData'
import principalImage from '../assets/Principal-Kavya-Shree-Basappa.jpg'
import chairmanImage from '../assets/N.SACHIDANANDA-MURTHY-CHAIRMAN.jpg'
import secretaryImage from '../assets/R.ANAND-SECRETARY.jpg'
import ceoImage from '../assets/JAYASHREE.S.MURTHY-C.E.O.jpg'
import historyLegacy from '../assets/history-legacy.png'
import historyModern from '../assets/history-modern.png'



export default function AboutPage() {
  useScrollReveal()

  const coreValues = [
    {
      icon: '🛡️',
      title: 'Integrity',
      description: 'We foster a culture of honesty and ethical conduct in every action.'
    },
    {
      icon: '💡',
      title: 'Excellence',
      description: 'Striving for the highest standards in academics, sports, and arts.'
    },
    {
      icon: '🤝',
      title: 'Compassion',
      description: 'Developing empathy and a sense of responsibility towards society.'
    },
    {
      icon: '🌱',
      title: 'Innovation',
      description: 'Encouraging curiosity and creative problem-solving in every student.'
    }
  ]

  const management = [
    {
      name: 'Sri N. Sachiddananda Murthy',
      role: 'Chairman',
      image: chairmanImage,
      tone: 'leader-card--navy'
    },
    {
      name: 'Sri R. Anand',
      role: 'Secretary',
      image: secretaryImage,
      tone: 'leader-card--amber'
    },
    {
      name: 'Smt Jayashree S. Murthy',
      role: 'C.E.O',
      image: ceoImage,
      tone: 'leader-card--slate'
    },
    {
      name: 'Smt Dr. Kavya Shree Basappa',
      role: 'Principal',
      image: principalImage,
      tone: 'leader-card--navy'
    }
  ]


  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="eyebrow eyebrow--light">Our Legacy</p>
          <h1>A Tradition of Excellence, A Future of Innovation</h1>
          <p>
            Since its inception, DAV Public School has been at the forefront of
            educational excellence, blending traditional Vedic values with modern
            scientific temperament.
          </p>
        </div>
        <div className="about-hero__visual" aria-hidden="true">
          <div className="about-hero__blob about-hero__blob--1"></div>
          <div className="about-hero__blob about-hero__blob--2"></div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vision-mission__grid">
          <article className="vision-card">
            <div className="vision-card__icon">👁️</div>
            <h2>Our Vision</h2>
            <p>
              To be a world-class center of learning that nurtures global citizens
              rooted in Indian culture and values, equipped to face the challenges
              of a dynamic world.
            </p>
          </article>
          <article className="mission-card">
            <div className="mission-card__icon">🚀</div>
            <h2>Our Mission</h2>
            <p>
              To provide a holistic education that empowers students with
              knowledge, character, and skills, fostering a lifelong passion for
              learning and service to humanity.
            </p>
          </article>
        </div>
      </section>

      {/* History Section */}
      <section className="about-history">
        <div className="about-history__container">
          <div className="about-history__content">
            <p className="eyebrow">The DAV Movement</p>
            <h2>Roots that run deep</h2>
            <p>
              D.A.V. Public School began its educational journey in 2003 and has since grown into a warm, welcoming, and distinctive institution.
              We are an open school, and visitors are welcome at any time.
              We take pride in our caring, supportive, and happy atmosphere,
              where every child feels valued and encouraged to succeed.
            </p>
            <p>
              We strongly believe that a child’s education is most effective when parents and teachers work together in partnership throughout the school years. Prospective parents are warmly invited to visit the school to explore our facilities, understand our range of provisions, and interact with our staff and pupils.

              All documents and policies referred to in this prospectus may be viewed by contacting the school office.

              We look forward to meeting you and hope that your association with D.A.V. Public School will be long, happy, and rewarding.
            </p>
            <div className="history-stats">
              <div className="history-stat">
                <span className="history-stat__num">135+</span>
                <span className="history-stat__label">Years of Legacy</span>
              </div>
              <div className="history-stat">
                <span className="history-stat__num">900+</span>
                <span className="history-stat__label">Institutions Pan-India</span>
              </div>
            </div>
          </div>
          <div className="about-history__visual">
            <div className="history-image-stack">
              <div
                className="history-image history-image--1"
                style={{ backgroundImage: `url(${historyLegacy})` }}
              ></div>
              <div
                className="history-image history-image--2"
                style={{ backgroundImage: `url(${historyModern})` }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages Section */}
      <section className="leadership-messages">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Our Leadership</p>
          <h2>Words from our guiding lights</h2>
        </div>

        {/* Chairman's Message */}
        <article className="principal-card-expanded principal-card-expanded--reverse">
          <div className="principal-card-expanded__content">
            <div className="quote-icon">“</div>
            <h2>Message from the Chairman</h2>
            <p>
              "It is a privilege to present an institution that stands as a beacon of excellence in academic achievement, character formation, and holistic development. Our school is committed to shaping young minds into confident, responsible, and future-ready individuals.

              At D.A.V., education is viewed as a transformative journey. We believe in fostering intellectual curiosity, creativity, critical thinking, and a lifelong love for learning. Our environment is designed to help every learner grow academically while also developing strong values and leadership qualities.

              Over the years, D.A.V. Public School has earned a reputation for academic brilliance and vibrant cultural accomplishments. This progress reflects the dedication of our teachers, the enthusiasm of our students, and the trust placed in us by the community.

              Keeping pace with the rapidly evolving technological world, we have proudly introduced Artificial Intelligence (AI) as an integral part of our curriculum. By integrating hands-on activities, real-world applications, and discussions on ethical AI use, we aim to equip our students with essential skills for the digital age.

              Holistic growth is a core part of our philosophy. Along with academics, we provide a wide range of extracurricular opportunities in sports, music, dance, drama, debate, and other creative platforms. These activities help students discover their strengths, build confidence, and develop teamwork and discipline.

              As our school continues to move forward with vision and purpose, we remain committed to providing an educational experience that blends tradition with innovation. We invite you to explore this website to learn more about our programmes, values, and initiatives".
            </p>
            <p>
              Thank you for your interest in D.A.V. Public School, Mysuru.
              We look forward to welcoming you to our vibrant and growing community.
            </p>
            <div className="principal-info">
              <strong>Sri N. Sachiddananda Murthy</strong>
              <span>B.A.L, LL.B, EMBA</span><br />
              <span>Chairman, D.A.V. Public School, Mysuru</span>
            </div>
          </div>
          <div className="principal-card-expanded__image">
            <div className="portrait-frame portrait-frame--chairman">
              <div
                className="portrait-frame"
                style={{
                  background: `url(${chairmanImage}) center/cover no-repeat`
                }}
              ></div>
            </div>
          </div>
        </article>

        {/* Principal's Message */}
        <article className="principal-card-expanded">
          <div className="principal-card-expanded__image">
            <div
              className="portrait-frame"
              style={{
                background: `url(${principalImage}) center/cover no-repeat`
              }}
            ></div>
          </div>
          <div className="principal-card-expanded__content">
            <div className="quote-icon">“</div>
            <h2>Message from the Principal</h2>
            <p>
              "At DAV Public School, we believe every child is unique.
              Our focus is to create a stimulating learning environment that promotes intellectual growth, emotional well-being, and moral responsibility through a strong partnership between school and parents.."
            </p>
            <div className="principal-info">
              <strong>Smt. Dr. Kavya Shree Basappa</strong>
              <span>Principal, DAV Public School</span>
            </div>
          </div>
        </article>
      </section>



      {/* Core Values */}
      <section className="core-values">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Our Philosophy</p>
          <h2>The values that guide us</h2>
        </div>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <article className="value-card" key={index}>
              <div className="value-card__icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Achievements Re-use */}
      <section className="about-achievements">
        <div className="achievements-minimal-grid">
          {achievements.map((item, index) => (
            <div className="achievement-minimal-card" key={index}>
              <span className="achievement-minimal-card__value">{item.value}</span>
              <p className="achievement-minimal-card__title">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership">
        <div className="section-heading">
          <p className="eyebrow">Our Governance</p>
          <h2>Management & Leadership</h2>
        </div>
        <div className="leaders-grid">
          {management.map((leader) => (
            <article className={`leader-card ${leader.tone}`} key={leader.name}>
              <div
                className="leader-card__portrait"
                aria-hidden="true"
                style={{
                  background: `url(${leader.image}) center/cover no-repeat`
                }}
              />
              <div className="leader-card__meta">
                <h3>{leader.name}</h3>
                <p>{leader.role}</p>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main >
  )
}