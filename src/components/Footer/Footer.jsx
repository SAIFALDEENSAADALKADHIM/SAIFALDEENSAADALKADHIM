import { FaOrcid, FaResearchgate, FaGoogle, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-name">Saif Aldeen Saad Obayes Al-Kadhim, Ph.D.</p>
        <p className="footer-inst">Xi'an Jiaotong University · Institute of Electromechanical and Information Technology</p>
        <div className="footer-social">
          <a href="https://orcid.org/0000-0002-7887-4272" target="_blank" rel="noreferrer" title="ORCID"><FaOrcid /></a>
          <a href="https://www.researchgate.net/profile/Saif-Aldeen-Al-Kadhim" target="_blank" rel="noreferrer" title="ResearchGate"><FaResearchgate /></a>
          <a href="https://scholar.google.com/citations?user=SAIF_SCHOLAR" target="_blank" rel="noreferrer" title="Google Scholar"><FaGoogle /></a>
          <a href="mailto:saif.alkadhim@xjtu.edu.cn" title="Email"><FaEnvelope /></a>
        </div>
        <p className="footer-copy">© {year} Saif Aldeen Al-Kadhim. All rights reserved.</p>
      </div>
    </footer>
  )
}
