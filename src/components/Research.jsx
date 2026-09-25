import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, FileText, Database, GitBranch, Cpu, Sparkles, BookOpen, Layers, Lock } from 'lucide-react'
import ConfidentialModal from './ConfidentialModal'
import './Research.css'

const researchProjects = [
  {
    id: 'scalable-pipelines',
    title: 'Scalability Analysis of Cross-Modal Text-to-Image Pipelines',
    tagline: 'Systems-Level Energy, Latency & Fidelity Frontier on 7M+ Images',
    icon: Database,
    badge: 'ACM CIKM \'26 · Full Paper [ACCEPTED]',
    badgeType: 'green',
    description: 'Examining accuracy-efficiency Pareto frontiers of competing dense retrieval architectures on large-scale multimodal corpora. We benchmark single-index, staged reranking, and late-interaction fusion paradigms, revealing optimal approximate nearest-neighbor strategies and the surprising cost dominance of reranking phases in end-to-end pipeline design.',
    tags: ['Dense Retrieval', 'Cross-Modal IR', 'O-IVFPQ', 'FAISS', 'Efficiency-Aware Retrieval'],
    paperLink: `${import.meta.env.BASE_URL}docs/CIKM_full_Camera_Ready_final.pdf`,
    codeLink: 'https://github.com/data-iitd/mmir-cikm',
  },
  {
    id: 'stage-interactions',
    title: 'Retrieval-Stage Interactions in Cross-Modal Text-to-Image Retrieval Pipelines',
    tagline: 'Deconstructing Candidate Generation, Reranking & Fusion Dynamics',
    icon: GitBranch,
    badge: 'ACM CIKM \'26 · Short Paper [ACCEPTED]',
    badgeType: 'green',
    description: 'Understanding compositional effects in dense retrieval by investigating how architectural choices create emergent interactions across stages. We expose how first-stage retriever quality gates reranking effectiveness, revealing that ensemble gains stem from query-space complementarity rather than raw-score aggregation.',
    tags: ['Multi-Stage Retrieval', 'Reciprocal Rank Fusion', 'Candidate Ranking', 'Ensemble Fusion'],
    paperLink: `${import.meta.env.BASE_URL}docs/CIKM_Short_Camera_Ready_final.pdf`,
    codeLink: 'https://github.com/data-iitd/mmir-cikm',
  },
  {
    id: 'fidelity-synopses',
    title: 'Fidelity Synopses: Pre-Execution Plan Selection for Approximate Vector Search',
    tagline: 'Pre-Execution Plan Selection for Approximate Vector Search · Submitted to VLDB 2027',
    icon: Cpu,
    badge: 'VLDB \'27 · [SUBMITTED]',
    badgeType: 'purple',
    description: 'Predicting approximate retrieval quality without ground-truth queries through an offline landmark-based synopsis for pre-execution plan selection. We propose surrogate rankers enabling zero-cost-at-query-time quality estimation viable across architectures and modalities, with applicability to dynamic index selection and cost-aware retrieval planning.',
    tags: ['Vector Databases', 'ANN Indexing', 'Candidate Fidelity', 'HNSW', 'IVFPQ'],
    isConfidential: true,
    confidentialNotice: 'Submitted to VLDB 2027 · Under Review',
  },
  {
    id: 'setcore',
    title: 'SetCoRe: Set Composition for Retrieval of Educational Explanations',
    tagline: 'Set Composition for Retrieval of Educational Explanations · ECIR 2027',
    icon: BookOpen,
    badge: 'ECIR \'27 · [UNDER REVIEW]',
    badgeType: 'amber',
    description: 'Investigating set composition strategies for retrieving effective educational explanation sets from learning resources. We pair 440 learner queries with human-validated gold sets across 16 science textbooks.',
    tags: ['Educational IR', 'Set Composition', 'Explanation Retrieval', 'Information Retrieval'],
    isConfidential: true,
    confidentialNotice: 'Under review at ECIR 2027 · Double-Blind Peer Review',
  },
  {
    id: 'set2story',
    title: 'Set2Story: Retrieval-Grounded Storyboard Construction for Educational Explanation',
    tagline: 'Retrieval-Grounded Storyboard Planning & Construction · ECIR 2027',
    icon: Layers,
    badge: 'ECIR \'27 · [UNDER REVIEW]',
    badgeType: 'amber',
    description: 'Formalizing storyboard planning as the missing step between explanation-set retrieval and educational content generation, with grounded resource selection, pedagogical ordering, role assignment, and time budgeting.',
    tags: ['Educational IR', 'Storyboard Planning', 'Grounded Generation', 'Pedagogical Ordering'],
    isConfidential: true,
    confidentialNotice: 'Under review at ECIR 2027 · Double-Blind Peer Review',
  },
  {
    id: 'mmir-explorer',
    title: 'MMIR-Explorer: Interactive Pipeline Analysis',
    tagline: 'Live Research Platform for Query-Level Interaction & Provenance',
    icon: Sparkles,
    badge: 'Live Deployment · mmir.iitd.ac.in',
    badgeType: 'blue',
    description: 'Designed and deployed an interactive research platform at mmir.iitd.ac.in enabling researchers to examine query-level phenomena: side-by-side pipeline comparisons, reranking delta visualizations, candidate provenance tracking, and ANN fidelity distributions.',
    tags: ['Interactive IR', 'Retrieval Analysis', 'Query-Level Visualization', 'FastAPI'],
    externalLink: 'http://mmir.iitd.ac.in',
  },
  {
    id: 'vision-transformer',
    title: 'Facial Recognition and Verification using a Vision-Transformer Siamese Network',
    tagline: 'Master\'s Thesis at IIT Kharagpur (Supervised by Prof. Saumik Bhattacharya & Prof. Suvra Sekhar Das)',
    icon: Layers,
    badge: 'M.Tech Thesis · IIT Kharagpur',
    badgeType: 'purple',
    description: 'Trained a Vision-Transformer Siamese architecture on Celeb-DF v2 (31K+ images) using balanced (anchor, positive, negative) triplet loss for one-shot facial recognition and verification in the computer vision domain. Achieved 94.83% recognition accuracy and 91.06% verification accuracy (98.44% precision). Supervised by Prof. Saumik Bhattacharya and Prof. Suvra Sekhar Das.',
    tags: ['Computer Vision', 'Vision Transformers', 'Metric Learning', 'Celeb-DF v2'],
  },
]

export default function Research() {
  const [confidentialModalData, setConfidentialModalData] = useState(null)

  const openConfidential = (proj) => {
    setConfidentialModalData({
      title: proj.title,
      status: proj.confidentialNotice || 'Confidential & Under Review',
    })
  }

  return (
    <section id="research" className="research-section">
      <div className="research__container">
        <h2 className="academic-section-title">
          <a href="#research">research & projects</a>
        </h2>
        <p className="research-subtitle">
          Core thrusts spanning scalable vector search, multimodal explanation retrieval, and representation learning.
        </p>

        <div className="research-grid">
          {researchProjects.map((proj, index) => {
            const Icon = proj.icon
            return (
              <motion.div
                key={proj.id}
                className={`research-card research-card--${proj.badgeType}`}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  type: 'spring',
                  stiffness: 110,
                  damping: 18,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="research-card__header">
                  <div className="research-card__icon-wrap">
                    <Icon size={20} className="research-icon" />
                  </div>
                  <span className={`research-badge research-badge--${proj.badgeType}`}>
                    {proj.badge}
                  </span>
                </div>

                <h3 className="research-card__title">{proj.title}</h3>
                <p className="research-card__tagline">{proj.tagline}</p>
                <p className="research-card__desc">{proj.description}</p>

                <div className="research-card__tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="research-tag">{tag}</span>
                  ))}
                </div>

                <div className="research-card__footer">
                  {proj.isConfidential ? (
                    <button
                      className="card-action-link card-action-link--wip"
                      onClick={() => openConfidential(proj)}
                      title="Click to view manuscript status"
                    >
                      <Lock size={13} />
                      <span>Manuscript (WIP)</span>
                    </button>
                  ) : proj.paperLink ? (
                    <a
                      href={proj.paperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-action-link"
                    >
                      <FileText size={13} />
                      <span>Paper PDF</span>
                    </a>
                  ) : null}

                  {proj.codeLink && (
                    <a
                      href={proj.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-action-link"
                    >
                      <ExternalLink size={13} />
                      <span>Code</span>
                    </a>
                  )}

                  {proj.externalLink && (
                    <a
                      href={proj.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-action-link"
                    >
                      <ExternalLink size={13} />
                      <span>Live Platform</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <ConfidentialModal
        isOpen={!!confidentialModalData}
        onClose={() => setConfidentialModalData(null)}
        paperTitle={confidentialModalData?.title || ''}
        statusType={confidentialModalData?.status || ''}
      />
    </section>
  )
}
