import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiProps {
  active: boolean;
}

const Confetti = ({ active }: ConfettiProps) => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }
    
    // Create confetti particles
    const newParticles: JSX.Element[] = [];
    const colors = ['#FFD166', '#EF476F', '#06D6A0', '#118AB2', '#073B4C', '#84BCDA', '#F3B0C3'];
    
    for (let i = 0; i < 50; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      const startX = Math.random() * window.innerWidth;
      const startY = -20;
      const endX = startX + (Math.random() * 300 - 150);
      const endY = Math.random() * window.innerHeight + 100;
      const rotation = Math.random() * 360;
      const delay = Math.random() * 0.3;
      const duration = Math.random() * 2 + 1;
      
      // Randomly choose between circle and rectangle shapes
      const isCircle = Math.random() > 0.5;
      
      newParticles.push(
        <motion.div
          key={`confetti-${i}`}
          initial={{ 
            x: startX, 
            y: startY, 
            rotate: 0,
            opacity: 1
          }}
          animate={{ 
            x: endX, 
            y: endY, 
            rotate: rotation,
            opacity: 0
          }}
          transition={{ 
            duration,
            delay, 
            ease: [0.1, 0.25, 0.1, 1] 
          }}
          style={{
            position: 'fixed',
            width: `${size}px`,
            height: isCircle ? `${size}px` : `${size * 1.5}px`,
            borderRadius: isCircle ? '50%' : '2px',
            backgroundColor: color,
            zIndex: 1000,
          }}
        />
      );
    }
    
    setParticles(newParticles);
    
    // Clean up after animation completes
    const timer = setTimeout(() => {
      setParticles([]);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [active]);
  
  return <>{particles}</>;
};

export default Confetti;