import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import { Todo } from '../types';
import '../styles/TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo, categories } = useTodo();
  const [isDeleting, setIsDeleting] = useState(false);

  // Find the category color
  const categoryColor = categories.find(cat => cat.id === todo.category)?.color || 'var(--accent-color)';

  // Format the date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(todo.createdAt);

  const handleDelete = () => {
    setIsDeleting(true);
    
    // Add animation delay before actually removing
    setTimeout(() => {
      deleteTodo(todo.id);
    }, 500);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
      <div className="todo-content">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className="todo-text">{todo.text}</span>
        </label>
        
        <div className="todo-meta">
          <span className="todo-date">{formattedDate}</span>
          <span 
            className="todo-category" 
            style={{ backgroundColor: categoryColor }}
          >
            {categories.find(cat => cat.id === todo.category)?.name}
          </span>
        </div>
      </div>
      
      <button className="delete-button" onClick={handleDelete}>
        &times;
      </button>
    </li>
  );
};

export default TodoItem;