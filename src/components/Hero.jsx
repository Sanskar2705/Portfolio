import { Building2, MapPin, Mail, Phone, FileText, ExternalLink } from 'lucide-react'
import './Hero.css'

export default function Hero({ setActiveSection }) {
  return (
    <section id="about" className="hero-academic">
      <div className="hero-academic__container">
        {/* Header Title like Daniel Gomm */}
        <header className="hero-academic__header">
          <h1 className="hero-academic__title">
            <span className="name-bold">Sanskar</span> Singh
          </h1>
          <p className="hero-academic__affiliation">
            <span>Representation Learning and Multimodal Information Retrieval</span>
          </p>
        </header>

        {/* Two Column Layout: Bio on left, Profile Card on right */}
        <div className="hero-academic__body">
          {/* Right Profile Column (Sidebar on desktop, like Daniel Gomm / Mohannah) */}
          <aside className="hero-academic__profile">
            <div className="profile-img-wrap">
              <img
                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                alt="Sanskar Singh"
                className="profile-img"
              />
            </div>

            <div className="profile-details">
              <div className="profile-item">
                <span className="profile-icon">
                  <Building2 size={15} />
                </span>
                <span>DSIRe Lab, Block-3</span>
              </div>
              <div className="profile-item">
                <span className="profile-icon">
                  <MapPin size={15} />
                </span>
                <span>IIT Delhi, Hauz Khas, New Delhi</span>
              </div>
              <div className="profile-item">
                <span className="profile-icon">
                  <Mail size={15} />
                </span>
                <a href="mailto:ssanskar2705@gmail.com">ssanskar2705@gmail.com</a>
              </div>
              <div className="profile-item">
                <span className="profile-icon">
                  <Mail size={15} />
                </span>
                <a href="mailto:sanskar.cstaff@iitd.ac.in">sanskar.cstaff@iitd.ac.in</a>
              </div>
              <div className="profile-item">
                <span className="profile-icon">
                  <Phone size={15} />
                </span>
                <span>+91 7984399359</span>
              </div>
            </div>

            <a href="#contact" onClick={(e) => { e.preventDefault(); setActiveSection('contact') }} className="profile-status-card" title="Click to get in touch regarding opportunities">
              <div className="status-card__title-row">
                <span className="status-beacon">
                  <span className="beacon-dot"></span>
                  <span className="beacon-ring"></span>
                </span>
                <span className="status-card__title">Open for PhD & Research</span>
              </div>
              <div className="status-card__sub">Fall 2026 / 2027 · Let's Connect →</div>
            </a>

            <div className="profile-socials">
              <a
                href="https://scholar.google.com/citations?user=622My4AAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="Google Scholar"
              >
                <i className="ai ai-google-scholar"></i>
                <span>Scholar</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sanskar2705/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                title="LinkedIn"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span>LinkedIn</span>
              </a>
              <a
                href={`${import.meta.env.BASE_URL}docs/Sanskar_Singh_CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn social-btn--cv"
                title="Download CV"
              >
                <FileText size={15} />
                <span>CV (PDF)</span>
              </a>
            </div>
          </aside>

          {/* Left Narrative Column */}
          <article className="hero-academic__content">
            <p className="lead-paragraph">
              I am a <strong>Project Scientist</strong> at the <strong>DSIRe Lab</strong> in the Department of Computer Science & Engineering at{' '}
              <a href="https://home.iitd.ac.in" target="_blank" rel="noopener noreferrer">
                IIT Delhi
              </a>, working under{' '}
              <a href="https://mayaramanath.wixsite.com/maya-1" target="_blank" rel="noopener noreferrer">
                Prof. Maya Ramanath
              </a>.
            </p>

            <p>
              Under Prof. Maya Ramanath, my research centers at the intersection of <strong>multimodal information retrieval</strong>, <strong>natural language processing (NLP)</strong>, and <strong>computer vision</strong>, with optimizations in <strong>scalable databases</strong> and Approximate Nearest Neighbor (ANN) search architectures. I investigate how cross-modal systems scale to millions of items while minimizing query latency and energy overhead without compromising retrieval fidelity.
            </p>

            <p>
              Previously, I graduated from{' '}
              <a href="https://www.iitkgp.ac.in" target="_blank" rel="noopener noreferrer">
                IIT Kharagpur
              </a>, completing my <strong>M.Tech in Wireless Communication & Networks</strong> under{' '}
              <a href="https://saumikb.github.io/" target="_blank" rel="noopener noreferrer">
                Prof. Saumik Bhattacharya
              </a>{' '}
              and{' '}
              <a href="https://www.iitkgp.ac.in/department/GS/faculty/gs-suvra" target="_blank" rel="noopener noreferrer">
                Prof. Suvra Sekhar Das
              </a>. My Master's thesis was in the <strong>computer vision</strong> domain, focusing on <em>Facial Recognition and Verification using a Vision-Transformer Siamese Network</em>.
            </p>

            <div className="hero-quick-actions">
              <a href="#publications" onClick={(e) => { e.preventDefault(); setActiveSection('publications') }} className="btn-academic-primary">
                View Publications ↓
              </a>
              <a href="#research" onClick={(e) => { e.preventDefault(); setActiveSection('research') }} className="btn-academic-secondary">
                Research Focus
              </a>
              <a href={`${import.meta.env.BASE_URL}docs/Sanskar_Singh_CV.pdf`} target="_blank" rel="noopener noreferrer" className="btn-academic-secondary">
                Curriculum Vitae ↗
              </a>
            </div>

            {/* Key Status Indicators — Immediate Noticeability */}
            <div className="hero-conference-callout">
              <a href="#publications" onClick={(e) => { e.preventDefault(); setActiveSection('publications') }} className="hero-conf-item hero-conf-item--accepted">
                <span className="hero-conf-dot hero-conf-dot--green"></span>
                <strong className="hero-conf-tag">ACM CIKM '26 (Rome):</strong>
                <span className="hero-conf-text">2 Accepted Papers (Full & Short)</span>
              </a>
              <a href="#publications" onClick={(e) => { e.preventDefault(); setActiveSection('publications') }} className="hero-conf-item hero-conf-item--review">
                <span className="hero-conf-dot hero-conf-dot--amber"></span>
                <strong className="hero-conf-tag">ACM SIGIR-AP '26:</strong>
                <span className="hero-conf-text">Under Peer Review (EduExplain)</span>
              </a>
              <a href="#publications" onClick={(e) => { e.preventDefault(); setActiveSection('publications') }} className="hero-conf-item hero-conf-item--upcoming">
                <span className="hero-conf-dot hero-conf-dot--purple"></span>
                <strong className="hero-conf-tag">VLDB 2027:</strong>
                <span className="hero-conf-text">Target Oct 2026 Submission Prep</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
