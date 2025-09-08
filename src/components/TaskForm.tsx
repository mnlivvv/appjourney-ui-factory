import { useState } from 'react';
import { TaskCategory } from '../types';
import { getTaskCategories } from '../utils/taskUtils';
import { 
  FiPlus, 
  FiClipboard, 
  FiBriefcase, 
  FiUser, 
  FiShoppingCart, 
  FiHeart, 
  FiBook 
} from 'react-icons/fi';
import { motion } from 'framer-motion';

interface TaskFormProps {
  onAddTask: (title: string, category: TaskCategory) => void;
}

// Map of icons for each category
const categoryIcons = {
  work: <FiBriefcase />,
  personal: <FiUser />,
  shopping: <FiShoppingCart />,
  health: <FiHeart />,
  education: <FiBook />
};

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TaskCategory>('personal');
  const categories = getTaskCategories();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim()) {
      onAddTask(title.trim(), category);
      setTitle('');
      // Keep the selected category for convenience
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-input">
        <div className="task-input-wrapper">
          <FiClipboard className="task-icon" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            aria-label="Task title"
          />
        </div>
        
        <div className="category-select">
          {categories.map((cat) => (
            <motion.div
              key={cat.value}
              className={`category-option ${cat.value} ${category === cat.value ? 'selected' : ''}`}
              onClick={() => setCategory(cat.value)}
              whileTap={{ scale: 0.95 }}
            >
              {categoryIcons[cat.value as keyof typeof categoryIcons]} {cat.label}
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.button 
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={!title.trim()}
      >
        <FiPlus /> Add
      </motion.button>
    </form>
  );
};

export default TaskForm;