import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format, isToday, parseISO, startOfWeek, addDays, isSameDay } from 'date-fns';
import { Task, TaskCategory, UserStats, DailyStreak } from '../types';

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
  userStats: UserStats;
  clearCompletedTasks: () => void;
  filterTasks: (category: TaskCategory | 'all') => Task[];
  showConfetti: boolean;
  setShowConfetti: (show: boolean) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const defaultStats: UserStats = {
  tasksCompleted: 0,
  streak: {
    count: 0,
    lastCompletedDate: null
  },
  categoriesCompleted: {
    personal: 0,
    work: 0,
    shopping: 0,
    health: 0,
    education: 0
  },
  weeklyProgress: [0, 0, 0, 0, 0, 0, 0] // Sun, Mon, Tue, Wed, Thu, Fri, Sat
};

// Helper function to generate sample tasks
const generateSampleTasks = (): Task[] => {
  return [
    {
      id: uuidv4(),
      title: 'Complete project proposal',
      description: 'Finish the outline and send to the team for review',
      completed: false,
      createdAt: new Date(),
      dueDate: addDays(new Date(), 2),
      category: 'work',
      priority: 'high'
    },
    {
      id: uuidv4(),
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, and vegetables',
      completed: false,
      createdAt: new Date(),
      dueDate: addDays(new Date(), 1),
      category: 'shopping',
      priority: 'medium'
    },
    {
      id: uuidv4(),
      title: 'Morning yoga',
      description: '30 minutes of yoga practice',
      completed: true,
      createdAt: new Date(),
      category: 'health',
      priority: 'low'
    },
    {
      id: uuidv4(),
      title: 'Study React hooks',
      description: 'Review useContext and useMemo documentation',
      completed: false,
      createdAt: new Date(),
      dueDate: addDays(new Date(), 3),
      category: 'education',
      priority: 'medium'
    },
    {
      id: uuidv4(),
      title: 'Call mom',
      description: 'Weekly check-in call',
      completed: false,
      createdAt: new Date(),
      category: 'personal',
      priority: 'medium'
    }
  ];
};

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({ children }: TaskProviderProps) => {
  // Initialize with sample data or load from localStorage
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        // Parse the JSON and convert date strings back to Date objects
        return JSON.parse(savedTasks, (key, value) => {
          if (key === 'createdAt' || key === 'dueDate') {
            return value ? parseISO(value) : null;
          }
          return value;
        });
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
        return generateSampleTasks();
      }
    }
    return generateSampleTasks();
  });

  const [userStats, setUserStats] = useState<UserStats>(() => {
    const savedStats = localStorage.getItem('userStats');
    if (savedStats) {
      try {
        const parsedStats = JSON.parse(savedStats, (key, value) => {
          if (key === 'lastCompletedDate') {
            return value ? parseISO(value) : null;
          }
          return value;
        });
        return parsedStats;
      } catch (error) {
        console.error('Error parsing user stats from localStorage:', error);
        return defaultStats;
      }
    }
    return defaultStats;
  });

  const [showConfetti, setShowConfetti] = useState(false);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    const tasksJson = JSON.stringify(tasks, (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    });
    localStorage.setItem('tasks', tasksJson);
  }, [tasks]);

  // Save user stats to localStorage whenever they change
  useEffect(() => {
    const statsJson = JSON.stringify(userStats, (key, value) => {
      if (value instanceof Date) {
        return value.toISOString();
      }
      return value;
    });
    localStorage.setItem('userStats', statsJson);
  }, [userStats]);

  // Add a new task
  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: uuidv4(),
      createdAt: new Date()
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  // Update an existing task
  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, ...updates } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Complete a task with animations and update stats
  const completeTask = (id: string) => {
    const task = tasks.find(t => t.id === id);
    
    if (task && !task.completed) {
      // Update the task
      updateTask(id, { completed: true });
      
      // Show confetti animation
      setShowConfetti(true);
      
      // Update user stats
      setUserStats(prev => {
        const updatedStats = { ...prev };
        
        // Increment total completed tasks
        updatedStats.tasksCompleted += 1;
        
        // Increment category count
        updatedStats.categoriesCompleted[task.category] += 1;
        
        // Update streak
        const streak = { ...updatedStats.streak };
        const today = new Date();
        
        if (streak.lastCompletedDate) {
          const lastDate = new Date(streak.lastCompletedDate);
          
          // If the last completed date was yesterday, increment streak
          if (isSameDay(addDays(lastDate, 1), today)) {
            streak.count += 1;
          } 
          // If the last completed date was not today, reset streak to 1
          else if (!isSameDay(lastDate, today)) {
            streak.count = 1;
          }
        } else {
          // First completed task ever
          streak.count = 1;
        }
        
        streak.lastCompletedDate = today;
        updatedStats.streak = streak;
        
        // Update weekly progress
        const today2 = new Date();
        const dayOfWeek = (today2.getDay() + 6) % 7; // Convert to 0 = Monday, 6 = Sunday
        const weeklyProgress = [...updatedStats.weeklyProgress];
        weeklyProgress[dayOfWeek] += 1;
        updatedStats.weeklyProgress = weeklyProgress;
        
        return updatedStats;
      });
      
      // Hide confetti after 3 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  };

  // Clear all completed tasks
  const clearCompletedTasks = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  // Filter tasks by category
  const filterTasks = (category: TaskCategory | 'all') => {
    if (category === 'all') {
      return tasks;
    }
    return tasks.filter(task => task.category === category);
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      addTask,
      updateTask,
      deleteTask,
      completeTask,
      userStats,
      clearCompletedTasks,
      filterTasks,
      showConfetti,
      setShowConfetti
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};