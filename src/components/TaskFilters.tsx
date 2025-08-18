import React from 'react';

interface TaskFiltersProps {
  showCompleted: boolean;
  setShowCompleted: (show: boolean) => void;
  sortOrder: 'default' | 'alphabetical';
  setSortOrder: (order: 'default' | 'alphabetical') => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({
  showCompleted,
  setShowCompleted,
  sortOrder,
  setSortOrder
}) => {
  return (
    <div className="filters-container" style={{ marginBottom: '20px' }}>
      <div className="filter-options" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="filter-group">
          <label className="handwritten" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input 
              type="checkbox" 
              className="hand-drawn-checkbox"
              checked={showCompleted}
              onChange={() => setShowCompleted(!showCompleted)}
            />
            <span>Show completed tasks</span>
          </label>
        </div>
        
        <div className="sort-group">
          <label className="handwritten" style={{ marginRight: '10px', color: '#4a4a4a' }}>
            Sort by:
          </label>
          <select
            className="hand-drawn-input"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'default' | 'alphabetical')}
            style={{ 
              padding: '5px 10px',
              background: 'transparent',
              border: '2px solid #4a4a4a',
              borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
              fontFamily: "'Comic Sans MS', 'Marker Felt', cursive",
              color: '#4a4a4a',
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234a4a4a%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.7rem top 50%',
              backgroundSize: '0.65rem auto',
              paddingRight: '1.5rem'
            }}
          >
            <option value="default">Date added</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TaskFilters;