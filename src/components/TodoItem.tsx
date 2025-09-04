import { useState } from 'react';
import './TodoItem.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="checkmark"></span>
      </label>
      
      <span className="todo-text">{todo.text}</span>
      
      <button 
        className={`delete-btn ${isHovering ? 'visible' : ''}`}
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;