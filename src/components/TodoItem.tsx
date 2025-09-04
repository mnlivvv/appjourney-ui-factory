import { motion } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import { Todo } from '../types/todo';
import '../styles/TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

// Define category colors
const categoryColors = {
  work: '#ff5757',
  personal: '#47b8ff',
  shopping: '#8a4fff',
  health: '#00c896',
  learning: '#ffbd59'
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodo();

  const handleToggle = () => {
    toggleTodo(todo.id);
    
    // Play sound effect when completing a task
    if (!todo.completed) {
      const audio = new Audio('/sounds/complete-task.mp3');
      audio.volume = 0.3;
      audio.play().catch(error => console.error('Error playing sound:', error));
    }
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
    
    // Play delete sound
    const audio = new Audio('/sounds/delete-task.mp3');
    audio.volume = 0.3;
    audio.play().catch(error => console.error('Error playing sound:', error));
  };

  return (
    <motion.div 
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      style={{ borderColor: categoryColors[todo.category] }}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={todo.completed ? { 
        x: [0, 10, -10, 10, -10, 0],
        y: -80,
        opacity: 0,
        transition: { duration: 0.5 } 
      } : {
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 }
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="category-indicator"
        style={{ backgroundColor: categoryColors[todo.category] }}
      >
        {todo.category}
      </div>
      
      <div className="todo-content">
        <motion.span 
          className="todo-text"
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </motion.span>
        
        <div className="todo-info">
          <span className="todo-points">+{todo.points} pts</span>
          <span className="todo-date">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="todo-actions">
        <motion.button
          className="toggle-button"
          onClick={handleToggle}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {todo.completed ? '↩️' : '✅'}
        </motion.button>
        
        <motion.button
          className="delete-button"
          onClick={handleDelete}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          🗑️
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TodoItem;