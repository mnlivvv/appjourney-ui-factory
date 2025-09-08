import React from 'react';
import type { TaskCategory } from '../../types';
import { useSpring, animated } from 'react-spring';

// Category options with icons and colors
const categoryOptions: { value: TaskCategory | 'all'; label: string; icon: string; color: string }[] = [
  { value: 'all', label: 'All', icon: '✨', color: 'from-purple-500 to-pink-500' },
  { value: 'work', label: 'Work', icon: '💼', color: 'from-blue-400 to-blue-600' },
  { value: 'personal', label: 'Personal', icon: '🏠', color: 'from-purple-400 to-purple-600' },
  { value: 'shopping', label: 'Shopping', icon: '🛒', color: 'from-green-400 to-green-600' },
  { value: 'health', label: 'Health', icon: '💪', color: 'from-red-400 to-red-600' },
  { value: 'learning', label: 'Learning', icon: '📚', color: 'from-yellow-400 to-yellow-600' },
  { value: 'other', label: 'Other', icon: '✨', color: 'from-gray-400 to-gray-600' }
];

interface CategoryFilterProps {
  activeFilter: TaskCategory | 'all';
  onFilterChange: (filter: TaskCategory | 'all') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeFilter, 
  onFilterChange 
}) => {
  // Generate animation for each filter button
  const generateButtonSpring = (isActive: boolean) => useSpring({
    scale: isActive ? 1.05 : 1,
    config: { tension: 300, friction: 10 }
  });

  return (
    <div className="overflow-x-auto pb-2 -mx-4 px-4">
      <div className="flex space-x-2">
        {categoryOptions.map((category) => {
          const isActive = activeFilter === category.value;
          const buttonSpring = generateButtonSpring(isActive);
          
          return (
            <animated.button
              key={category.value}
              style={buttonSpring}
              className={`
                py-2 px-4 rounded-full text-sm font-medium flex items-center whitespace-nowrap
                ${isActive 
                  ? `bg-gradient-to-r ${category.color} text-white shadow-md` 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}
              `}
              onClick={() => onFilterChange(category.value)}
            >
              <span className="mr-1.5">{category.icon}</span>
              {category.label}
            </animated.button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;