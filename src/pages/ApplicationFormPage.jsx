import { useState } from 'react'
import { formSteps } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ApplicationFormPage({ onBack }) {
  useScrollReveal()
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <main className="application-page">
      <section className="application-shell">
        <button className="application-backlink" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span>
          <span>Back to Admissions</span>
        </button>

        <div className="application-header">
          <div className="application-header__copy">
            <p className="eyebrow">Secure application portal</p>
            <h1>Start Your Application</h1>
            <p>
              Complete the admission request in a few guided steps. Please keep
              student details, supporting information, and a recent photograph
              ready before submission.
            </p>
          </div>

          <button className="application-status" type="button">
            <span className="application-status__icon" aria-hidden="true">
              ●
            </span>
            <span>Application progress tracker</span>
          </button>
        </div>

        <div className="application-layout">
          <aside className="application-stepper">
            <div className="application-stepper__inner">
              {formSteps.map((item, index) => (
                <div
                  className={`application-step ${
                    index === 0 ? 'application-step--active' : ''
                  }`}
                  key={item.step}
                >
                  <div className="application-step__badge">{item.step}</div>
                  <div className="application-step__copy">
                    <span>{item.eyebrow}</span>
                    <strong>{item.title}</strong>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="application-form-card">
            <div className="application-form">
              <div className="form-section">
                <div className="form-section__title">
                  <span />
                  <h2>Student Identity</h2>
                </div>

                <div className="form-grid form-grid--two">
                  <label className="form-field">
                    <span>Full legal name</span>
                    <input type="text" placeholder="As per birth certificate" />
                  </label>

                  <label className="form-field">
                    <span>Date of birth</span>
                    <input type="text" placeholder="mm / dd / yyyy" />
                  </label>

                  <label className="form-field">
                    <span>Gender</span>
                    <select defaultValue="">
                      <option value="" disabled>
                        Select gender
                      </option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Prefer not to say</option>
                    </select>
                  </label>

                  <label className="form-field">
                    <span>Blood group</span>
                    <input type="text" placeholder="e.g. O+ve" />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section__title">
                  <span />
                  <h2>Academic Preferences</h2>
                </div>

                <div className="form-grid form-grid--two">
                  <label className="form-field">
                    <span>Applying for class</span>
                    <select defaultValue="Nursery">
                      <option>Nursery</option>
                      <option>KG</option>
                      <option>Prep</option>
                      <option>Grade I</option>
                    </select>
                  </label>

                  <label className="form-field">
                    <span>Last school attended</span>
                    <input type="text" placeholder="Enter school name" />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <div className="form-section__title">
                  <span />
                  <h2>Parent / Guardian Details</h2>
                </div>

                <div className="form-grid form-grid--guardian">
                  <label className="form-field">
                    <span>Father&apos;s Name</span>
                    <input type="text" placeholder="Enter full name" />
                  </label>

                  <label className="form-field">
                    <span>Mother&apos;s Name</span>
                    <input type="text" placeholder="Enter full name" />
                  </label>

                  <label className="form-field">
                    <span>Primary Contact Number</span>
                    <input type="text" placeholder="Enter contact number" />
                  </label>

                  <label className="form-field">
                    <span>Email Address</span>
                    <input type="email" placeholder="Enter email address" />
                  </label>
                </div>
              </div>

              <div className="upload-panel">
                <div className="upload-panel__preview" aria-hidden="true">
                  <span>+</span>
                </div>

                <div className="upload-panel__copy">
                  <h3>Student Photograph</h3>
                  <p>
                    Upload a recent passport-sized color photograph. Format:
                    JPG, PNG. Max size: 2MB.
                  </p>
                  <button className="upload-button" type="button">
                    <span aria-hidden="true">+</span>
                    <span>Upload File</span>
                  </button>
                </div>
              </div>

              <div className="form-controls">
                <label className="form-consent">
                  <input type="checkbox" />
                  <span>
                    I confirm that the information provided is accurate and ready
                    for review by the admissions office.
                  </span>
                </label>

                <div className="form-controls__actions">
                  <button className="form-controls__back-bottom" type="button" onClick={onBack}>
                    Back to Admissions
                  </button>

                  <button className="form-controls__submit" type="button">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
