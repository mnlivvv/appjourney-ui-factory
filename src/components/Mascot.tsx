import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import mascotImage from '../assets/images/mascot.jpg';

const ENCOURAGEMENT_MESSAGES = [
  "You can do it! Let's tackle these tasks together!",
  "Need a productivity boost? I believe in you!",
  "Remember to take breaks between tasks!",
  "One task at a time leads to great accomplishments!",
  "You're making great progress! Keep it up!",
  "Focus on your priorities and the rest will follow!",
  "Stay hydrated and keep checking off those tasks!",
  "You're doing fantastic! I'm your biggest fan!",
  "Every completed task is a step toward success!",
  "Let's make today super productive!"
];

const LEVEL_UP_MESSAGES = [
  "Wow! You've reached level {level}! Amazing work!",
  "Level {level} achieved! You're becoming a task master!",
  "Incredible! You're now at level {level}!",
  "Level {level} unlocked! Your productivity is soaring!",
  "You've climbed to level {level}! Outstanding progress!"
];

const Mascot = () => {
  const { gameState, todos } = useTodo();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lastLevel, setLastLevel] = useState(gameState.level);
  const [lastTodosCount, setLastTodosCount] = useState(todos.length);

  useEffect(() => {
    // Check for level up
    if (gameState.level > lastLevel) {
      const randomIndex = Math.floor(Math.random() * LEVEL_UP_MESSAGES.length);
      const levelMessage = LEVEL_UP_MESSAGES[randomIndex].replace('{level}', gameState.level.toString());
      setMessage(levelMessage);
      setShowMessage(true);
      setIsAnimating(true);
      
      setTimeout(() => {
        setShowMessage(false);
        setIsAnimating(false);
      }, 5000);
      
      setLastLevel(gameState.level);
    }
    // Show random encouragement messages
    else if (Math.random() < 0.1 && !showMessage && todos.length > 0 && todos.length !== lastTodosCount) {
      const randomIndex = Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length);
      setMessage(ENCOURAGEMENT_MESSAGES[randomIndex]);
      setShowMessage(true);
      
      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
    
    setLastTodosCount(todos.length);
  }, [gameState, todos, lastLevel, lastTodosCount, showMessage]);

  // Show random encouragement periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showMessage && Math.random() < 0.3) {
        const randomIndex = Math.floor(Math.random() * ENCOURAGEMENT_MESSAGES.length);
        setMessage(ENCOURAGEMENT_MESSAGES[randomIndex]);
        setShowMessage(true);
        
        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
      }
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(interval);
  }, [showMessage]);

  return (
    <div className="floating-mascot-container">
      <AnimatePresence>
        {showMessage && (
          <motion.div 
            className="mascot-message"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div 
        className="floating-mascot"
        animate={isAnimating ? {
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
          scale: [1, 1.2, 1]
        } : {
          y: [0, -5, 0],
          rotate: [-2, 2, -2]
        }}
        transition={isAnimating ? {
          duration: 1,
          repeat: 4,
          repeatType: "reverse"
        } : {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={mascotImage} alt="Task Master Mascot" className="floating-mascot-image" />
      </motion.div>
    </div>
  );
};

export default Mascot;