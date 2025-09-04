export type TaskCategory = 'work' | 'home' | 'fitness' | 'shopping' | 'other';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: TaskCategory;
  createdAt: Date;
  completedAt?: Date;
}

export interface TaskStats {
  completed: number;
  total: number;
  streak: number;
}

export type Badges = {
  firstTask: boolean;
  fiveTasksCompleted: boolean;
  tenTasksCompleted: boolean;
  perfectDay: boolean; // All tasks completed in a day
  threeStreakDays: boolean; // Complete tasks three days in a row
};