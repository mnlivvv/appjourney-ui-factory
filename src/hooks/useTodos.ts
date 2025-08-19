import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DropResult } from 'react-beautiful-dnd';
import { Todo } from '../types';
import { CARD_COLORS } from '../utils/constants';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  
  const [inputValue, setInputValue] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = useCallback(() => {
    if (inputValue.trim() === '') return;
    
    const randomColorIndex = Math.floor(Math.random() * CARD_COLORS.length);
    
    const newTodo: Todo = {
      id: uuidv4(),
      text: inputValue,
      completed: false,
      color: CARD_COLORS[randomColorIndex]
    };
    
    setTodos(prevTodos => [...prevTodos, newTodo]);
    setInputValue('');
  }, [inputValue]);

  // Toggle todo completion
  const toggleTodo = useCallback((id: string) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(todo => {
        if (todo.id === id) {
          // If we're marking as completed, trigger confetti
          if (!todo.completed) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);
          }
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return updatedTodos;
    });
  }, []);

  // Delete todo
  const deleteTodo = useCallback((id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  }, []);

  // Handle drag and drop
  const handleDragEnd = useCallback((result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setTodos(items);
  }, [todos]);

  return {
    todos,
    inputValue,
    setInputValue,
    showConfetti,
    addTodo,
    toggleTodo,
    deleteTodo,
    handleDragEnd
  };
}