import React, { useState } from 'react';
import type { Category, Task } from '../types';
import './TodoForm.css';

interface TodoFormProps {
  addTask: (task: Task) => void;
  categories: Category[];
}

const TodoForm: React.FC<TodoFormProps> = ({ addTask, categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]?.id || '');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (title.trim() === '') return;
    
    const newTask: Task = {
      id: '', // Will be set by the parent component
      title: title.trim(),
      description: description.trim(),
      completed: false,
      category,
      priority,
      dueDate: dueDate || undefined,
      createdAt: '' // Will be set by the parent component
    };
    
    addTask(newTask);
    
    // Reset form
    setTitle('');
    setDescription('');
    setCategory(categories[0]?.id || '');
    setPriority('medium');
    setDueDate('');
    setIsExpanded(false);
  };

  const handleTitleFocus = () => {
    setIsExpanded(true);
  };

  const getCategoryColor = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.color || '#ccc';
  };

  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-header">
          <h2>Add New Task</h2>
          {isExpanded && (
            <button 
              type="button" 
              className="collapse-btn"
              onClick={() => setIsExpanded(false)}
            >
              ↑
            </button>
          )}
        </div>
        
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={handleTitleFocus}
          className="title-input"
        />
        
        {isExpanded && (
          <div className="expanded-form">
            <textarea
              placeholder="Add description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description-input"
            />
            
            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <div className="category-selector">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      className={`category-btn ${category === cat.id ? 'active' : ''}`}
                      style={{ 
                        '--category-color': cat.color,
                        backgroundColor: category === cat.id ? cat.color : 'transparent',
                        color: category === cat.id ? '#fff' : 'inherit'
                      } as React.CSSProperties}
                      onClick={() => setCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>Priority</label>
                <div className="priority-selector">
                  <button
                    type="button"
                    className={`priority-btn low ${priority === 'low' ? 'active' : ''}`}
                    onClick={() => setPriority('low')}
                  >
                    Low
                  </button>
                  <button
                    type="button"
                    className={`priority-btn medium ${priority === 'medium' ? 'active' : ''}`}
                    onClick={() => setPriority('medium')}
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className={`priority-btn high ${priority === 'high' ? 'active' : ''}`}
                    onClick={() => setPriority('high')}
                  >
                    High
                  </button>
                </div>
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Due Date (Optional)</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="date-input"
                />
              </div>
            </div>
          </div>
        )}
        
        <button 
          type="submit" 
          className="add-task-btn"
          style={{ 
            backgroundColor: category ? getCategoryColor(category) : '#4ECDC4',
            '--hover-color': category ? getCategoryColor(category) : '#4ECDC4' 
          } as React.CSSProperties}
          disabled={!title.trim()}
        >
          {isExpanded ? 'Add Task' : '+'}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;