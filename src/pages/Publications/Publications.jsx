import { FaFilePdf, FaExternalLinkAlt, FaQuoteRight } from 'react-icons/fa'
import './Publications.css'

const publications = [
  {
    year: '2025',
    title: 'Ionization-based aerosol sensor for early detection of Li-ion battery thermal runaway',
    authors: 'Saif Aldeen Saad Al-Kadhim, et al.',
    journal: 'Sensors and Actuators',
    type: 'Journal Article',
    status: 'In Press',
    doi: '',
    citations: null,
  },
  {
    year: '2024',
    title: 'Triple-electrode CNT-based capacitive humidity sensor with high sensitivity and low hysteresis',
    authors: 'Saif Aldeen Saad Al-Kadhim, et al.',
    journal: 'Sensors and Actuators A: Physical',
    publisher: 'Elsevier',
    type: 'Journal Article',
    status: 'Published',
    doi: '',
    citations: null,
  },
  {
    year: 'Prior',
    title: 'Design and Implementation of CNC Machine via Wireless IoT Control System',
    authors: 'Saif Aldeen Saad Al-Kadhim, et al.',
    journal: 'Conference Proceedings / Journal',
    type: 'Research Paper',
    status: 'Published',
    doi: '',
    citations: 49,
  },
]

export default function Publications() {
  return (
    <section id="publications" className="publications-section">
      <div className="container">
        <h2 className="section-title">Publications</h2>

        <div className="scholar-badge">
          <div className="scholar-badge-inner">
            <FaQuoteRight className="scholar-icon" />
            <div>
              <p className="scholar-label">View full publication list on</p>
              <div className="scholar-links">
                <a href="https://scholar.google.com/citations?user=SAIF_SCHOLAR" target="_blank" rel="noreferrer" className="scholar-link">
                  Google Scholar
                </a>
                <span>·</span>
                <a href="https://www.researchgate.net/profile/Saif-Aldeen-Al-Kadhim" target="_blank" rel="noreferrer" className="scholar-link">
                  ResearchGate
                </a>
                <span>·</span>
                <a href="https://orcid.org/0000-0002-7887-4272" target="_blank" rel="noreferrer" className="scholar-link">
                  ORCID
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <div className="pub-card" key={i}>
              <div className="pub-year-badge">{pub.year}</div>
              <div className="pub-body">
                <div className="pub-top">
                  <span className={`pub-type pub-type--${pub.status === 'In Press' ? 'press' : 'published'}`}>
                    {pub.status}
                  </span>
                  {pub.citations && (
                    <span className="pub-citations"><FaQuoteRight /> {pub.citations} citations</span>
                  )}
                </div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">
                  <em>{pub.journal}</em>
                  {pub.publisher && ` · ${pub.publisher}`}
                </p>
                <div className="pub-links">
                  {pub.doi && (
                    <a href={pub.doi} target="_blank" rel="noreferrer" className="pub-link">
                      <FaExternalLinkAlt /> DOI
                    </a>
                  )}
                  <a href="https://scholar.google.com/citations?user=SAIF_SCHOLAR" target="_blank" rel="noreferrer" className="pub-link">
                    <FaFilePdf /> View Paper
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
