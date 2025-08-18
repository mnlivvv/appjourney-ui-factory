import React from 'react';
import CategoryBadge from './CategoryBadge';

interface HeaderProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['All', 'Work', 'Personal', 'Shopping', 'Urgent', 'Later'];

  const handleCategoryClick = (category: string) => {
    if (category === 'All') {
      setSelectedCategory(null);
    } else if (selectedCategory === category) {
      setSelectedCategory(null); // Clicking the selected category again deselects it
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <header style={{ marginBottom: '20px' }}>
      <h1 
        className="handwritten" 
        style={{ 
          color: '#4a4a4a', 
          textAlign: 'center', 
          marginBottom: '10px',
          fontSize: '2.5rem',
          transform: 'rotate(-1deg)'
        }}
      >
        My Notebook
      </h1>
      
      <div 
        style={{ 
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '15px'
        }}
      >
        {categories.map(category => (
          <CategoryBadge 
            key={category}
            category={category} 
            onClick={() => handleCategoryClick(category)}
            isSelected={category === 'All' ? selectedCategory === null : category === selectedCategory}
          />
        ))}
      </div>
      
      <div className="wavy-separator" style={{ margin: '20px 0' }}></div>
    </header>
  );
};

export default Header;