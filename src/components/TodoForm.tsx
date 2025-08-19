import { useState } from 'react';
import { useTodos } from '../context/TodoContext';
import '../styles/TodoForm.css';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="todo-form-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a new todo..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add Todo
        </button>
      </form>
    </div>
  );
}