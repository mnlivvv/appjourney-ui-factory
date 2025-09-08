// Types for the Todo App

export type TaskCategory = 'work' | 'personal' | 'shopping' | 'health' | 'education';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: TaskCategory;
  createdAt: Date;
  completedAt: Date | null;
}

export interface TaskStats {
  total: number;
  completed: number;
  remaining: number;
  streak: number;
  points: number;
}

export interface CategoryStats {
  [key: string]: number;
}