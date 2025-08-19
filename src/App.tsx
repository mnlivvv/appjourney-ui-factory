import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

// Components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import HighScore from './components/HighScore'
import SoundToggle from './components/SoundToggle'

// Types and Utils
import { Todo, SoundEffect } from './types'
import soundManager from './utils/soundEffects'

function App() {
  // State for todos
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage if available
    const savedTodos = localStorage.getItem('arcade-todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('arcade-todos', JSON.stringify(todos));
  }, [todos]);

  // Check for overdue todos
  useEffect(() => {
    const checkOverdueTodos = () => {
      const now = new Date();
      const updatedTodos = todos.map(todo => {
        // Skip completed todos
        if (todo.completed) return todo;
        
        // Check if todo has a due date and is overdue
        if (todo.dueDate && new Date(todo.dueDate) < now && !todo.overdue) {
          // Play game over sound when a todo becomes overdue
          soundManager.play(SoundEffect.GAMEOVER);
          return { ...todo, overdue: true };
        }
        return todo;
      });

      setTodos(updatedTodos);
    };

    // Check immediately
    checkOverdueTodos();
    
    // Set up interval to check every minute
    const intervalId = setInterval(checkOverdueTodos, 60000);
    
    // Clean up interval on unmount
    return () => clearInterval(intervalId);
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string, dueDate?: Date) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      score: Math.floor(Math.random() * 30) + 10, // Random score between 10-40
      level: Math.floor(Math.random() * 5) + 1,   // Random level between 1-5
      dueDate,
      overdue: dueDate ? new Date(dueDate) < new Date() : false,
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  // Complete a todo
  const completeTodo = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id && !todo.completed
          ? { ...todo, completed: true }
          : todo
      )
    );
    
    // Play level up sound if this completes a todo
    const todo = todos.find(t => t.id === id);
    if (todo && !todo.completed) {
      soundManager.play(SoundEffect.LEVELUP);
    }
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <div className="arcade-cabinet">
      {/* Screen overlay for CRT effect */}
      <div className="screen-overlay"></div>
      
      <div className="app-header">
        <h1 className="arcade-logo">Arcade Todos</h1>
        <SoundToggle />
      </div>
      
      <div className="game-container crt-effect">
        <div className="app-content">
          {/* Left column - High Score */}
          <div className="sidebar">
            <HighScore todos={todos} />
          </div>
          
          {/* Right column - Todo Form & List */}
          <div className="main-content">
            <TodoForm onAddTodo={addTodo} />
            <TodoList 
              todos={todos}
              onComplete={completeTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </div>
      
      <div className="app-footer">
        <p>INSERT COIN TO CONTINUE</p>
      </div>
    </div>
  )
}

export default App
