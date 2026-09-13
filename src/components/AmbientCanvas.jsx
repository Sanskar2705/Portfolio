import { useEffect, useRef } from 'react'
import './AmbientCanvas.css'

export default function AmbientCanvas() {
  const videoRef = useRef(null)

  useEffect(() => {
    // If we want to adjust playback speed or handle errors
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // slightly slower for a relaxing aurora
    }
  }, [])

  return (
    <div className="ambient-canvas-container" aria-hidden="true">
      {/* Video element covering the background */}
      <video
        ref={videoRef}
        className="ambient-video"
        autoPlay
        muted
        loop
        playsInline
        src={`${import.meta.env.BASE_URL}aurora.mp4`}
      />
      {/* Overlay to ensure text readability based on theme */}
      <div className="ambient-overlay"></div>
    </div>
  )
}
