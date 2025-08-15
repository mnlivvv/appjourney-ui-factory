import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const HolographicDisplay = ({ 
  children, 
  height = '300px',
  width = '100%',
  glowColor = 'cyan',
  pulseEffect = true,
  rotateEffect = false
}) => {
  const hologramRef = useRef(null);
  
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

  // Mouse follow effect
  useEffect(() => {
    if (!hologramRef.current || !rotateEffect) return;
    
    const hologram = hologramRef.current;
    
    const handleMouseMove = (e) => {
      const rect = hologram.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate rotation based on mouse position
      // Convert to percentage of element dimensions
      const rotX = ((y / rect.height) - 0.5) * 10; // -5 to 5 degrees
      const rotY = ((x / rect.width) - 0.5) * -10; // -5 to 5 degrees
      
      hologram.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };
    
    const handleMouseLeave = () => {
      hologram.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };
    
    hologram.addEventListener('mousemove', handleMouseMove);
    hologram.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      hologram.removeEventListener('mousemove', handleMouseMove);
      hologram.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [rotateEffect]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div
      className="holographic-display"
      ref={hologramRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: 'relative',
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 'var(--radius-md)',
        border: `1px solid ${getTextColor()}`,
        boxShadow: getGlowStyle(),
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-md)',
        transition: 'transform 0.2s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Base Plate */}
      <div 
        className="hologram-base" 
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '5px',
          backgroundColor: getTextColor(),
          opacity: 0.8,
          borderRadius: 'var(--radius-lg)',
          boxShadow: getGlowStyle()
        }}
      />
      
      {/* Hologram Beam */}
      <div 
        className="hologram-beam" 
        style={{
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%',
          height: '50%',
          background: `linear-gradient(to top, ${getTextColor()}, transparent)`,
          opacity: 0.2,
          animation: pulseEffect ? 'hologramPulse 2s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Scanning Lines */}
      <div 
        className="hologram-scan" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, 0.05) 2px,
            rgba(0, 255, 255, 0.05) 4px
          )`,
          pointerEvents: 'none'
        }}
      />
      
      {/* Hologram Content */}
      <div 
        className="hologram-content" 
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: getTextColor(),
          textShadow: getGlowStyle()
        }}
      >
        {children}
      </div>
      
      {/* Glitch Effect */}
      <div 
        className="hologram-glitch" 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0,
          animation: pulseEffect ? 'hologramGlitch 4s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes hologramPulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.3; }
          100% { opacity: 0.1; }
        }
        
        @keyframes hologramGlitch {
          0% { opacity: 0; }
          10% { opacity: 0; }
          10.5% { opacity: 0.3; }
          10.6% { opacity: 0; }
          20% { opacity: 0; }
          20.1% { opacity: 0.3; }
          20.2% { opacity: 0; }
          89% { opacity: 0; }
          89.1% { opacity: 0.3; }
          89.2% { opacity: 0; }
          90% { opacity: 0; }
          90.1% { opacity: 0.3; }
          90.2% { opacity: 0; }
          100% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default HolographicDisplay;