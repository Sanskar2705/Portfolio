import { useState, useEffect } from 'react'
import { X, Lock, Mail, Sparkles, ShieldAlert } from 'lucide-react'
import './ConfidentialModal.css'

export default function ConfidentialModal({ isOpen, onClose, paperTitle, statusType }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const isVLDB = Boolean(
    paperTitle?.toLowerCase().includes('fidelity synopses') ||
    statusType?.toLowerCase().includes('vldb') ||
    statusType?.toLowerCase().includes('submitted to vldb')
  )

  if (!isOpen) return null

  return (
    <div className="confidential-backdrop" onClick={onClose}>
      <div className="confidential-modal" onClick={(e) => e.stopPropagation()}>
        <button className="confidential-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        {/* Creative Cartoon / Detective Illustration */}
        <div className="cartoon-header">
          <div className="cartoon-bubble">
            <span className="bubble-text">
              {isVLDB ? 'Under Review! 🔬📄' : 'Shhh! Top Secret! 🤫'}
            </span>
          </div>
          
          <div className="cartoon-character">
            {/* SVG Detective / Scientist Cartoon Character */}
            <svg viewBox="0 0 200 180" className="cartoon-svg">
              {/* Soft glow background */}
              <circle cx="100" cy="90" r="75" fill="var(--accent-blue-subtle)" />
              
              {/* Lab coat / Scientist body */}
              <path d="M 65 145 C 65 115, 135 115, 135 145 L 140 175 L 60 175 Z" fill="#3b82f6" opacity="0.9" />
              <path d="M 85 130 L 100 150 L 115 130 Z" fill="#ffffff" />
              <rect x="97" y="145" width="6" height="25" fill="#1e40af" />
              
              {/* Head */}
              <circle cx="100" cy="85" r="34" fill="#fbcfe8" />
              
              {/* Fun Detective / Scholar Hat */}
              <ellipse cx="100" cy="62" rx="46" ry="9" fill="#1e293b" />
              <path d="M 72 62 C 72 38, 128 38, 128 62 Z" fill="#334155" />
              <rect x="74" y="56" width="52" height="6" fill="#3b82f6" rx="2" />
              
              {/* Glasses */}
              <circle cx="89" cy="86" r="10" fill="none" stroke="#1e293b" strokeWidth="3" />
              <circle cx="111" cy="86" r="10" fill="none" stroke="#1e293b" strokeWidth="3" />
              <line x1="99" y1="86" x2="101" y2="86" stroke="#1e293b" strokeWidth="3" />
              
              {/* Winking eye / mischievous scholar eyes */}
              <circle cx="89" cy="86" r="4" fill="#1e293b" />
              <path d="M 108 86 Q 111 83 114 86" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Blushing cheeks */}
              <ellipse cx="78" cy="95" rx="5" ry="3" fill="#f43f5e" opacity="0.4" />
              <ellipse cx="122" cy="95" rx="5" ry="3" fill="#f43f5e" opacity="0.4" />
              
              {/* Smile */}
              <path d="M 94 98 Q 100 106 106 98" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              
              {/* Magnifying Glass looking at a Confidential folder */}
              <g transform="translate(115, 80) rotate(15)">
                <circle cx="15" cy="15" r="14" fill="rgba(255,255,255,0.7)" stroke="#d97706" strokeWidth="3.5" />
                <line x1="25" y1="25" x2="38" y2="38" stroke="#78350f" strokeWidth="5" strokeLinecap="round" />
                {/* Micro text inside lens */}
                <text x="7" y="17" fontSize="9" fill="#d97706" fontWeight="bold">WIP</text>
              </g>
              
              {/* Little floating stars / ideas */}
              <path d="M 45 60 L 48 65 L 53 66 L 49 70 L 50 75 L 45 72 L 40 75 L 41 70 L 37 66 L 42 65 Z" fill="#fbbf24" />
              <circle cx="155" cy="55" r="3" fill="#60a5fa" />
              <circle cx="165" cy="65" r="2" fill="#a855f7" />
            </svg>
          </div>
        </div>

        <div className="confidential-body">
          <div className="confidential-badge">
            <Lock size={13} />
            <span>{statusType || (isVLDB ? 'Submitted to VLDB 2027 · Under Review' : 'Confidential & Under Review')}</span>
          </div>

          <h3 className="confidential-paper-title">{paperTitle}</h3>

          {isVLDB ? (
            <>
              <p className="confidential-text">
                <strong>Submitted & under review! 📄🔬</strong> This manuscript has been submitted to VLDB 2027 and is currently under review. To respect the review process and conference policies, the public PDF is not yet available.
              </p>
              <p className="confidential-subtext">
                The full preprint and benchmark codebase will be released after the review process concludes! If you're a fellow researcher or collaborator eager to discuss the ideas, Sanskar is happy to connect over email.
              </p>
            </>
          ) : (
            <>
              <p className="confidential-text">
                <strong>Hold tight! 🔒📄</strong> This manuscript is currently undergoing double-blind peer review for ECIR 2027. To preserve reviewer anonymity and respect conference embargo policies, the public PDF is locked down in the vault for now.
              </p>
              <p className="confidential-subtext">
                The camera-ready version or public preprint will be released right after notification! If you are a reviewer or researcher who would like to discuss the core ideas or early results, feel free to drop me an email.
              </p>
            </>
          )}

          <div className="confidential-actions">
            <a
              href={`mailto:ssanskar2705@gmail.com?subject=Inquiry regarding draft: ${encodeURIComponent(paperTitle)}`}
              className="btn-confidential-email"
            >
              <Mail size={15} />
              <span>{isVLDB ? 'Email Sanskar to Discuss' : 'Email Sanskar for a Private Draft'}</span>
            </a>
            <button className="btn-confidential-dismiss" onClick={onClose}>
              Got it, I'll check back! 👍
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
