import { useState } from 'react';
import { useRippleEffect } from '../hooks/useRippleEffect';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskItemProps {
  task: Task;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onComplete, onDelete }: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { ripples, addRipple } = useRippleEffect();
  
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="task-content">
        <div className="task-checkbox-container">
          <button 
            className={`task-checkbox ${task.completed ? 'checked' : ''}`}
            onClick={(e) => {
              addRipple(e);
              onComplete(task.id);
            }}
            aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            {ripples.map(ripple => (
              <span
                key={ripple.id}
                className="ripple"
                style={{
                  left: ripple.x - ripple.size / 2,
                  top: ripple.y - ripple.size / 2,
                  width: ripple.size,
                  height: ripple.size
                }}
              />
            ))
            {task.completed && (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="currentColor" />
              </svg>
            )}
          </button>
        </div>
        
        <div className="task-text">
          <span>{task.text}</span>
          <small>{task.createdAt.toLocaleDateString()}</small>
        </div>
      </div>
      
      <button 
        className="task-delete"
        onClick={(e) => {
          addRipple(e);
          onDelete(task.id);
        }}
        aria-label="Delete task"
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="ripple"
            style={{
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size
            }}
          />
        ))
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}