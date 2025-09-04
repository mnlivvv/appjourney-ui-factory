import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTodo } from '../context/TodoContext';
import { TodoCategory } from '../types/todo';
import '../styles/AddTodo.css';

const categories: { value: TodoCategory; label: string; color: string }[] = [
  { value: 'work', label: 'Work', color: '#ff5757' },
  { value: 'personal', label: 'Personal', color: '#47b8ff' },
  { value: 'shopping', label: 'Shopping', color: '#8a4fff' },
  { value: 'health', label: 'Health', color: '#00c896' },
  { value: 'learning', label: 'Learning', color: '#ffbd59' }
];

const AddTodo = () => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState<TodoCategory>('personal');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text.trim(), category);
      setText('');
      
      // Play sound effect
      const audio = new Audio('/sounds/add-task.mp3');
      audio.volume = 0.3;
      audio.play().catch(error => console.error('Error playing sound:', error));
    }
  };

  return (
    <motion.div 
      className="add-todo-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={handleSubmit}>
        <motion.input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="add-todo-input"
          whileFocus={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        />
        
        <div className="category-buttons">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              type="button"
              className={`category-button ${category === cat.value ? 'selected' : ''}`}
              style={{ 
                backgroundColor: category === cat.value ? cat.color : 'transparent',
                borderColor: cat.color
              }}
              onClick={() => setCategory(cat.value)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          type="submit"
          className="add-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Task
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddTodo;