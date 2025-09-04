import { useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import '../styles/ConfettiEffect.css';

const ConfettiEffect = () => {
  const { showConfetti, setShowConfetti, userLevel } = useTodo();
  
  // Play sound when confetti shows
  useEffect(() => {
    if (showConfetti) {
      const audio = new Audio('/sounds/level-up.mp3');
      audio.volume = 0.5;
      audio.play().catch(error => console.error('Error playing sound:', error));
      
      // Hide confetti after 5 seconds
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [showConfetti, setShowConfetti]);

  return (
    <AnimatePresence>
      {showConfetti && (
        <>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={true}
            numberOfPieces={500}
            gravity={0.2}
          />
          
          <motion.div 
            className="level-up-message"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <h2>🎉 Level Up! 🎉</h2>
            <p>Congratulations! You've reached level {userLevel}</p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConfettiEffect;