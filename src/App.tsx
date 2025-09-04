import { useState, useEffect } from 'react';
import { Task, TaskCategory, TaskStats, Badges } from './types';
import { 
  generateId, 
  getTasks, 
  saveTasks, 
  calculateTaskStats, 
  calculateBadges 
} from './utils/taskUtils';
import CategoryFilter from './components/CategoryFilter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskStatsComponent from './components/TaskStats';
import emptyTasksImg from './assets/images/empty-tasks.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskCategory | 'all'>('all');
  const [stats, setStats] = useState<TaskStats>({ completed: 0, total: 0, streak: 0 });
  const [badges, setBadges] = useState<Badges>({
    firstTask: false,
    fiveTasksCompleted: false,
    tenTasksCompleted: false,
    perfectDay: false,
    threeStreakDays: false
  });

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = getTasks();
    setTasks(savedTasks);
  }, []);

  // Update stats and badges whenever tasks change
  useEffect(() => {
    // Save tasks to local storage
    saveTasks(tasks);
    
    // Update stats
    const newStats = calculateTaskStats(tasks);
    setStats(newStats);
    
    // Update badges
    const newBadges = calculateBadges(tasks);
    setBadges(newBadges);
  }, [tasks]);

  // Add a new task
  const addTask = (title: string, category: TaskCategory) => {
    const newTask: Task = {
      id: generateId(),
      title,
      completed: false,
      category,
      createdAt: new Date()
    };
    
    setTasks([...tasks, newTask]);
  };

  // Toggle task completion
  const toggleTaskComplete = (id: string) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
          completedAt: !task.completed ? new Date() : undefined
        };
      }
      return task;
    }));
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={emptyTasksImg} className="app-logo" alt="TaskMaster Logo" />
        <h1 className="app-title">TaskMaster</h1>
        <p className="app-subtitle">Playful Productivity</p>
      </header>
      
      <main className="app-main">
        <TaskStatsComponent stats={stats} badges={badges} />
        
        <TaskForm onAddTask={addTask} />
        
        <CategoryFilter 
          selectedCategory={filter} 
          onSelectCategory={(category) => setFilter(category)} 
        />
        
        <div className="main-content">
          <TaskList 
            tasks={tasks} 
            filter={filter}
            onToggleComplete={toggleTaskComplete} 
            onDeleteTask={deleteTask} 
          />
        </div>
      </main>
      
      <footer className="app-footer">
        <p>TaskMaster © {new Date().getFullYear()} - A Playful Todo App</p>
      </footer>
    </div>
  );
}

export default App;