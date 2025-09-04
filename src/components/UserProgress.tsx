import { motion } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import '../styles/UserProgress.css';

const LEVEL_THRESHOLD = 100;

const UserProgress = () => {
  const { userLevel, userPoints } = useTodo();
  
  // Calculate progress to next level
  const pointsToNextLevel = LEVEL_THRESHOLD - (userPoints % LEVEL_THRESHOLD);
  const progressPercentage = ((userPoints % LEVEL_THRESHOLD) / LEVEL_THRESHOLD) * 100;
  
  // Get appropriate character based on level
  const getCharacterImage = () => {
    if (userLevel <= 2) return '/images/character-level1.png';
    if (userLevel <= 5) return '/images/character-level3.png';
    if (userLevel <= 8) return '/images/character-level6.png';
    return '/images/character-level9.png';
  };

  return (
    <motion.div 
      className="user-progress-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="character-container">
        <motion.img 
          src={getCharacterImage()} 
          alt="Character" 
          className="character-image"
          animate={{ y: [0, -10, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="level-container">
        <motion.div 
          className="level-badge"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <span>Level {userLevel}</span>
        </motion.div>
        
        <div className="points-info">
          <span className="total-points">{userPoints} total points</span>
          <span className="next-level">{pointsToNextLevel} points to next level</span>
        </div>
        
        <div className="progress-bar-container">
          <motion.div 
            className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default UserProgress;