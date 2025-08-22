import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Todo } from './components/TodoList'

function App() {
  // Initialize todos from local storage or empty array
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      return JSON.parse(savedTodos)
    }
    return []
  })

  // Save todos to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false
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

  // Calculate completion stats
  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length
  const completionPercentage = totalCount > 0 
    ? Math.round((completedCount / totalCount) * 100) 
    : 0

  return (
    <div className="arcade-cabinet">
      <div className="cabinet-top">
        <h1 className="game-title">ARCADE TODO MASTER</h1>
        <div className="completion-status">
          <div className="status-label">PROGRESS:</div>
          <div className="status-bar">
            <div 
              className="status-fill" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <div className="status-text">{completionPercentage}%</div>
        </div>
      </div>

      <TodoForm onAdd={addTodo} />
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />
      
      <div className="arcade-controls">
        <div className="control-btn">A: ADD</div>
        <div className="control-btn">B: COMPLETE</div>
        <div className="control-btn">X: DELETE</div>
      </div>
      
      <div className="cabinet-footer">
        <div className="pixel-text">© 2025 ARCADE TODO MASTER</div>
      </div>
    </div>
  )
}

export default App
