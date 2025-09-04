import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define Todo interface
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

// Define context type
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, priority: 'low' | 'medium' | 'high') => void;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  changePriority: (id: string, priority: 'low' | 'medium' | 'high') => void;
}

// Create context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Provider props
interface TodoProviderProps {
  children: ReactNode;
}

// Provider component
export const TodoProvider = ({ children }: TodoProviderProps) => {
  // Load todos from localStorage if available
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // Parse saved todos and convert date strings back to Date objects
        return JSON.parse(savedTodos).map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      } catch (error) {
        console.error('Error parsing saved todos:', error);
        return [];
      }
    }
    return [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string, priority: 'low' | 'medium' | 'high') => {
    if (text.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text,
        completed: false,
        priority,
        createdAt: new Date()
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle todo completion status
  const toggleComplete = (id: string) => {
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

  // Edit a todo's text
  const editTodo = (id: string, text: string) => {
    if (text.trim()) {
      setTodos(
        todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
      );
    }
  };

  // Change a todo's priority
  const changePriority = (id: string, priority: 'low' | 'medium' | 'high') => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, priority } : todo))
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleComplete,
        deleteTodo,
        editTodo,
        changePriority
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the todo context
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};