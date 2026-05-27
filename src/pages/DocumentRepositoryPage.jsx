import { mandatoryDisclosure } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function DocumentRepositoryPage() {
  useScrollReveal()

  return (
    <main className="repository-page">
      <section className="repository-hero">
        <p className="eyebrow">Institutional transparency</p>
        <div className="repository-hero__grid">
          <h1>Mandatory Disclosure</h1>
          <p>
            Official records, statutory certifications, and academic performance data
            as mandated by the Central Board of Secondary Education (CBSE).
          </p>
        </div>
      </section>

      {/* A. GENERAL INFORMATION */}
      <section className="disclosure-section reveal">
        <div className="disclosure-header">
          <span className="section-index">A</span>
          <h2>General Information</h2>
        </div>
        <div className="disclosure-table-wrapper">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {mandatoryDisclosure.generalInformation.map((item, index) => (
                <tr key={index}>
                  <td className="row-label">{item.label}</td>
                  <td className="row-value">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* B. DOCUMENTS AND INFORMATION */}
      <section className="disclosure-section reveal">
        <div className="disclosure-header">
          <span className="section-index">B</span>
          <h2>Documents and Information</h2>
        </div>
        <div className="disclosure-table-wrapper">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Documents / Information</th>
                <th>Access</th>
              </tr>
            </thead>
            <tbody>
              {mandatoryDisclosure.documents.map((item) => (
                <tr key={item.sl}>
                  <td className="row-sl">{item.sl}</td>
                  <td className="row-title">{item.title}</td>
                  <td className="row-action">
                    {item.link && item.link !== '#' && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="disclosure-link">
                        View Document
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* C. RESULT AND ACADEMICS */}
      <section className="disclosure-section reveal">
        <div className="disclosure-header">
          <span className="section-index">C</span>
          <h2>Result and Academics</h2>
        </div>
        <div className="disclosure-table-wrapper">
          <table className="disclosure-table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Information</th>
                <th>Path</th>
              </tr>
            </thead>
            <tbody>
              {mandatoryDisclosure.resultsAndAcademics.map((item) => (
                <tr key={item.sl}>
                  <td className="row-sl">{item.sl}</td>
                  <td className="row-title">{item.title}</td>
                  <td className="row-action">
                    <p>{item.path}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


    </main>
  )
}
