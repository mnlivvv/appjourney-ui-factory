export type TaskCategory = 'work' | 'personal' | 'shopping' | 'health' | 'learning' | 'other';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
  category: TaskCategory;
  priority: 'low' | 'medium' | 'high';
}

export interface UserStats {
  streak: number;
  totalCompleted: number;
  todayCompleted: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedAt?: Date;
}