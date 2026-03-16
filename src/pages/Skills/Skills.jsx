import './Skills.css'

const skillGroups = [
  {
    category: 'Simulation & Design Tools',
    skills: [
      { name: 'COMSOL Multiphysics', level: 90 },
      { name: 'MATLAB', level: 85 },
      { name: 'PCB Design (Altium/Eagle)', level: 80 },
      { name: 'AutoCAD', level: 70 },
    ],
  },
  {
    category: 'Programming & Scripting',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Arduino (C/C++)', level: 88 },
      { name: 'LaTeX', level: 90 },
      { name: 'MATLAB Scripting', level: 85 },
    ],
  },
  {
    category: 'Hardware & Systems',
    skills: [
      { name: 'MEMS Fabrication', level: 88 },
      { name: 'IoT Systems', level: 85 },
      { name: 'Raspberry Pi', level: 80 },
      { name: 'Sensor Integration', level: 92 },
    ],
  },
  {
    category: 'Standards & Research',
    skills: [
      { name: 'IEEE Standards', level: 90 },
      { name: 'Technical Writing', level: 88 },
      { name: 'Research Methodology', level: 90 },
      { name: 'E-Government Systems', level: 85 },
    ],
  },
]

const techBadges = [
  'MATLAB', 'COMSOL', 'Python', 'Arduino', 'Raspberry Pi',
  'PCB Design', 'IoT', 'MEMS', 'LaTeX', 'IEEE Standards',
  'CNT Sensors', 'Signal Processing', 'Wireless Networks',
  'Embedded Systems', 'LabVIEW', 'SolidWorks',
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-bars">
                {group.skills.map((skill, j) => (
                  <div className="skill-bar-item" key={j}>
                    <div className="skill-bar-label">
                      <span>{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-badges-section">
          <h3 className="tech-badges-title">Technology Stack</h3>
          <div className="tech-badges">
            {techBadges.map(badge => (
              <span className="tech-badge" key={badge}>{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
