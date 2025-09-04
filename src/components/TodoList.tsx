import React, { useState } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: input.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="brutalist-box">
      <h2>TASKS</h2>
      
      <form onSubmit={handleAddTodo} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ADD NEW TASK"
          aria-label="Add new task"
        />
        <button type="submit" className="accent">ADD TASK</button>
      </form>
      
      <div>
        {todos.length === 0 ? (
          <div style={{ 
            border: '3px solid var(--color-black)', 
            padding: '2rem', 
            textAlign: 'center',
            fontFamily: 'var(--font-mono)'
          }}>
            NO TASKS YET
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;