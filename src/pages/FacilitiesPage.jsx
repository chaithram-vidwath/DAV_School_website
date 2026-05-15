import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Authentic School Assets
import campusImg from '../assets/Campus-1.jpg'
import entranceImg from '../assets/Entrance.jpg'
import labImg from '../assets/Lab.jpg'
import busImg from '../assets/School-Bus.jpg'
import libraryImg from '../assets/library.jpg'
import sportsImg from '../assets/sportsstadium.jpg'
import sciLabImg from '../assets/ScienceLab.jpg'
import compLabImg from '../assets/computerlab.jpg'

export default function FacilitiesPage() {
  useScrollReveal()

  return (
    <main className="facilities-page">
      {/* Hero Section */}
      <section className="facilities-hero-v2">
        <div className="v2-hero__image" style={{ backgroundImage: `url(${entranceImg})` }} />
        <div className="v2-hero__content">
          <p className="eyebrow">Institutional Excellence</p>
          <h1>Infrastructure Built for Ambition</h1>
          <p>
            Spanning over <strong>11,891.589 Sq. Meters</strong>, our campus provides
            a sophisticated environment for academic and athletic mastery.
          </p>
          <div className="hero-stat-row">
            <div className="h-stat"><strong>64</strong><span>Classrooms</span></div>
            <div className="h-stat"><strong>All</strong><span>Labs Verified</span></div>
          </div>
        </div>
      </section>

      {/* Laboratories Section */}
      <section className="facility-split reveal">
        <div className="split-content">
          <p className="eyebrow">Research & Inquiry</p>
          <h2>Advanced Laboratories</h2>
          <p>
            Our specialized wings are designed for practical discovery, featuring fully equipped
            spaces for Physics, Chemistry, and Biology.
          </p>
          <ul className="premium-list">
            <li>Physics Laboratory</li>
            <li>Chemistry Laboratory</li>
            <li>Biology Laboratory</li>
          </ul>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${sciLabImg})` }} />
      </section>

      {/* Computer Labs Section */}
      <section className="facility-split facility-split--reverse reveal">
        <div className="split-content">
          <p className="eyebrow">Digital Literacy</p>
          <h2>Computing & Tech Wing</h2>
          <p>
            Equipped with the latest systems, our computer labs serve as a foundation for
            coding, research, and digital innovation.
          </p>
          <div className="status-pill">✓ Fully Available</div>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${compLabImg})` }} />
      </section>

      {/* Library Section */}
      <section className="facility-split reveal">
        <div className="split-content">
          <p className="eyebrow">The Learning Commons</p>
          <h2>Institutional Library</h2>
          <p>
            A sanctuary for intellectual growth, housing thousands of academic books,
            periodicals, and digital resources.
          </p>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${libraryImg})` }} />
      </section>

      {/* Sports Section */}
      <section className="facility-split facility-split--reverse reveal">
        <div className="split-content">
          <p className="eyebrow">Athletics & Wellness</p>
          <h2>Varsity Sports Hub</h2>
          <p>
            A comprehensive curriculum including Volleyball, Cricket, swimming,
            Archery, and Rifle shooting.
          </p>
          <div className="sports-tags-v2">
            <span>Cricket</span><span>Volleyball</span><span>Archery</span><span>Swimming</span><span>Yoga</span><span>Basketball</span><span>Kho-Kho</span><span>Kabbadi</span><span>Chess</span><span>Rifle shooting</span>
          </div>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${sportsImg})` }} />
      </section>

      {/* Transport Section */}
      <section className="facility-split reveal">
        <div className="split-content">
          <p className="eyebrow">Student Safety</p>
          <h2>GPS-Enabled Transport</h2>
          <p>
            Ensuring safe and comfortable transit for all students with a
            modern fleet of supervised buses.
          </p>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${busImg})` }} />
      </section>

      <section className="facility-cta">
        <div>
          <p className="eyebrow eyebrow--light">Visit the campus</p>
          <h2>Experience the campus in person</h2>
        </div>
      </section>
    </main>
  )
}
