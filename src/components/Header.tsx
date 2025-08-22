import { useTodo } from '../context/TodoContext';
import { motion } from 'framer-motion';
import mascotImage from '../assets/images/mascot.jpg';

const Header = () => {
  const { gameState } = useTodo();
  
  return (
    <header className="header">
      <div className="header-content">
        <motion.div 
          className="app-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Task Master</h1>
          <p className="app-subtitle">Make task management fun!</p>
        </motion.div>
        
        <motion.div 
          className="mascot-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.3 
          }}
        >
          <img src={mascotImage} alt="Task Master Mascot" className="mascot-image" />
          <div className="mascot-speech-bubble">
            <p>Let's conquer those tasks!</p>
          </div>
        </motion.div>
      </div>
      
      <div className="game-stats">
        <motion.div 
          className="stat-item"
          whileHover={{ scale: 1.1 }}
        >
          <span className="stat-label">Level</span>
          <span className="stat-value">{gameState.level}</span>
        </motion.div>
        
        <motion.div 
          className="stat-item"
          whileHover={{ scale: 1.1 }}
        >
          <span className="stat-label">Points</span>
          <span className="stat-value">{gameState.points}</span>
        </motion.div>
        
        <motion.div 
          className="stat-item"
          whileHover={{ scale: 1.1 }}
        >
          <span className="stat-label">Streak</span>
          <span className="stat-value">{gameState.streak}</span>
        </motion.div>
        
        <motion.div 
          className="stat-item"
          whileHover={{ scale: 1.1 }}
        >
          <span className="stat-label">Tasks Done</span>
          <span className="stat-value">{gameState.tasksCompleted}</span>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;