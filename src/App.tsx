import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

// Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';

// Types
import { Todo, Priority } from './types/todo';

// Sample data (for initial display)
import { sampleTodos } from './data/sampleTodos';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // Convert date strings back to Date objects
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (error) {
        console.error('Error parsing saved todos:', error);
        return sampleTodos;
      }
    }
    // Return sample todos if no saved todos
    return sampleTodos;
  });
  
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Save todos to localStorage when they change
  useEffect(() => {
    // Convert Date objects to strings before storing
    const todosToStore = todos.map(todo => ({
      ...todo,
      createdAt: todo.createdAt instanceof Date ? todo.createdAt.toISOString() : todo.createdAt
    }));
    localStorage.setItem('todos', JSON.stringify(todosToStore));
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string, priority: Priority) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      priority,
      createdAt: new Date()
    };
    
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Calculate counts for filter bar
  const activeCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="app-container">
      <motion.div 
        className="todo-app"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="app-header">
          <h1>Luxury Tasks</h1>
          <p className="app-subtitle">Elevate your productivity</p>
        </header>

        <TodoForm onAddTodo={addTodo} />
        
        <FilterBar 
          filter={filter}
          setFilter={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
          totalCount={todos.length}
        />
        
        <TodoList 
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          filter={filter}
        />
      </motion.div>
    </div>
  );
}

export default App;