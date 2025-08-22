import { Filter } from '../types';

interface TodoFilterProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  activeCount: number;
  totalCount: number;
}

const TodoFilter = ({ filter, onFilterChange, activeCount, totalCount }: TodoFilterProps) => {
  return (
    <div className="todo-filters">
      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Active
        </button>
        <button
          className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Completed
        </button>
      </div>
      
      <div className="todo-count">
        <span>{activeCount}</span> of <span>{totalCount}</span> tasks remaining
      </div>
    </div>
  );
};

export default TodoFilter;