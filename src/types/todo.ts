export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: TodoCategory;
  createdAt: Date;
  completedAt?: Date;
}

export enum TodoCategory {
  WORK = 'work',
  PERSONAL = 'personal',
  SHOPPING = 'shopping',
  HEALTH = 'health',
  EDUCATION = 'education',
  OTHER = 'other'
}

export interface GameState {
  level: number;
  points: number;
  streak: number;
  tasksCompleted: number;
}