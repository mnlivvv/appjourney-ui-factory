import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Todo, SortOption, FilterOption } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, updatedTodo: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  filterOption: FilterOption;
  setFilterOption: (option: FilterOption) => void;
  sortOption: SortOption;
  setSortOption: (option: SortOption) => void;
  filteredTodos: Todo[];
  viewMode: 'list' | 'timeline';
  setViewMode: (mode: 'list' | 'timeline') => void;
  clearCompletedTodos: () => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        console.error('Failed to parse todos from localStorage', e);
        return [];
      }
    }
    return [];
  });
  
  const [filterOption, setFilterOption] = useState<FilterOption>('all');
  const [sortOption, setSortOption] = useState<SortOption>('createdAt');
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('list');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (title: string) => {
    if (!title.trim()) return;
    
    const now = new Date().toISOString();
    const newTodo: Todo = {
      id: uuidv4(),
      title: title.trim(),
      completed: false,
      createdAt: now,
      updatedAt: now
    };
    
    setTodos([...todos, newTodo]);
  };

  // Update an existing todo
  const updateTodo = (id: string, updatedTodo: Partial<Todo>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            ...updatedTodo,
            updatedAt: new Date().toISOString()
          };
        }
        return todo;
      })
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle a todo's completed status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
            updatedAt: new Date().toISOString()
          };
        }
        return todo;
      })
    );
  };

  // Clear all completed todos
  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Get filtered and sorted todos
  const getFilteredTodos = (): Todo[] => {
    // First filter
    let filtered = [...todos];
    if (filterOption === 'active') {
      filtered = filtered.filter((todo) => !todo.completed);
    } else if (filterOption === 'completed') {
      filtered = filtered.filter((todo) => todo.completed);
    }

    // Then sort
    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'dueDate':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          const aPriority = a.priority ? priorityOrder[a.priority] : 3;
          const bPriority = b.priority ? priorityOrder[b.priority] : 3;
          return aPriority - bPriority;
        case 'createdAt':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
  };

  const filteredTodos = getFilteredTodos();

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleTodo,
        filterOption,
        setFilterOption,
        sortOption,
        setSortOption,
        filteredTodos,
        viewMode,
        setViewMode,
        clearCompletedTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}