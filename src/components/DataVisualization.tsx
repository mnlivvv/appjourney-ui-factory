import { useState, useEffect } from 'react'

/**
 * DataVisualization Component
 * Displays a futuristic data visualization grid with animated data points
 */
const DataVisualization = () => {
  const [dataPoints, setDataPoints] = useState<Array<DataPoint>>([])
  
  // Define types
  type DataPoint = {
    id: number
    x: number
    y: number
    value: number
    color: string
  }
  
  // Generate random data points for visualization
  useEffect(() => {
    const colors = [
      'var(--color-neon-cyan)',
      'var(--color-neon-magenta)',
      'var(--color-electric-blue)',
      'var(--color-neon-green)'
    ]
    
    const newDataPoints = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      value: Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    
    setDataPoints(newDataPoints)
    
    // Animate data points
    const interval = setInterval(() => {
      setDataPoints(prevPoints => 
        prevPoints.map(point => ({
          ...point,
          x: point.x + (Math.random() - 0.5) * 2,
          y: point.y + (Math.random() - 0.5) * 2,
          value: Math.max(0.1, Math.min(1, point.value + (Math.random() - 0.5) * 0.1))
        }))
      )
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="ai-data-visualization-container">
      <h3 className="ai-card-title">NEURAL NETWORK VISUALIZATION</h3>
      <div className="ai-data-visualization">
        <svg width="100%" height="300" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid Lines */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line 
              key={`grid-h-${i}`}
              x1="0" 
              y1={i * 10} 
              x2="100" 
              y2={i * 10} 
              stroke="rgba(0, 240, 255, 0.1)" 
              strokeWidth="0.2" 
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line 
              key={`grid-v-${i}`}
              x1={i * 10} 
              y1="0" 
              x2={i * 10} 
              y2="100" 
              stroke="rgba(0, 240, 255, 0.1)" 
              strokeWidth="0.2" 
            />
          ))}
          
          {/* Data Points */}
          {dataPoints.map(point => (
            <circle
              key={point.id}
              cx={point.x}
              cy={point.y}
              r={point.value * 1.5}
              fill={point.color}
              opacity={0.7}
            >
              <animate 
                attributeName="opacity" 
                values="0.7;0.9;0.7" 
                dur="3s" 
                repeatCount="indefinite" 
              />
            </circle>
          ))}
          
          {/* Connection Lines between close points */}
          {dataPoints.map(pointA => {
            const nearbyPoints = dataPoints.filter(pointB => 
              pointB.id !== pointA.id && 
              Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)) < 15
            ).slice(0, 3)
            
            return nearbyPoints.map(pointB => (
              <line
                key={`line-${pointA.id}-${pointB.id}`}
                x1={pointA.x}
                y1={pointA.y}
                x2={pointB.x}
                y2={pointB.y}
                stroke={pointA.color}
                strokeWidth="0.2"
                opacity="0.3"
              />
            ))
          }).flat()}
        </svg>
      </div>
      <div className="ai-visualization-labels">
        <div className="ai-viz-label">
          <span className="ai-viz-dot" style={{ backgroundColor: 'var(--color-neon-cyan)' }}></span>
          <span>Input Neurons</span>
        </div>
        <div className="ai-viz-label">
          <span className="ai-viz-dot" style={{ backgroundColor: 'var(--color-electric-blue)' }}></span>
          <span>Hidden Layer</span>
        </div>
        <div className="ai-viz-label">
          <span className="ai-viz-dot" style={{ backgroundColor: 'var(--color-neon-magenta)' }}></span>
          <span>Output Neurons</span>
        </div>
        <div className="ai-viz-label">
          <span className="ai-viz-dot" style={{ backgroundColor: 'var(--color-neon-green)' }}></span>
          <span>Active Connections</span>
        </div>
      </div>
    </div>
  )
}

export default DataVisualization