import { TaskStats, CategoryStats } from '../types';
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiClock, 
  FiAward,
  FiZap
} from 'react-icons/fi';

interface TaskStatsProps {
  stats: TaskStats;
  categoryStats: CategoryStats;
}

const TaskStats = ({ stats, categoryStats }: TaskStatsProps) => {
  // Generate the streak indicator
  const renderStreakIndicator = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = new Date().getDay();
    const streakDays = stats.streak;
    
    return (
      <div className="streak-indicator">
        {days.map((day, index) => {
          let status = 'future';
          
          if (index === today) {
            status = 'current';
          } else if (index < today && index >= (today - streakDays + 1)) {
            status = 'completed';
          } else if (index > today) {
            status = 'future';
          }
          
          return (
            <motion.div 
              key={day} 
              className={`streak-day ${status}`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {day[0]}
            </motion.div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="stats-section">
      <h2>Your Progress</h2>
      
      {stats.streak > 0 && (
        <div className="streak-container">
          <p className="streak-text">
            <FiAward style={{ color: 'var(--color-tertiary)' }} /> {stats.streak} day streak!
          </p>
          {renderStreakIndicator()}
        </div>
      )}
      
      <div className="stats-grid">
        <motion.div 
          className="stat-card"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total Tasks</div>
        </motion.div>
        
        <motion.div 
          className="stat-card"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="stat-value">
            <FiCheckCircle style={{ display: 'inline-block', marginRight: '5px' }} />
            {stats.completed}
          </div>
          <div className="stat-label">Completed</div>
        </motion.div>
        
        <motion.div 
          className="stat-card"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="stat-value">
            <FiClock style={{ display: 'inline-block', marginRight: '5px' }} />
            {stats.remaining}
          </div>
          <div className="stat-label">Remaining</div>
        </motion.div>
        
        <motion.div 
          className="stat-card"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div className="stat-value">
            <FiZap style={{ display: 'inline-block', marginRight: '5px' }} />
            {stats.points}
          </div>
          <div className="stat-label">Points</div>
        </motion.div>
      </div>
    </div>
  );
};

export default TaskStats;