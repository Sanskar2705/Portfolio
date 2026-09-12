import { useState, useEffect } from 'react'
import { Sun, Moon, Search, Menu, X, FileDown } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { id: 'about', label: 'about' },
  { id: 'news', label: 'news' },
  { id: 'publications', label: 'publications' },
  { id: 'research', label: 'research' },
  { id: 'experience', label: 'experience' },
  { id: 'cv', label: 'cv', isFile: true, url: '/docs/Sanskar_Singh_CV.pdf' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar({ activeSection, theme, toggleTheme, openSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 20)

      const winHeight = document.documentElement.scrollHeight - window.innerHeight
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`academic-navbar ${scrolled ? 'academic-navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#about" className="navbar__brand" onClick={(e) => { e.preventDefault(); handleNavClick('about') }}>
          <span className="brand-bold">Sanskar</span> Singh
        </a>

        <nav className="navbar__nav-desktop">
          {navLinks.map((link) => {
            if (link.isFile) {
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link nav-link--file"
                  title="Open Curriculum Vitae (PDF) in new tab"
                >
                  {link.label}
                </a>
              )
            }
            return (
              <button
                key={link.id}
                className={`nav-link ${activeSection === link.id ? 'nav-link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        <div className="navbar__actions">
          {/* Daniel Gomm style Ctrl+K search button */}
          <button
            className="btn-search-toggle"
            onClick={openSearch}
            title="Search (Ctrl + K)"
            aria-label="Search"
          >
            <span className="search-kbd-hint">ctrl k</span>
            <Search size={15} />
          </button>

          {/* Theme switcher */}
          <button
            className="btn-theme-toggle"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="btn-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Daniel Gomm style scroll progress bar directly under navbar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => {
            if (link.isFile) {
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-link mobile-link--file"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            }
            return (
              <button
                key={link.id}
                className={`mobile-link ${activeSection === link.id ? 'mobile-link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      )}
    </header>
  )
}
