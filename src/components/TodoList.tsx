import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';
import { TodoCategory } from '../types/todo';
import { FaBriefcase, FaShoppingCart, FaHeartbeat, FaGraduationCap, FaUser, FaTasks, FaFilter } from 'react-icons/fa';
import mascotImage from '../assets/images/mascot.jpg';

const TodoList = () => {
  const { todos } = useTodo();
  const [filter, setFilter] = useState<TodoCategory | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);

  const filteredTodos = todos.filter(todo => {
    const categoryMatch = filter === 'all' || todo.category === filter;
    const completionMatch = showCompleted || !todo.completed;
    return categoryMatch && completionMatch;
  });

  const categoryIcons = {
    [TodoCategory.WORK]: <FaBriefcase />,
    [TodoCategory.PERSONAL]: <FaUser />,
    [TodoCategory.SHOPPING]: <FaShoppingCart />,
    [TodoCategory.HEALTH]: <FaHeartbeat />,
    [TodoCategory.EDUCATION]: <FaGraduationCap />,
    [TodoCategory.OTHER]: <FaTasks />
  };

  const categoryColors = {
    'all': '#3d84a8',
    [TodoCategory.WORK]: '#4a6fa5',
    [TodoCategory.PERSONAL]: '#ff9671',
    [TodoCategory.SHOPPING]: '#ff6b6b',
    [TodoCategory.HEALTH]: '#57cc99',
    [TodoCategory.EDUCATION]: '#8f71ff',
    [TodoCategory.OTHER]: '#ffc75f'
  };

  return (
    <div className="todo-list-container">
      <div className="filters-container">
        <div className="category-filters">
          <motion.button
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              backgroundColor: filter === 'all' ? categoryColors['all'] : 'transparent',
              borderColor: categoryColors['all']
            }}
          >
            <FaFilter /> All
          </motion.button>

          {Object.values(TodoCategory).map(category => (
            <motion.button
              key={category}
              className={`filter-button ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                backgroundColor: filter === category 
                  ? categoryColors[category as TodoCategory] 
                  : 'transparent',
                borderColor: categoryColors[category as TodoCategory]
              }}
            >
              {categoryIcons[category as TodoCategory]}
              <span className="filter-text">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="completion-filter"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
              className="toggle-checkbox"
            />
            <span className="toggle-switch"></span>
            Show Completed
          </label>
        </motion.div>
      </div>

      <div className="todos-wrapper">
        <AnimatePresence>
          {filteredTodos.length > 0 ? (
            filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          ) : (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <img src={mascotImage} alt="Task Master Mascot" className="empty-mascot" />
              <h3 className="empty-title">No tasks here!</h3>
              <p className="empty-message">
                {filter !== 'all' 
                  ? `You don't have any ${filter} tasks ${!showCompleted ? 'that are not completed' : ''}.` 
                  : !showCompleted 
                    ? "You've completed all your tasks! Great job!" 
                    : "Add a new task to get started!"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TodoList;