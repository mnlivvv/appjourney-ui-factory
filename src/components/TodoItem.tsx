import { useState } from 'react';
import { Todo } from '../types';
import { useTodos } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.title);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      updateTodo(todo.id, { title: editValue.trim() });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditValue(todo.title);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  // Format date to display
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'todo-completed' : ''} fade-in`}>
      <input 
        type="checkbox" 
        className="todo-checkbox" 
        checked={todo.completed}
        onChange={handleToggle}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />

      {isEditing ? (
        <input
          type="text"
          className="todo-input"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
          aria-label="Edit todo text"
        />
      ) : (
        <p className="todo-text">
          {todo.title}
          {todo.dueDate && (
            <span className="todo-due-date">
              {" "} · Due {formatDate(todo.dueDate)}
            </span>
          )}
        </p>
      )}

      <div className="todo-actions">
        {!isEditing && (
          <>
            <button 
              className="todo-btn edit-btn" 
              onClick={handleEdit}
              aria-label="Edit"
            >
              Edit
            </button>
            <button 
              className="todo-btn delete-btn" 
              onClick={handleDelete}
              aria-label="Delete"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};