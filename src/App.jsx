import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import News from './components/News'
import Research from './components/Research'
import Publications from './components/Publications'
import Experience from './components/Experience'
import CVSection from './components/CVSection'
import SearchModal from './components/SearchModal'
import AmbientCanvas from './components/AmbientCanvas'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('academic-theme')
    return saved || 'dark'
  })
  const [searchOpen, setSearchOpen] = useState(false)

  // Sync theme with HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('academic-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Global Ctrl + K listener for Daniel Gomm search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'news', 'publications', 'research', 'experience', 'contact']
      const scrollPos = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="academic-app">
      <AmbientCanvas />
      
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
        openSearch={() => setSearchOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <main className="academic-main">
        <Hero />
        <News />
        <Publications />
        <Research />
        <Experience />
        <CVSection />
      </main>

      <footer className="academic-footer">
        <div className="footer-container">
          <p className="footer-copy">
            © 2026 Sanskar Singh · Project Scientist, DSIRe Lab, IIT Delhi
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
