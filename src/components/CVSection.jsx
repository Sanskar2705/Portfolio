import { Mail, Phone, MapPin } from 'lucide-react'
import './CVSection.css'

export default function CVSection() {
  return (
    <section id="contact" className="cv-section">
      <div className="cv__container">
        <h2 className="academic-section-title">
          <a href="#contact">contact</a>
        </h2>

        {/* Contact Footer Block */}
        <div className="academic-contact-box">
          <div className="contact-box__inner">
            <div className="contact-info-col">
              <h3 className="contact-heading">Get in Touch</h3>
              <p className="contact-subtext">
                I am actively interested in discussing research collaborations, PhD opportunities (Fall 2026 / 2027), and cross-modal retrieval systems.
              </p>

              <div className="contact-links-list">
                <a href="mailto:ssanskar2705@gmail.com" className="contact-link-row">
                  <Mail size={16} />
                  <span>ssanskar2705@gmail.com</span>
                </a>
                <a href="mailto:sanskar.cstaff@iitd.ac.in" className="contact-link-row">
                  <Mail size={16} />
                  <span>sanskar.cstaff@iitd.ac.in</span>
                </a>
                <a href="tel:+917984399359" className="contact-link-row">
                  <Phone size={16} />
                  <span>+91 7984399359</span>
                </a>
                <div className="contact-link-row">
                  <MapPin size={16} />
                  <span>DSIRe Lab, Block-3, Dept. of CSE, IIT Delhi, Hauz Khas, New Delhi 110016</span>
                </div>
              </div>
            </div>

            <div className="contact-badge-col">
              <div className="open-positions-card">
                <div className="open-badge">
                  <span className="pulsing-dot"></span>
                  <span>Open to Opportunities</span>
                </div>
                <h4>PhD & Research Inquiries</h4>
                <p>
                  Interested in PhD programs, research positions, and industrial AI research labs in Representation Learning and Multimodal Information Retrieval.
                </p>
                <a href="mailto:sanskar.cstaff@iitd.ac.in" className="btn-contact-direct">
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
