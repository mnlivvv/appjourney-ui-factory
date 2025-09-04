export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string;
  priority?: 'low' | 'medium' | 'high';
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PomodoroSettings {
  workDuration: number; // in minutes
  breakDuration: number; // in minutes
  longBreakDuration: number; // in minutes
  sessionsBeforeLongBreak: number;
}

export type SortOption = 'dueDate' | 'priority' | 'createdAt' | 'title';
export type FilterOption = 'all' | 'active' | 'completed';

export interface AppTheme {
  primary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  accent: string;
  border: string;
  error: string;
  success: string;
}