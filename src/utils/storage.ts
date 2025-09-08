import type { Task, UserStats, Badge } from '../types';

// Local storage keys
const TASKS_STORAGE_KEY = 'colorful-todo-tasks';
const STATS_STORAGE_KEY = 'colorful-todo-stats';

// Helper to get today's date (YYYY-MM-DD format)
const getTodayKey = (): string => {
  const date = new Date();
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};

// Default badges
const defaultBadges: Badge[] = [
  {
    id: 'first-task',
    name: 'First Step',
    description: 'Complete your first task',
    icon: '🎯',
    earned: false
  },
  {
    id: 'streak-3',
    name: 'On Fire',
    description: 'Complete tasks for 3 days in a row',
    icon: '🔥',
    earned: false
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Complete tasks for 7 days in a row',
    icon: '🏆',
    earned: false
  },
  {
    id: 'five-tasks',
    name: 'High Achiever',
    description: 'Complete 5 tasks in a single day',
    icon: '⭐',
    earned: false
  },
  {
    id: 'all-categories',
    name: 'Well Rounded',
    description: 'Complete tasks in all categories',
    icon: '🌟',
    earned: false
  }
];

// Default user stats
const defaultStats: UserStats = {
  streak: 0,
  totalCompleted: 0,
  todayCompleted: 0,
  badges: defaultBadges
};

// Task storage functions
export const getTasks = (): Task[] => {
  const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  if (!storedTasks) return [];
  
  try {
    const parsedTasks = JSON.parse(storedTasks);
    // Convert string dates back to Date objects
    return parsedTasks.map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt),
      completedAt: task.completedAt ? new Date(task.completedAt) : undefined
    }));
  } catch (error) {
    console.error('Error parsing tasks from localStorage:', error);
    return [];
  }
};

export const saveTasks = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

// User stats functions
export const getUserStats = (): UserStats => {
  const storedStats = localStorage.getItem(STATS_STORAGE_KEY);
  if (!storedStats) return defaultStats;
  
  try {
    const parsedStats = JSON.parse(storedStats);
    return {
      ...parsedStats,
      badges: parsedStats.badges.map((badge: any) => ({
        ...badge,
        earnedAt: badge.earnedAt ? new Date(badge.earnedAt) : undefined
      }))
    };
  } catch (error) {
    console.error('Error parsing user stats from localStorage:', error);
    return defaultStats;
  }
};

export const saveUserStats = (stats: UserStats): void => {
  localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
};

// Badge awarding logic
export const checkAndUpdateBadges = (tasks: Task[]): UserStats => {
  const stats = getUserStats();
  const todayKey = getTodayKey();
  const completedTasks = tasks.filter(task => task.completed);
  const completedToday = completedTasks.filter(
    task => task.completedAt && task.completedAt.toDateString() === new Date().toDateString()
  ).length;
  
  // Update stats
  stats.totalCompleted = completedTasks.length;
  stats.todayCompleted = completedToday;
  
  // Check for first task badge
  if (completedTasks.length > 0) {
    const firstTaskBadge = stats.badges.find(badge => badge.id === 'first-task');
    if (firstTaskBadge && !firstTaskBadge.earned) {
      firstTaskBadge.earned = true;
      firstTaskBadge.earnedAt = new Date();
    }
  }
  
  // Check for 5 tasks in a day badge
  if (completedToday >= 5) {
    const fiveTasksBadge = stats.badges.find(badge => badge.id === 'five-tasks');
    if (fiveTasksBadge && !fiveTasksBadge.earned) {
      fiveTasksBadge.earned = true;
      fiveTasksBadge.earnedAt = new Date();
    }
  }
  
  // Check for all categories badge
  const categoriesCompleted = new Set(completedTasks.map(task => task.category));
  if (categoriesCompleted.size >= 6) { // We have 6 categories
    const allCategoriesBadge = stats.badges.find(badge => badge.id === 'all-categories');
    if (allCategoriesBadge && !allCategoriesBadge.earned) {
      allCategoriesBadge.earned = true;
      allCategoriesBadge.earnedAt = new Date();
    }
  }
  
  // Save updated stats
  saveUserStats(stats);
  return stats;
};

// Streak management
export const updateStreak = (): UserStats => {
  const stats = getUserStats();
  const today = new Date();
  const todayKey = getTodayKey();
  
  // Get the last active date from localStorage
  const lastActiveKey = localStorage.getItem('last-active-date');
  
  if (!lastActiveKey) {
    // First time user
    localStorage.setItem('last-active-date', todayKey);
    stats.streak = 1;
  } else if (lastActiveKey === todayKey) {
    // Already counted today, do nothing
  } else {
    // Parse the last active date
    const [lastYear, lastMonth, lastDay] = lastActiveKey.split('-').map(Number);
    const lastDate = new Date(lastYear, lastMonth - 1, lastDay);
    
    // Calculate the difference in days
    const timeDiff = today.getTime() - lastDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    if (dayDiff === 1) {
      // Consecutive day, increase streak
      stats.streak += 1;
      localStorage.setItem('last-active-date', todayKey);
      
      // Check for streak badges
      if (stats.streak >= 3) {
        const streak3Badge = stats.badges.find(badge => badge.id === 'streak-3');
        if (streak3Badge && !streak3Badge.earned) {
          streak3Badge.earned = true;
          streak3Badge.earnedAt = new Date();
        }
      }
      
      if (stats.streak >= 7) {
        const streak7Badge = stats.badges.find(badge => badge.id === 'streak-7');
        if (streak7Badge && !streak7Badge.earned) {
          streak7Badge.earned = true;
          streak7Badge.earnedAt = new Date();
        }
      }
    } else if (dayDiff > 1) {
      // Streak broken
      stats.streak = 1;
      localStorage.setItem('last-active-date', todayKey);
    }
  }
  
  saveUserStats(stats);
  return stats;
};