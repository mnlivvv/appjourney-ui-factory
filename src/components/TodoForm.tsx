import { useState } from 'react';
import type { FormEvent } from 'react';
import './TodoForm.css';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form 
      className={`todo-form ${isFocused ? 'focused' : ''}`} 
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button 
        type="submit" 
        className="add-btn"
        disabled={!text.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;