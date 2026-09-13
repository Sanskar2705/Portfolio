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
    const saved = localStorage.getItem('academic-theme-v2')
    return saved || 'dark'
  })
  const [searchOpen, setSearchOpen] = useState(false)

  // Sync theme with HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('academic-theme-v2', theme)
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

  return (
    <div className="academic-app">
      <AmbientCanvas />
      
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        theme={theme}
        toggleTheme={toggleTheme}
        openSearch={() => setSearchOpen(true)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      <main className="academic-main">
        {activeSection === 'about' && <Hero setActiveSection={setActiveSection} />}
        {activeSection === 'news' && <News />}
        {activeSection === 'publications' && <Publications />}
        {activeSection === 'research' && <Research />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <CVSection />}
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
