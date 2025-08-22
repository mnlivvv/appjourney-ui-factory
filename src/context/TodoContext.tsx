import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo, GameState } from '../types/todo';
import { TodoCategory } from '../types/todo';

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string, category: TodoCategory) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  gameState: GameState;
  getMotivationalMessage: () => string;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

interface TodoProviderProps {
  children: ReactNode;
}

// Motivational messages for different scenarios
const COMPLETION_MESSAGES = [
  "Great job! You're crushing it! 🎉",
  "Task complete! You're on fire today! 🔥",
  "Awesome work! Keep the momentum going! ⚡",
  "One more done! You're unstoppable! 💪",
  "Way to go! You're making excellent progress! 🌟"
];

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      // Convert string dates back to Date objects
      return JSON.parse(savedTodos, (key, value) => {
        if (key === 'createdAt' || key === 'completedAt') {
          return value ? new Date(value) : null;
        }
        return value;
      });
    }
    return [];
  });
  
  const [gameState, setGameState] = useState<GameState>(() => {
    const savedGameState = localStorage.getItem('gameState');
    if (savedGameState) {
      return JSON.parse(savedGameState);
    }
    return {
      level: 1,
      points: 0,
      streak: 0,
      tasksCompleted: 0
    };
  });

  // Save todos and game state to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  const addTodo = (text: string, category: TodoCategory) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        text,
        completed: false,
        category,
        createdAt: new Date()
      }
    ]);
  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        // When completing a todo
        if (!todo.completed) {
          // Update game state
          const newPoints = gameState.points + 10;
          const newTasksCompleted = gameState.tasksCompleted + 1;
          const newStreak = gameState.streak + 1;
          
          // Level up every 10 tasks
          let newLevel = gameState.level;
          if (newTasksCompleted % 10 === 0) {
            newLevel += 1;
          }
          
          setGameState({
            level: newLevel,
            points: newPoints,
            streak: newStreak,
            tasksCompleted: newTasksCompleted
          });
          
          // Play sound (in actual implementation)
          // const audio = new Audio('/complete-sound.mp3');
          // audio.play();
          
          return { ...todo, completed: true, completedAt: new Date() };
        } 
        // When uncompleting a todo
        else {
          return { ...todo, completed: false, completedAt: undefined };
        }
      }
      return todo;
    });
    
    setTodos(newTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getMotivationalMessage = (): string => {
    // Get a random message based on current state
    const randomIndex = Math.floor(Math.random() * COMPLETION_MESSAGES.length);
    return COMPLETION_MESSAGES[randomIndex];
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        gameState,
        getMotivationalMessage
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