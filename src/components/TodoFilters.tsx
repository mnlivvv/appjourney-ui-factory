type FilterType = 'all' | 'active' | 'completed';

interface TodoFiltersProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const TodoFilters = ({ filter, onFilterChange }: TodoFiltersProps) => {
  return (
    <div className="todo-filters">
      <button
        className={`todo-filters__button ${filter === 'all' ? 'todo-filters__button--active' : ''}`}
        onClick={() => onFilterChange('all')}
      >
        All
      </button>
      <button
        className={`todo-filters__button ${filter === 'active' ? 'todo-filters__button--active' : ''}`}
        onClick={() => onFilterChange('active')}
      >
        Active
      </button>
      <button
        className={`todo-filters__button ${filter === 'completed' ? 'todo-filters__button--active' : ''}`}
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoFilters;