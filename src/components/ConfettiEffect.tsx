import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useTaskContext } from '../context/TaskContext';

const ConfettiEffect = () => {
  const { showConfetti } = useTaskContext();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showConfetti) return null;

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.2}
      colors={['#FF6B6B', '#4ECDC4', '#FFE66D', '#7A77FF', '#FF9F69']}
      confettiSource={{
        x: windowSize.width / 2,
        y: windowSize.height / 2,
        w: 0,
        h: 0,
      }}
    />
  );
};

export default ConfettiEffect;