export type TaskCategory = 'personal' | 'work' | 'shopping' | 'health' | 'education';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  dueDate?: Date;
  category: TaskCategory;
  priority: 'low' | 'medium' | 'high';
}

export interface DailyStreak {
  count: number;
  lastCompletedDate: Date | null;
}

export interface UserStats {
  tasksCompleted: number;
  streak: DailyStreak;
  categoriesCompleted: Record<TaskCategory, number>;
  weeklyProgress: number[];
}