import { useEffect } from 'react';
import { Todo } from '../context/TodoContext';
import { useDraggable } from '../hooks/useDraggable';
import '../styles/TodoItem.css';
import pushpinImg from '../assets/images/pushpin.jpg';
import paperclipImg from '../assets/images/paperclip.jpg';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onPin: (id: string) => void;
  onUpdatePosition?: (id: string, position: { x: number; y: number }) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onPin, onUpdatePosition }: TodoItemProps) {
  const {
    position,
    isDragging,
    elementRef,
    handleMouseDown
  } = useDraggable({
    initialPosition: todo.position || { x: 0, y: 0 },
    disabled: todo.pinned,
    onDragEnd: (newPosition) => {
      if (onUpdatePosition) {
        onUpdatePosition(todo.id, newPosition);
      }
    }
  });

  // Apply dragging styles
  const style: React.CSSProperties = {
    backgroundColor: todo.color,
    transform: `translate(${position.x}px, ${position.y}px)`,
    zIndex: isDragging ? 1000 : (todo.pinned ? 10 : 1),
    cursor: todo.pinned ? 'default' : 'grab',
  };

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.pinned ? 'pinned' : ''}`}
      style={style}
      ref={elementRef}
      onMouseDown={handleMouseDown}
    >
      {todo.pinned && (
        <div className="pushpin">
          <img src={pushpinImg} alt="Pushpin" />
        </div>
      )}
      
      <div className="todo-content">
        <div className="todo-controls">
          <button className="pin-btn" onClick={() => onPin(todo.id)}>
            {todo.pinned ? 'Unpin' : 'Pin'}
          </button>
          <button className="delete-btn" onClick={() => onDelete(todo.id)}>✕</button>
        </div>
        
        <div className="todo-text">
          <label className={`todo-label ${todo.completed ? 'todo-completed' : ''}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span className="checkmark"></span>
            <span className="todo-text-content">{todo.text}</span>
          </label>
        </div>
        
        <div className="todo-date">
          {new Date(todo.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
          })}
        </div>
        
        <div className="paperclip-img">
          <img src={paperclipImg} alt="Paperclip" />
        </div>
      </div>
    </div>
  );
}