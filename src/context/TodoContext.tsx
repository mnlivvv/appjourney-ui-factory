import { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the Todo type
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  color: string; // For different colored sticky notes
  pinned: boolean; // For push pin effect
  position?: { x: number; y: number }; // For draggable effect
}

// Define the context type
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  pinTodo: (id: string) => void;
  updateTodoPosition: (id: string, position: { x: number; y: number }) => void;
}

// Create the context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Generate a random pastel color
const getRandomColor = () => {
  const colors = [
    '#ffc9c9', // Light red
    '#ffe3c9', // Light orange
    '#fff4c9', // Light yellow
    '#e3ffc9', // Light green
    '#c9f4ff', // Light blue
    '#d9c9ff', // Light purple
    '#ffc9f0', // Light pink
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Provider component
export function TodoProvider({ children }: { children: ReactNode }) {
  // Load todos from localStorage if available
  const loadTodos = (): Todo[] => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      // Parse the JSON and convert string dates back to Date objects
      return JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
    }
    return [];
  };

  const [todos, setTodos] = useState<Todo[]>(loadTodos);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string) => {
    if (text.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text,
        completed: false,
        createdAt: new Date(),
        color: getRandomColor(),
        pinned: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Pin/unpin a todo
  const pinTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
      )
    );
  };

  // Update todo position (for drag functionality)
  const updateTodoPosition = (id: string, position: { x: number; y: number }) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, position } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        pinTodo,
        updateTodoPosition,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// Custom hook to use the todo context
export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}