import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface ConfettiEffectProps {
  isActive: boolean;
}

const ConfettiEffect = ({ isActive }: ConfettiEffectProps) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    // Update dimensions on mount
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    // Add window resize listener
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    if (isActive) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive]);
  
  if (!showConfetti) return null;
  
  return (
    <div className="confetti-container">
      <Confetti
        width={dimensions.width}
        height={dimensions.height}
        recycle={false}
        numberOfPieces={200}
        gravity={0.2}
        colors={['#FF85A1', '#FBB13C', '#7EB77F', '#7A77FF', '#63C7B2']}
      />
    </div>
  );
};

export default ConfettiEffect;