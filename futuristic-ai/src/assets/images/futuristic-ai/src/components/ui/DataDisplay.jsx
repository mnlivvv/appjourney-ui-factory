import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DataDisplay = ({ 
  title, 
  data = [], 
  loading = false,
  glowColor = 'cyan',
  refreshInterval = null
}) => {
  const [displayData, setDisplayData] = useState([]);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Handle data refresh if interval is provided
  useEffect(() => {
    if (!refreshInterval) return;
    
    const intervalId = setInterval(() => {
      // Reset typing animation
      setTypingIndex(0);
      setTypingText('');
      setTypingComplete(false);
    }, refreshInterval);
    
    return () => clearInterval(intervalId);
  }, [refreshInterval]);
  
  // Typing animation effect
  useEffect(() => {
    if (loading || !data.length) {
      setDisplayData([]);
      setTypingIndex(0);
      setTypingText('');
      setTypingComplete(false);
      return;
    }
    
    if (typingComplete) return;
    
    const currentData = data[typingIndex];
    
    if (!currentData) {
      setTypingComplete(true);
      return;
    }
    
    const textContent = typeof currentData === 'string' 
      ? currentData 
      : JSON.stringify(currentData);
    
    // Typing effect
    let charIndex = 0;
    const typingSpeed = 5; // milliseconds per character
    
    const typingInterval = setInterval(() => {
      if (charIndex <= textContent.length) {
        setTypingText(textContent.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        
        // Add to display data after typing animation
        setTimeout(() => {
          setDisplayData(prev => [...prev, textContent]);
          setTypingText('');
          setTypingIndex(prev => prev + 1);
        }, 200);
      }
    }, typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [data, loading, typingIndex, typingComplete]);
  
  // Determine the appropriate glow based on the color prop
  const getGlowStyle = () => {
    switch (glowColor) {
      case 'magenta':
        return 'var(--glow-magenta)';
      case 'blue':
        return 'var(--glow-blue)';
      case 'cyan':
      default:
        return 'var(--glow-cyan)';
    }
  };

  const getTextColor = () => {
    switch (glowColor) {
      case 'magenta':
        return 'var(--neon-magenta)';
      case 'blue':
        return 'var(--electric-blue)';
      case 'cyan':
      default:
        return 'var(--neon-cyan)';
    }
  };
  
  return (
    <div className="data-display">
      {title && (
        <div 
          className="data-display-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'var(--space-sm) var(--space-md)',
            borderBottom: `1px solid ${getTextColor()}`,
            marginBottom: 'var(--space-sm)'
          }}
        >
          <h4 
            style={{
              color: getTextColor(),
              fontFamily: 'var(--font-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: 0
            }}
          >
            {title}
          </h4>
          <div 
            className="data-status"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)'
            }}
          >
            <div 
              className={`status-indicator ${loading ? 'loading' : 'active'}`}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: loading ? 'var(--neon-magenta)' : getTextColor(),
                boxShadow: loading ? 'var(--glow-magenta)' : getGlowStyle(),
                animation: loading ? 'pulse 1s infinite' : 'none'
              }}
            />
            <span 
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-secondary)'
              }}
            >
              {loading ? 'SCANNING' : 'ONLINE'}
            </span>
          </div>
        </div>
      )}
      
      <div 
        className="data-display-content"
        style={{
          backgroundColor: 'rgba(5, 10, 20, 0.6)',
          borderRadius: 'var(--radius-sm)',
          padding: 'var(--space-sm)',
          height: '200px',
          overflowY: 'auto',
          fontFamily: 'var(--font-secondary)',
          fontSize: '0.85rem',
          lineHeight: 1.5,
          position: 'relative'
        }}
      >
        {loading ? (
          <div 
            className="data-loading"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: getTextColor()
            }}
          >
            <div className="loading"></div>
            <span style={{ marginLeft: 'var(--space-sm)' }}>Processing data...</span>
          </div>
        ) : (
          <>
            {displayData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="data-line"
                style={{
                  padding: 'var(--space-xs) 0',
                  borderBottom: '1px solid rgba(10, 35, 66, 0.3)',
                }}
              >
                <span style={{ color: 'var(--text-secondary)', marginRight: 'var(--space-xs)' }}>
                  [{index + 1}]
                </span>
                <span style={{ color: 'var(--text-primary)' }}>
                  {item}
                </span>
              </motion.div>
            ))}
            
            {typingText && (
              <div className="data-line typing">
                <span style={{ color: 'var(--text-secondary)', marginRight: 'var(--space-xs)' }}>
                  [{typingIndex + 1}]
                </span>
                <span style={{ color: getTextColor() }}>
                  {typingText}
                  <span className="cursor" style={{ 
                    display: 'inline-block',
                    width: '8px',
                    height: '16px',
                    backgroundColor: getTextColor(),
                    marginLeft: '2px',
                    animation: 'blink 1s infinite'
                  }}></span>
                </span>
              </div>
            )}
            
            {data.length === 0 && !loading && (
              <div 
                className="no-data"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: 'var(--text-secondary)',
                  textAlign: 'center',
                  padding: 'var(--space-md)'
                }}
              >
                No data available. Awaiting input.
              </div>
            )}
          </>
        )}
        
        {/* Scanline Animation */}
        <div
          className="scanline"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${getTextColor()}, transparent)`,
            animation: 'scanline 4s linear infinite',
            opacity: 0.3,
            pointerEvents: 'none'
          }}
        />
      </div>
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(200px); }
        }
        
        .data-display-content::-webkit-scrollbar {
          width: 4px;
        }
        
        .data-display-content::-webkit-scrollbar-track {
          background: rgba(5, 10, 20, 0.8);
        }
        
        .data-display-content::-webkit-scrollbar-thumb {
          background-color: ${getTextColor()};
          border-radius: var(--radius-sm);
        }
      `}</style>
    </div>
  );
};

export default DataDisplay;