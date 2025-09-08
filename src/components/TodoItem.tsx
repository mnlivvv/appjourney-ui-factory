import { useState } from 'react';
import { Todo } from '../types/todo';
import '../styles/TodoItem.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  
  const handleEditSubmit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };
  
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handleEditSubmit()}
            autoFocus
          />
        </div>
      ) : (
        <>
          <div className="todo-checkbox" onClick={() => onToggle(todo.id)}>
            <div className={`checkbox ${todo.completed ? 'checked' : ''}`}>
              {todo.completed && <span className="checkmark">✓</span>}
            </div>
          </div>
          
          <div 
            className="todo-text"
            onClick={() => setIsEditing(true)}
          >
            {todo.text}
          </div>
          
          <button 
            className="todo-delete"
            onClick={() => onDelete(todo.id)}
            aria-label="Delete task"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3L13 13M3 13L13 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};