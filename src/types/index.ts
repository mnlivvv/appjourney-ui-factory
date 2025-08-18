export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}