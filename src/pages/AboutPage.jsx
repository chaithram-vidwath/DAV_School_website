import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { achievements } from "../data/siteData";
import principalImage from "../assets/Principal-Kavya-Shree-Basappa.jpg";
import chairmanImage from "../assets/N.SACHIDANANDA-MURTHY-CHAIRMAN.jpg";
import secretaryImage from "../assets/R.ANAND-SECRETARY.jpg";
import ceoImage from "../assets/JAYASHREE.S.MURTHY-C.E.O.jpg";
import historyLegacy from "../assets/Entrance.jpg";
import historyModern from "../assets/Campus-1.jpg";

export default function AboutPage() {
  useScrollReveal();
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  const coreValues = [
    {
      icon: "🛡️",
      title: "Integrity",
      description:
        "We foster a culture of honesty and ethical conduct in every action.",
    },
    {
      icon: "💡",
      title: "Excellence",
      description:
        "Striving for the highest standards in academics, sports, and arts.",
    },
    {
      icon: "🤝",
      title: "Compassion",
      description:
        "Developing empathy and a sense of responsibility towards society.",
    },
    {
      icon: "🌱",
      title: "Innovation",
      description:
        "Encouraging curiosity and creative problem-solving in every student.",
    },
  ];

  const management = [
    {
      name: "Sri N. Sachiddananda Murthy",
      role: "Chairman",
      image: chairmanImage,
      tone: "leader-card--navy",
    },
    {
      name: "Sri R. Anand",
      role: "Secretary",
      image: secretaryImage,
      tone: "leader-card--amber",
    },
    {
      name: "Smt Jayashree S. Murthy",
      role: "C.E.O",
      image: ceoImage,
      tone: "leader-card--slate",
    },
    {
      name: "Smt Dr. Kavya Shree Basappa",
      role: "Principal",
      image: principalImage,
      tone: "leader-card--navy",
    },
  ];

  const leadershipMessages = [
    {
      title: "Message from the Chairman",
      name: "Sri N. Sachiddananda Murthy",
      qualification: "B.A.L, LL.B, EMBA",
      role: "Chairman, D.A.V. Public School, Mysuru",
      image: chairmanImage,
      reverse: true,
      paragraphs: [
        `"It is a privilege to present an institution that stands as a beacon of excellence in academic achievement, character formation, and holistic development. Our school is committed to shaping young minds into confident, responsible, and future-ready individuals. At D.A.V., education is viewed as a transformative journey. We believe in fostering intellectual curiosity, creativity, critical thinking, and a lifelong love for learning. Our environment is designed to help every learner grow academically while also developing strong values and leadership qualities. Over the years, D.A.V. Public School has earned a reputation for academic brilliance and vibrant cultural accomplishments. This progress reflects the dedication of our teachers, the enthusiasm of our students, and the trust placed in us by the community. Keeping pace with the rapidly evolving technological world, we have proudly introduced Artificial Intelligence (AI) as an integral part of our curriculum. By integrating hands-on activities, real-world applications, and discussions on ethical AI use, we aim to equip our students with essential skills for the digital age. Holistic growth is a core part of our philosophy. Along with academics, we provide a wide range of extracurricular opportunities in sports, music, dance, drama, debate, and other creative platforms. These activities help students discover their strengths, build confidence, and develop teamwork and discipline. As our school continues to move forward with vision and purpose, we remain committed to providing an educational experience that blends tradition with innovation. We invite you to explore this website to learn more about our programmes, values, and initiatives".`,
        "Thank you for your interest in D.A.V. Public School, Mysuru. We look forward to welcoming you to our vibrant and growing community.",
      ],
    },
    {
      title: "Message from the Secretary",
      name: "Sri R. Anand",
      role: "Secretary, D.A.V. Public School, Mysuru",
      image: secretaryImage,
      reverse: true,
      paragraphs: [
        `"Our school stands as a place of learning, growth, discipline, and excellence, where every child is encouraged to discover their potential and achieve success in all walks of life. We strongly believe that education is not confined to academics alone. Along with scholastic excellence, our school gives equal importance to co-scholastic activities that help in the overall personality development of students. Various activities such as sports, music, dance, art, yoga, public speaking, debates, literary competitions, science exhibitions, club activities, social outreach programmes, and leadership opportunities are regularly organized to nurture creativity, confidence, teamwork, and life skills among students. Our dedicated teachers continuously guide and motivate students to participate actively in both academic and co-curricular activities, helping them become confident, responsible, and compassionate individuals. We strive to provide a safe, positive, and inspiring environment where students can grow intellectually, emotionally, socially, and morally. The achievements of our students in academics, sports, cultural events, Olympiads, and various competitions reflect the collective efforts of our committed staff, supportive parents, and visionary management. We remain committed to providing quality education blended with strong values and modern learning practices".`,
        "Thank you for your interest in D.A.V. Public School, Mysuru. Together, let us continue to empower young minds and build a brighter future for our students.",
      ],
    },
    {
      title: "Message from the Principal",
      name: "Smt. Dr. Kavya Shree Basappa",
      role: "Principal, DAV Public School, Mysuru",
      image: principalImage,
      reverse: false,
      paragraphs: [
        `"At DAV Public School, we believe every child is unique. Our focus is to create a stimulating learning environment that promotes intellectual growth, emotional well-being, and moral responsibility through a strong partnership between school and parents."`,
      ],
    },
  ];

  const activeMessage = leadershipMessages[activeMessageIndex];

  const showPreviousMessage = () => {
    setActiveMessageIndex((current) =>
      current === 0 ? leadershipMessages.length - 1 : current - 1
    );
  };

  const showNextMessage = () => {
    setActiveMessageIndex((current) =>
      current === leadershipMessages.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveMessageIndex((current) =>
        current === leadershipMessages.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => window.clearInterval(slideTimer);
  }, [leadershipMessages.length]);

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="eyebrow eyebrow--light">Our Legacy</p>
          <h1>A Tradition of Excellence, A Future of Innovation</h1>
          <p>
            Since its inception, DAV Public School has been at the forefront of
            educational excellence, blending traditional Vedic values with
            modern scientific temperament.
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
              To be a world-class center of learning that nurtures global
              citizens rooted in Indian culture and values, equipped to face the
              challenges of a dynamic world.
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
              D.A.V. Public School began its educational journey in 2003 and has
              since grown into a warm, welcoming, and distinctive institution.
              We are an open school, and visitors are welcome at any time. We
              take pride in our caring, supportive, and happy atmosphere, where
              every child feels valued and encouraged to succeed.
            </p>
            <p>
              We strongly believe that a child’s education is most effective
              when parents and teachers work together in partnership throughout
              the school years. Prospective parents are warmly invited to visit
              the school to explore our facilities, understand our range of
              provisions, and interact with our staff and pupils. All documents
              and policies referred to in this prospectus may be viewed by
              contacting the school office. We look forward to meeting you and
              hope that your association with D.A.V. Public School will be long,
              happy, and rewarding.
            </p>
            <div className="history-stats">
              <div className="history-stat">
                <span className="history-stat__num">2003</span>
                <span className="history-stat__label">
                  Year of Establishment
                </span>
              </div>
              <div className="history-stat">
                <span className="history-stat__num">Co-ed</span>
                <span className="history-stat__label">Type of School</span>
              </div>
              <div className="history-stat">
                <span className="history-stat__num">English</span>
                <span className="history-stat__label">
                  Medium of Instruction
                </span>
              </div>
              <div className="history-stat">
                <span className="history-stat__num">1,932</span>
                <span className="history-stat__label">Total Students</span>
              </div>
              <div className="history-stat">
                <span className="history-stat__num">35</span>
                <span className="history-stat__label">Class Strength</span>
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

        <div className="leadership-carousel">
          <article
            className={`principal-card-expanded leadership-carousel__slide ${
              activeMessage.reverse ? "principal-card-expanded--reverse" : ""
            }`}
          >
            {!activeMessage.reverse && (
              <div className="principal-card-expanded__image">
                <div
                  className="portrait-frame"
                  style={{
                    background: `url(${activeMessage.image}) center/cover no-repeat`,
                  }}
                ></div>
              </div>
            )}

            <div className="principal-card-expanded__content">
              <div className="quote-icon">"</div>
              <h2>{activeMessage.title}</h2>
              {activeMessage.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="principal-info">
                <strong>{activeMessage.name}</strong>
                {activeMessage.qualification && (
                  <>
                    <span>{activeMessage.qualification}</span>
                    <br />
                  </>
                )}
                <span>{activeMessage.role}</span>
              </div>
            </div>

            {activeMessage.reverse && (
              <div className="principal-card-expanded__image">
                <div
                  className="portrait-frame"
                  style={{
                    background: `url(${activeMessage.image}) center/cover no-repeat`,
                  }}
                ></div>
              </div>
            )}
          </article>

          <div
            className="leadership-carousel__controls"
            aria-label="Leadership message controls"
          >
            <button
              type="button"
              className="leadership-carousel__nav-button"
              onClick={showPreviousMessage}
              aria-label="Show previous leadership message"
            >
              <ArrowLeft size={18} strokeWidth={2.4} />
              <span>Previous</span>
            </button>
            <div className="leadership-carousel__dots">
              {leadershipMessages.map((message, index) => (
                <button
                  key={message.title}
                  type="button"
                  className={index === activeMessageIndex ? "active" : ""}
                  aria-label={`Show ${message.title}`}
                  onClick={() => setActiveMessageIndex(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="leadership-carousel__nav-button leadership-carousel__nav-button--next"
              onClick={showNextMessage}
              aria-label="Show next leadership message"
            >
              <span>Next</span>
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Chairman's Message */}
        <article className="principal-card-expanded principal-card-expanded--reverse">
          <div className="principal-card-expanded__content">
            <div className="quote-icon">“</div>
            <h2>Message from the Chairman</h2>
            <p>
              "It is a privilege to present an institution that stands as a
              beacon of excellence in academic achievement, character formation,
              and holistic development. Our school is committed to shaping young
              minds into confident, responsible, and future-ready individuals.
              At D.A.V., education is viewed as a transformative journey. We
              believe in fostering intellectual curiosity, creativity, critical
              thinking, and a lifelong love for learning. Our environment is
              designed to help every learner grow academically while also
              developing strong values and leadership qualities. Over the years,
              D.A.V. Public School has earned a reputation for academic
              brilliance and vibrant cultural accomplishments. This progress
              reflects the dedication of our teachers, the enthusiasm of our
              students, and the trust placed in us by the community. Keeping
              pace with the rapidly evolving technological world, we have
              proudly introduced Artificial Intelligence (AI) as an integral
              part of our curriculum. By integrating hands-on activities,
              real-world applications, and discussions on ethical AI use, we aim
              to equip our students with essential skills for the digital age.
              Holistic growth is a core part of our philosophy. Along with
              academics, we provide a wide range of extracurricular
              opportunities in sports, music, dance, drama, debate, and other
              creative platforms. These activities help students discover their
              strengths, build confidence, and develop teamwork and discipline.
              As our school continues to move forward with vision and purpose,
              we remain committed to providing an educational experience that
              blends tradition with innovation. We invite you to explore this
              website to learn more about our programmes, values, and
              initiatives".
            </p>
            <p>
              Thank you for your interest in D.A.V. Public School, Mysuru. We
              look forward to welcoming you to our vibrant and growing
              community.
            </p>
            <div className="principal-info">
              <strong>Sri N. Sachiddananda Murthy</strong>
              <span>B.A.L, LL.B, EMBA</span>
              <br />
              <span>Chairman, D.A.V. Public School, Mysuru</span>
            </div>
          </div>
          <div className="principal-card-expanded__image">
            <div className="portrait-frame portrait-frame--chairman">
              <div
                className="portrait-frame"
                style={{
                  background: `url(${chairmanImage}) center/cover no-repeat`,
                }}
              ></div>
            </div>
          </div>
        </article>

        {/* Secretary's Message */}
        <article className="principal-card-expanded principal-card-expanded--reverse">
          <div className="principal-card-expanded__content">
            <div className="quote-icon">“</div>
            <h2>Message from the Secretary</h2>
            <p>
              "Our school stands as a place of learning, growth, discipline, and
              excellence, where every child is encouraged to discover their
              potential and achieve success in all walks of life. We strongly
              believe that education is not confined to academics alone. Along
              with scholastic excellence, our school gives equal importance to
              co-scholastic activities that help in the overall personality
              development of students. Various activities such as sports, music,
              dance, art, yoga, public speaking, debates, literary competitions,
              science exhibitions, club activities, social outreach programmes,
              and leadership opportunities are regularly organized to nurture
              creativity, confidence, teamwork, and life skills among students.
              Our dedicated teachers continuously guide and motivate students to
              participate actively in both academic and co-curricular
              activities, helping them become confident, responsible, and
              compassionate individuals. We strive to provide a safe, positive,
              and inspiring environment where students can grow intellectually,
              emotionally, socially, and morally. The achievements of our
              students in academics, sports, cultural events, Olympiads, and
              various competitions reflect the collective efforts of our
              committed staff, supportive parents, and visionary management. We
              remain committed to providing quality education blended with
              strong values and modern learning practices".
            </p>
            <p>
              Thank you for your interest in D.A.V. Public School, Mysuru.
              Together, let us continue to empower young minds and build a
              brighter future for our students.
            </p>
            <div className="principal-info">
              <strong>Sri R.Anand</strong>
              <span>Secretary, D.A.V. Public School, Mysuru</span>
            </div>
          </div>
          <div className="principal-card-expanded__image">
            <div className="portrait-frame portrait-frame--chairman">
              <div
                className="portrait-frame"
                style={{
                  background: `url(${secretaryImage}) center/cover no-repeat`,
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
                background: `url(${principalImage}) center/cover no-repeat`,
              }}
            ></div>
          </div>
          <div className="principal-card-expanded__content">
            <div className="quote-icon">“</div>
            <h2>Message from the Principal</h2>
            <p>
              "At DAV Public School, we believe every child is unique. Our focus
              is to create a stimulating learning environment that promotes
              intellectual growth, emotional well-being, and moral
              responsibility through a strong partnership between school and
              parents.."
            </p>
            <div className="principal-info">
              <strong>Smt. Dr. Kavya Shree Basappa</strong>
              <span>Principal, DAV Public School,Mysuru</span>
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
              <span className="achievement-minimal-card__value">
                {item.value}
              </span>
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
                  background: `url(${leader.image}) center/cover no-repeat`,
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
    </main>
  );
}
