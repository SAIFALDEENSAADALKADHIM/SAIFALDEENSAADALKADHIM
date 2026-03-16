import { useState, useEffect } from 'react'
import { FaOrcid, FaResearchgate, FaGoogle, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const navLinks = [
  { href: '#news', label: 'News' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Publications' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <a href="#hero" className="header-logo">
          <span className="logo-initials">SA</span>
          <span className="logo-name">Al-Kadhim</span>
        </a>

        <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-social">
          <a href="https://orcid.org/0000-0002-7887-4272" target="_blank" rel="noreferrer" title="ORCID" className="social-link">
            <FaOrcid />
          </a>
          <a href="https://www.researchgate.net/profile/Saif-Aldeen-Al-Kadhim" target="_blank" rel="noreferrer" title="ResearchGate" className="social-link">
            <FaResearchgate />
          </a>
          <a href="https://scholar.google.com/citations?user=SAIF_SCHOLAR" target="_blank" rel="noreferrer" title="Google Scholar" className="social-link">
            <FaGoogle />
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}
