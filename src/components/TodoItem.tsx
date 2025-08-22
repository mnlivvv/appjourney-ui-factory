import { motion } from 'framer-motion';
import { Todo, priorityLevels } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const priorityInfo = priorityLevels[todo.priority];

  return (
    <motion.div 
      className="todo-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div className="todo-content">
        <div className="checkbox-container">
          <label className="custom-checkbox">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        
        <div className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </div>
        
        <div className="todo-details">
          <div 
            className="priority-indicator" 
            title={`Priority: ${priorityInfo.label}`}
            style={{ 
              backgroundColor: priorityInfo.color,
              boxShadow: `0 0 8px ${priorityInfo.color}`
            }}
          >
            {todo.priority.charAt(0).toUpperCase()}
          </div>
          
          <div className="todo-date">
            {new Date(todo.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            })}
          </div>
          
          <button 
            className="delete-btn"
            onClick={() => onDelete(todo.id)}
            aria-label="Delete task"
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TodoItem;