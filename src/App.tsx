import { useState, useEffect } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import './App.css'

// Define the Todo type
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// Define the filter type
type FilterType = 'all' | 'active' | 'completed';

function App() {
  // State hooks
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize from localStorage if available
    const savedTodos = localStorage.getItem('luxuryTodos');
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        // Convert string dates back to Date objects
        return parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (e) {
        console.error('Error parsing saved todos', e);
        return [];
      }
    }
    return [];
  });
  
  const [newTodoText, setNewTodoText] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sparkleEffect, setSparkleEffect] = useState<string | null>(null);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('luxuryTodos', JSON.stringify(todos));
  }, [todos]);

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(e.target.value);
  };

  // Add new todo
  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    
    if (newTodoText.trim() === '') return;
    
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: newTodoText.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setNewTodoText('');
  };

  // Toggle todo completion status
  const handleToggleTodo = (id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => {
        if (todo.id === id) {
          // If marking as completed, trigger sparkle effect
          if (!todo.completed) {
            setSparkleEffect(id);
            // Remove sparkle effect after animation
            setTimeout(() => setSparkleEffect(null), 1000);
          }
          
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  // Delete a todo
  const handleDeleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Clear all completed todos
  const handleClearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  // Count active todos
  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  // Sort todos by creation date (newest first)
  const sortedTodos = [...filteredTodos].sort((a, b) => 
    b.createdAt.getTime() - a.createdAt.getTime()
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Luxury Tasks</h1>
        <p>Manage your affairs with elegance</p>
      </header>
      
      <main className="app-content">
        {/* Todo form */}
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            className="todo-input"
            placeholder="Add a new task..."
            value={newTodoText}
            onChange={handleInputChange}
          />
          <div className="todo-input-icon"></div>
          <button type="submit" className="add-button">Add Task</button>
        </form>
        
        {/* Filter controls */}
        {todos.length > 0 && (
          <div className="filter-controls">
            <div>
              <span className="filter-label">View:</span>
              <div className="filter-buttons">
                <button 
                  className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`filter-button ${filter === 'active' ? 'active' : ''}`}
                  onClick={() => setFilter('active')}
                >
                  Active
                </button>
                <button 
                  className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
                  onClick={() => setFilter('completed')}
                >
                  Completed
                </button>
              </div>
            </div>
            
            <div>
              {todos.some(todo => todo.completed) && (
                <button className="clear-completed" onClick={handleClearCompleted}>
                  Clear completed
                </button>
              )}
            </div>
          </div>
        )}
        
        {/* Todo count */}
        {todos.length > 0 && (
          <p className="todo-count">
            <strong>{activeTodoCount}</strong> {activeTodoCount === 1 ? 'item' : 'items'} remaining
          </p>
        )}
        
        {/* Todo list */}
        {sortedTodos.length > 0 ? (
          <ul className="todo-list">
            {sortedTodos.map(todo => (
              <li key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  className="todo-checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <span className="todo-text">{todo.text}</span>
                {sparkleEffect === todo.id && <span className="sparkle"></span>}
                <button 
                  className="delete-button" 
                  onClick={() => handleDeleteTodo(todo.id)}
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">✦</div>
            {todos.length === 0 ? (
              <p>Your task list is empty. Add your first task to get started.</p>
            ) : (
              <p>
                {filter === 'active' 
                  ? 'All tasks are completed. Well done!' 
                  : filter === 'completed' 
                    ? 'No completed tasks yet.' 
                    : 'No tasks found.'}
              </p>
            )}
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>Click a task to mark it complete. Your tasks are saved automatically.</p>
      </footer>
    </div>
  )
}

export default App