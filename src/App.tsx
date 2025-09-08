import { useState, useEffect } from 'react'
import './App.css'
import { Task, TaskCategory, TaskStats, CategoryStats } from './types'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import ConfettiEffect from './components/ConfettiEffect'
import {
  getStoredTasks,
  storeTasks,
  createTask,
  toggleTaskCompletion,
  calculateTaskStats,
  calculateCategoryStats
} from './utils/taskUtils'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showConfetti, setShowConfetti] = useState(false)
  const [stats, setStats] = useState<TaskStats>({
    total: 0,
    completed: 0,
    remaining: 0,
    streak: 0,
    points: 0
  })
  const [categoryStats, setCategoryStats] = useState<CategoryStats>({})

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = getStoredTasks()
    setTasks(storedTasks)
  }, [])

  // Update stats whenever tasks change
  useEffect(() => {
    const newStats = calculateTaskStats(tasks)
    const newCategoryStats = calculateCategoryStats(tasks)
    
    setStats(newStats)
    setCategoryStats(newCategoryStats)
    
    // Save tasks to localStorage
    storeTasks(tasks)
  }, [tasks])

  // Add new task
  const handleAddTask = (title: string, category: TaskCategory) => {
    const newTask = createTask(title, category)
    setTasks([...tasks, newTask])
  }

  // Toggle task completion
  const handleToggleComplete = (task: Task) => {
    const updatedTask = toggleTaskCompletion(task)
    
    // If task is being marked as complete, show confetti
    if (updatedTask.completed && !task.completed) {
      setShowConfetti(true)
      
      // Reset confetti after a delay
      setTimeout(() => {
        setShowConfetti(false)
      }, 100)
    }
    
    // Update tasks state
    const updatedTasks = tasks.map(t => 
      t.id === task.id ? updatedTask : t
    )
    
    setTasks(updatedTasks)
  }

  // Delete task
  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  
  // Reorder tasks (now using up/down arrows instead of drag and drop)
  const handleReorderTasks = (reorderedTasks: Task[]) => {
    setTasks(reorderedTasks)
  }

  return (
    <div className="todo-app">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="app-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1>Task Master</h1>
          <p>Get things done with style ✨</p>
        </motion.div>
        
        <TaskForm onAddTask={handleAddTask} />
        
        <TaskList 
          tasks={tasks} 
          onToggleComplete={handleToggleComplete} 
          onDeleteTask={handleDeleteTask}
          onReorderTasks={handleReorderTasks}
        />
        
        {tasks.length > 0 && (
          <TaskStats stats={stats} categoryStats={categoryStats} />
        )}
        
        <ConfettiEffect isActive={showConfetti} />
      </motion.div>
    </div>
  )
}

export default App
