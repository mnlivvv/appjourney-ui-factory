import React from 'react';

interface CategoryBadgeProps {
  category: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ 
  category, 
  onClick,
  isSelected = false
}) => {
  // Get color based on category
  const getCategoryColor = () => {
    switch (category.toLowerCase()) {
      case 'work':
        return { bg: '#a2d2ff', border: '#4287f5' }; // Blue
      case 'personal':
        return { bg: '#ffafcc', border: '#f54242' }; // Pink
      case 'shopping':
        return { bg: '#a8e6cf', border: '#42f542' }; // Green
      case 'urgent':
        return { bg: '#ffd6a5', border: '#f5a742' }; // Orange
      case 'later':
        return { bg: '#d0a8e6', border: '#9942f5' }; // Purple
      default:
        return { bg: '#e5e5e5', border: '#a0a0a0' }; // Gray
    }
  };

  const colors = getCategoryColor();
  
  // Random slight rotation for hand-drawn effect
  const rotation = Math.floor(Math.random() * 4) - 2;

  return (
    <span 
      onClick={onClick}
      style={{ 
        display: 'inline-block',
        padding: '3px 8px',
        margin: '0 5px',
        backgroundColor: colors.bg,
        borderRadius: '20px 5px 20px 5px/5px 20px 5px 20px',
        border: `1.5px solid ${colors.border}`,
        fontFamily: "'Comic Sans MS', 'Marker Felt', cursive",
        fontSize: '0.85rem',
        color: '#4a4a4a',
        transform: `rotate(${rotation}deg)`,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        boxShadow: isSelected ? `0 0 0 2px ${colors.border}` : 'none',
        opacity: isSelected ? 1 : 0.9,
      }}
      className={isSelected ? 'wobble' : ''}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;