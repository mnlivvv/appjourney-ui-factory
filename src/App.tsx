import { useState } from 'react'
import './App.css'

// Components
import TaskForm from './components/task/TaskForm'
import TaskList from './components/task/TaskList'
import CategoryFilter from './components/task/CategoryFilter'
import Header from './components/layout/Header'
import BadgesModal from './components/layout/BadgesModal'

// Hooks
import { useTasks } from './hooks/useTasks'
import { useStats } from './hooks/useStats'

// Types
import type { Task, TaskCategory } from './types'

function App() {
  const { 
    tasks, 
    allTasks,
    addTask, 
    toggleTaskCompletion, 
    deleteTask, 
    editTask,
    filter,
    setFilter 
  } = useTasks()
  
  const { stats, earnedBadges, unearnedBadges } = useStats()
  
  const [editingTask, setEditingTask] = useState<Task | null>(null)
  const [showBadges, setShowBadges] = useState(false)
  
  // Handle edit task
  const handleEditTask = (id: string) => {
    const task = allTasks.find(task => task.id === id)
    if (task) {
      setEditingTask(task)
    }
  }
  
  // Handle submit edited task
  const handleEditSubmit = (title: string, description: string, category: TaskCategory, priority: 'low' | 'medium' | 'high') => {
    if (editingTask) {
      editTask(editingTask.id, { title, description, category, priority })
      setEditingTask(null)
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 p-4 sm:p-6">
      <div className="max-w-lg mx-auto">
        {/* Header with stats */}
        <Header 
          stats={stats} 
          onShowBadges={() => setShowBadges(true)} 
        />
        
        {/* Task form */}
        {editingTask ? (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
              <span className="mr-2">✏️</span>
              Edit Task
            </h2>
            <TaskForm 
              onSubmit={handleEditSubmit}
              editingTask={editingTask}
              onCancel={() => setEditingTask(null)}
            />
          </div>
        ) : (
          <TaskForm 
            onSubmit={addTask}
          />
        )}
        
        {/* Category filter */}
        <div className="mb-4">
          <CategoryFilter 
            activeFilter={filter}
            onFilterChange={setFilter}
          />
        </div>
        
        {/* Task list */}
        <TaskList 
          tasks={tasks}
          onToggleComplete={toggleTaskCompletion}
          onEdit={handleEditTask}
          onDelete={deleteTask}
          filter={filter}
        />
        
        {/* Badges Modal */}
        <BadgesModal 
          isOpen={showBadges}
          onClose={() => setShowBadges(false)}
          earnedBadges={earnedBadges}
          unearnedBadges={unearnedBadges}
        />
      </div>
    </div>
  )
}

export default App
