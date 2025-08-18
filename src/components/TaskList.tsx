import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Task, TaskCategory } from '../types';
import { useTaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { tasks, clearCompletedTasks, filterTasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<TaskCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let result = filterTasks(activeFilter);
    
    // Apply search query if it exists
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(task => 
        task.title.toLowerCase().includes(query) || 
        (task.description && task.description.toLowerCase().includes(query))
      );
    }
    
    // Sort tasks: incomplete first, then by priority, then by due date
    result.sort((a, b) => {
      // First by completion status
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      
      // Then by priority
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      if (a.priority !== b.priority) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      
      // Then by due date (if available)
      if (a.dueDate && b.dueDate) {
        return a.dueDate.getTime() - b.dueDate.getTime();
      }
      
      // Tasks with due dates come before tasks without due dates
      if (a.dueDate && !b.dueDate) return -1;
      if (!a.dueDate && b.dueDate) return 1;
      
      // Finally sort by creation date
      return b.createdAt.getTime() - a.createdAt.getTime();
    });
    
    setFilteredTasks(result);
  }, [tasks, activeFilter, searchQuery, filterTasks]);

  const handleFilterChange = (filter: TaskCategory | 'all') => {
    setActiveFilter(filter);
  };

  const getFilterButtonClass = (filter: string) => {
    return activeFilter === filter 
      ? 'bg-secondary text-white' 
      : 'bg-white text-gray-700 hover:bg-gray-100';
  };

  const getCompletedCount = () => {
    return tasks.filter(task => task.completed).length;
  };

  const hasCompletedTasks = getCompletedCount() > 0;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">My Tasks</h2>
          
          <div className="relative w-full sm:w-64">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks..."
              className="input-field pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4">
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${getFilterButtonClass('all')}`}
          >
            All
          </button>
          <button
            onClick={() => handleFilterChange('personal')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${getFilterButtonClass('personal')}`}
          >
            Personal
          </button>
          <button
            onClick={() => handleFilterChange('work')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${getFilterButtonClass('work')}`}
          >
            Work
          </button>
          <button
            onClick={() => handleFilterChange('shopping')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${getFilterButtonClass('shopping')}`}
          >
            Shopping
          </button>
          <button
            onClick={() => handleFilterChange('health')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${getFilterButtonClass('health')}`}
          >
            Health
          </button>
          <button
            onClick={() => handleFilterChange('education')}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${getFilterButtonClass('education')}`}
          >
            Education
          </button>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600">
            {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''} • {getCompletedCount()} completed
          </p>
          
          {hasCompletedTasks && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={clearCompletedTasks}
              className="text-sm text-red-500 hover:text-red-700 transition-colors"
            >
              Clear completed
            </motion.button>
          )}
        </div>
        
        <div className="space-y-3">
          <AnimatePresence>
            {filteredTasks.length > 0 ? (
              filteredTasks.map(task => (
                <TaskCard key={task.id} task={task} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-6 text-center"
              >
                <p className="text-gray-500">
                  {searchQuery 
                    ? 'No tasks match your search' 
                    : activeFilter === 'all' 
                      ? 'No tasks yet. Add one to get started!' 
                      : `No ${activeFilter} tasks yet. Add one!`
                  }
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TaskList;