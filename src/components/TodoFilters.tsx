import { useTodos } from '../context/TodoContext';
import { FilterOption, SortOption } from '../types';

export const TodoFilters = () => {
  const { 
    filterOption, 
    setFilterOption, 
    sortOption, 
    setSortOption,
    viewMode,
    setViewMode,
    clearCompletedTodos,
    todos
  } = useTodos();

  const hasCompletedTodos = todos.some(todo => todo.completed);

  return (
    <div className="todo-controls fade-in">
      <div className="filter-options">
        <button 
          className={`filter-btn ${filterOption === 'all' ? 'active' : ''}`}
          onClick={() => setFilterOption('all')}
          aria-label="Show all tasks"
        >
          All
        </button>
        <button 
          className={`filter-btn ${filterOption === 'active' ? 'active' : ''}`}
          onClick={() => setFilterOption('active')}
          aria-label="Show active tasks"
        >
          Active
        </button>
        <button 
          className={`filter-btn ${filterOption === 'completed' ? 'active' : ''}`}
          onClick={() => setFilterOption('completed')}
          aria-label="Show completed tasks"
        >
          Completed
        </button>
        {hasCompletedTodos && (
          <button 
            className="filter-btn clear-btn"
            onClick={clearCompletedTodos}
            aria-label="Clear completed tasks"
          >
            Clear completed
          </button>
        )}
      </div>
      
      <div className="view-options">
        <div className="view-selector">
          <button 
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            List
          </button>
          <button 
            className={`view-btn ${viewMode === 'timeline' ? 'active' : ''}`}
            onClick={() => setViewMode('timeline')}
            aria-label="Timeline view"
          >
            Timeline
          </button>
        </div>
        
        <select 
          className="sort-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as SortOption)}
          aria-label="Sort by"
        >
          <option value="createdAt">Sort: Recent</option>
          <option value="title">Sort: Name</option>
          <option value="dueDate">Sort: Due date</option>
          <option value="priority">Sort: Priority</option>
        </select>
      </div>
    </div>
  );
};