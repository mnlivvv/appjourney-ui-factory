export type TodoCategory = 'work' | 'personal' | 'shopping' | 'health' | 'learning';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: TodoCategory;
  createdAt: Date;
  points: number;
}

export interface TodoContextProps {
  todos: Todo[];
  addTodo: (text: string, category: TodoCategory) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  userLevel: number;
  userPoints: number;
  showConfetti: boolean;
  setShowConfetti: (show: boolean) => void;
}