import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const education = [
  {
    degree: 'Ph.D. in Electrical Engineering',
    field: 'Micro-Electromechanical Systems & Sensors',
    institution: 'Xi\'an Jiaotong University',
    location: 'Xi\'an, China',
    period: '2021 – 2025',
    details: 'Research focus on MEMS-based sensors, CNT humidity sensing, and ionization-based aerosol detection for battery safety.',
  },
  {
    degree: 'M.Sc. in Electromechanical Engineering (MSEE)',
    field: 'Electrical & Mechanical Systems',
    institution: 'University of Technology, Baghdad',
    location: 'Baghdad, Iraq',
    period: '2014 – 2017',
    details: 'Advanced studies in electromechanical systems, control theory, and engineering design methodologies.',
  },
  {
    degree: 'B.Sc. in Electrical Engineering',
    field: 'Electrical Engineering',
    institution: 'University of Babylon',
    location: 'Babylon, Iraq',
    period: '2002 – 2006',
    details: 'Foundation in electrical engineering principles, circuit design, power systems, and electronics.',
  },
]

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-icon">
                <FaGraduationCap />
              </div>
              <div className="edu-body">
                <div className="edu-header">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-field">{edu.field}</p>
                    <p className="edu-institution">{edu.institution} · {edu.location}</p>
                  </div>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-details">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
