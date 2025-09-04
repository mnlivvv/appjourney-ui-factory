import { TaskStats as TaskStatsType, Badges } from '../types';
import '../styles/TaskStats.css';
import confetti from '../assets/images/confetti.svg';

interface TaskStatsProps {
  stats: TaskStatsType;
  badges: Badges;
}

const TaskStats: React.FC<TaskStatsProps> = ({ stats, badges }) => {
  const completionRate = stats.total > 0 
    ? Math.round((stats.completed / stats.total) * 100) 
    : 0;
  
  return (
    <div className="task-stats">
      <div className="stats-header">
        <h2>Your Progress</h2>
        <div className="streak-counter">
          <span className="streak-icon">🔥</span>
          <span className="streak-count">{stats.streak} day{stats.streak !== 1 ? 's' : ''}</span>
        </div>
      </div>
      
      <div className="progress-container">
        <div className="progress-label">
          <span>Progress</span>
          <span>{stats.completed} / {stats.total}</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${completionRate}%` }}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={completionRate}
            role="progressbar"
          ></div>
        </div>
      </div>
      
      <div className="badges-container">
        <h3>Badges Earned</h3>
        <div className="badges-grid">
          <div className={`badge ${badges.firstTask ? 'earned' : ''}`}>
            <div className="badge-icon">🎯</div>
            <div className="badge-name">First Task</div>
          </div>
          <div className={`badge ${badges.fiveTasksCompleted ? 'earned' : ''}`}>
            <div className="badge-icon">⭐</div>
            <div className="badge-name">5 Tasks</div>
          </div>
          <div className={`badge ${badges.tenTasksCompleted ? 'earned' : ''}`}>
            <div className="badge-icon">🏆</div>
            <div className="badge-name">10 Tasks</div>
          </div>
          <div className={`badge ${badges.perfectDay ? 'earned' : ''}`}>
            <div className="badge-icon">💯</div>
            <div className="badge-name">Perfect Day</div>
          </div>
          <div className={`badge ${badges.threeStreakDays ? 'earned' : ''}`}>
            <div className="badge-icon">🔥</div>
            <div className="badge-name">3-Day Streak</div>
          </div>
        </div>
      </div>
      
      {Object.values(badges).some(badge => badge) && (
        <img src={confetti} alt="Celebration" className="stats-confetti" />
      )}
    </div>
  );
};

export default TaskStats;