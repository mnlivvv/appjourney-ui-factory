import { useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { FocusToggle } from './components/FocusToggle';
import type { Todo } from './types/todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // Parse the stored todos and convert date strings back to Date objects
        return JSON.parse(savedTodos, (key, value) => {
          if (key === 'createdAt') return new Date(value);
          return value;
        });
      } catch (error) {
        console.error('Error parsing saved todos:', error);
        return [];
      }
    }
    return [];
  });
  
  const [focusMode, setFocusMode] = useState(() => {
    const savedMode = localStorage.getItem('focusMode');
    return savedMode === 'true';
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // Save focus mode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('focusMode', String(focusMode));
  }, [focusMode]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date()
    };
    
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const toggleFocusMode = () => {
    setFocusMode(prevMode => !prevMode);
  };

  return (
    <div className={`app ${focusMode ? 'focus-mode' : ''}`}>
      <div className="container">
        <header className={`app-header ${focusMode ? 'hidden' : ''}`}>
          <h1>Tasks</h1>
          <FocusToggle focusMode={focusMode} onToggle={toggleFocusMode} />
        </header>
        
        <main>
          <TodoForm onAdd={addTodo} />
          <TodoList 
            todos={todos} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
            onEdit={editTodo} 
          />
        </main>
        
        <footer className={`app-footer ${focusMode ? 'hidden' : ''}`}>
          <p>Click a task to edit it.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
