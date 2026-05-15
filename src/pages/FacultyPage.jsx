import { useMemo, useState } from 'react'
import { facultyDepartments, facultyMembers } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FacultyPage() {
    useScrollReveal()

    const [activeDepartment, setActiveDepartment] = useState('all')
    const [activeFacultyId, setActiveFacultyId] = useState(null)

    const filteredFaculty = useMemo(() => {
        if (activeDepartment === 'all') {
            return facultyMembers
        }

        return facultyMembers.filter(
            (faculty) => faculty.department === activeDepartment
        )
    }, [activeDepartment])

    const featuredFaculty = filteredFaculty.slice(0, 3)

    const activeFaculty = activeFacultyId
        ? facultyMembers.find((faculty) => faculty.id === activeFacultyId)
        : null

    return (
        <main className="faculty-page">
            {/* HERO SECTION */}
            <section className="faculty-hero">
                <div className="faculty-hero__visual" aria-hidden="true" />
                <div className="faculty-hero__overlay" />

                <div className="faculty-hero__content">
                    <p className="eyebrow eyebrow--light">Academic leadership</p>
                    <h1>Our Faculty</h1>
                    <p>
                        Meet the educators, mentors, and academic leaders shaping
                        confident learners through expertise, care, and innovation.
                    </p>
                </div>
            </section>

            {/* FACULTY STATS */}
            <section className="faculty-stats-grid reveal">
                <div className="profile-container">
                    <div className="profile-card">
                        <div className="profile-icon">👩‍🏫</div>
                        <h3>110</h3>
                        <p>Teaching Staff</p>
                    </div>
                    <div className="profile-card">
                        <div className="profile-icon">🛠️</div>
                        <h3>55</h3>
                        <p>Non-Teaching Staff</p>
                    </div>
                    <div className="profile-card">
                        <div className="profile-icon">🤝</div>
                        <h3>1:18</h3>
                        <p>Teacher-Student Ratio</p>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="faculty-intro">
                <div className="section-heading">
                    <p className="eyebrow">Teaching excellence</p>
                    <h2>Educators who inspire learning beyond classrooms</h2>
                </div>

                <p className="faculty-intro__copy">
                    Our faculty members combine academic strength, student mentorship,
                    and modern teaching practices to create meaningful learning
                    experiences across every grade level.
                </p>
            </section>

            {/* FILTERS */}
            <section className="faculty-filters">
                {facultyDepartments.map((department) => (
                    <button
                        key={department.id}
                        type="button"
                        className="faculty-filter"
                        data-active={activeDepartment === department.id}
                        onClick={() => setActiveDepartment(department.id)}
                    >
                        {department.label}
                    </button>
                ))}
            </section>

            {/* FEATURED FACULTY */}
            <section className="faculty-featured">
                {featuredFaculty.map((faculty, index) => (
                    <button
                        key={faculty.id}
                        type="button"
                        className={`faculty-featured__card ${index === 0
                            ? 'faculty-featured__card--primary'
                            : ''
                            }`}
                        onClick={() => setActiveFacultyId(faculty.id)}
                    >
                        <div className="faculty-featured__image" />

                        <div className="faculty-featured__body">
                            <span className="faculty-featured__department">
                                {labelForDepartment(faculty.department)}
                            </span>

                            <h3>{faculty.name}</h3>

                            <p>{faculty.designation}</p>
                        </div>
                    </button>
                ))}
            </section>

            {/* FACULTY GRID */}
            <section className="faculty-grid">
                {filteredFaculty.map((faculty) => (
                    <article
                        key={faculty.id}
                        className="faculty-card"
                    >
                        <button
                            type="button"
                            className="faculty-card__button"
                            onClick={() => setActiveFacultyId(faculty.id)}
                        >
                            <div className="faculty-card__image" />

                            <div className="faculty-card__content">
                                <span className="faculty-card__department">
                                    {labelForDepartment(faculty.department)}
                                </span>

                                <h3>{faculty.name}</h3>

                                <p>{faculty.designation}</p>
                            </div>
                        </button>
                    </article>
                ))}
            </section>



            {/* LIGHTBOX */}
            {activeFaculty ? (
                <div
                    className="faculty-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeFaculty.name}
                    onClick={() => setActiveFacultyId(null)}
                >
                    <div
                        className="faculty-lightbox__panel"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="faculty-lightbox__close"
                            onClick={() => setActiveFacultyId(null)}
                        >
                            Close
                        </button>

                        <div className="faculty-lightbox__image" />

                        <div className="faculty-lightbox__meta">
                            <span>
                                {labelForDepartment(activeFaculty.department)}
                            </span>

                            <h3>{activeFaculty.name}</h3>

                            <p>{activeFaculty.designation}</p>

                            <p>{activeFaculty.bio}</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </main>
    )
}

function labelForDepartment(department) {
    return (
        facultyDepartments.find(
            (item) => item.id === department
        )?.label ?? department
    )
}