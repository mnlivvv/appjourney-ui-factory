import { useState } from 'react';
import starIcon from '../assets/images/star.png';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  category?: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, text, completed, category, onToggle, onDelete }: TodoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a pastel color based on the category or use a default
  const getCategoryColor = () => {
    if (!category) return '#FFD6E0'; // Default pink pastel
    
    // Simple hash function to get a consistent color for categories
    const hash = category.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    
    // Pastel color palette
    const colors = [
      '#FFD6E0', // Pink
      '#FFEFCF', // Yellow
      '#D6F0FF', // Blue
      '#E2FFD6', // Green
      '#E9D6FF', // Purple
      '#FFE2D6', // Orange
    ];
    
    return colors[hash % colors.length];
  };

  return (
    <div 
      className={`todo-item ${completed ? 'completed' : ''}`}
      style={{ 
        backgroundColor: getCategoryColor(),
        transform: isHovered ? 'rotate(1deg) scale(1.02)' : 'rotate(-1deg)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="todo-content">
        <label className="checkbox-container">
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={() => onToggle(id)}
            className="checkbox"
          />
          <span className="checkmark"></span>
        </label>
        
        <span className={`todo-text ${completed ? 'strike-through' : ''}`}>
          {text}
        </span>
        
        {category && (
          <div className="category-icon">
            <img src={starIcon} alt="Category icon" className="category-star" />
            <span className="category-name">{category}</span>
          </div>
        )}
      </div>
      
      <button 
        className="delete-button"
        onClick={() => onDelete(id)}
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;