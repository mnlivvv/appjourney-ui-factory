import { TaskCategory } from '../types';
import workIcon from '../assets/icons/work.svg';
import homeIcon from '../assets/icons/home.svg';
import fitnessIcon from '../assets/icons/fitness.svg';
import shoppingIcon from '../assets/icons/shopping.svg';
import otherIcon from '../assets/icons/other.svg';
import '../styles/CategoryFilter.css';

interface CategoryFilterProps {
  selectedCategory: TaskCategory | 'all';
  onSelectCategory: (category: TaskCategory | 'all') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onSelectCategory 
}) => {
  const categories: { id: TaskCategory | 'all', label: string, icon?: string }[] = [
    { id: 'all', label: 'All Tasks' },
    { id: 'home', label: 'Home', icon: homeIcon },
    { id: 'work', label: 'Work', icon: workIcon },
    { id: 'fitness', label: 'Fitness', icon: fitnessIcon },
    { id: 'shopping', label: 'Shopping', icon: shoppingIcon },
    { id: 'other', label: 'Other', icon: otherIcon },
  ];
  
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-filter-item ${selectedCategory === category.id ? 'selected' : ''}`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.icon ? (
            <img src={category.icon} alt={category.label} className="category-icon" />
          ) : (
            <div className="all-icon">
              <span>All</span>
            </div>
          )}
          <span className="category-label">{category.label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;