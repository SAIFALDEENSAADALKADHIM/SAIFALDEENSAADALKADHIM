import { FaMicrochip, FaBatteryFull, FaCogs } from 'react-icons/fa'
import './Projects.css'

const projects = [
  {
    icon: <FaMicrochip />,
    title: 'Triple-electrode CNT Humidity Sensor',
    subtitle: 'MEMS Sensor Design & Fabrication',
    year: '2024',
    journal: 'Sensors & Actuators A: Physical',
    description: 'Designed and fabricated a triple-electrode capacitive humidity sensor using carbon nanotube (CNT) composite materials. Achieved high sensitivity with low hysteresis for environmental monitoring applications.',
    tags: ['MEMS', 'CNT', 'Humidity Sensing', 'COMSOL', 'Fabrication'],
    type: 'research',
    color: 'blue',
  },
  {
    icon: <FaBatteryFull />,
    title: 'Ionization Aerosol Sensor for Li-ion Battery Safety',
    subtitle: 'Battery Safety & Early Warning Systems',
    year: '2025',
    journal: 'Sensors and Actuators',
    description: 'Developed an ionization-based aerosol sensor for early detection of thermal runaway in lithium-ion batteries. Critical for EV and energy storage safety applications.',
    tags: ['IoT', 'Battery Safety', 'Aerosol Sensing', 'MEMS', 'Python'],
    type: 'research',
    color: 'orange',
  },
  {
    icon: <FaCogs />,
    title: 'CNC Machine via Wireless IoT Control',
    subtitle: 'IoT Systems Engineering',
    year: 'Prior',
    journal: 'Conference / Journal',
    description: 'Designed and implemented a wireless IoT-controlled CNC machine system. This work has garnered 49 citations, demonstrating its impact in the IoT and manufacturing automation communities.',
    tags: ['IoT', 'CNC', 'Wireless', 'Arduino', 'Raspberry Pi'],
    type: 'engineering',
    color: 'green',
    citations: 49,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Research Projects</h2>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div className={`project-card project-card--${proj.color}`} key={i}>
              <div className="project-header">
                <div className={`project-icon project-icon--${proj.color}`}>{proj.icon}</div>
                <div className="project-meta">
                  <span className="project-year">{proj.year}</span>
                  {proj.citations && (
                    <span className="project-citations">{proj.citations} citations</span>
                  )}
                </div>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-subtitle">{proj.subtitle}</p>
              <p className="project-journal"><em>{proj.journal}</em></p>
              <p className="project-desc">{proj.description}</p>
              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
