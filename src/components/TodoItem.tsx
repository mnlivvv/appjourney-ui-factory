import { useState } from 'react';
import { Todo } from '../types';
import soundManager from '../utils/soundEffects';
import { SoundEffect } from '../types';

interface TodoItemProps {
  todo: Todo;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onComplete, onDelete }: TodoItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleComplete = () => {
    if (!todo.completed) {
      soundManager.play(SoundEffect.COMPLETE);
      onComplete(todo.id);
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.play(SoundEffect.DELETE);
    onDelete(todo.id);
  };

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.overdue ? 'overdue' : ''} ${isHovered ? 'hovered' : ''} ${isPressed ? 'pressed' : ''}`}
      onClick={handleComplete}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <div className="todo-content">
        <div className="todo-level">LVL {todo.level}</div>
        <div className="todo-text">{todo.text}</div>
        <div className="todo-score">{todo.score} PTS</div>
        
        {/* Due date display */}
        {todo.dueDate && (
          <div className={`todo-due-date ${todo.overdue ? 'overdue' : ''}`}>
            {todo.overdue ? 'GAME OVER!' : `DUE: ${new Date(todo.dueDate).toLocaleDateString()}`}
          </div>
        )}
      </div>
      
      <button className="delete-btn" onClick={handleDelete}>
        {/* X icon using CSS */}
        <span className="delete-icon"></span>
      </button>
      
      {/* Completion indicator */}
      {todo.completed && (
        <div className="completion-badge">
          COMPLETED!
        </div>
      )}
    </div>
  );
}