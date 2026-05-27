import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

import campusImg from '../assets/Campus-1.jpg'
import entranceImg from '../assets/Entrance.jpg'
import labImg from '../assets/Lab.jpg'
import lab6Img from '../assets/Lab6.jpg'
import labFacilityImg from '../assets/LAB-FACILITY.jpg'
import scienceLabImg from '../assets/ScienceLab.jpg'
import computerlabImg from '../assets/computerlab.jpg'
import schoolBusImg from '../assets/School-Bus.jpg'
import playgroundImg from '../assets/playground.jpg'
import sportsStadiumImg from '../assets/sportsstadium.jpg'
import libraryImg from '../assets/library.jpg'
import musicImg from '../assets/Music.jpg'
import danceStudioImg from '../assets/dancestudio.jpg'
import yogaImg from '../assets/Yoga.jpg'
import drillImg from '../assets/drill.jpg'
import karateImg from '../assets/Karate.jpg'
import auditoriumImg from '../assets/Music.jpg'
import libraryInfraImg from '../assets/library.jpg'
import culture1Img from '../assets/culture1.jpg'
import culture2Img from '../assets/culture2.jpg'
import culture3Img from '../assets/culture3.jpg'
import culture4Img from '../assets/culture4.jpg'
import culture5Img from '../assets/culture5.JPG'
import culture6Img from '../assets/culture6.JPG'
import culture7Img from '../assets/culture7.jpg'
import achievementsImg1 from '../assets/achievements1.jpg'
import achievementsImg2 from '../assets/achievements2.JPG'
import achievementsImg3 from '../assets/achievements3.JPG'
import achievementsImg4 from '../assets/achievements4.JPG'
import sportImg1 from '../assets/sport1.JPG'
import sportImg2 from '../assets/sport2.JPG'
import sportImg3 from '../assets/sport3.JPG'
import sportImg4 from '../assets/sport4.JPG'
import sportImg5 from '../assets/sport5.JPG'
import sportImg6 from '../assets/sport6.JPG'
import sportImg7 from '../assets/sport7.JPG'
import sportImg8 from '../assets/sport8.JPG'
import sportImg9 from '../assets/sport22.JPG'
import eventImg1 from '../assets/events1.jpg'
import eventImg2 from '../assets/events2.jpg'
import eventImg3 from '../assets/events3.jpg'
import eventImg4 from '../assets/events4.jpg'
import eventImg5 from '../assets/events5.jpg'
import eventImg6 from '../assets/events6.jpg'
import eventImg7 from '../assets/events7.jpg'
import eventImg8 from '../assets/events8.jpg'

const imageMap = {
  // --- Events ---
  'eventImg1': eventImg1,         // drill.jpg is perfect for assembly
  'eventImg2': eventImg2,         // Music.jpg
  'eventImg3': eventImg3,
  'eventImg4': eventImg4,
  'eventImg5': eventImg5,
  'eventImg6': eventImg6,
  'eventImg7': eventImg7,
  'eventImg8': eventImg8,

  // --- Academics ---
  'science-lab': labFacilityImg,        // LAB-FACILITY.jpg
  'library-hour': libraryImg,           // library.jpg
  'classroom-discussion': scienceLabImg, // ScienceLab.jpg

  // --- Campus ---
  'campus-corridor': campusImg,         // General campus view
  'green-court': playgroundImg,         // playground.jpg

  // --- Sports ---
  'sports-day': sportsStadiumImg,       // sportsstadium.jpg
  'team-huddle': karateImg,
  'sports1': sportImg1,          // Karate.jpg
  'sports2': sportImg2,         // Karate.jpg
  'sports3': sportImg3,         // Karate.jpg
  'sports4': sportImg4,         // Karate.jpg
  'sports5': sportImg5,         // Karate.jpg
  'sports6': sportImg6,         // Karate.jpg
  'sports7': sportImg7,         // Karate.jpg
  'sports8': sportImg8,         // Karate.jpg
  'sports9': sportImg9,         // Karate.jpg

  // --- Arts ---
  'music-room': musicImg,               // Music.jpg (unique per category)
  'art-wall': danceStudioImg,           // dancestudio.jpg
  'culture1': culture1Img,               // Music.jpg (unique per category)
  'culture2': culture2Img,           // dancestudio.jpg
  'culture3': culture3Img,               // Music.jpg (unique per category)
  'culture4': culture4Img,           // dancestudio.jpg
  'culture5': culture5Img,               // Music.jpg (unique per category)
  'culture6': culture6Img,
  'culture7': culture7Img,           // dancestudio.jpg

  // --- Achievements ---

  'achievements1': achievementsImg1,            // Yoga.jpg
  'achievements2': achievementsImg2,
  'achievements3': achievementsImg3,
  'achievements4': achievementsImg4,

  // --- Infrastructure (each uses its own unique image) ---
  'campus-entrance': entranceImg,       // same as corridor — unavoidable
  'lab-facility': labFacilityImg,
  'lab-room': labImg,                   // Lab.jpg
  'lab-advanced': lab6Img,              // Lab6.jpg
  'science-lab-infra': scienceLabImg,
  'computer-lab': computerlabImg,
  'school-transport': schoolBusImg,
  'playground': playgroundImg,
  'sports-stadium': sportsStadiumImg,
  'dance-studio': danceStudioImg,
  'yoga-activity': yogaImg,
  'karate-activity': karateImg,
  'auditorium': auditoriumImg,
  'library': libraryInfraImg,
}

export default function GalleryPage() {
  useScrollReveal()

  const [activeCategory, setActiveCategory] = useState('campus')
  const [activeImageId, setActiveImageId] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return galleryItems
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    )
  }, [activeCategory])

  const currentCategory = galleryCategories.find(
    (c) => c.id === activeCategory
  )

  const featuredItems = filteredItems.slice(0, 3)
  const remainingItems = filteredItems.slice(3)

  const activeImage = activeImageId
    ? galleryItems.find((item) => item.id === activeImageId)
    : null

  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <div
          className="gallery-hero__visual"
          aria-hidden="true"
        />

        <div className="gallery-hero__overlay" />

        <div className="gallery-hero__content">
          <p className="eyebrow eyebrow--light">
            Visual campus journal
          </p>

          <h1>Gallery</h1>

          <p>
            A curated look into school life across
            classrooms, events, campus spaces,
            sports, and student achievement.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="gallery-intro">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Inside DAV</p>

          <h2>
            Moments that show the culture behind
            the campus
          </h2>
        </div>

        <div className="gallery-intro__content">
          <p className="gallery-intro__copy">
            {currentCategory?.description ||
              'A visual record of daily learning, student expression, achievement, and community life at DAV. Use the categories below to explore our campus through different lenses.'}
          </p>

          {activeCategory === 'academics' && (
            <div className="gallery-intro__academic-pillars">
              {['Innovative Methodology', 'Infrastructure Support', 'Holistic Growth', 'Parent Partnership'].map(pillar => (
                <span key={pillar} className="academic-pillar-tag">◆ {pillar}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FILTERS */}
      <section
        className="gallery-filters"
        aria-label="Gallery categories"
      >
        {galleryCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className="gallery-filter"
            data-active={
              activeCategory === category.id
            }
            onClick={() =>
              setActiveCategory(category.id)
            }
          >
            {category.label}
          </button>
        ))}
      </section>

      {/* FEATURED */}
      <section className="gallery-featured">
        {featuredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`gallery-featured__card ${index === 0
              ? 'gallery-featured__card--primary'
              : ''
              } ${item.tone}`}
            onClick={() =>
              setActiveImageId(item.id)
            }
          >
            {imageMap[item.id] && (
              <img
                src={imageMap[item.id]}
                alt={item.title}
                className="gallery-featured__image"
                loading={index === 0 ? "eager" : "lazy"}
              />
            )}

            <div className="gallery-featured__overlay">
              <span className="gallery-featured__chip">
                {labelForCategory(item.category)}
              </span>

              <div className="gallery-featured__body">
                <h3>{item.title}</h3>
              </div>
            </div>
          </button>
        ))}
      </section>

      {/* GRID */}
      <section
        className="gallery-grid"
        aria-label="Gallery items"
      >
        {remainingItems.map((item) => (
          <article
            key={item.id}
            className={`gallery-card ${item.size}`}
          >
            <button
              type="button"
              className="gallery-card__button"
              onClick={() =>
                setActiveImageId(item.id)
              }
            >
              {imageMap[item.id] && (
                <img
                  src={imageMap[item.id]}
                  alt={item.title}
                  className="gallery-card__image"
                  loading="lazy"
                />
              )}

              <div className="gallery-card__overlay">
                <span className="gallery-card__category">
                  {labelForCategory(item.category)}
                </span>

                <div className="gallery-card__content">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </button>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <div>
          <p className="eyebrow eyebrow--light">
            See the campus in person
          </p>

          <h2>
            Want to experience these spaces beyond
            the screen?
          </h2>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() =>
            setActiveImageId(null)
          }
        >
          <div
            className="gallery-lightbox__panel"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={() =>
                setActiveImageId(null)
              }
            >
              ✕
            </button>

            {imageMap[activeImage.id] && (
              <div className="gallery-lightbox__image">
                <img
                  src={imageMap[activeImage.id]}
                  alt={activeImage.title}
                  loading="lazy"
                />
              </div>
            )}

            <div className="gallery-lightbox__meta">
              <span>
                {labelForCategory(
                  activeImage.category
                )}
              </span>

              <h3>{activeImage.title}</h3>

              <p>{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

function labelForCategory(category) {
  return (
    galleryCategories.find(
      (item) => item.id === category
    )?.label ?? category
  )
}