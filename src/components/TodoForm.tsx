import { useState } from 'react';
import { motion } from 'framer-motion';
import { Priority, priorityLevels } from '../types/todo';

interface TodoFormProps {
  onAddTodo: (text: string, priority: Priority) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('emerald');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text, priority);
      setText('');
      setIsFormOpen(false);
    }
  };

  return (
    <div className="todo-form-container">
      {!isFormOpen ? (
        <motion.button 
          className="add-todo-btn"
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Create New Task
        </motion.button>
      ) : (
        <motion.form 
          className="todo-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="form-row">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What needs to be done?"
              className="todo-input"
              autoFocus
            />
          </div>
          
          <div className="form-row priority-selector">
            <label className="priority-label">Priority:</label>
            <div className="priority-options">
              {(Object.keys(priorityLevels) as Priority[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`priority-btn ${priority === key ? 'selected' : ''}`}
                  style={{ 
                    backgroundColor: priority === key ? priorityLevels[key].color : 'transparent',
                    borderColor: priorityLevels[key].color
                  }}
                  onClick={() => setPriority(key)}
                  title={priorityLevels[key].label}
                >
                  {key.charAt(0).toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          <div className="form-actions">
            <motion.button 
              type="button" 
              className="cancel-btn"
              onClick={() => setIsFormOpen(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add Task
            </motion.button>
          </div>
        </motion.form>
      )}
    </div>
  );
};

export default TodoForm;