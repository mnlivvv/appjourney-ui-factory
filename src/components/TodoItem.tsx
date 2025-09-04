import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <span>{text}</span>
      <button 
        className="accent" 
        onClick={() => onDelete(id)}
        style={{ marginLeft: 'auto', padding: '0.4em 0.8em' }}
      >
        DELETE
      </button>
    </div>
  );
};

export default TodoItem;