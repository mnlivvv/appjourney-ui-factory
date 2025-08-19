import React, { useState } from 'react';
import type { Task, Category } from '../types';
import TodoItem from './TodoItem';
import './TodoList.css';

interface TodoListProps {
  tasks: Task[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  updateTask: (task: Task) => void;
  categories: Category[];
}

const TodoList: React.FC<TodoListProps> = ({ 
  tasks, 
  toggleTask, 
  deleteTask, 
  updateTask,
  categories 
}) => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sort, setSort] = useState<'created' | 'dueDate' | 'priority'>('created');
  
  const filteredTasks = tasks.filter(task => {
    // Filter by completion status
    if (filter === 'active' && task.completed) return false;
    if (filter === 'completed' && !task.completed) return false;
    
    // Filter by category
    if (categoryFilter !== 'all' && task.category !== categoryFilter) return false;
    
    return true;
  }).sort((a, b) => {
    // Sort by selected criterion
    if (sort === 'created') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else if (sort === 'dueDate') {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    } else if (sort === 'priority') {
      const priorityValues = { high: 3, medium: 2, low: 1 };
      return priorityValues[b.priority] - priorityValues[a.priority];
    }
    return 0;
  });

  const pendingTasksCount = tasks.filter(task => !task.completed).length;
  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="todo-list-container">
      <div className="todo-list-header">
        <h2>My Tasks</h2>
        <div className="task-count">
          <span className="task-stat pending">{pendingTasksCount} pending</span>
          <span className="task-stat completed">{completedTasksCount} completed</span>
        </div>
      </div>
      
      <div className="todo-list-filters">
        <div className="filter-group">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
        
        <div className="filter-dropdown">
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="category-select"
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        
        <div className="filter-dropdown">
          <select 
            value={sort} 
            onChange={(e) => setSort(e.target.value as 'created' | 'dueDate' | 'priority')}
            className="sort-select"
          >
            <option value="created">Recent</option>
            <option value="dueDate">Due Date</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
      
      <div className="todo-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TodoItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
              categories={categories}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No tasks found. {filter !== 'all' || categoryFilter !== 'all' ? 'Try changing your filters.' : 'Add a task to get started!'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;