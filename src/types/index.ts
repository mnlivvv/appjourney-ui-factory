export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: Category;
  createdAt: Date;
}

export type Category = 'work' | 'personal' | 'shopping' | 'health' | 'other';

export interface CategoryColorMap {
  [key: string]: string;
}