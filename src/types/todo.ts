export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: TodoCategory;
  createdAt: Date;
  completedAt?: Date;
}

export const TodoCategory = {
  WORK: 'work',
  PERSONAL: 'personal',
  SHOPPING: 'shopping',
  HEALTH: 'health',
  EDUCATION: 'education',
  OTHER: 'other'
} as const;

export type TodoCategory = typeof TodoCategory[keyof typeof TodoCategory];

export interface GameState {
  level: number;
  points: number;
  streak: number;
  tasksCompleted: number;
}