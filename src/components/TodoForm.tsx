import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import '../styles/TodoForm.css';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo(todoText, priority);
      setTodoText('');
      // Keep the same priority for the next todo for better UX
    }
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input-group">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="What would you like to accomplish?"
            aria-label="Enter a new task"
            className="todo-input"
          />
          <div className="priority-selector">
            <label className="priority-label">Priority:</label>
            <div className="priority-buttons">
              <button
                type="button"
                className={`priority-btn low ${priority === 'low' ? 'active' : ''}`}
                onClick={() => setPriority('low')}
              >
                Low
              </button>
              <button
                type="button"
                className={`priority-btn medium ${priority === 'medium' ? 'active' : ''}`}
                onClick={() => setPriority('medium')}
              >
                Medium
              </button>
              <button
                type="button"
                className={`priority-btn high ${priority === 'high' ? 'active' : ''}`}
                onClick={() => setPriority('high')}
              >
                High
              </button>
            </div>
          </div>
        </div>
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;