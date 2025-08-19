import { useState } from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import soundManager from '../utils/soundEffects';
import { SoundEffect } from '../types';

interface TodoListProps {
  todos: Todo[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

type FilterType = 'all' | 'active' | 'completed';

export default function TodoList({ todos, onComplete, onDelete }: TodoListProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const handleFilterChange = (newFilter: FilterType) => {
    soundManager.play(SoundEffect.CLICK);
    setFilter(newFilter);
  };
  
  // Apply filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div className="todos-container">
      <div className="todos-header">
        <h2>ACTIVE MISSIONS</h2>
        <div className="todos-count">
          {todos.filter(todo => !todo.completed).length} ACTIVE
        </div>
      </div>
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          ALL MISSIONS
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => handleFilterChange('active')}
        >
          ACTIVE
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => handleFilterChange('completed')}
        >
          COMPLETED
        </button>
      </div>
      
      {filteredTodos.length > 0 ? (
        <div className="todo-items">
          {filteredTodos.map(todo => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          {filter === 'all' ? (
            <>NO MISSIONS AVAILABLE<br />ADD A NEW MISSION TO START</>
          ) : filter === 'active' ? (
            <>ALL MISSIONS COMPLETED!<br />GREAT JOB, PLAYER!</>
          ) : (
            <>NO COMPLETED MISSIONS YET<br />COMPLETE A MISSION TO SEE IT HERE</>
          )}
        </div>
      )}
    </div>
  );
}