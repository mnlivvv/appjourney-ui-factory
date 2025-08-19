export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  category: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface BackgroundOption {
  id: string;
  name: string;
}