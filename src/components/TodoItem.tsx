import { useState } from 'react';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSubmit = () => {
    if (editedText.trim() !== '') {
      onEdit(id, editedText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSubmit}
            autoFocus
            className="edit-input"
          />
          <button onClick={handleSubmit} className="save-btn">
            Save
          </button>
        </div>
      ) : (
        <div className="todo-content">
          <label className="todo-checkbox">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
            />
            <span className="checkmark"></span>
          </label>
          <span 
            className={`todo-text ${completed ? 'completed-text' : ''}`}
            onClick={() => setIsEditing(true)}
          >
            {text}
          </span>
          <button 
            onClick={() => onDelete(id)}
            className="delete-btn"
            aria-label="Delete task"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
