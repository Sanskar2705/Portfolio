import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase,
  GraduationCap,
  Cpu,
  Sparkles,
  Layers,
  MapPin,
  Calendar,
  Building2
} from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    id: 'ps-iitd',
    role: 'Project Scientist',
    institution: 'IIT Delhi',
    department: 'Dept. of Computer Science & Engineering',
    period: 'May 2025 – Present',
    location: 'New Delhi, India',
    category: 'research',
    categoryLabel: 'Research',
    isCurrent: true,
    icon: Briefcase,
    colorClass: 'exp-theme-blue',
  },
  {
    id: 'cv-eternal',
    role: 'Computer Vision Intern',
    institution: 'Eternal Robotics',
    department: 'Autonomous Systems & Inspection',
    period: 'Feb 2025 – May 2025',
    location: 'Ahmedabad, India',
    category: 'industry',
    categoryLabel: 'Industry',
    isCurrent: false,
    icon: Cpu,
    colorClass: 'exp-theme-teal',
  },
  {
    id: 'ta-iitkgp',
    role: 'Teaching Assistant',
    institution: 'IIT Kharagpur',
    department: 'Dept. of GSSST',
    period: 'Jul 2024 – May 2025',
    location: 'Kharagpur, India',
    category: 'research',
    categoryLabel: 'Academic',
    isCurrent: false,
    icon: GraduationCap,
    colorClass: 'exp-theme-purple',
  },
  {
    id: 'ml-unizoy',
    role: 'ML Engineering Intern',
    institution: 'Unizoy',
    department: 'AI & Motion Analysis',
    period: 'May 2024 – Jul 2024',
    location: 'Surat, India',
    category: 'industry',
    categoryLabel: 'Industry',
    isCurrent: false,
    icon: Sparkles,
    colorClass: 'exp-theme-rose',
  },
  {
    id: 'ml-sard',
    role: 'ML Intern',
    institution: 'Sard AI',
    department: 'Computer Vision & Deep Learning',
    period: 'May 2023 – Jul 2023',
    location: 'Remote',
    category: 'industry',
    categoryLabel: 'Industry',
    isCurrent: false,
    icon: Layers,
    colorClass: 'exp-theme-amber',
  },
]

const filterTabs = [
  { id: 'all', label: 'All Positions', count: 5 },
  { id: 'research', label: 'Research & Academia', count: 2 },
  { id: 'industry', label: 'Industry & Engineering', count: 3 },
]

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredList = experiences.filter((item) => {
    if (activeFilter === 'all') return true
    return item.category === activeFilter
  })

  return (
    <section id="experience" className="experience-section">
      <div className="experience__container">
        <div className="experience__header">
          <div className="experience__title-group">
            <h2 className="academic-section-title">
              <a href="#experience">experience</a>
            </h2>
            <p className="experience__subtitle">
              Professional appointments, academic mentorship, and industry engineering roles
            </p>
          </div>

          {/* Filter Pills */}
          <div className="exp-filters" role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeFilter === tab.id}
                className={`exp-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="exp-filter-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Streamlined Modern Experience Deck */}
        <div className="experience-deck">
          <AnimatePresence mode="popLayout">
            {filteredList.map((exp, index) => {
              const IconComponent = exp.icon

              return (
                <motion.div
                  key={exp.id}
                  layout
                  className={`exp-card ${exp.colorClass} ${exp.isCurrent ? 'exp-card--current' : ''}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 18,
                    delay: index * 0.04,
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.16 } }}
                >
                  {/* Left: Icon + Role Details */}
                  <div className="exp-card__main">
                    <div className="exp-icon-wrap">
                      <IconComponent size={20} className="exp-icon" />
                    </div>

                    <div className="exp-info">
                      <div className="exp-role-row">
                        <h3 className="exp-role">{exp.role}</h3>
                        {exp.isCurrent && (
                          <span className="exp-status-live">
                            <span className="live-dot"></span>
                            Current
                          </span>
                        )}
                      </div>

                      <div className="exp-org-row">
                        <span className="exp-institution">
                          <Building2 size={13} className="exp-meta-icon" />
                          {exp.institution}
                        </span>
                        <span className="exp-sep">·</span>
                        <span className="exp-dept">{exp.department}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Category + Date & Location Metas */}
                  <div className="exp-card__meta">
                    <span className="exp-category-pill">
                      {exp.categoryLabel}
                    </span>

                    <div className="exp-meta-tags">
                      <span className="exp-meta-item exp-meta-period">
                        <Calendar size={13} className="exp-meta-icon" />
                        {exp.period}
                      </span>
                      <span className="exp-meta-item exp-meta-location">
                        <MapPin size={13} className="exp-meta-icon" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
