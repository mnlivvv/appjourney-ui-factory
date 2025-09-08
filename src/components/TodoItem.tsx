import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTrash } from 'react-icons/fa';
import type { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="todo-item"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className={`todo-content ${todo.completed ? 'completed' : ''}`}
          animate={{ opacity: todo.completed ? 0.7 : 1 }}
        >
          <div className="todo-check">
            <motion.button
              className={`check-btn ${todo.completed ? 'checked' : ''}`}
              onClick={() => toggleTodo(todo.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {todo.completed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <FaCheck />
                </motion.div>
              )}
            </motion.button>
          </div>
          
          <motion.p
            animate={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {(isHovered || todo.completed) && (
            <motion.button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              whileHover={{ scale: 1.1, color: '#ff4d4d' }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTrash />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default TodoItem;