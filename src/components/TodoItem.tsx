import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import '../styles/TodoItem.css';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
}

const TodoItem = ({ id, text, completed, priority }: TodoItemProps) => {
  const { toggleComplete, deleteTodo, editTodo, changePriority } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const [showPrioritySelect, setShowPrioritySelect] = useState(false);

  const handleEdit = () => {
    if (editText.trim() && editText !== text) {
      editTodo(id, editText);
    } else {
      setEditText(text);
    }
    setIsEditing(false);
  };

  const handlePriorityChange = (newPriority: 'low' | 'medium' | 'high') => {
    changePriority(id, newPriority);
    setShowPrioritySelect(false);
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''} priority-${priority}`}>
      <div className="todo-content">
        <label className="todo-checkbox-container">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleComplete(id)}
            className="todo-checkbox"
          />
          <span className="checkmark"></span>
        </label>

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="todo-edit-input"
            autoFocus
            onBlur={handleEdit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEdit();
              if (e.key === 'Escape') {
                setEditText(text);
                setIsEditing(false);
              }
            }}
          />
        ) : (
          <p
            className={`todo-text ${completed ? 'completed-text' : ''}`}
            onClick={() => !completed && setIsEditing(true)}
          >
            {text}
          </p>
        )}
      </div>

      <div className="todo-actions">
        <div className="priority-container">
          {showPrioritySelect ? (
            <div className="priority-dropdown">
              <button
                onClick={() => handlePriorityChange('low')}
                className="priority-option low"
              >
                Low
              </button>
              <button
                onClick={() => handlePriorityChange('medium')}
                className="priority-option medium"
              >
                Medium
              </button>
              <button
                onClick={() => handlePriorityChange('high')}
                className="priority-option high"
              >
                High
              </button>
            </div>
          ) : (
            <button
              className={`priority-indicator priority-${priority}`}
              onClick={() => setShowPrioritySelect(true)}
              title={`Priority: ${priority}`}
            >
              {priority.charAt(0).toUpperCase()}
            </button>
          )}
        </div>
        
        <button
          onClick={() => setIsEditing(true)}
          className="todo-btn edit-btn"
          title="Edit task"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(id)}
          className="todo-btn delete-btn"
          title="Delete task"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;