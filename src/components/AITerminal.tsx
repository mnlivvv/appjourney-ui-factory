import { useState, useEffect, useRef, FC, KeyboardEvent, ChangeEvent } from 'react'

/**
 * AITerminal Component
 * Simulates a futuristic AI command terminal with typing effect
 */
const AITerminal: FC = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [currentInput, setCurrentInput] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const terminalEndRef = useRef<HTMLDivElement>(null)
  
  // Predefined responses to commands
  const responses = {
    help: [
      'AVAILABLE COMMANDS:',
      '• help - Display this help message',
      '• status - Check system status',
      '• analyze - Run analysis on current data',
      '• clear - Clear terminal output',
      '• predict - Generate prediction based on current patterns',
      '• scan - Scan for potential security threats',
      '• exit - Exit terminal session'
    ],
    status: [
      'SYSTEM STATUS:',
      '• Core Systems: OPERATIONAL',
      '• Neural Network: ONLINE',
      '• Data Processing: ACTIVE',
      '• Security Protocol: ENGAGED',
      '• Memory Usage: 42.7%',
      '• Processing Threads: 16/16'
    ],
    analyze: [
      'RUNNING ANALYSIS...',
      'Processing data streams...',
      'Applying neural algorithms...',
      'Optimizing pattern recognition...',
      'ANALYSIS COMPLETE:',
      '• Confidence score: 97.3%',
      '• Anomalies detected: 2',
      '• Pattern strength: HIGH'
    ],
    predict: [
      'GENERATING PREDICTION...',
      'Calculating probabilities...',
      'Synthesizing outcomes...',
      'PREDICTION RESULTS:',
      '• Primary outcome probability: 78.4%',
      '• Confidence interval: ±2.3%',
      '• Recommended action: PROCEED'
    ],
    scan: [
      'INITIATING SECURITY SCAN...',
      'Checking system integrity...',
      'Analyzing network traffic...',
      'Validating authentication protocols...',
      'SCAN COMPLETE:',
      '• Threats detected: 0',
      '• Vulnerabilities found: 1 (LOW)',
      '• System integrity: 99.8%'
    ],
    exit: [
      'TERMINATING SESSION...',
      'Saving current state...',
      'Closing active connections...',
      'SESSION TERMINATED'
    ]
  }
  
  // Type writer effect
  const typeWriter = (text: string, callback?: () => void) => {
    let i = 0
    setDisplayedText('')
    
    const typing = setInterval(() => {
      setDisplayedText(prev => prev + text.charAt(i))
      i++
      
      if (i >= text.length) {
        clearInterval(typing)
        if (callback) callback()
      }
    }, 30) // Typing speed
  }
  
  // Process command
  const processCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase()
    setCommandHistory(prev => [...prev, `> ${cmd}`])
    setCurrentInput('')
    setIsProcessing(true)
    
    setTimeout(() => {
      if (command === 'clear') {
        setCommandHistory([])
        setIsProcessing(false)
        return
      }
      
      // Get response based on command
      const response = (responses as Record<string, string[]>)[command] || 
        ['COMMAND NOT RECOGNIZED. Type "help" for available commands.']
      
      // Display response with typing effect
      typeWriter(response.join('\n'), () => {
        setCommandHistory(prev => [...prev, displayedText])
        setDisplayedText('')
        setIsProcessing(false)
      })
    }, 500)
  }
  
  // Handle command input
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !isProcessing) {
      if (currentInput.trim()) {
        processCommand(currentInput)
      }
    }
  }
  
  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [commandHistory, displayedText])
  
  // Initialize terminal with welcome message
  useEffect(() => {
    const initialMessage = [
      'NEXUS AI TERMINAL v4.2.8',
      '================================',
      'Quantum-Neural Interface Ready',
      'Type "help" for available commands.'
    ].join('\n')
    
    setTimeout(() => {
      typeWriter(initialMessage, () => {
        setCommandHistory([displayedText])
        setDisplayedText('')
      })
    }, 1000)
  }, [])
  
  return (
    <div className="ai-terminal">
      <div className="ai-terminal-header">
        <div className="ai-terminal-controls">
          <span className="ai-terminal-btn"></span>
          <span className="ai-terminal-btn"></span>
          <span className="ai-terminal-btn"></span>
        </div>
        <div className="ai-terminal-title">NEXUS COMMAND INTERFACE</div>
      </div>
      
      <div className="ai-terminal-content">
        {commandHistory.map((line, i) => (
          <div key={i} className="ai-terminal-line">
            {line.startsWith('>') ? (
              <div className="ai-terminal-command">{line}</div>
            ) : (
              <div className="ai-terminal-response">{line}</div>
            )}
          </div>
        ))}
        
        {displayedText && (
          <div className="ai-terminal-line">
            <div className="ai-terminal-response">{displayedText}</div>
          </div>
        )}
        
        {!isProcessing && (
          <div className="ai-terminal-input-line">
            <span className="ai-terminal-prompt">&gt;</span>
            <input
              type="text"
              className="ai-terminal-input"
              value={currentInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
            />
          </div>
        )}
        
        <div ref={terminalEndRef}></div>
      </div>
    </div>
  )
}

export default AITerminal