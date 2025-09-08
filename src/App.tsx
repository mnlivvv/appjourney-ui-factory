import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

// Components
import Header from './components/Header.tsx'
import TodoForm from './components/TodoForm.tsx'
import TodoList from './components/TodoList.tsx'
import PomodoroTimer from './components/PomodoroTimer.tsx'
import DailyQuote from './components/DailyQuote.tsx'
import Footer from './components/Footer.tsx'

// Types and hooks
import type { Todo } from './types.ts'
import useLocalStorage from './hooks/useLocalStorage.ts'

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [isFocusMode, setIsFocusMode] = useState(false);

  // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      isImportant: false,
      createdAt: new Date().toISOString()
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle todo completion status
  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  // Toggle todo importance status
  const toggleImportant = (id: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isImportant: !todo.isImportant };
      }
      return todo;
    }));
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Edit a todo
  const editTodo = (id: string, text: string) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    }));
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Toggle focus mode
  const toggleFocusMode = () => {
    setIsFocusMode(!isFocusMode);
    
    // Add haptic feedback if available
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(100);
      } catch (e) {
        console.log('Vibration not supported');
      }
    }
  };

  return (
    <div className={`app-container ${isFocusMode ? 'focus-mode' : ''}`}>
      <Header toggleFocusMode={toggleFocusMode} isFocusMode={isFocusMode} />
      
      <main className="app-main">
        <div className="left-sidebar">
          <PomodoroTimer />
          <DailyQuote className="sidebar-quote" />
        </div>
        
        <div className="todo-container">
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            toggleImportant={toggleImportant}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            clearCompleted={clearCompleted}
            isFocusMode={isFocusMode}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App