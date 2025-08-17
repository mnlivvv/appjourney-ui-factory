import { useState, useEffect } from 'react';

function LoadingScreen({ progress, status }) {
  const [dots, setDots] = useState('');
  
  // Animate the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 300);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="loading-screen screen">
      <div className="loading-content">
        <h1 className="terminal-text" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
          RETRO-AI SYSTEM BOOT
        </h1>
        
        <div className="loading-image-container">
          <img 
            src="/assets/images/loading-animation.png" 
            alt="Booting System" 
            className="loading-image pixelated"
            style={{ 
              maxWidth: '400px', 
              marginBottom: '2rem',
              filter: 'brightness(1.2) hue-rotate(5deg)'
            }} 
          />
        </div>
        
        <div className="loading-status terminal-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
          {status}{dots}
        </div>
        
        <div className="loading-bar">
          <div 
            className="loading-bar-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="loading-percentage terminal-text" style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>
          {progress}% COMPLETE
        </div>
        
        <div className="boot-messages" style={{ marginTop: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
          <div className="terminal-text" style={{ textAlign: 'left', fontSize: '0.9rem', opacity: 0.8 }}>
            <div>BOOT SEQUENCE INITIATED</div>
            <div>CHECKING HARDWARE COMPONENTS</div>
            <div>NEURAL NETWORK STATUS: ONLINE</div>
            <div>QUANTUM PROCESSOR: STABLE</div>
            <div>MEMORY SYSTEMS: OPTIMAL</div>
            <div>LOADING CORE FUNCTIONS</div>
            <div>CONFIGURING INTERFACE PARAMETERS</div>
            <div>ESTABLISHING SECURE CONNECTIONS</div>
            {progress > 50 && <div>CALIBRATING AI RESPONSE ALGORITHMS</div>}
            {progress > 60 && <div>OPTIMIZING DATA STREAMS</div>}
            {progress > 70 && <div>INITIALIZING USER INTERFACE</div>}
            {progress > 80 && <div>RUNNING FINAL DIAGNOSTICS</div>}
            {progress > 90 && <div>PREPARING SYSTEM HANDOVER</div>}
            {progress === 100 && <div>BOOT SEQUENCE COMPLETE</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;