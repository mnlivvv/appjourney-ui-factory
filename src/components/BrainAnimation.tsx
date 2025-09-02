import { useEffect, useRef, FC } from 'react'

/**
 * BrainAnimation Component
 * Renders a neural network animation simulating an AI brain
 */
const BrainAnimation: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = 300 // Fixed height
      }
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Particle system for neural network visualization
    class Particle {
      x: number
      y: number
      size: number
      color: string
      vx: number
      vy: number
      connections: Particle[]
      
      constructor(x: number, y: number, size: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.color = color
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.connections = []
      }
      
      update() {
        this.x += this.vx
        this.y += this.vy
        
        // Bounce off edges
        if (this.x < 0 || this.x > (canvas?.width || 0)) this.vx *= -1
        if (this.y < 0 || this.y > (canvas?.height || 0)) this.vy *= -1
      }
      
      draw() {
        if (!ctx) return
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        
        // Draw connections
        this.connections.forEach(particle => {
          ctx.beginPath()
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(particle.x, particle.y)
          ctx.strokeStyle = this.color
          ctx.globalAlpha = 0.2
          ctx.lineWidth = 0.5
          ctx.stroke()
          ctx.globalAlpha = 1
        })
      }
      
      connect(particles: Particle[]) {
        this.connections = []
        particles.forEach(particle => {
          if (particle !== this) {
            const distance = Math.sqrt(
              Math.pow(this.x - particle.x, 2) + 
              Math.pow(this.y - particle.y, 2)
            )
            
            // Connect if within distance threshold
            if (distance < 100) {
              this.connections.push(particle)
            }
          }
        })
      }
    }
    
    // Create particles
    const particles: Particle[] = []
    const colors = [
      'rgba(0, 240, 255, 1)', // Cyan
      'rgba(255, 0, 255, 1)',  // Magenta
      'rgba(0, 153, 255, 1)',  // Electric Blue
      'rgba(0, 255, 143, 1)'   // Neon Green
    ]
    
    for (let i = 0; i < 40; i++) {
      const size = Math.random() * 2 + 1
      const color = colors[Math.floor(Math.random() * colors.length)]
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      
      particles.push(new Particle(x, y, size, color))
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw grid lines for futuristic effect
      ctx.lineWidth = 0.3
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)'
      
      // Horizontal grid lines
      for (let i = 0; i < (canvas?.height || 0); i += 20) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas?.width || 0, i)
        ctx.stroke()
      }
      
      // Vertical grid lines
      for (let i = 0; i < (canvas?.width || 0); i += 20) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas?.height || 0)
        ctx.stroke()
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.connect(particles)
        particle.draw()
      })
      
      // Pulse effect
      const time = Date.now() / 1000
      particles.forEach(particle => {
        particle.size = (Math.sin(time * 2 + particle.x) + 2) * particle.size / 2
      })
      
      requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  
  return (
    <div className="ai-brain-animation">
      <div className="ai-card-header">
        <h3 className="ai-card-title">NEURAL ACTIVITY</h3>
      </div>
      <div className="ai-brain-canvas-container">
        <canvas 
          ref={canvasRef} 
          className="ai-brain-canvas"
        ></canvas>
        <div className="ai-brain-overlay">
          <div className="ai-brain-stats">
            <div className="ai-brain-stat">
              <span className="ai-brain-stat-label">Neurons</span>
              <span className="ai-brain-stat-value">1.28M</span>
            </div>
            <div className="ai-brain-stat">
              <span className="ai-brain-stat-label">Synapses</span>
              <span className="ai-brain-stat-value">8.4B</span>
            </div>
            <div className="ai-brain-stat">
              <span className="ai-brain-stat-label">Activity</span>
              <span className="ai-brain-stat-value">86.3%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrainAnimation