import { useState } from 'react';
import { useTodo } from '../context/TodoContext';
import '../styles/CategoryTabs.css';

const CategoryTabs = () => {
  const { categories, currentCategory, setCurrentCategory, addCategory } = useTodo();
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName.trim());
      setNewCategoryName('');
      setIsAddingCategory(false);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    // Play page flip sound
    const audio = new Audio();
    audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFBhZ2UgRmxpcCBTb3VuZCBFZmZlY3QAVFBFMQAAABQAUGF1dGhvciBTb3VuZCBFZmZlY3QAVEFMQgAAABMAUGFnZSBGbGlwIFNvdW5kAAAA/+NAwAAAAnEkgCpnE1MClSAaC2EzCJgEQOoYiAGAw8+VH/+ZP/+cj//+QBgJwMJAcD4cIAgH/////8QBgP//1AGEI4f//Q6gJALDwP//lQmH/9Qih4dCAAAD//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vLw==';
    audio.volume = 0.3;
    audio.play().catch(err => console.error('Error playing sound:', err));
    
    setCurrentCategory(categoryId);
  };

  return (
    <div className="category-tabs">
      {categories.map((category, index) => (
        <div
          key={category.id}
          className={`tab ${currentCategory === category.id ? 'active' : ''}`}
          style={{ 
            backgroundColor: category.color,
            top: `${70 + index * 40}px`
          }}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.name}
        </div>
      ))}
      
      {isAddingCategory ? (
        <div className="tab new-category-tab" style={{ top: `${70 + categories.length * 40}px` }}>
          <input
            type="text"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
            placeholder="Category name"
            autoFocus
          />
          <div className="new-category-actions">
            <button onClick={handleAddCategory}>Save</button>
            <button onClick={() => setIsAddingCategory(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div 
          className="tab add-tab"
          style={{ top: `${70 + categories.length * 40}px` }}
          onClick={() => setIsAddingCategory(true)}
        >
          + Add Category
        </div>
      )}
    </div>
  );
};

export default CategoryTabs;