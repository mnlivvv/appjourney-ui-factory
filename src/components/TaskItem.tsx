import { useState } from 'react';
import { Task } from '../types';
import workIcon from '../assets/icons/work.svg';
import homeIcon from '../assets/icons/home.svg';
import fitnessIcon from '../assets/icons/fitness.svg';
import shoppingIcon from '../assets/icons/shopping.svg';
import otherIcon from '../assets/icons/other.svg';
import confetti from '../assets/images/confetti.svg';
import '../styles/TaskItem.css';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const categoryIcons = {
  work: workIcon,
  home: homeIcon,
  fitness: fitnessIcon,
  shopping: shoppingIcon,
  other: otherIcon
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleToggleComplete = () => {
    if (!task.completed) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
    onToggleComplete(task.id);
  };
  
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-checkbox-container">
        <button 
          className={`task-checkbox ${task.completed ? 'checked' : ''}`}
          onClick={handleToggleComplete}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
      
      <div className="task-content">
        <div className="task-header">
          <h3 className={task.completed ? 'completed-text' : ''}>{task.title}</h3>
          <img 
            src={categoryIcons[task.category]} 
            alt={`${task.category} category`} 
            className="category-icon" 
          />
        </div>
        <div className="task-date">
          {task.completed 
            ? `Completed: ${new Date(task.completedAt || '').toLocaleDateString()}` 
            : `Created: ${new Date(task.createdAt).toLocaleDateString()}`
          }
        </div>
      </div>
      
      <button 
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      {showConfetti && (
        <div className="confetti-container">
          <img src={confetti} className="confetti" alt="Celebration confetti" />
        </div>
      )}
    </div>
  );
};

export default TaskItem;