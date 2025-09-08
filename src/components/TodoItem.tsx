import { useState } from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  toggleImportant: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  isFocusMode: boolean;
  isFocused: boolean;
}

const TodoItem = ({ 
  todo, 
  toggleComplete, 
  toggleImportant, 
  deleteTodo, 
  editTodo,
  isFocusMode,
  isFocused
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  if (isFocusMode && !isFocused) {
    return null; // Don't render if in focus mode and not the focused item
  }

  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''} ${todo.isImportant ? 'important' : ''}`}
      data-testid="todo-item"
    >
      {isEditing ? (
        <form onSubmit={handleSubmit} className="todo-edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            className="todo-edit-input"
          />
          <button type="submit" className="save-btn">Save</button>
          <button 
            type="button" 
            onClick={() => {
              setIsEditing(false);
              setEditText(todo.text);
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <div className="todo-actions">
            <button 
              onClick={() => toggleComplete(todo.id)}
              className="complete-btn"
              aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
            >
              {todo.completed ? '✓' : '○'}
            </button>
            
            <span 
              className={`todo-text ${todo.completed ? 'completed-text' : ''}`}
              onClick={() => setIsEditing(true)}
            >
              {todo.text}
            </span>
          </div>
          
          <div className="todo-controls">
            <button 
              onClick={() => toggleImportant(todo.id)}
              className={`star-btn ${todo.isImportant ? 'active' : ''}`}
              aria-label={todo.isImportant ? "Remove importance" : "Mark as important"}
            >
              {todo.isImportant ? '★' : '☆'}
            </button>
            
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
              aria-label="Delete task"
            >
              ×
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;