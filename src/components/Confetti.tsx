import { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
  duration?: number;
}

const Confetti = ({ active, duration = 2000 }: ConfettiProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (active) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [active, duration]);
  
  if (!isVisible) return null;
  
  // Create 50 pieces of confetti with random colors and positions
  const pieces = Array.from({ length: 50 }, (_, i) => {
    const colors = ['#6b8e23', '#f3e5ab', '#ffffff', '#e0e0e0'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 50 - 10}%`;
    const animationDelay = `${Math.random() * 0.5}s`;
    const size = `${Math.random() * 0.7 + 0.3}rem`;
    
    return (
      <div
        key={i}
        className="confetti-piece"
        style={{
          backgroundColor: color,
          left,
          top,
          width: size,
          height: size,
          animationDelay,
        }}
      />
    );
  });
  
  return (
    <div className="confetti-container">
      {pieces}
    </div>
  );
};

export default Confetti;