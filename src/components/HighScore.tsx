import { Todo } from '../types';

interface HighScoreProps {
  todos: Todo[];
}

export default function HighScore({ todos }: HighScoreProps) {
  // Calculate total score from completed todos
  const totalScore = todos
    .filter(todo => todo.completed)
    .reduce((sum, todo) => sum + todo.score, 0);
  
  // Get the count of completed todos
  const completedCount = todos.filter(todo => todo.completed).length;
  
  // Get the count of overdue todos
  const overdueCount = todos.filter(todo => todo.overdue).length;

  // Calculate current "level" based on total score
  const playerLevel = Math.floor(totalScore / 100) + 1;
  
  // Calculate progress to next level
  const progressToNextLevel = totalScore % 100;
  
  return (
    <div className="high-score-container crt-effect">
      <div className="high-score-header">
        <div className="blink">HIGH SCORE</div>
      </div>
      
      <div className="score-stats">
        <div className="score-row">
          <span>PLAYER LVL:</span>
          <span className="stat-value">{playerLevel}</span>
        </div>
        
        <div className="score-row">
          <span>TOTAL SCORE:</span>
          <span className="stat-value">{totalScore}</span>
        </div>
        
        <div className="score-row">
          <span>MISSIONS COMPLETE:</span>
          <span className="stat-value">{completedCount}</span>
        </div>
        
        <div className="score-row">
          <span>GAME OVERS:</span>
          <span className="stat-value">{overdueCount}</span>
        </div>
      </div>
      
      <div className="level-progress">
        <div className="progress-label">NEXT LEVEL</div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progressToNextLevel}%` }}
          ></div>
        </div>
        <div className="progress-value">{progressToNextLevel}/100</div>
      </div>
    </div>
  );
}