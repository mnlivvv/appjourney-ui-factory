import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Category } from '../types';

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, category: Category) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  reorderTodos: (startIndex: number, endIndex: number) => void;
  editTodo: (id: string, text: string, category: Category) => void;
  clearCompleted: () => void;
  filteredTodos: Todo[];
  setFilter: (filter: string) => void;
  filter: string;
  setCategoryFilter: (category: Category | 'all') => void;
  categoryFilter: Category | 'all';
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  // Try to get todos from local storage, or start with empty array
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // Parse the saved todos and convert createdAt strings back to Date objects
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (e) {
        console.error('Failed to parse todos from localStorage', e);
        return [];
      }
    }
    return [];
  });
  
  const [filter, setFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string, category: Category) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          text: text.trim(),
          completed: false,
          category,
          createdAt: new Date()
        }
      ]);
    }
  };

  // Toggle a todo's completed status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Reorder todos (for drag and drop)
  const reorderTodos = (startIndex: number, endIndex: number) => {
    const result = Array.from(todos);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTodos(result);
  };

  // Edit an existing todo
  const editTodo = (id: string, text: string, category: Category) => {
    if (text.trim()) {
      setTodos(
        todos.map(todo => 
          todo.id === id ? { ...todo, text: text.trim(), category } : todo
        )
      );
    }
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Apply filters to todos
  const filteredTodos = todos.filter(todo => {
    // First apply the completion filter
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    
    // Then apply the category filter if it's not 'all'
    return categoryFilter === 'all' ? true : todo.category === categoryFilter;
  });

  const value = {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    reorderTodos,
    editTodo,
    clearCompleted,
    filteredTodos,
    setFilter,
    filter,
    setCategoryFilter,
    categoryFilter
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}