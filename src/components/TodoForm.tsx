import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import { TodoCategory } from '../types/todo';
import { FaBriefcase, FaShoppingCart, FaHeartbeat, FaGraduationCap, FaUser, FaTasks } from 'react-icons/fa';

const TodoForm = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState<TodoCategory>(TodoCategory.PERSONAL);
  const [isExpanded, setIsExpanded] = useState(false);
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim() !== '') {
      addTodo(text.trim(), category);
      setText('');
      setIsExpanded(false);
    }
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

  return (
    <motion.div 
      className="todo-form-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="input-container">
          <motion.input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="What do you want to accomplish today?"
            className="todo-input"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          
          <motion.button 
            type="submit" 
            className="add-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add Task
          </motion.button>
        </div>
        
        {isExpanded && (
          <motion.div 
            className="category-selector"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="category-label">Select a category:</p>
            <div className="category-buttons">
              {Object.values(TodoCategory).map(cat => (
                <motion.button
                  key={cat}
                  type="button"
                  className={`category-button ${category === cat ? 'active' : ''}`}
                  style={{ 
                    backgroundColor: category === cat 
                      ? categoryColors[cat as TodoCategory] 
                      : 'transparent',
                    borderColor: categoryColors[cat as TodoCategory]
                  }}
                  onClick={() => setCategory(cat as TodoCategory)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="category-icon">
                    {categoryIcons[cat as TodoCategory]}
                  </span>
                  <span className="category-text">
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default TodoForm;