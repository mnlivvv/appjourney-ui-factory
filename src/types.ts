export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  isImportant: boolean;
  createdAt: Date;
}

export interface PomodoroTimer {
  minutes: number;
  seconds: number;
  isActive: boolean;
  mode: 'work' | 'break';
}

export type FilterType = 'all' | 'active' | 'completed' | 'important';