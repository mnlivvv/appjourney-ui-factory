import { useState } from 'react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      data-testid="todo-item"
    >
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSubmit}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            autoFocus
            className="edit-input"
          />
        </div>
      ) : (
        <div className="todo-content">
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="todo-checkbox"
            />
            <span className="checkmark"></span>
          </label>
          <span 
            className="todo-text"
            onClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
          <button 
            className="delete-btn"
            onClick={() => onDelete(todo.id)}
            aria-label="Delete todo"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;