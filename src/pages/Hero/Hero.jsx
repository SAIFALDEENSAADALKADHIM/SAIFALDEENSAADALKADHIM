import { useState, useEffect } from 'react'
import { FaOrcid, FaResearchgate, FaGoogle, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Hero.css'

const titles = ['IEEE Researcher', 'MEMS Engineer', 'IoT Specialist', 'Sensor Scientist']

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setTitleIndex(i => (i + 1) % titles.length)
        setFade(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="container hero-content">
        <div className="hero-avatar">
          <span className="avatar-initials">SA</span>
        </div>
        <div className="hero-text">
          <h1 className="hero-name">Saif Aldeen Saad Obayes Al-Kadhim, Ph.D.</h1>
          <p className={`hero-title${fade ? ' fade-in' : ' fade-out'}`}>{titles[titleIndex]}</p>
          <div className="hero-meta">
            <span><FaMapMarkerAlt /> Xi'an Jiaotong University</span>
          </div>
          <p className="hero-bio">
            Researcher specializing in <strong>MEMS</strong> (Micro-Electromechanical Systems), 
            <strong> IoT</strong> (Internet of Things), and advanced <strong>sensor technologies</strong>. 
            Ph.D. candidate at Xi'an Jiaotong University with publications in leading journals including 
            <em> Sensors & Actuators A</em>. IEEE member with extensive experience in 
            electromechanical engineering and e-government systems.
          </p>
          <div className="hero-actions">
            <a href="#publications" className="btn btn-primary">View Publications</a>
            <a href="#projects" className="btn btn-secondary">Research Projects</a>
          </div>
          <div className="hero-social">
            <a href="https://orcid.org/0000-0002-7887-4272" target="_blank" rel="noreferrer" className="hero-social-link" title="ORCID">
              <FaOrcid /> ORCID
            </a>
            <a href="https://www.researchgate.net/profile/Saif-Aldeen-Al-Kadhim" target="_blank" rel="noreferrer" className="hero-social-link" title="ResearchGate">
              <FaResearchgate /> ResearchGate
            </a>
            <a href="https://scholar.google.com/citations?user=SAIF_SCHOLAR" target="_blank" rel="noreferrer" className="hero-social-link" title="Google Scholar">
              <FaGoogle /> Scholar
            </a>
            <a href="mailto:saif.alkadhim@xjtu.edu.cn" className="hero-social-link" title="Email">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
