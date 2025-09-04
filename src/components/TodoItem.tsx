import { useState } from 'react';
import '../styles/TodoItem.css';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const categoryIcons: Record<string, string> = {
  work: '💼',
  personal: '🏠',
  shopping: '🛒',
  health: '❤️',
  education: '📚',
  other: '✨',
};

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  text,
  completed,
  category,
  onToggle,
  onDelete
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onToggle(id);
      setIsAnimating(false);
    }, 300);
  };

  const handleDelete = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onDelete(id);
    }, 300);
  };

  return (
    <div 
      className={`todo-item ${completed ? 'completed' : ''} ${isAnimating ? 'animating' : ''}`}
    >
      <div className="todo-content">
        <span className="category-icon">{categoryIcons[category] || '✨'}</span>
        <p className="todo-text">{text}</p>
      </div>
      <div className="todo-actions">
        <button 
          className={`toggle-btn ${completed ? 'completed' : ''}`} 
          onClick={handleToggle}
        >
          {completed ? '✓' : '○'}
        </button>
        <button className="delete-btn" onClick={handleDelete}>×</button>
      </div>
    </div>
  );
};

export default TodoItem;