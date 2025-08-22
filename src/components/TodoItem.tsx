import { useState } from 'react';
import useSound from 'use-sound';
import completeSound from '../assets/sounds/complete.mp3';
import deleteSound from '../assets/sounds/delete.mp3';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [playComplete] = useSound(completeSound, { volume: 0.5 });
  const [playDelete] = useSound(deleteSound, { volume: 0.5 });

  const handleToggle = () => {
    onToggle(id);
    if (!completed) {
      playComplete();
    }
  };

  const handleDelete = () => {
    playDelete();
    onDelete(id);
  };

  // Calculate progress bar width based on completed state
  const progressWidth = completed ? '100%' : '0%';

  return (
    <div 
      className={`todo-item ${completed ? 'completed' : ''}`} 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="todo-content">
        <div className="checkbox-container" onClick={handleToggle}>
          <div className={`checkbox ${completed ? 'checked' : ''}`}>
            {completed && <span className="pixel-check">✓</span>}
          </div>
        </div>
        <div className="todo-text">{text}</div>
        <div className="life-bar">
          <div className="life-bar-fill" style={{ width: progressWidth }}></div>
        </div>
      </div>
      
      <button 
        className={`delete-btn ${isHovering ? 'visible' : ''}`}
        onClick={handleDelete}
      >
        <span className="pixel-x">×</span>
      </button>
    </div>
  );
};

export default TodoItem;