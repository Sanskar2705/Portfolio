import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import './News.css'

const newsData = [
  {
    date: 'Sep 2026',
    badge: 'Submitted',
    badgeType: 'purple',
    title: 'Submitted "Fidelity Synopses: Pre-Execution Plan Selection for Approximate Vector Search" to VLDB 2027',
    description: 'Our paper on offline landmark-based fidelity synopses for pre-execution plan selection in approximate vector search has been submitted to VLDB 2027. Preprints coming soon!',
    link: '#research',
  },
  {
    date: 'Aug 2026',
    badge: 'Accepted',
    badgeType: 'green',
    title: "Two Paper Accepted at CIKM'26 Rome",
    description: 'Our full research paper on "Scalability Analysis of Cross-Modal Text-to-Image Pipelines" and short paper on "Retrieval-Stage Interactions in Cross-Modal Text-to-Image Retrieval Pipelines" were both accepted.',
    link: '#publications',
  },
  {
    date: 'Sep 2026',
    badge: 'Submission',
    badgeType: 'amber',
    title: 'Submitted "SetCoRe" & "Set2Story" to ECIR 2027',
    description: 'Submitted two co-authored research papers—"SetCoRe: Set Composition for Retrieval of Educational Explanations" (with Riti Verma) and "Set2Story: Retrieval-Grounded Storyboard Construction for Educational Explanation" (with Aryan Ahmed)—under peer review at ECIR 2027.',
    link: '#publications',
  },
  {
    date: 'Nov 2025',
    badge: 'Published',
    badgeType: 'green',
    title: 'Presented "SARCH: Multimodal Search for Archaeological Archives" at CIKM \'25 MMGenSR Workshop, Seoul',
    description: 'Hybrid multimodal search system for 296 scanned archaeology documents (63K+ pages) combining modality-specific embeddings with BM25 via reciprocal rank fusion.',
    link: '#publications',
  },
  {
    date: 'May 2025',
    badge: 'Appointment',
    badgeType: 'blue',
    title: 'Joined IIT Delhi as Project Scientist',
    description: 'Started at DSIRe Lab in the Dept. of Computer Science & Engineering, IIT Delhi under the mentorship of Prof. Maya Ramanath.',
  },
  {
    date: 'May 2025',
    badge: 'Graduation',
    badgeType: 'purple',
    title: 'Graduated with M.Tech from IIT Kharagpur',
    description: 'Defended Master\'s thesis in the computer vision domain on "Facial Recognition and Verification using a Vision-Transformer Siamese Network" advised by Prof. Saumik Bhattacharya and Prof. Suvra Sekhar Das.',
  },
]

export default function News() {
  return (
    <section id="news" className="news-section">
      <div className="news-section__container">
        <h2 className="academic-section-title">
          <a href="#news">news & updates</a>
        </h2>

        <div className="news-table-wrapper">
          <table className="news-table">
            <tbody>
              {newsData.map((item, index) => (
                <motion.tr
                  key={index}
                  className="news-row"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 18,
                    delay: index * 0.05,
                  }}
                >
                  <td className="news-date">
                    <span className="news-date-text">{item.date}</span>
                    <span className={`news-badge news-badge--${item.badgeType}`}>
                      {item.badge}
                    </span>
                  </td>
                  <td className="news-content">
                    {item.link ? (
                      <a
                        href={item.link}
                        className="news-title-link"
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.title}
                        {item.external && <ExternalLink size={12} className="news-external-icon" />}
                      </a>
                    ) : (
                      <span className="news-title-text">{item.title}</span>
                    )}
                    <p className="news-desc">{item.description}</p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
