import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

type FilterType = 'all' | 'active' | 'completed';
type SortType = 'newest' | 'oldest' | 'priority';

const TodoList = () => {
  const { todos } = useTodo();
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('newest');

  // Filter todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Sort todos
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sort === 'newest') return b.createdAt.getTime() - a.createdAt.getTime();
    if (sort === 'oldest') return a.createdAt.getTime() - b.createdAt.getTime();
    if (sort === 'priority') {
      const priorityValues = { high: 3, medium: 2, low: 1 };
      return (
        priorityValues[b.priority] - priorityValues[a.priority] ||
        b.createdAt.getTime() - a.createdAt.getTime()
      );
    }
    return 0;
  });

  // Count completed and active todos
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <div className="todo-stats">
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>

        <div className="todo-filters">
          <div className="filter-group">
            <label>Show:</label>
            <div className="button-group">
              <button
                onClick={() => setFilter('all')}
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('active')}
                className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              >
                Completed
              </button>
            </div>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <div className="button-group">
              <button
                onClick={() => setSort('newest')}
                className={`filter-btn ${sort === 'newest' ? 'active' : ''}`}
              >
                Newest
              </button>
              <button
                onClick={() => setSort('oldest')}
                className={`filter-btn ${sort === 'oldest' ? 'active' : ''}`}
              >
                Oldest
              </button>
              <button
                onClick={() => setSort('priority')}
                className={`filter-btn ${sort === 'priority' ? 'active' : ''}`}
              >
                Priority
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="todo-list">
        {sortedTodos.length > 0 ? (
          sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              priority={todo.priority}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>
              {filter === 'all'
                ? 'No tasks yet. Add your first task above!'
                : filter === 'active'
                ? 'No active tasks. Great job!'
                : 'No completed tasks yet.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;