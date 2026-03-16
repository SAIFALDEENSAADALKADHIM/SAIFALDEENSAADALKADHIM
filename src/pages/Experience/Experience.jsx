import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    role: 'Research Engineer',
    org: 'IEMIT — Institute of Electromechanical and Information Technology',
    institution: 'Xi\'an Jiaotong University',
    period: '2021 – Present',
    location: 'Xi\'an, China',
    points: [
      'Conducting Ph.D. research on MEMS-based sensors for environmental and safety monitoring',
      'Designing and fabricating CNT (carbon nanotube) capacitive humidity sensors',
      'Developing ionization-based aerosol sensors for Li-ion battery thermal runaway detection',
      'Publishing research in Elsevier\'s Sensors and Actuators A: Physical',
    ],
  },
  {
    role: 'Senior Engineer / IT Head',
    org: 'Shia Endowment Directorate',
    institution: '',
    period: '2021 – Present',
    location: 'Babylon, Iraq',
    points: [
      'Leading IT infrastructure and digital transformation initiatives',
      'Managing network systems, cybersecurity protocols, and IT operations',
      'Overseeing hardware procurement and maintenance for government facilities',
    ],
  },
  {
    role: 'E-Government Engineering Project Manager',
    org: 'Shia Endowment General Secretariat',
    institution: '',
    period: '2019 – 2021',
    location: 'Baghdad, Iraq',
    points: [
      'Managed e-government engineering projects at the national secretariat level',
      'Coordinated cross-functional teams for digital service delivery platforms',
      'Implemented IoT-based monitoring systems for facility management',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-org">{exp.org}</p>
                    {exp.institution && <p className="timeline-inst">{exp.institution}</p>}
                  </div>
                  <div className="timeline-meta">
                    <span className="timeline-period">{exp.period}</span>
                    <span className="timeline-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
