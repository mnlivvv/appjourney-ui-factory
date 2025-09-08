import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaClipboardCheck } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import type { Todo } from './types';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Confetti from './components/Confetti';
import MotivationalMessage from './components/MotivationalMessage';

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // Parse the stored JSON and convert date strings back to Date objects
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (e) {
        console.error('Error parsing todos from localStorage', e);
        return [];
      }
    }
    return [];
  });
  
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  // Count completed todos
  useEffect(() => {
    setCompletedCount(todos.filter(todo => todo.completed).length);
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        // If we're marking as completed, trigger confetti
        if (!todo.completed) {
          setShowConfetti(true);
          setShowMessage(true);
          setTimeout(() => setShowConfetti(false), 2000);
        }
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Confetti active={showConfetti} />
      <MotivationalMessage 
        show={showMessage}
        onHide={() => setShowMessage(false)}
      />
      
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon"><FaClipboardCheck /></span>
            <span>TaskJoy</span>
          </h1>
          <motion.button
            className="theme-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>
        
        <div className="stats-bar">
          <motion.div
            className="stats-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="stats-label">Total Tasks</span>
            <span className="stats-value">{todos.length}</span>
          </motion.div>
          <motion.div
            className="stats-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="stats-label">Completed</span>
            <span className="stats-value">{completedCount}</span>
          </motion.div>
          <motion.div
            className="stats-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="stats-label">Pending</span>
            <span className="stats-value">{todos.length - completedCount}</span>
          </motion.div>
        </div>
      </motion.header>

      <main>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>TaskJoy - Make your tasks more fun!</p>
      </motion.footer>
    </div>
  );
}

export default App;
