import { motion, AnimatePresence } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';
import { useState } from 'react';
import { TodoCategory } from '../types/todo';

const TodoList = () => {
  const { todos } = useTodo();
  const [filter, setFilter] = useState<TodoCategory | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  // Filter todos based on category and completion status
  const filteredTodos = todos.filter(todo => {
    const categoryMatch = filter === 'all' || todo.category === filter;
    const completionMatch = showCompleted ? true : !todo.completed;
    return categoryMatch && completionMatch;
  });

  return (
    <div className="todo-list-container">
      <div className="todo-filters">
        <div className="filter-group">
          <h3>Categories</h3>
          <div className="filter-buttons">
            <motion.button
              className={`filter-button ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            <motion.button
              className={`filter-button ${filter === 'work' ? 'active' : ''}`}
              style={{ borderColor: '#ff5757' }}
              onClick={() => setFilter('work')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Work
            </motion.button>
            <motion.button
              className={`filter-button ${filter === 'personal' ? 'active' : ''}`}
              style={{ borderColor: '#47b8ff' }}
              onClick={() => setFilter('personal')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Personal
            </motion.button>
            <motion.button
              className={`filter-button ${filter === 'shopping' ? 'active' : ''}`}
              style={{ borderColor: '#8a4fff' }}
              onClick={() => setFilter('shopping')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shopping
            </motion.button>
            <motion.button
              className={`filter-button ${filter === 'health' ? 'active' : ''}`}
              style={{ borderColor: '#00c896' }}
              onClick={() => setFilter('health')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Health
            </motion.button>
            <motion.button
              className={`filter-button ${filter === 'learning' ? 'active' : ''}`}
              style={{ borderColor: '#ffbd59' }}
              onClick={() => setFilter('learning')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learning
            </motion.button>
          </div>
        </div>

        <div className="show-completed-toggle">
          <label htmlFor="show-completed">Show Completed</label>
          <input
            id="show-completed"
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </div>
      </div>

      <motion.div 
        className="todo-items-container"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          ) : (
            <motion.div 
              className="empty-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3>No tasks found</h3>
              <p>Add a new task or change filters!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TodoList;