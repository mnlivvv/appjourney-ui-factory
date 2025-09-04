import { Task, TaskStats, TaskCategory, Badges } from '../types';

// Generate a unique ID for tasks
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Get tasks from local storage
export const getTasks = (): Task[] => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Save tasks to local storage
export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Filter tasks by category
export const filterTasksByCategory = (tasks: Task[], category?: TaskCategory): Task[] => {
  if (!category) return tasks;
  return tasks.filter(task => task.category === category);
};

// Calculate task statistics
export const calculateTaskStats = (tasks: Task[]): TaskStats => {
  const completed = tasks.filter(task => task.completed).length;
  const total = tasks.length;
  
  // Calculate streak (consecutive days with at least one completed task)
  const streak = calculateStreak(tasks);
  
  return { completed, total, streak };
};

// Calculate streak of consecutive days with completed tasks
export const calculateStreak = (tasks: Task[]): number => {
  if (!tasks.length) return 0;
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const completedTasksByDay = new Map<string, boolean>();
  
  // Group completed tasks by day
  tasks.forEach(task => {
    if (task.completed && task.completedAt) {
      const date = new Date(task.completedAt);
      date.setHours(0, 0, 0, 0);
      const dateString = date.toISOString().split('T')[0];
      completedTasksByDay.set(dateString, true);
    }
  });
  
  let streak = 0;
  let currentDate = new Date(today);
  
  // Count consecutive days backwards from today
  while (true) {
    const dateString = currentDate.toISOString().split('T')[0];
    if (completedTasksByDay.has(dateString)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return streak;
};

// Calculate badges earned
export const calculateBadges = (tasks: Task[]): Badges => {
  const completedTasks = tasks.filter(task => task.completed);
  const stats = calculateTaskStats(tasks);
  
  return {
    firstTask: completedTasks.length > 0,
    fiveTasksCompleted: completedTasks.length >= 5,
    tenTasksCompleted: completedTasks.length >= 10,
    perfectDay: isPerfectDay(tasks),
    threeStreakDays: stats.streak >= 3
  };
};

// Check if all tasks for today are completed
const isPerfectDay = (tasks: Task[]): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const todayTasks = tasks.filter(task => {
    const taskDate = new Date(task.createdAt);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate.getTime() === today.getTime();
  });
  
  return todayTasks.length > 0 && todayTasks.every(task => task.completed);
};