import { useState } from 'react';
import '../styles/AddTodo.css';

interface AddTodoProps {
  onAddTodo: (text: string, category: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('personal');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      onAddTodo(text.trim(), category);
      setText('');
      setIsExpanded(false);
    }
  };
  
  const categoryOptions = [
    { value: 'personal', label: 'Personal 🏠' },
    { value: 'work', label: 'Work 💼' },
    { value: 'shopping', label: 'Shopping 🛒' },
    { value: 'health', label: 'Health ❤️' },
    { value: 'education', label: 'Education 📚' },
    { value: 'other', label: 'Other ✨' }
  ];

  return (
    <div className={`add-todo-container ${isExpanded ? 'expanded' : ''}`}>
      {!isExpanded ? (
        <button 
          className="add-todo-button"
          onClick={() => setIsExpanded(true)}
        >
          + Add New Task
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="add-todo-form">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What do you need to do?"
            className="todo-input"
            autoFocus
          />
          
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categoryOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <div className="form-actions">
            <button 
              type="button" 
              onClick={() => setIsExpanded(false)}
              className="cancel-button"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="submit-button"
              disabled={!text.trim()}
            >
              Add Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTodo;