import { useState } from 'react';
import type { FormEvent } from 'react';
import cloudIcon from '../assets/images/cloud.png';

interface TodoFormProps {
  onAdd: (text: string, category: string) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('');
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Predefined categories
  const categories = ['Work', 'Personal', 'Shopping', 'Health', 'Fun'];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;
    
    onAdd(text.trim(), category);
    setText('');
    // Keep the category selected for consecutive additions
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div className="category-selector">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="">None</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        type="submit" 
        className="add-button"
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        style={{
          transform: isButtonHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
        }}
      >
        <img src={cloudIcon} alt="Add" className="cloud-icon" />
        <span className="add-text">Add</span>
      </button>
    </form>
  );
};

export default TodoForm;