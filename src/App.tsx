import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import '@fontsource/playfair-display/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import './App.css'

// Components
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

// Types
import { Todo, Filter } from './types'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }))
      } catch (e) {
        console.error('Error parsing todos from localStorage', e)
        return []
      }
    }
    return []
  })
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date()
    }
    setTodos([newTodo, ...todos])
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="app-container">
      <motion.header 
        className="app-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="app-title">Luxe Tasks</h1>
        <p className="text-gold">Elegance in organization</p>
      </motion.header>

      <motion.div 
        className="todo-container card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="todo-header">
          <h2>Your Tasks</h2>
        </div>
        
        <TodoForm onAddTodo={addTodo} />
        
        <TodoFilter 
          filter={filter} 
          onFilterChange={setFilter} 
          activeCount={activeCount}
          totalCount={todos.length}
        />
        
        <TodoList 
          todos={todos} 
          filter={filter} 
          onToggleTodo={toggleTodo} 
          onDeleteTodo={deleteTodo}
        />
      </motion.div>
    </div>
  )
}

export default App
