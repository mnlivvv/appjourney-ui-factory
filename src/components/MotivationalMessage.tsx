import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MotivationalMessageProps {
  show: boolean;
  onHide: () => void;
}

const MotivationalMessage = ({ show, onHide }: MotivationalMessageProps) => {
  const [message, setMessage] = useState('');
  
  const messages = [
    "Great job! You're crushing it! 🌟",
    "Another one bites the dust! Keep going! ✨",
    "You're on fire today! 🔥",
    "Productivity superhero status: Achieved! 💪",
    "Task completed, awesomeness level up! 🚀",
    "You make todo lists look easy! 💯",
    "High five! That's how it's done! ✋",
    "Mission accomplished! What's next? 🎯",
    "You're unstoppable today! 🏆",
    "One step closer to todo list zero! 🎉"
  ];
  
  useEffect(() => {
    if (show) {
      // Pick a random message
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
      
      // Hide after 3 seconds
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="motivational-message"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MotivationalMessage;