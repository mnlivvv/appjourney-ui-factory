import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';

function NotFound() {
  const { playUISound } = useAudio();
  const [countdown, setCountdown] = useState(10);
  
  useEffect(() => {
    // Simulate a countdown timer
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [countdown]);
  
  return (
    <div className="not-found-container screen">
      <div className="not-found-content">
        <h1 className="terminal-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          ERROR 404
        </h1>
        
        <div className="not-found-image-container">
          <img 
            src="/assets/images/retro-terminal.png" 
            alt="Error Screen" 
            className="not-found-image pixelated"
            style={{ 
              maxWidth: '300px', 
              marginBottom: '2rem',
              filter: 'hue-rotate(140deg)'
            }} 
          />
        </div>
        
        <div className="error-message terminal-text" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          <div>SECTOR NOT FOUND</div>
          <div>NEURAL PATHWAYS DISRUPTED</div>
          <div>RECALIBRATION REQUIRED</div>
        </div>
        
        <div className="error-details terminal-text" style={{ marginBottom: '2rem' }}>
          <div>LOCATION: UNDEFINED</div>
          <div>ERROR CODE: QUANTUM-FLUX-404</div>
          <div>RECOMMENDED ACTION: RETURN TO KNOWN COORDINATES</div>
        </div>
        
        <Link to="/" className="button" onClick={playUISound}>
          RETURN TO DASHBOARD
        </Link>
        
        <div className="countdown terminal-text" style={{ marginTop: '2rem' }}>
          {countdown > 0 ? (
            <div>AUTO-RETURN IN {countdown} SECONDS<span className="blink">_</span></div>
          ) : (
            <div>INITIATING AUTO-RETURN SEQUENCE<span className="blink">_</span></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotFound;