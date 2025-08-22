import { useState } from 'react';
import { useGame } from '../context/GameContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

type FilterType = 'all' | 'active' | 'completed';

const TodoList = () => {
  const { state } = useGame();
  const { todos } = state;
  const [filter, setFilter] = useState<FilterType>('all');

  // Filter todos based on selected filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Calculate completion stats
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const completionRate = totalTodos > 0 
    ? Math.round((completedTodos / totalTodos) * 100) 
    : 0;

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h2 className="quest-title">Quest Journal</h2>
        <div className="todo-stats">
          <div className="completion-rate">
            <span className="stat-value">{completionRate}%</span>
            <span className="stat-label">completed</span>
          </div>
          <div className="todo-counts">
            <span className="stat-value">{completedTodos}/{totalTodos}</span>
            <span className="stat-label">quests</span>
          </div>
        </div>
      </div>
      
      <div className="todo-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Quests
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>
      
      <div className="todos-container">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="empty-state">
            {filter === 'all' && (
              <>
                <p className="empty-message">Your quest journal is empty!</p>
                <p className="empty-action">Add a new quest to begin your adventure.</p>
              </>
            )}
            {filter === 'active' && (
              <>
                <p className="empty-message">No active quests!</p>
                <p className="empty-action">All your quests are completed or add new ones.</p>
              </>
            )}
            {filter === 'completed' && (
              <>
                <p className="empty-message">No completed quests yet!</p>
                <p className="empty-action">Complete some quests to see them here.</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;