import React, { useState } from 'react';
import type { Task, Category } from '../types';
import './TodoItem.css';

interface TodoItemProps {
  task: Task;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
  categories: Category[];
}

const TodoItem: React.FC<TodoItemProps> = ({ 
  task, 
  toggleTask, 
  deleteTask, 
  updateTask,
  categories
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || '');
  const [editedCategory, setEditedCategory] = useState(task.category);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate || '');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    setIsExpanded(true);
  };

  const handleUpdate = () => {
    if (editedTitle.trim() === '') return;
    
    updateTask({
      ...task,
      title: editedTitle,
      description: editedDescription,
      category: editedCategory,
      priority: editedPriority,
      dueDate: editedDueDate || undefined
    });
    
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description || '');
    setEditedCategory(task.category);
    setEditedPriority(task.priority);
    setEditedDueDate(task.dueDate || '');
    setIsEditing(false);
  };

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const categoryObj = categories.find(cat => cat.id === task.category);
  const categoryColor = categoryObj?.color || '#ccc';

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high': return '#FF6B6B';
      case 'medium': return '#FFD166';
      case 'low': return '#4ECDC4';
      default: return '#ccc';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  const isPastDue = () => {
    if (!task.dueDate || task.completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    return dueDate < today;
  };

  return (
    <div 
      className={`todo-item ${task.completed ? 'completed' : ''} ${isExpanded ? 'expanded' : ''} ${isPastDue() ? 'past-due' : ''}`}
      style={{ borderLeft: `4px solid ${categoryColor}` }}
    >
      <div className="todo-item-header" onClick={() => !isEditing && setIsExpanded(!isExpanded)}>
        <div className="todo-item-main">
          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
              className="todo-checkbox"
              style={{ 
                '--checkbox-color': categoryColor 
              } as React.CSSProperties}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          
          {isEditing ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="edit-title-input"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div className="todo-title">
              {task.title}
            </div>
          )}
        </div>
        
        <div className="todo-item-details">
          <div 
            className="category-badge"
            style={{ backgroundColor: `${categoryColor}40`, color: categoryColor }}
          >
            {categoryObj?.name}
          </div>
          
          <div 
            className={`priority-badge ${task.priority}`}
            style={{ backgroundColor: `${getPriorityColor()}40`, color: getPriorityColor() }}
          >
            {task.priority}
          </div>
          
          {task.dueDate && (
            <div 
              className={`due-date ${isPastDue() ? 'past-due' : ''}`}
            >
              {formatDate(task.dueDate)}
            </div>
          )}
          
          {!isEditing ? (
            <div className="todo-actions" onClick={(e) => e.stopPropagation()}>
              <button 
                className="action-btn edit"
                onClick={handleEdit}
              >
                Edit
              </button>
              <button 
                className="action-btn delete"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="edit-actions" onClick={(e) => e.stopPropagation()}>
              <button 
                className="action-btn save"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button 
                className="action-btn cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="todo-item-content">
          {isEditing ? (
            <div className="edit-expanded-content">
              <textarea
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                placeholder="Add description (optional)"
                className="edit-description"
              />
              
              <div className="edit-details">
                <div className="edit-group">
                  <label>Category</label>
                  <select
                    value={editedCategory}
                    onChange={(e) => setEditedCategory(e.target.value)}
                    className="edit-select"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="edit-group">
                  <label>Priority</label>
                  <select
                    value={editedPriority}
                    onChange={(e) => setEditedPriority(e.target.value as 'low' | 'medium' | 'high')}
                    className="edit-select"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                
                <div className="edit-group">
                  <label>Due Date</label>
                  <input
                    type="date"
                    value={editedDueDate}
                    onChange={(e) => setEditedDueDate(e.target.value)}
                    className="edit-date"
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              {task.description && (
                <div className="description">
                  {task.description}
                </div>
              )}
              
              <div className="creation-date">
                Created: {formatDate(task.createdAt)}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoItem;