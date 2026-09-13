import { useEffect, useRef } from 'react'
import './AmbientCanvas.css'

export default function AmbientCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initStars()
    }
    window.addEventListener('resize', handleResize)

    // Stars setup
    const starCount = Math.min(200, Math.floor((width * height) / 8000))
    let stars = []
    
    const initStars = () => {
      stars = []
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.1 + 0.05,
          twinkleSpeed: Math.random() * 0.05 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
    }
    initStars()

    let time = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      
      // Draw stars (visible in both light and dark, but opacity differs)
      const baseStarOpacity = isDark ? 0.8 : 0.3
      stars.forEach((star) => {
        star.y -= star.speed
        if (star.y < 0) {
          star.y = height
          star.x = Math.random() * width
        }
        
        star.twinklePhase += star.twinkleSpeed
        const opacity = baseStarOpacity * (0.5 + 0.5 * Math.sin(star.twinklePhase))
        
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 30, 80, ${opacity})`
        ctx.fill()
      })

      // Aurora configuration
      time += 0.005
      
      const drawAuroraWave = (yOffset, amplitude, frequency, color, phaseOffset) => {
        ctx.beginPath()
        for (let x = 0; x <= width; x += 20) {
          // Complex wave calculation
          const y = yOffset 
            + Math.sin(x * frequency + time + phaseOffset) * amplitude 
            + Math.cos(x * frequency * 0.5 - time * 1.2) * (amplitude * 0.5)
            + Math.sin(x * frequency * 0.2 + time * 0.5) * (amplitude * 0.8)
          
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        // Complete the shape to the bottom for gradient fill
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, yOffset - amplitude * 2, 0, height)
        gradient.addColorStop(0, 'transparent')
        gradient.addColorStop(0.2, color)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Draw multiple layers of Aurora
      ctx.globalCompositeOperation = 'screen'
      
      if (isDark) {
        // Dark mode aurora (vibrant green, cyan, purple)
        drawAuroraWave(height * 0.3, 80, 0.002, 'rgba(16, 185, 129, 0.15)', 0)
        drawAuroraWave(height * 0.4, 100, 0.0015, 'rgba(56, 189, 248, 0.12)', Math.PI)
        drawAuroraWave(height * 0.5, 60, 0.003, 'rgba(139, 92, 246, 0.1)', Math.PI / 2)
      } else {
        // Light mode aurora (subtle blue, teal, violet)
        drawAuroraWave(height * 0.2, 80, 0.002, 'rgba(14, 165, 233, 0.08)', 0)
        drawAuroraWave(height * 0.35, 100, 0.0015, 'rgba(16, 185, 129, 0.05)', Math.PI)
        drawAuroraWave(height * 0.5, 60, 0.003, 'rgba(99, 102, 241, 0.06)', Math.PI / 2)
      }
      
      ctx.globalCompositeOperation = 'source-over'

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />
}
