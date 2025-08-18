import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Todo, Category } from '../types';

// Default categories
const DEFAULT_CATEGORIES: Category[] = [
  { id: '1', name: 'Personal', color: 'var(--tab-color-1)' },
  { id: '2', name: 'Work', color: 'var(--tab-color-2)' },
  { id: '3', name: 'Shopping', color: 'var(--tab-color-3)' },
  { id: '4', name: 'Ideas', color: 'var(--tab-color-4)' },
];

interface TodoContextType {
  todos: Todo[];
  categories: Category[];
  currentCategory: string;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setCurrentCategory: (categoryId: string) => void;
  addCategory: (name: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  // Load todos from localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
    }
    return [];
  });

  // Load categories from localStorage or use defaults
  const [categories, setCategories] = useState<Category[]>(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      return JSON.parse(savedCategories);
    }
    return DEFAULT_CATEGORIES;
  });

  const [currentCategory, setCurrentCategory] = useState<string>(categories[0]?.id || '1');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save categories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  // Function to add a new todo
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      category: currentCategory,
      createdAt: new Date(),
    };

    // Play page flip sound
    playSound('paper');
    
    setTodos([...todos, newTodo]);
  };

  // Function to toggle a todo's completed status
  const toggleTodo = (id: string) => {
    // Play pencil scratch sound
    playSound('pencil');
    
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id: string) => {
    // Play paper crumple sound
    playSound('crumple');
    
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to add a new category
  const addCategory = (name: string) => {
    const newCategory: Category = {
      id: uuidv4(),
      name,
      color: `hsl(${Math.random() * 360}, 70%, 80%)`,
    };
    
    setCategories([...categories, newCategory]);
    setCurrentCategory(newCategory.id);
  };

  // Function to play sound effects
  const playSound = (type: 'paper' | 'pencil' | 'crumple' | 'flip') => {
    // Create audio element
    const audio = new Audio();
    
    // Set source based on type
    switch (type) {
      case 'paper':
        audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFRodW1waW5nIFNvdW5kIEVmZmVjdABUUEUxAAAAFABUaHVtcCBTb3VuZCBFZmZlY3QAVEFMQgAAABMAVGh1bXAgU291bmQgRWZmZWN0AAAA/+NAwAAAAnEkgCpnE1MClSAaC2EzCJgEQOoYiAGAw8+VH/+ZP/+cj//+QBgJwMJAcD4cIAgH/////8QBgP//1AGEI4f//Q6gJALDwP//lQmH/9Qih4dCAAAD//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vL';
        break;
      case 'pencil':
        audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFBlbmNpbCBTY3JhdGNoIFNvdW5kIEVmZmVjdABUUEUxAAAAFABQZW5jaWwgU2NyYXRjaCBTb3VuZABUQUxCAAAAEwBQZW5jaWwgU2NyYXRjaCBTb3VuZAAAAP/jQMAAAANRJIAqZxOTApUgGgthMwiYBEDqGIgBgMPPlR//mT//nI///kAYCcDCQHA+HCAIB/////xAGA///UAYQ6gCAcP//0OoCQCw8D//5UJh//UIoeHQgAAA//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vLw==';
        break;
      case 'crumple':
        audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFBhcGVyIENydW1wbGUgU291bmQgRWZmZWN0AFRQRTEANAAAFABQYXV0aG9yIFNvdW5kIEVmZmVjdABUQUxCAAAAEwBQYXBlciBDcnVtcGxlIFNvdW5kAAAA/+NAwAAAAnEkgCpnE1MClSAaC2EzCJgEQOoYiAGAw8+VH/+ZP/+cj//+QBgJwMJAcD4cIAgH/////8QBgP//1AGEI4f//Q6gJALDwP//lQmH/9Qih4dCAAAD//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vLw==';
        break;
      case 'flip':
        audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFBhZ2UgRmxpcCBTb3VuZCBFZmZlY3QAVFBFMQAAABQAUGF1dGhvciBTb3VuZCBFZmZlY3QAVEFMQgAAABMAUGFnZSBGbGlwIFNvdW5kAAAA/+NAwAAAAnEkgCpnE1MClSAaC2EzCJgEQOoYiAGAw8+VH/+ZP/+cj//+QBgJwMJAcD4cIAgH/////8QBgP//1AGEI4f//Q6gJALDwP//lQmH/9Qih4dCAAAD//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vLw==';
        break;
      default:
        return;
    }
    
    // Set volume and play
    audio.volume = 0.3;
    audio.play().catch(err => console.error('Error playing sound:', err));
    
    // Create visual effect
    const effect = document.createElement('div');
    effect.className = 'sound-effect';
    document.body.appendChild(effect);
    
    // Remove effect after animation
    setTimeout(() => {
      document.body.removeChild(effect);
    }, 1000);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        categories,
        currentCategory,
        addTodo,
        toggleTodo,
        deleteTodo,
        setCurrentCategory,
        addCategory,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};