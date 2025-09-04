import { useState, useEffect } from 'react'
import './app.css'
import type { Todo } from './types'
import Header from './components/Header'
import TodoList from './components/todolist'
import AddTodo from './components/AddTodo'

function App() {
  // State to store todos
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
    }
    return [];
  });
  
  // Track counts for header display
  const completedCount = todos.filter(todo => todo.completed).length;
  
  // Effect to save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  const addTodo = (text: string, category: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      category,
      createdAt: new Date()
    };
    
    setTodos(prevTodos => [newTodo, ...prevTodos]);
    createConfetti();
  };

  // Function to toggle todo completion
  const toggleTodo = (id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    );
    
    // Check if this operation completed a todo
    const todo = todos.find(t => t.id === id);
    if (todo && !todo.completed) {
      // This is marking as complete, show confetti
      createConfetti();
    }
  };

  // Function to delete a todo
  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // Confetti animation
  const createConfetti = () => {
    const colors = ['#ff6b6b', '#a3a1fc', '#82ca9c', '#ffd166', '#73c1e6'];
    
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        document.body.removeChild(confetti);
      }, 3000);
    }
  };

  return (
    <div className="app-container">
      <Header 
        completedCount={completedCount} 
        totalCount={todos.length}
      />
      
      <AddTodo onAddTodo={addTodo} />
      
      <TodoList 
        todos={todos} 
        onToggleTodo={toggleTodo} 
        onDeleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
