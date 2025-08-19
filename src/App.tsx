import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import Dashboard from './components/Dashboard'
import BackgroundSelector from './components/BackgroundSelector'
import Header from './components/Header'
import type { Task, Category } from './types'

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })
  
  const [categories] = useState<Category[]>([
    { id: 'personal', name: 'Personal', color: '#FF6B6B' },
    { id: 'work', name: 'Work', color: '#4ECDC4' },
    { id: 'study', name: 'Study', color: '#FFD166' },
    { id: 'health', name: 'Health', color: '#6A0572' },
    { id: 'other', name: 'Other', color: '#1A535C' }
  ])
  
  const [background, setBackground] = useState<string>(() => {
    return localStorage.getItem('background') || 'gradient-1'
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  
  useEffect(() => {
    localStorage.setItem('background', background)
    document.body.className = `bg-${background}`
  }, [background])

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: Date.now().toString(), completed: false, createdAt: new Date().toISOString() }])
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ))
  }

  return (
    <div className={`app-container`}>
      <BackgroundSelector 
        background={background} 
        setBackground={setBackground} 
      />
      <div className="content-wrapper">
        <Header />
        <main>
          <div className="main-content">
            <div className="left-panel">
              <TodoForm 
                addTask={addTask} 
                categories={categories} 
              />
              <TodoList 
                tasks={tasks} 
                toggleTask={toggleTask} 
                deleteTask={deleteTask} 
                updateTask={updateTask}
                categories={categories}
              />
            </div>
            <div className="right-panel">
              <Dashboard tasks={tasks} categories={categories} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
