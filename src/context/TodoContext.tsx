import { createContext, useState, useContext, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo, TodoCategory, TodoContextProps } from '../types/todo';

// Create the context
const TodoContext = createContext<TodoContextProps | undefined>(undefined);

// Points system
const POINTS_PER_TODO = 10;
const LEVEL_THRESHOLD = 100;

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [userPoints, setUserPoints] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const userLevel = Math.floor(userPoints / LEVEL_THRESHOLD) + 1;

  const addTodo = (text: string, category: TodoCategory) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      category,
      createdAt: new Date(),
      points: POINTS_PER_TODO
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const completed = !todo.completed;
        
        // If the todo is being marked as completed, add points
        if (completed && !todo.completed) {
          setUserPoints(prev => prev + todo.points);
          
          // Check if user levels up
          const newLevel = Math.floor((userPoints + todo.points) / LEVEL_THRESHOLD) + 1;
          if (newLevel > userLevel) {
            setShowConfetti(true);
            
            // Hide confetti after 5 seconds
            setTimeout(() => {
              setShowConfetti(false);
            }, 5000);
          }
        }
        
        return {
          ...todo,
          completed
        };
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ 
      todos, 
      addTodo, 
      toggleTodo, 
      deleteTodo, 
      userLevel, 
      userPoints, 
      showConfetti, 
      setShowConfetti
    }}>
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