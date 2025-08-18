import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import { TaskList } from './components/TaskList'
import { TaskForm } from './components/TaskForm'
import { SoundControls } from './components/SoundControls'
import { Task } from './components/TaskItem'

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('zen-tasks')
    if (savedTasks) {
      try {
        // Parse and convert string dates back to Date objects
        return JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }))
      } catch (e) {
        console.error('Error parsing saved tasks', e)
        return []
      }
    }
    return []
  })

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('zen-tasks', JSON.stringify(tasks))
  }, [tasks])

  // Add a new task
  const addTask = (text: string) => {
    const newTask: Task = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date()
    }
    
    setTasks([...tasks, newTask])
  }

  // Toggle task completion status
  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="zen-garden">
      <header>
        <h1>Zen Task Garden</h1>
        <p className="subtitle">Find peace in your daily tasks</p>
      </header>
      
      <main>
        <TaskForm onAddTask={addTask} />
        
        <TaskList 
          tasks={tasks} 
          onComplete={toggleComplete} 
          onDelete={deleteTask} 
        />
      </main>
      
      <aside>
        <SoundControls />
      </aside>
      
      <footer>
        <p>Let the rhythm of nature guide your productivity</p>
      </footer>
    </div>
  )
}

export default App
