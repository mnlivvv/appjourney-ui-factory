import { useState, FormEvent, useRef, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';
import '../styles/TodoForm.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
      
      // Refocus the input after submission
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  // Play pencil sound effect on typing
  const handleKeyPress = () => {
    // Only play the sound occasionally for better user experience
    if (Math.random() > 0.7) {
      const audio = new Audio();
      audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFBlbmNpbCBTY3JhdGNoIFNvdW5kIEVmZmVjdABUUEUxAAAAFABQZW5jaWwgU2NyYXRjaCBTb3VuZABUQUxCAAAAEwBQZW5jaWwgU2NyYXRjaCBTb3VuZAAAAP/jQMAAAANRJIAqZxOTApUgGgthMwiYBEDqGIgBgMPPlR//mT//nI///kAYCcDCQHA+HCAIB/////xAGA///UAYQ6gCAcP//0OoCQCw8D//5UJh//UIoeHQgAAA//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vLw==';
      audio.volume = 0.1;
      audio.play().catch(err => console.error('Error playing pencil sound:', err));
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Write your task here..."
          ref={inputRef}
        />
      </div>
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;