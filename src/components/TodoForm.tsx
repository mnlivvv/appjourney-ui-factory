import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-input-container">
        <input
          type="text"
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a luxurious task..."
          aria-label="Add a new task"
        />
        <motion.button
          type="submit"
          className="todo-submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!text.trim()}
          aria-label="Add task"
        >
          Add
        </motion.button>
      </div>
    </form>
  );
};

export default TodoForm;