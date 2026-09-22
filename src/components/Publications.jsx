import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Code2, ExternalLink, Copy, Check, Lock, Award, BookOpen, Clock } from 'lucide-react'
import ConfidentialModal from './ConfidentialModal'
import './Publications.css'

const publicationsData = [
  {
    id: 'singh2026scalability',
    year: '2026',
    category: 'accepted',
    venueAbbr: 'CIKM \'26 Full',
    conferenceHighlight: 'ACM CIKM 2026 · Rome, Italy',
    conferenceType: 'Accepted · Full Research Paper',
    statusBadge: 'Accepted · Full Paper',
    statusClass: 'status-accepted',
    title: 'Scalability Analysis of Cross-Modal Text-to-Image Pipelines',
    authors: ['Sanskar S. Singh', 'Ziv Barretto', 'Bharati Khanijo', 'Aditya Sahu', 'Maya Ramanath'],
    me: 'Sanskar S. Singh',
    periodical: 'In Proceedings of the 35th ACM International Conference on Information and Knowledge Management (CIKM \'26), Rome, Italy',
    abstract: 'Bridging the retrieval accuracy-efficiency gap through comprehensive systems-level benchmarking of competing architectural paradigms—single-index dense retrieval, staged retrieve-and-rerank, and late-interaction fusion. We examine Pareto trade-offs across accuracy, query latency, energy footprint, and candidate fidelity on large-scale heterogeneous collections, demonstrating that approximate nearest-neighbor quantization strategies emerge as optimal while exposing the surprising cost dominance of reranking phases in end-to-end pipelines.',
    bibtex: `@inproceedings{singh2026scalability,
  title     = {Scalability Analysis of Cross-Modal Text-to-Image Pipelines},
  author    = {Singh, Sanskar S. and Barretto, Ziv and Khanijo, Bharati and Sahu, Aditya and Ramanath, Maya},
  booktitle = {Proceedings of the 35th ACM International Conference on Information and Knowledge Management (CIKM '26)},
  year      = {2026},
  address   = {Rome, Italy},
  doi       = {10.1145/3799682.3840752}
}`,
    pdf: `${import.meta.env.BASE_URL}docs/CIKM_full_Camera_Ready_final.pdf`,
    code: 'https://github.com/data-iitd/mmir-cikm',
    doi: 'https://doi.org/10.1145/3799682.3840752',
    isConfidential: false,
  },
  {
    id: 'singh2026interactions',
    year: '2026',
    category: 'accepted',
    venueAbbr: 'CIKM \'26 Short',
    conferenceHighlight: 'ACM CIKM 2026 · Rome, Italy',
    conferenceType: 'Accepted · Short Research Paper',
    statusBadge: 'Accepted · Short Paper',
    statusClass: 'status-accepted',
    title: 'Retrieval-Stage Interactions in Cross-Modal Text-to-Image Retrieval Pipelines',
    authors: ['Sanskar S. Singh', 'Ziv Barretto', 'Bharati Khanijo', 'Aditya Sahu', 'Maya Ramanath'],
    me: 'Sanskar S. Singh',
    periodical: 'In Proceedings of the 35th ACM International Conference on Information and Knowledge Management (CIKM \'26), Rome, Italy',
    abstract: 'Understanding compositional effects in multi-stage dense retrieval by investigating how architectural choices at each retrieval stage create emergent interactions. We examine how first-stage retriever quality gates reranking effectiveness, the bidirectional relationship between candidate-set saturation and ensemble complementarity, and why traditional fusion strategies underutilize additional candidates—revealing that ensemble gains stem from query-space complementarity rather than raw-score coverage.',
    bibtex: `@inproceedings{singh2026interactions,
  title     = {Retrieval-Stage Interactions in Cross-Modal Text-to-Image Retrieval Pipelines},
  author    = {Singh, Sanskar S. and Barretto, Ziv and Khanijo, Bharati and Sahu, Aditya and Ramanath, Maya},
  booktitle = {Proceedings of the 35th ACM International Conference on Information and Knowledge Management (CIKM '26)},
  year      = {2026},
  address   = {Rome, Italy},
  doi       = {10.1145/3799682.3840060}
}`,
    pdf: `${import.meta.env.BASE_URL}docs/CIKM_Short_Camera_Ready_final.pdf`,
    code: 'https://github.com/data-iitd/mmir-cikm',
    doi: 'https://doi.org/10.1145/3799682.3840060',
    isConfidential: false,
  },
  {
    id: 'verma2027setcore',
    year: '2027',
    category: 'review',
    venueAbbr: 'ECIR \'27',
    conferenceHighlight: 'ECIR 2027',
    conferenceType: 'Under Review · ECIR 2027',
    statusBadge: 'Under Review (ECIR 2027)',
    statusClass: 'status-review',
    title: 'SetCoRe: Set Composition for Retrieval of Educational Explanations',
    authors: ['Riti Verma', 'Sanskar S. Singh', 'Maya Ramanath'],
    me: 'Sanskar S. Singh',
    periodical: 'Under review at ECIR 2027',
    abstract: 'Investigating set composition strategies for retrieving effective educational explanation sets from learning resources. We pair learner queries with human-validated explanation sets, capturing domain-specific grounding and pedagogical utility in retrieval systems.',
    bibtex: `@article{verma2027setcore,
  title   = {SetCoRe: Set Composition for Retrieval of Educational Explanations},
  author  = {Verma, Riti and Singh, Sanskar S. and Ramanath, Maya},
  journal = {Under review at ECIR 2027},
  year    = {2027}
}`,
    isConfidential: true,
    confidentialNotice: 'Under review at ECIR 2027 · Double-Blind Peer Review',
  },
  {
    id: 'ahmed2027set2story',
    year: '2027',
    category: 'review',
    venueAbbr: 'ECIR \'27',
    conferenceHighlight: 'ECIR 2027',
    conferenceType: 'Under Review · ECIR 2027',
    statusBadge: 'Under Review (ECIR 2027)',
    statusClass: 'status-review',
    title: 'Set2Story: Retrieval-Grounded Storyboard Construction for Educational Explanation',
    authors: ['Aryan Ahmed', 'Sanskar S. Singh', 'Maya Ramanath'],
    me: 'Sanskar S. Singh',
    periodical: 'Under review at ECIR 2027',
    abstract: 'Formalizing storyboard planning as the missing step between explanation-set retrieval and educational content generation, with grounded resource selection, pedagogical ordering, role assignment, and time budgeting. Developed a benchmark, intrinsic evaluation metrics, and a lightweight grounded planning method.',
    bibtex: `@article{ahmed2027set2story,
  title   = {Set2Story: Retrieval-Grounded Storyboard Construction for Educational Explanation},
  author  = {Ahmed, Aryan and Singh, Sanskar S. and Ramanath, Maya},
  journal = {Under review at ECIR 2027},
  year    = {2027}
}`,
    isConfidential: true,
    confidentialNotice: 'Under review at ECIR 2027 · Double-Blind Peer Review',
  },
  {
    id: 'singh2026spatial',
    year: '2026',
    category: 'preprint',
    venueAbbr: 'VLDB \'27 Prep',
    conferenceHighlight: 'Target: VLDB 2027 (October 2026 Submission)',
    conferenceType: 'In Preparation',
    statusBadge: 'Target: VLDB (Oct 2026)',
    statusClass: 'status-preprint',
    title: 'Spatial Fidelity Maps: A Query-Time, Ground-Truth-Free Signal for Approximate Nearest-Neighbor Retrieval',
    authors: ['Sanskar S. Singh', 'Maya Ramanath'],
    me: 'Sanskar S. Singh',
    periodical: 'Preparing for VLDB Submission (October 2026)',
    abstract: 'Predicting approximate retrieval quality without ground-truth queries through landmark-based surrogate modeling. We propose offline-constructed landmark spaces as surrogate rankers, enabling zero-cost-at-query-time fidelity prediction viable across model architectures and modality directions—demonstrating consistent calibration and ranking-quality correlation, with applicability to dynamic index selection and cost-aware retrieval planning without recomputation.',
    bibtex: `@article{singh2026spatial,
  title   = {Spatial Fidelity Maps: A Query-Time, Ground-Truth-Free Signal for Approximate Nearest-Neighbor Retrieval},
  author  = {Singh, Sanskar S. and Ramanath, Maya},
  note    = {Preparing for VLDB October 2026 Submission},
  year    = {2026}
}`,
    isConfidential: true,
    confidentialNotice: 'Preparing for VLDB (October 2026) · Work in Progress',
  },
  {
    id: 'sinha2025sarch',
    year: '2025',
    category: 'accepted',
    venueAbbr: 'CIKM \'25 Wkp',
    conferenceHighlight: 'CIKM 2025 Workshop (MMGenSR · Seoul, Korea)',
    conferenceType: 'Published · Workshop Paper',
    statusBadge: 'Published',
    statusClass: 'status-accepted',
    title: 'SARCH: Multimodal Search for Archaeological Archives',
    authors: ['N. Sinha', 'B. Khanijo', 'Sanskar S. Singh (3rd author)', 'et al.', 'Maya Ramanath'],
    me: 'Sanskar S. Singh (3rd author)',
    periodical: 'In Proceedings of the CIKM \'25 Workshop on Multimodal Generative Search and Retrieval (MMGenSR \'25), Seoul, Korea',
    abstract: 'Cross-modal retrieval for specialized domain corpora by developing a hybrid dense-sparse fusion pipeline for heterogeneous scanned document collections where text OCR quality is unreliable. We combine modality-specific encoders with traditional lexical ranking via reciprocal-rank fusion, demonstrating how complementary signal sources compensate for OCR degradation—a practical dense-sparse IR design applicable to digitized heritage collections overlooked in standard benchmarks.',
    bibtex: `@inproceedings{sinha2025sarch,
  title     = {SARCH: Multimodal Search for Archaeological Archives},
  author    = {Sinha, N. and Khanijo, B. and Singh, Sanskar S. and Ramanath, Maya},
  booktitle = {CIKM '25 Workshop on Multimodal Generative Search and Retrieval (MMGenSR '25)},
  year      = {2025},
  address   = {Seoul, South Korea}
}`,
    pdf: `${import.meta.env.BASE_URL}docs/sarch.pdf`,
    isConfidential: false,
  },
]

export default function Publications() {
  const [activeTab, setActiveTab] = useState('all')
  const [expandedAbs, setExpandedAbs] = useState({})
  const [expandedBib, setExpandedBib] = useState({})
  const [copiedId, setCopiedId] = useState(null)
  const [confidentialModalData, setConfidentialModalData] = useState(null)

  const toggleAbstract = (id) => {
    setExpandedAbs(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleBibtex = (id) => {
    setExpandedBib(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const handleCopyBibtex = (id, text) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const openConfidential = (pub) => {
    setConfidentialModalData({
      title: pub.title,
      status: pub.confidentialNotice || 'Confidential & Under Review',
    })
  }

  const filteredPubs = activeTab === 'all'
    ? publicationsData
    : activeTab === 'accepted'
    ? publicationsData.filter(p => p.category === 'accepted')
    : activeTab === 'review'
    ? publicationsData.filter(p => p.category === 'review')
    : publicationsData.filter(p => p.category === 'preprint')

  return (
    <section id="publications" className="publications-section">
      <div className="publications__container">
        <div className="publications__header-row">
          <div>
            <h2 className="academic-section-title">
              <a href="#publications">selected publications</a>
            </h2>
            <p className="publications__subtitle">
              Peer-reviewed manuscripts, active submissions, and ongoing systems research
            </p>
          </div>

          {/* Filter Pills */}
          <div className="pub-filters">
            <button
              className={`filter-btn ${activeTab === 'all' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All ({publicationsData.length})
            </button>
            <button
              className={`filter-btn ${activeTab === 'accepted' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveTab('accepted')}
            >
              Accepted & Published (3)
            </button>
            <button
              className={`filter-btn ${activeTab === 'review' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveTab('review')}
            >
              Under Review ({publicationsData.filter(p => p.category === 'review').length})
            </button>
            <button
              className={`filter-btn ${activeTab === 'preprint' ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveTab('preprint')}
            >
              Preparing / Upcoming (1)
            </button>
          </div>
        </div>

        {/* Executive Conference Radar & Status Deck — Immediate Visual Prominence */}
        <div className="conference-spotlight-deck">
          <div className="spotlight-card spotlight-card--accepted" onClick={() => setActiveTab('accepted')}>
            <div className="spotlight-card__header">
              <span className="spotlight-badge spotlight-badge--accepted">
                <span className="spotlight-dot spotlight-dot--green"></span>
                ACCEPTED · 2 PAPERS
              </span>
              <Award size={16} className="spotlight-icon spotlight-icon--green" />
            </div>
            <h4 className="spotlight-venue">ACM CIKM 2026</h4>
            <div className="spotlight-location">Rome, Italy · October 2026</div>
            <p className="spotlight-desc">
              Full Research Paper on Cross-Modal Pipelines + Short Paper on Retrieval-Stage Interactions.
            </p>
          </div>

          <div className="spotlight-card spotlight-card--review" onClick={() => setActiveTab('review')}>
            <div className="spotlight-card__header">
              <span className="spotlight-badge spotlight-badge--review">
                <span className="spotlight-dot spotlight-dot--amber"></span>
                UNDER DOUBLE-BLIND PEER REVIEW · 2 PAPERS
              </span>
              <Clock size={16} className="spotlight-icon spotlight-icon--amber" />
            </div>
            <h4 className="spotlight-venue">ECIR 2027</h4>
            <div className="spotlight-location">Under Peer Review</div>
            <p className="spotlight-desc">
              SetCoRe (Explanation Set Retrieval) & Set2Story (Retrieval-Grounded Storyboard Construction).
            </p>
          </div>

          <div className="spotlight-card spotlight-card--upcoming" onClick={() => setActiveTab('preprint')}>
            <div className="spotlight-card__header">
              <span className="spotlight-badge spotlight-badge--upcoming">
                <span className="spotlight-dot spotlight-dot--purple"></span>
                TARGET OCTOBER 2026 SUBMISSION
              </span>
              <BookOpen size={16} className="spotlight-icon spotlight-icon--purple" />
            </div>
            <h4 className="spotlight-venue">VLDB 2027</h4>
            <div className="spotlight-location">Target: October 2026 Submission</div>
            <p className="spotlight-desc">
              Spatial Fidelity Maps: Ground-truth-free candidate fidelity prediction for scalable vector databases.
            </p>
          </div>
        </div>

        {/* Bibliography List formatted as Animated Stacked Deck */}
        <ol className="bibliography-list">
          {filteredPubs.map((pub, index) => (
            <motion.li
              key={pub.id}
              className={`pub-entry pub-entry--stacked pub-entry--${pub.category}`}
              initial={{ opacity: 0, y: 38, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                type: 'spring',
                stiffness: 110,
                damping: 18,
                delay: index * 0.08,
              }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
            >
              {/* Prominent Conference Callout Strip at top of card */}
              <div className={`pub-callout-strip pub-callout-strip--${pub.category}`}>
                <div className="pub-callout-left">
                  <span className={`callout-live-indicator callout-live-indicator--${pub.category}`}></span>
                  <strong className="pub-callout-venue">{pub.conferenceHighlight}</strong>
                </div>
                <span className={`pub-callout-status-chip pub-callout-status-chip--${pub.category}`}>
                  {pub.conferenceType}
                </span>
              </div>

              <div className="pub-entry__row">
                {/* Left Abbr Badge */}
                <div className="pub-entry__abbr-col">
                  <span className={`venue-badge ${pub.statusClass}`}>
                    {pub.venueAbbr}
                  </span>
                  <span className="pub-year-label">{pub.year}</span>
                </div>

                {/* Right Details */}
                <div className="pub-entry__details">
                  <h3 className="pub-title">
                    {pub.isConfidential ? (
                      <span
                        className="confidential-title-trigger"
                        onClick={() => openConfidential(pub)}
                        title="Click to view manuscript status"
                      >
                        {pub.title} <Lock size={14} className="title-lock-icon" />
                      </span>
                    ) : pub.pdf ? (
                      <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>

                  <div className="pub-authors">
                    {pub.authors.map((author, idx) => (
                      <span key={idx}>
                        {idx > 0 && ', '}
                        {author.includes('Sanskar') ? (
                          <strong className="author-highlight">{author}</strong>
                        ) : (
                          author
                        )}
                      </span>
                    ))}
                  </div>

                  <div className="pub-periodical">
                    <em>{pub.periodical}</em>
                  </div>

                  {/* Action Buttons: Abs, Bib, PDF, Code, DOI */}
                  <div className="pub-actions">
                    <button
                      className={`btn-action ${expandedAbs[pub.id] ? 'btn-action--active' : ''}`}
                      onClick={() => toggleAbstract(pub.id)}
                    >
                      {expandedAbs[pub.id] ? 'Hide Abs' : 'Abs'}
                    </button>

                    <button
                      className={`btn-action ${expandedBib[pub.id] ? 'btn-action--active' : ''}`}
                      onClick={() => toggleBibtex(pub.id)}
                    >
                      {expandedBib[pub.id] ? 'Hide Bib' : 'Bib'}
                    </button>

                    {/* Confidential PDF Handling */}
                    {pub.isConfidential ? (
                      <button
                        className="btn-action btn-action--confidential"
                        onClick={() => openConfidential(pub)}
                        title="Manuscript under review / embargo — Click for details"
                      >
                        <Lock size={13} />
                        PDF (WIP)
                      </button>
                    ) : pub.pdf ? (
                      <a
                        href={pub.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-action btn-action--pdf"
                      >
                        <FileText size={13} />
                        PDF
                      </a>
                    ) : null}

                    {pub.code && (
                      <a
                        href={pub.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-action btn-action--code"
                      >
                        <Code2 size={13} />
                        Code
                      </a>
                    )}

                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-action"
                      >
                        <ExternalLink size={13} />
                        DOI
                      </a>
                    )}
                  </div>

                  {/* Expandable Abstract Box */}
                  {expandedAbs[pub.id] && (
                    <div className="pub-collapsible-box pub-abstract-box">
                      <div className="box-header">Abstract</div>
                      <p>{pub.abstract}</p>
                    </div>
                  )}

                  {/* Expandable BibTeX Box with 1-click copy */}
                  {expandedBib[pub.id] && (
                    <div className="pub-collapsible-box pub-bibtex-box">
                      <div className="box-header">
                        <span>BibTeX</span>
                        <button
                          className="btn-copy-bibtex"
                          onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                        >
                          {copiedId === pub.id ? (
                            <>
                              <Check size={13} /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy size={13} /> Copy BibTeX
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="bibtex-pre">{pub.bibtex}</pre>
                    </div>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* Confidential Cartoon Modal */}
      <ConfidentialModal
        isOpen={!!confidentialModalData}
        onClose={() => setConfidentialModalData(null)}
        paperTitle={confidentialModalData?.title || ''}
        statusType={confidentialModalData?.status || ''}
      />
    </section>
  )
}
