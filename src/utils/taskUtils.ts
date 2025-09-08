import { Task, TaskCategory, TaskStats, CategoryStats } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Get tasks from local storage
export const getStoredTasks = (): Task[] => {
  const tasksJSON = localStorage.getItem('tasks');
  if (!tasksJSON) return [];
  
  try {
    const parsedTasks = JSON.parse(tasksJSON);
    // Convert string dates back to Date objects
    return parsedTasks.map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt),
      completedAt: task.completedAt ? new Date(task.completedAt) : null
    }));
  } catch (error) {
    console.error('Error parsing tasks:', error);
    return [];
  }
};

// Save tasks to local storage
export const storeTasks = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Create a new task
export const createTask = (title: string, category: TaskCategory): Task => {
  return {
    id: uuidv4(),
    title,
    completed: false,
    category,
    createdAt: new Date(),
    completedAt: null
  };
};

// Toggle task completion status
export const toggleTaskCompletion = (task: Task): Task => {
  const completed = !task.completed;
  return {
    ...task,
    completed,
    completedAt: completed ? new Date() : null
  };
};

// Calculate task statistics
export const calculateTaskStats = (tasks: Task[]): TaskStats => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const remaining = total - completed;
  
  // Calculate streak (consecutive days with completed tasks)
  const streak = calculateStreak(tasks);
  
  // Calculate points (gamification)
  const points = calculatePoints(tasks);
  
  return {
    total,
    completed,
    remaining,
    streak,
    points
  };
};

// Calculate stats by category
export const calculateCategoryStats = (tasks: Task[]): CategoryStats => {
  const stats: CategoryStats = {};
  
  tasks.forEach(task => {
    if (!stats[task.category]) {
      stats[task.category] = 0;
    }
    
    if (task.completed) {
      stats[task.category]++;
    }
  });
  
  return stats;
};

// Calculate the current streak (consecutive days with completed tasks)
const calculateStreak = (tasks: Task[]): number => {
  if (tasks.length === 0) return 0;
  
  // Get completed tasks sorted by completion date (newest first)
  const completedTasks = tasks
    .filter(task => task.completed && task.completedAt)
    .sort((a, b) => {
      if (!a.completedAt || !b.completedAt) return 0;
      return b.completedAt.getTime() - a.completedAt.getTime();
    });
  
  if (completedTasks.length === 0) return 0;
  
  // Check if there's a task completed today
  const today = new Date();
  const todayStr = today.toDateString();
  
  const hasCompletionToday = completedTasks.some(task => 
    task.completedAt && task.completedAt.toDateString() === todayStr
  );
  
  if (!hasCompletionToday) return 0;
  
  // Count consecutive days with completed tasks
  let streak = 1;
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() - 1);
  
  while (true) {
    const dateStr = currentDate.toDateString();
    const hasCompletion = completedTasks.some(task => 
      task.completedAt && task.completedAt.toDateString() === dateStr
    );
    
    if (!hasCompletion) break;
    
    streak++;
    currentDate.setDate(currentDate.getDate() - 1);
  }
  
  return streak;
};

// Calculate points for gamification
const calculatePoints = (tasks: Task[]): number => {
  let points = 0;
  
  // Points for completed tasks
  const completedTasks = tasks.filter(task => task.completed);
  points += completedTasks.length * 10;
  
  // Bonus points for streak
  const streak = calculateStreak(tasks);
  points += streak * 5;
  
  // Bonus points for completing tasks in different categories
  const uniqueCategories = new Set(completedTasks.map(task => task.category));
  points += uniqueCategories.size * 15;
  
  return points;
};

// Get the available task categories with their display names and icons
export const getTaskCategories = (): { value: TaskCategory; label: string }[] => {
  return [
    { value: 'work', label: 'Work' },
    { value: 'personal', label: 'Personal' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'health', label: 'Health' },
    { value: 'education', label: 'Education' }
  ];
};