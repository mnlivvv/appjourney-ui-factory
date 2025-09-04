import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import { Todo } from './components/TodoItem'
import DateTime from './components/DateTime'
import MindfulnessQuote from './components/MindfulnessQuote'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Initialize from localStorage if available
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }))
      } catch (error) {
        console.error('Failed to parse saved todos', error)
        return []
      }
    }
    return []
  })

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date()
    }
    setTodos([...todos, newTodo])
  }

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Edit a todo
  const editTodo = (id: string, text: string) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text } : todo
      )
    )
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <DateTime />
        <h1>Zen Tasks</h1>
      </div>
      
      <div className="app-content">
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
          onAdd={addTodo}
        />
      </div>
      
      <div className="app-footer">
        <MindfulnessQuote />
      </div>
    </div>
  )
}

export default App
