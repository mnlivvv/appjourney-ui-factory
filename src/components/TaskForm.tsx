import { useState } from 'react';
import { TaskCategory } from '../types';
import workIcon from '../assets/icons/work.svg';
import homeIcon from '../assets/icons/home.svg';
import fitnessIcon from '../assets/icons/fitness.svg';
import shoppingIcon from '../assets/icons/shopping.svg';
import otherIcon from '../assets/icons/other.svg';
import '../styles/TaskForm.css';

interface TaskFormProps {
  onAddTask: (title: string, category: TaskCategory) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TaskCategory>('home');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === '') return;
    
    onAddTask(title, category);
    setTitle('');
    setIsExpanded(false);
  };
  
  const categoryOptions: { value: TaskCategory, label: string, icon: string }[] = [
    { value: 'home', label: 'Home', icon: homeIcon },
    { value: 'work', label: 'Work', icon: workIcon },
    { value: 'fitness', label: 'Fitness', icon: fitnessIcon },
    { value: 'shopping', label: 'Shopping', icon: shoppingIcon },
    { value: 'other', label: 'Other', icon: otherIcon },
  ];
  
  return (
    <div className={`task-form-container ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button 
          className="add-task-button"
          onClick={() => setIsExpanded(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Add a new task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="task-input"
          />
          
          <div className="category-selector">
            <p className="category-label">Category:</p>
            <div className="category-options">
              {categoryOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`category-option ${category === option.value ? 'selected' : ''}`}
                  onClick={() => setCategory(option.value)}
                >
                  <img src={option.icon} alt={option.label} className="category-icon" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="form-buttons">
            <button 
              type="button" 
              className="cancel-button"
              onClick={() => setIsExpanded(false)}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button"
              disabled={!title.trim()}
            >
              Add Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;