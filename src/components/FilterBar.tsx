import { motion } from 'framer-motion';

interface FilterBarProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  activeCount: number;
  completedCount: number;
  totalCount: number;
}

const FilterBar = ({ 
  filter, 
  setFilter, 
  activeCount, 
  completedCount, 
  totalCount 
}: FilterBarProps) => {
  return (
    <div className="filter-bar">
      <div className="task-counts">
        <span className="count-number">{totalCount}</span> 
        <span className="count-label">Total</span>
        
        <span className="count-divider">•</span>
        
        <span className="count-number">{activeCount}</span> 
        <span className="count-label">Active</span>
        
        <span className="count-divider">•</span>
        
        <span className="count-number">{completedCount}</span> 
        <span className="count-label">Completed</span>
      </div>
      
      <div className="filter-options">
        <motion.button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          All
        </motion.button>
        
        <motion.button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Active
        </motion.button>
        
        <motion.button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Completed
        </motion.button>
      </div>
    </div>
  );
};

export default FilterBar;