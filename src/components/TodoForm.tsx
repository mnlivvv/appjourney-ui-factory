import { useState, FormEvent } from 'react';
import { useTodos } from '../context/TodoContext';

export const TodoForm = () => {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (title.trim()) {
      // Add todo with optional due date
      addTodo(title);
      
      // Clear form
      setTitle('');
      setDueDate('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="New todo text"
        autoFocus
      />
      <button 
        type="submit" 
        className="todo-submit"
        aria-label="Add todo"
      >
        Add Task
      </button>
    </form>
  );
};