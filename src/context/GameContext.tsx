import { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Todo, Character, AchievementType, GameSettings } from '../types/todo';

// Constants
const XP_MULTIPLIER = {
  easy: 10,
  medium: 20,
  hard: 30,
};

const INITIAL_XP_TO_LEVEL = 100;
const XP_LEVEL_INCREASE_FACTOR = 1.5;

// Define the state type
interface GameState {
  todos: Todo[];
  character: Character;
  achievements: AchievementType[];
  settings: GameSettings;
  showLevelUpAnimation: boolean;
}

// Define action types
type GameAction =
  | { type: 'ADD_TODO'; payload: Omit<Todo, 'id' | 'createdAt' | 'completed' | 'xpReward'> }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'LEVEL_UP' }
  | { type: 'SET_AVATAR_STATE'; payload: Character['avatarState'] }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: string }
  | { type: 'TOGGLE_SOUND' }
  | { type: 'TOGGLE_ANIMATIONS' }
  | { type: 'HIDE_LEVEL_UP_ANIMATION' };

// Initial state
const initialAchievements: AchievementType[] = [
  {
    id: 'first-quest',
    title: 'First Quest',
    description: 'Complete your first quest',
    isUnlocked: false,
    icon: '🏆',
  },
  {
    id: 'level-5',
    title: 'Apprentice',
    description: 'Reach level 5',
    isUnlocked: false,
    icon: '⚔️',
  },
  {
    id: 'ten-quests',
    title: 'Seasoned Adventurer',
    description: 'Complete 10 quests',
    isUnlocked: false,
    icon: '🛡️',
  },
  {
    id: 'hard-quest',
    title: 'Dragon Slayer',
    description: 'Complete a hard quest',
    isUnlocked: false,
    icon: '🐉',
  },
];

const initialState: GameState = {
  todos: [],
  character: {
    level: 1,
    xp: 0,
    xpToNextLevel: INITIAL_XP_TO_LEVEL,
    completedQuests: 0,
    avatarState: 'idle',
  },
  achievements: initialAchievements,
  settings: {
    soundEnabled: true,
    animationsEnabled: true,
  },
  showLevelUpAnimation: false,
};

// Create context
const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | undefined>(undefined);

// Calculate XP reward based on difficulty
const calculateXpReward = (difficulty: Todo['difficulty']) => {
  return XP_MULTIPLIER[difficulty];
};

// Reducer function
const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const xpReward = calculateXpReward(action.payload.difficulty);
      const newTodo: Todo = {
        id: uuidv4(),
        ...action.payload,
        completed: false,
        createdAt: new Date(),
        xpReward,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    }

    case 'TOGGLE_TODO': {
      const todoId = action.payload;
      let newState = { ...state };
      
      // Find the todo we're toggling
      const todoToToggle = state.todos.find(todo => todo.id === todoId);
      
      if (!todoToToggle) {
        return state;
      }
      
      // If we're completing the todo
      if (!todoToToggle.completed) {
        const isFirstQuest = state.character.completedQuests === 0;
        const isHardQuest = todoToToggle.difficulty === 'hard';
        const isTenthQuest = state.character.completedQuests === 9;
        
        let newXp = state.character.xp + todoToToggle.xpReward;
        let newLevel = state.character.level;
        let newXpToNextLevel = state.character.xpToNextLevel;
        let showLevelUp = false;
        
        // Check if we should level up
        if (newXp >= state.character.xpToNextLevel) {
          newXp = newXp - state.character.xpToNextLevel;
          newLevel += 1;
          newXpToNextLevel = Math.floor(state.character.xpToNextLevel * XP_LEVEL_INCREASE_FACTOR);
          showLevelUp = true;
        }
        
        // Update achievements if needed
        const updatedAchievements = state.achievements.map((achievement) => {
          if (
            (achievement.id === 'first-quest' && isFirstQuest) ||
            (achievement.id === 'level-5' && newLevel >= 5) ||
            (achievement.id === 'ten-quests' && isTenthQuest) ||
            (achievement.id === 'hard-quest' && isHardQuest)
          ) {
            return { ...achievement, isUnlocked: true };
          }
          return achievement;
        });
        
        // Update todos
        const updatedTodos = state.todos.map(todo => 
          todo.id === todoId 
            ? { ...todo, completed: true, completedAt: new Date() } 
            : todo
        );
        
        return {
          ...state,
          todos: updatedTodos,
          character: {
            ...state.character,
            xp: newXp,
            level: newLevel,
            xpToNextLevel: newXpToNextLevel,
            completedQuests: state.character.completedQuests + 1,
            avatarState: showLevelUp ? 'levelUp' : 'victory',
          },
          achievements: updatedAchievements,
          showLevelUpAnimation: showLevelUp,
        };
      } else {
        // If we're un-completing the todo
        // Update todos
        const updatedTodos = state.todos.map(todo => 
          todo.id === todoId 
            ? { ...todo, completed: false, completedAt: undefined } 
            : todo
        );
        
        return {
          ...state,
          todos: updatedTodos,
          character: {
            ...state.character,
            completedQuests: Math.max(0, state.character.completedQuests - 1),
            avatarState: 'idle',
          },
        };
      }
    }
    }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case 'LEVEL_UP':
      const newLevel = state.character.level + 1;
      return {
        ...state,
        character: {
          ...state.character,
          level: newLevel,
          xp: 0,
          xpToNextLevel: Math.floor(state.character.xpToNextLevel * XP_LEVEL_INCREASE_FACTOR),
          avatarState: 'levelUp',
        },
        achievements: state.achievements.map((achievement) =>
          achievement.id === 'level-5' && newLevel >= 5
            ? { ...achievement, isUnlocked: true }
            : achievement
        ),
        showLevelUpAnimation: true,
      };

    case 'SET_AVATAR_STATE':
      return {
        ...state,
        character: {
          ...state.character,
          avatarState: action.payload,
        },
      };

    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        achievements: state.achievements.map((achievement) =>
          achievement.id === action.payload
            ? { ...achievement, isUnlocked: true }
            : achievement
        ),
      };

    case 'TOGGLE_SOUND':
      return {
        ...state,
        settings: {
          ...state.settings,
          soundEnabled: !state.settings.soundEnabled,
        },
      };

    case 'TOGGLE_ANIMATIONS':
      return {
        ...state,
        settings: {
          ...state.settings,
          animationsEnabled: !state.settings.animationsEnabled,
        },
      };

    case 'HIDE_LEVEL_UP_ANIMATION':
      return {
        ...state,
        showLevelUpAnimation: false,
        character: {
          ...state.character,
          avatarState: 'idle',
        },
      };

    default:
      return state;
  }
};

// Create provider component
export const GameProvider = ({ children }: { children: ReactNode }) => {
  // Try to load state from localStorage
  const loadFromLocalStorage = (): GameState => {
    try {
      const savedState = localStorage.getItem('questTodoGameState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        
        // Convert string dates to Date objects
        const todosWithDates = parsedState.todos.map((todo: any) => ({
          ...todo,
          createdAt: new Date(todo.createdAt),
          completedAt: todo.completedAt ? new Date(todo.completedAt) : undefined,
        }));
        
        return {
          ...parsedState,
          todos: todosWithDates,
          showLevelUpAnimation: false, // Always reset this on load
        };
      }
    } catch (error) {
      console.error('Failed to load state from localStorage:', error);
    }
    return initialState;
  };

  const [state, dispatch] = useReducer(gameReducer, loadFromLocalStorage());

  // Save state to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('questTodoGameState', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state to localStorage:', error);
    }
  }, [state]);

  // Reset avatar state after animations
  useEffect(() => {
    if (state.character.avatarState === 'victory' || state.character.avatarState === 'attack') {
      const timer = setTimeout(() => {
        dispatch({ type: 'SET_AVATAR_STATE', payload: 'idle' });
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [state.character.avatarState]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};