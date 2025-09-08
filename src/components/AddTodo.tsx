import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
      // Provide haptic feedback with subtle animation
      const btn = document.querySelector('.add-btn');
      if (btn) {
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 300);
      }
    }
  };

  const getRandomPlaceholder = () => {
    const placeholders = [
      'Feed the unicorn...',
      'Learn to fly...',
      'Plant magic beans...',
      'Save the world...',
      'Befriend a dragon...',
      'Bake cookies for elves...',
      'Find lost treasure...',
      'Solve a mystery...',
    ];
    return placeholders[Math.floor(Math.random() * placeholders.length)];
  };

  return (
    <motion.form 
      className="add-todo-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <motion.div 
        className={`input-container ${isFocused ? 'focused' : ''}`}
        animate={{ 
          boxShadow: isFocused 
            ? '0 8px 20px rgba(0, 0, 0, 0.1)' 
            : '0 4px 10px rgba(0, 0, 0, 0.05)' 
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={getRandomPlaceholder()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <motion.button 
          type="submit"
          className="add-btn"
          disabled={!text.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            opacity: text.trim() ? 1 : 0.7,
            scale: text.trim() ? 1 : 0.95
          }}
        >
          <FaPlus />
        </motion.button>
      </motion.div>
    </motion.form>
  );
};

export default AddTodo;