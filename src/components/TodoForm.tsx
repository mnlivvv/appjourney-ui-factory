import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { useTodo } from '../context/TodoContext';
import { Category } from '../types';
import Button from './Button';

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [text, setText] = useState('');
  const [category, setCategory] = useState<Category>('personal');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text, category);
      setText('');
      setIsExpanded(false);
    }
  };

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form 
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300"
      >
        <div className="p-4">
          <div className="flex items-center">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-3 text-lg focus:outline-none"
              aria-label="New todo text"
            />
            <motion.button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white ml-2"
            >
              <FaPlus />
            </motion.button>
          </div>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                    <option value="shopping">Shopping</option>
                    <option value="health">Health</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={() => setIsExpanded(false)}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Add Task
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default TodoForm;