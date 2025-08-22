import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import type { Todo } from '../types/todo';
import { TodoCategory } from '../types/todo';
import { FaTrash, FaBriefcase, FaShoppingCart, FaHeartbeat, FaGraduationCap, FaUser, FaTasks, FaCheck } from 'react-icons/fa';
import confettiGif from '../assets/images/confetti.gif';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo, getMotivationalMessage } = useTodo();
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleToggle = () => {
    if (!todo.completed) {
      // Show completion animations only when completing a task
      setShowConfetti(true);
      setMessage(getMotivationalMessage());
      setShowMessage(true);
      
      // Hide animations after a delay
      setTimeout(() => {
        setShowConfetti(false);
        setShowMessage(false);
      }, 2000);
    }
    
    toggleTodo(todo.id);
  };

  const categoryIcons = {
    [TodoCategory.WORK]: <FaBriefcase />,
    [TodoCategory.PERSONAL]: <FaUser />,
    [TodoCategory.SHOPPING]: <FaShoppingCart />,
    [TodoCategory.HEALTH]: <FaHeartbeat />,
    [TodoCategory.EDUCATION]: <FaGraduationCap />,
    [TodoCategory.OTHER]: <FaTasks />
  };

  const categoryColors = {
    [TodoCategory.WORK]: '#4a6fa5',
    [TodoCategory.PERSONAL]: '#ff9671',
    [TodoCategory.SHOPPING]: '#ff6b6b',
    [TodoCategory.HEALTH]: '#57cc99',
    [TodoCategory.EDUCATION]: '#8f71ff',
    [TodoCategory.OTHER]: '#ffc75f'
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <motion.div 
      className="todo-item"
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.02 }}
      style={{ 
        borderLeft: `5px solid ${categoryColors[todo.category]}`,
        opacity: todo.completed ? 0.7 : 1
      }}
    >
      {showConfetti && (
        <motion.div 
          className="confetti-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={confettiGif} alt="Celebration confetti" />
        </motion.div>
      )}
      
      <AnimatePresence>
        {showMessage && (
          <motion.div 
            className="motivational-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="todo-content">
        <motion.div 
          className="todo-checkbox"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggle}
          style={{ 
            backgroundColor: todo.completed ? categoryColors[todo.category] : 'transparent',
            borderColor: categoryColors[todo.category]
          }}
        >
          {todo.completed && <FaCheck className="check-icon" />}
        </motion.div>
        
        <div className="todo-details">
          <motion.div 
            className="todo-text"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </motion.div>
          
          <div className="todo-meta">
            <div 
              className="todo-category"
              style={{ color: categoryColors[todo.category] }}
            >
              <span className="category-icon">{categoryIcons[todo.category]}</span>
              <span className="category-name">
                {todo.category.charAt(0).toUpperCase() + todo.category.slice(1)}
              </span>
            </div>
            
            <div className="todo-date">
              {todo.completed 
                ? `Completed: ${formatDate(todo.completedAt as Date)}` 
                : `Created: ${formatDate(todo.createdAt)}`}
            </div>
          </div>
        </div>
      </div>
      
      <motion.button 
        className="delete-button"
        onClick={() => deleteTodo(todo.id)}
        whileHover={{ scale: 1.2, color: '#ff4d4d' }}
        whileTap={{ scale: 0.9 }}
      >
        <FaTrash />
      </motion.button>
    </motion.div>
  );
};

export default TodoItem;