import { useState, useEffect, FC } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import components
import DataVisualization from './components/DataVisualization'
import AITerminal from './components/AITerminal'
import BrainAnimation from './components/BrainAnimation'

// AI Dashboard Component
const AIDashboard: FC = () => {
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [aiResponse, setAiResponse] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [activeTab, setActiveTab] = useState('dashboard')

  // Simulate AI processing
  const startAIProcessing = () => {
    setIsProcessing(true)
    setAnalysisProgress(0)
    setAiResponse('')
    
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsProcessing(false)
          setAiResponse(generateAIResponse())
          return 100
        }
        return prev + Math.random() * 5
      })
    }, 200)
  }

  // Generate random AI response
  const generateAIResponse = () => {
    const responses = [
      "Neural network analysis complete. Pattern recognition improved by 42%.",
      "Quantum algorithm optimization successful. Processing speed increased by 3.7x.",
      "Deep learning model trained with 99.8% accuracy on test dataset.",
      "Sentiment analysis indicates positive engagement with latest content.",
      "Predictive modeling suggests high probability of success for current strategy."
    ]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      startAIProcessing()
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="ai-container fade-in">
      {/* Decorative Circuit Pattern */}
      <div className="circuit-pattern"></div>
      
      {/* AI Dashboard Header */}
      <header className="ai-header">
        <h1 className="ai-title">NEXUS AI SYSTEM</h1>
        <p className="ai-subtitle slide-up">Advanced neural network interface with quantum processing capabilities</p>
      </header>

      {/* Navigation */}
      <nav className="ai-nav">
        <div className="ai-card">
          <div className="ai-card-header">
            <h2 className="ai-card-title">SYSTEM NAVIGATION</h2>
          </div>
          <div className="ai-button-group">
            <button 
              className={`ai-button ${activeTab === 'dashboard' ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button 
              className={`ai-button ${activeTab === 'analytics' ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveTab('analytics')}
            >
              Neural Analytics
            </button>
            <button 
              className={`ai-button ${activeTab === 'settings' ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveTab('settings')}
            >
              System Config
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* AI Status Section */}
        <section className="ai-status-section">
          <div className="ai-grid">
            <div className="ai-card slide-up" style={{animationDelay: '0.1s'}}>
              <div className="ai-card-header">
                <h3 className="ai-card-title">NEURAL NETWORK STATUS</h3>
                <span className="pulse">●</span>
              </div>
              <div className="ai-data-display">
                <p>System: <span style={{color: 'var(--color-neon-green)'}}>ONLINE</span></p>
                <p>Core Temp: <span style={{color: 'var(--color-neon-cyan)'}}>36.5°C</span></p>
                <p>Memory Usage: <span style={{color: 'var(--color-electric-blue)'}}>42.7%</span></p>
                <p>Quantum Cores: <span style={{color: 'var(--color-neon-magenta)'}}>16/16 ACTIVE</span></p>
              </div>
            </div>

            <div className="ai-card slide-up" style={{animationDelay: '0.2s'}}>
              <div className="ai-card-header">
                <h3 className="ai-card-title">DATA ANALYSIS</h3>
                <span className="pulse">●</span>
              </div>
              <div className="ai-data-display">
                <p>Current Analysis: <span style={{color: 'var(--color-neon-cyan)'}}>Pattern Recognition</span></p>
                <p>Progress:</p>
                <div className="ai-progress">
                  <div 
                    className="ai-progress-bar" 
                    style={{width: `${Math.min(analysisProgress, 100)}%`}}
                  ></div>
                </div>
                {isProcessing && (
                  <div className="data-processing">
                    <div className="data-bit"></div>
                    <div className="data-bit"></div>
                    <div className="data-bit"></div>
                    <div className="data-bit"></div>
                    <div className="data-bit"></div>
                  </div>
                )}
                {aiResponse && (
                  <div className="ai-response fade-in">
                    <p>{aiResponse}</p>
                  </div>
                )}
              </div>
              <div style={{marginTop: '1rem'}}>
                <button className="ai-button" onClick={startAIProcessing} disabled={isProcessing} type="button">
                  {isProcessing ? 'PROCESSING...' : 'START ANALYSIS'}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Metrics Dashboard */}
        <section className="ai-metrics-section">
          <div className="ai-card slide-up" style={{animationDelay: '0.3s'}}>
            <div className="ai-card-header">
              <h3 className="ai-card-title">SYSTEM PERFORMANCE METRICS</h3>
            </div>
            <div className="ai-grid" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
              <MetricCard 
                title="NEURAL EFFICIENCY" 
                value={`${Math.floor(85 + Math.random() * 10)}%`} 
                color="var(--color-neon-cyan)" 
              />
              <MetricCard 
                title="QUANTUM COHERENCE" 
                value={`${(0.92 + Math.random() * 0.07).toFixed(2)}`} 
                color="var(--color-neon-magenta)" 
              />
              <MetricCard 
                title="ALGORITHM ACCURACY" 
                value={`${(97 + Math.random() * 2.5).toFixed(1)}%`} 
                color="var(--color-electric-blue)" 
              />
              <MetricCard 
                title="PREDICTION CONFIDENCE" 
                value={`${Math.floor(80 + Math.random() * 15)}%`} 
                color="var(--color-neon-green)" 
              />
            </div>
          </div>
        </section>
        
        {/* Brain Animation Section */}
        <section className="ai-brain-section">
          <div className="ai-card slide-up" style={{animationDelay: '0.5s'}}>
            <BrainAnimation />
          </div>
        </section>
        
        {/* Data Visualization Section */}
        <section className="ai-visualization-section">
          <div className="ai-card slide-up" style={{animationDelay: '0.6s'}}>
            <DataVisualization />
          </div>
        </section>

        {/* Recent Activity Log */}
        <section className="ai-activity-section">
          <div className="ai-card slide-up" style={{animationDelay: '0.4s'}}>
            <div className="ai-card-header">
              <h3 className="ai-card-title">ACTIVITY LOG</h3>
            </div>
            <div className="ai-data-display">
              <LogEntry timestamp="09:42:18" message="Initiated neural network training sequence" />
              <LogEntry timestamp="09:37:05" message="Quantum core synchronization complete" />
              <LogEntry timestamp="09:28:33" message="Data preprocessing algorithm optimized" />
              <LogEntry timestamp="09:15:27" message="System initialized and online" />
              <LogEntry timestamp="09:12:04" message="Diagnostic sequence completed successfully" />
            </div>
          </div>
        </section>
        
        {/* AI Terminal Section */}
        <section className="ai-terminal-section">
          <div className="ai-card slide-up" style={{animationDelay: '0.7s'}}>
            <AITerminal />
          </div>
        </section>
      </main>

      {/* Footer with React Info */}
      <footer className="ai-footer">
        <div>
          <p className="read-the-docs">
            Powered by advanced AI technologies
          </p>
          <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Metric Card Component
interface MetricCardProps {
  title: string;
  value: string;
  color: string;
}

const MetricCard: FC<MetricCardProps> = ({ title, value, color }) => {
  return (
    <div className="ai-metric-card">
      <h4 style={{ color: color }}>{title}</h4>
      <p className="ai-metric-value" style={{ color: color, fontSize: '2rem', margin: '0.5rem 0' }}>
        {value}
      </p>
      <div className="ai-metric-bar" style={{ 
        height: '4px', 
        background: `linear-gradient(to right, transparent, ${color})`,
        marginTop: '0.5rem'
      }}></div>
    </div>
  )
}

// Log Entry Component
interface LogEntryProps {
  timestamp: string;
  message: string;
}

const LogEntry: FC<LogEntryProps> = ({ timestamp, message }) => {
  return (
    <div className="ai-log-entry" style={{borderBottom: '1px solid rgba(0, 240, 255, 0.1)', padding: '0.5rem 0'}}>
      <span style={{color: 'var(--color-neon-cyan)', marginRight: '1rem'}}>[{timestamp}]</span>
      <span>{message}</span>
    </div>
  )
}

const App: FC = () => {
  return <AIDashboard />
}

export default App
