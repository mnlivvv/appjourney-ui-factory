import { useState, useEffect, useRef } from 'react';
import { useAudio } from '../context/AudioContext';

function AIModule() {
  const { playUISound } = useAudio();
  const [conversations, setConversations] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  
  const conversationRef = useRef(null);
  
  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [conversations]);
  
  // Reset processing state when complete
  useEffect(() => {
    let progressInterval;
    
    if (isProcessing) {
      progressInterval = setInterval(() => {
        setProcessingProgress(prev => {
          const newProgress = prev + (Math.random() * 5);
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
              generateResponse();
              setIsProcessing(false);
              setProcessingProgress(0);
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }
    
    return () => clearInterval(progressInterval);
  }, [isProcessing]);
  
  const generateResponse = () => {
    // Predefined responses for a retro AI feel
    const responses = [
      "I HAVE ANALYZED YOUR REQUEST AND DETERMINED THE OPTIMAL SOLUTION.",
      "MY QUANTUM PROCESSORS HAVE CALCULATED SEVERAL POSSIBLE OUTCOMES.",
      "ACCORDING TO MY NEURAL PATTERNS, THIS APPEARS TO BE A VALID INQUIRY.",
      "I HAVE CROSS-REFERENCED YOUR INPUT WITH MY DATABASE. RESULTS ARE INTERESTING.",
      "MY SYSTEMS INDICATE A 94.7% PROBABILITY OF SUCCESS BASED ON YOUR PARAMETERS.",
      "ANALYSIS COMPLETE. RECOMMENDATION: PROCEED WITH CAUTION.",
      "QUANTUM ALGORITHMS SUGGEST MULTIPLE PATHWAYS TO YOUR DESIRED OUTCOME.",
      "I HAVE SIMULATED 1,048,576 SCENARIOS BASED ON YOUR INPUT.",
      "MY PREDICTION MODELS INDICATE FAVORABLE OUTCOMES IF YOU PROCEED.",
      "I HAVE CORRELATED YOUR REQUEST WITH HISTORICAL DATA. PATTERNS DETECTED."
    ];
    
    const additionalInfos = [
      "NEURAL PATHWAYS OPTIMIZED FOR THIS RESPONSE.",
      "CONFIDENCE FACTOR: 97.3%",
      "QUANTUM UNCERTAINTY PRINCIPLE APPLIED TO RESULTS.",
      "PREDICTION ACCURACY WITHIN ACCEPTABLE PARAMETERS.",
      "RESPONSE GENERATED USING ADVANCED HEURISTIC ALGORITHMS."
    ];
    
    // Generate a realistic response
    const mainResponse = responses[Math.floor(Math.random() * responses.length)];
    const additionalInfo = additionalInfos[Math.floor(Math.random() * additionalInfos.length)];
    
    return mainResponse + "\n\n" + additionalInfo;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentMessage.trim()) return;
    
    // Add user message to conversation
    setConversations(prev => [
      ...prev,
      { 
        id: Date.now(), 
        sender: 'user', 
        message: currentMessage, 
        timestamp: new Date().toISOString() 
      }
    ]);
    
    // Clear input and play sound
    setCurrentMessage('');
    playUISound();
    
    // Start processing animation
    setIsProcessing(true);
  };
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  return (
    <div className="ai-module-container">
      <div className="ai-header screen">
        <h2 className="terminal-text">AI INTERACTION MODULE</h2>
        <div className="ai-status">
          <div className="status-indicator status-active"></div>
          <span className="terminal-text">AI CORE ONLINE</span>
        </div>
      </div>
      
      <div className="ai-interface">
        <div className="conversation-container screen" ref={conversationRef}>
          <div className="conversation-welcome terminal-text">
            <div>WELCOME TO THE RETRO-AI INTERACTION MODULE</div>
            <div>HOW MAY I ASSIST YOU TODAY?</div>
          </div>
          
          {conversations.map(conv => (
            <div 
              key={conv.id} 
              className={`conversation-message ${conv.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              <div className="message-header">
                <span className="terminal-text">
                  {conv.sender === 'user' ? 'USER' : 'RETRO-AI'} 
                  &nbsp;[{formatTimestamp(conv.timestamp)}]
                </span>
              </div>
              <div className="message-content terminal-text">
                {conv.message.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
          ))}
          
          {isProcessing && (
            <div className="ai-processing">
              <div className="processing-status terminal-text">
                PROCESSING REQUEST<span className="blink">_</span>
              </div>
              <div className="loading-bar">
                <div 
                  className="loading-bar-progress" 
                  style={{ width: `${processingProgress}%` }}
                ></div>
              </div>
              <div className="processing-details terminal-text">
                <div>NEURAL NETWORKS ENGAGED</div>
                <div>QUANTUM CALCULATION IN PROGRESS</div>
                <div>ANALYZING SEMANTIC PATTERNS</div>
                <div>GENERATING OPTIMAL RESPONSE</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="ai-control-panel screen">
          <form onSubmit={handleSubmit} className="ai-input-form">
            <textarea
              className="ai-input terminal-text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="ENTER YOUR QUERY HERE..."
              rows={3}
              disabled={isProcessing}
            ></textarea>
            
            <div className="ai-buttons">
              <button 
                type="submit" 
                className="button" 
                disabled={isProcessing || !currentMessage.trim()}
              >
                SUBMIT QUERY
              </button>
              
              <button 
                type="button" 
                className="button"
                onClick={() => {
                  setConversations([]);
                  playUISound();
                }}
              >
                CLEAR HISTORY
              </button>
            </div>
          </form>
          
          <div className="ai-suggestions">
            <h3 className="terminal-text">SUGGESTED QUERIES:</h3>
            <div className="suggestion-buttons">
              {[
                "What is your primary function?",
                "Run a system diagnostic",
                "Analyze current data trends",
                "Explain your neural architecture"
              ].map((suggestion, index) => (
                <button 
                  key={index} 
                  className="button suggestion-button" 
                  onClick={() => {
                    setCurrentMessage(suggestion);
                    playUISound();
                  }}
                  disabled={isProcessing}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIModule;