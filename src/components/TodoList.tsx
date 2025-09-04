import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import ZenQuote from './ZenQuote';
import AppIcon from './AppIcon';
import './TodoList.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="title-container">
        <AppIcon />
        <h1 className="todo-title">Tranquil Tasks</h1>
      </div>
      
      <ZenQuote />
      
      <TodoForm addTodo={addTodo} />
      
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-state">Your mind is clear. Add a task when you're ready.</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;