import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
import starIcon from './assets/images/star.png'
import './App.css'

interface Todo {
  id: string
  text: string
  completed: boolean
  category: string
  createdAt: Date
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        // Parse dates back to Date objects
        const parsedTodos = JSON.parse(savedTodos)
        return parsedTodos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }))
      } catch (e) {
        console.error('Failed to parse todos from localStorage', e)
        return []
      }
    }
    return []
  })
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string, category: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      category,
      createdAt: new Date()
    }
    
    // Add with animation
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleTodo = (id: string) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    // Add a class for fade-out animation
    const todoElement = document.getElementById(`todo-${id}`)
    if (todoElement) {
      todoElement.classList.add('fade-out')
      
      // Wait for animation to complete before removing
      setTimeout(() => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }, 300) // Match with CSS transition duration
    } else {
      // If element not found, just remove it
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
  
  const pendingCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - pendingCount

  return (
    <div className="todo-app">
      <header className="app-header">
        <img src={starIcon} alt="Star icon" className="header-icon" />
        <h1>Bubble Tasks</h1>
        <img src={starIcon} alt="Star icon" className="header-icon" />
      </header>
      
      <TodoForm onAdd={addTodo} />
      
      <div className="todo-stats">
        <span>Pending: <b>{pendingCount}</b></span>
        <span>Completed: <b>{completedCount}</b></span>
      </div>
      
      <div className="todo-list">
        {todos.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet! Add your first task above.</p>
          </div>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              category={todo.category}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App
