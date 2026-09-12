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
    }
    window.addEventListener('resize', handleResize)

    // Subtle academic nodes and connecting grid lines
    const nodeCount = Math.min(35, Math.floor((width * height) / 45000))
    const nodes = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
      })
    }

    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      const nodeColor = isDark ? 'rgba(161, 161, 170, 0.25)' : 'rgba(108, 117, 125, 0.18)'
      const lineColor = isDark ? 'rgba(161, 161, 170, 0.06)' : 'rgba(108, 117, 125, 0.05)'
      const activeLineColor = isDark ? 'rgba(96, 165, 250, 0.18)' : 'rgba(0, 86, 179, 0.12)'

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy

        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1

        // Mouse gentle repulsion
        const dx = mouseX - n.x
        const dy = mouseY - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120
          n.x -= (dx / dist) * force * 1.2
          n.y -= (dy / dist) * force * 1.2
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = nodeColor
        ctx.fill()

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const distBetween = Math.hypot(n.x - n2.x, n.y - n2.y)
          if (distBetween < 150) {
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Connect to mouse if close
        if (dist < 160) {
          ctx.beginPath()
          ctx.moveTo(n.x, n.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = activeLineColor
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />
}
