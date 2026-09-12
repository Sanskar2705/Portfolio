import { useState, useEffect, useRef } from 'react'
import { Search, X, FileText, ArrowRight, ExternalLink, Lock } from 'lucide-react'
import './SearchModal.css'

const searchItems = [
  { type: 'Section', title: 'About Me', subtitle: 'Background, IIT Delhi & IIT Kharagpur', target: 'about' },
  { type: 'Section', title: 'News & Updates', subtitle: 'Chronological timeline of milestones & submissions', target: 'news' },
  { type: 'Section', title: 'Selected Publications', subtitle: 'Accepted papers at CIKM 2026, SIGIR-AP, and workshops', target: 'publications' },
  { type: 'Section', title: 'Research Focus & Projects', subtitle: 'Cross-modal retrieval, ANN indexing, vector search', target: 'research' },
  { type: 'Section', title: 'Experience', subtitle: 'IIT Delhi, Eternal Robotics, Unizoy, IIT Kharagpur', target: 'experience' },
  { type: 'CV', title: 'Curriculum Vitae', subtitle: 'Open latest academic CV (PDF) in new tab', link: '/docs/Sanskar_Singh_CV.pdf' },
  { type: 'Section', title: 'Contact', subtitle: 'Get in touch, email addresses, and lab location', target: 'contact' },
  
  // Publications
  { type: 'Publication', title: 'Scalability Analysis of Cross-Modal Text-to-Image Pipelines', subtitle: 'CIKM 2026 Full Research Paper · Accepted', target: 'publications', link: '/docs/CIKM_full_Camera_Ready_final.pdf' },
  { type: 'Publication', title: 'Retrieval-Stage Interactions in Cross-Modal Text-to-Image Retrieval Pipelines', subtitle: 'CIKM 2026 Short Paper · Accepted', target: 'publications', link: '/docs/CIKM_Short_Camera_Ready_final.pdf' },
  { type: 'Publication', title: 'EduExplain: Benchmark for Multimodal Explanation Set Retrieval', subtitle: 'SIGIR-AP 2026 (Submitted July 2026) · Double-blind review', target: 'publications', isConfidential: true },
  { type: 'Publication', title: 'Spatial Fidelity Maps: A Query-Time, Ground-Truth-Free Signal for Approximate Nearest-Neighbor Retrieval', subtitle: 'Preparing for VLDB (October 2026) · Working draft', target: 'publications', isConfidential: true },
  { type: 'Publication', title: 'SARCH: Multimodal Search for Archaeological Archives', subtitle: 'CIKM 2025 MMGenSR Workshop (Seoul) · Published', target: 'publications', link: '/docs/sarch.pdf' },
  
  // Mentors & Links
  { type: 'Mentor', title: 'Prof. Maya Ramanath', subtitle: 'Advisor at IIT Delhi (DSIRe Lab)', external: 'https://mayaramanath.wixsite.com/maya-1' },
  { type: 'Mentor', title: 'Prof. Saumik Bhattacharya', subtitle: 'M.Tech Thesis Guide at IIT Kharagpur', external: 'https://saumikb.github.io/' },
  { type: 'Mentor', title: 'Prof. Suvra Sekhar Das', subtitle: 'M.Tech Thesis Co-Supervisor at IIT Kharagpur', external: 'https://www.iitkgp.ac.in/department/GS/faculty/gs-suvra' },
  
  // Research Topics
  { type: 'Topic', title: 'Scalable Vector Databases & ANN Search', subtitle: 'Pareto frontier of accuracy, latency, and energy on 7M LAION', target: 'research' },
  { type: 'Topic', title: 'MMIR-Explorer Platform', subtitle: 'Live query-level analysis tool at mmir.iitd.ac.in', target: 'research', external: 'http://mmir.iitd.ac.in' },
  { type: 'Topic', title: 'Vision-Transformer Siamese Network', subtitle: 'Master\'s Thesis at IIT Kharagpur (94.83% accuracy)', target: 'research' },
]

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filtered = query.trim() === ''
    ? searchItems.slice(0, 7)
    : searchItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      )

  const handleSelect = (item) => {
    onClose()
    if (item.external) {
      window.open(item.external, '_blank')
    } else if (item.link) {
      window.open(item.link, '_blank')
    } else if (item.target) {
      const el = document.getElementById(item.target)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-header">
          <Search size={18} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search papers, mentors, topics, news... (Esc to close)"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <div className="search-results">
          {filtered.length === 0 ? (
            <div className="search-empty">No results found for "{query}"</div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="search-item"
                onClick={() => handleSelect(item)}
              >
                <div className="search-item__type">{item.type}</div>
                <div className="search-item__info">
                  <div className="search-item__title">
                    {item.title}
                    {item.isConfidential && <Lock size={12} style={{ marginLeft: 6, color: 'var(--accent-amber)' }} />}
                  </div>
                  <div className="search-item__subtitle">{item.subtitle}</div>
                </div>
                {item.link ? (
                  <FileText size={16} className="search-item__action" />
                ) : item.external ? (
                  <ExternalLink size={16} className="search-item__action" />
                ) : (
                  <ArrowRight size={16} className="search-item__action" />
                )}
              </div>
            ))
          )}
        </div>

        <div className="search-footer">
          <span>Navigate with click or Enter</span>
          <span>Press <kbd>Esc</kbd> to exit</span>
        </div>
      </div>
    </div>
  )
}
