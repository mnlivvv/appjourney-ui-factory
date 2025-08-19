import React, { useMemo } from 'react';
import type { Task, Category } from '../types';
import './Dashboard.css';

interface DashboardProps {
  tasks: Task[];
  categories: Category[];
}

const Dashboard: React.FC<DashboardProps> = ({ tasks, categories }) => {
  // Calculate completion rate
  const completionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    const completedTasks = tasks.filter(task => task.completed).length;
    return Math.round((completedTasks / tasks.length) * 100);
  }, [tasks]);

  // Calculate tasks by category
  const tasksByCategory = useMemo(() => {
    const result: Record<string, { total: number, completed: number }> = {};
    
    categories.forEach(category => {
      result[category.id] = { total: 0, completed: 0 };
    });
    
    tasks.forEach(task => {
      if (result[task.category]) {
        result[task.category].total += 1;
        if (task.completed) {
          result[task.category].completed += 1;
        }
      }
    });
    
    return result;
  }, [tasks, categories]);

  // Calculate tasks by priority
  const tasksByPriority = useMemo(() => {
    const result = { high: 0, medium: 0, low: 0 };
    
    tasks.forEach(task => {
      if (!task.completed) {
        result[task.priority] += 1;
      }
    });
    
    return result;
  }, [tasks]);

  // Calculate today's tasks
  const todayTasks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return tasks.filter(task => {
      if (task.completed) return false;
      if (!task.dueDate) return false;
      
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      
      return dueDate.getTime() === today.getTime();
    });
  }, [tasks]);

  // Calculate overdue tasks
  const overdueTasks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return tasks.filter(task => {
      if (task.completed) return false;
      if (!task.dueDate) return false;
      
      const dueDate = new Date(task.dueDate);
      dueDate.setHours(0, 0, 0, 0);
      
      return dueDate.getTime() < today.getTime();
    });
  }, [tasks]);

  // Generate days of the week
  const daysOfWeek = useMemo(() => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    // Reorder days so that today is in the middle
    return [
      ...days.slice(dayOfWeek - 3 < 0 ? days.length + (dayOfWeek - 3) : dayOfWeek - 3),
      ...days.slice(0, dayOfWeek - 3 < 0 ? dayOfWeek + 4 - days.length : dayOfWeek + 4)
    ].slice(0, 7);
  }, []);

  // Generate task count for each day of the week
  const tasksByDay = useMemo(() => {
    const result: number[] = Array(7).fill(0);
    const today = new Date();
    const dayOfWeek = today.getDay();
    
    tasks.forEach(task => {
      if (task.completed || !task.dueDate) return;
      
      const dueDate = new Date(task.dueDate);
      const dueDayOfWeek = dueDate.getDay();
      
      // Calculate position in the array
      const dayDiff = dueDayOfWeek - dayOfWeek;
      const position = (dayDiff + 7) % 7 - 3;
      const adjustedPosition = position < 0 ? position + 7 : position;
      
      if (adjustedPosition >= 0 && adjustedPosition < 7) {
        result[adjustedPosition] += 1;
      }
    });
    
    return result;
  }, [tasks]);

  // Calculate the max value for scaling the chart
  const maxTasksByDay = Math.max(...tasksByDay, 1);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>

      <div className="dashboard-card completion-rate">
        <h3>Completion Rate</h3>
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${completionRate}%` }}
          >
            <span className="progress-text">{completionRate}%</span>
          </div>
        </div>
      </div>

      <div className="dashboard-card tasks-today">
        <h3>Today's Tasks</h3>
        <div className="today-tasks-count">
          <span className="count">{todayTasks.length}</span>
          <span className="label">task{todayTasks.length !== 1 ? 's' : ''}</span>
        </div>
        {overdueTasks.length > 0 && (
          <div className="overdue-warning">
            <span className="overdue-count">{overdueTasks.length}</span> overdue task{overdueTasks.length !== 1 ? 's' : ''}
          </div>
        )}
      </div>

      <div className="dashboard-card weekly-view">
        <h3>Upcoming Week</h3>
        <div className="week-chart">
          {daysOfWeek.map((day, index) => (
            <div key={day} className="day-column">
              <div 
                className="day-bar"
                style={{ 
                  height: `${(tasksByDay[index] / maxTasksByDay) * 100}%`,
                  backgroundColor: index === 3 ? '#FF6B6B' : '#4ECDC4'
                }}
              >
                {tasksByDay[index] > 0 && <span className="day-count">{tasksByDay[index]}</span>}
              </div>
              <div className="day-label">{day}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-card category-breakdown">
        <h3>Tasks by Category</h3>
        <div className="category-chart">
          {categories.map(category => {
            const categoryData = tasksByCategory[category.id];
            const completionPercentage = categoryData.total === 0 
              ? 0 
              : Math.round((categoryData.completed / categoryData.total) * 100);
              
            return (
              <div key={category.id} className="category-row">
                <div className="category-info">
                  <div 
                    className="category-color" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span className="category-name">{category.name}</span>
                </div>
                <div className="category-progress-container">
                  <div 
                    className="category-progress" 
                    style={{ 
                      width: `${completionPercentage}%`,
                      backgroundColor: category.color
                    }}
                  ></div>
                </div>
                <div className="category-stats">
                  <span className="category-count">{categoryData.completed}/{categoryData.total}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="dashboard-card priority-breakdown">
        <h3>Tasks by Priority</h3>
        <div className="priority-chart">
          <div className="priority-row">
            <div className="priority-label high">High</div>
            <div className="priority-bar-container">
              <div 
                className="priority-bar high"
                style={{ width: `${(tasksByPriority.high / Math.max(1, tasksByPriority.high + tasksByPriority.medium + tasksByPriority.low)) * 100}%` }}
              ></div>
            </div>
            <div className="priority-count">{tasksByPriority.high}</div>
          </div>
          <div className="priority-row">
            <div className="priority-label medium">Medium</div>
            <div className="priority-bar-container">
              <div 
                className="priority-bar medium"
                style={{ width: `${(tasksByPriority.medium / Math.max(1, tasksByPriority.high + tasksByPriority.medium + tasksByPriority.low)) * 100}%` }}
              ></div>
            </div>
            <div className="priority-count">{tasksByPriority.medium}</div>
          </div>
          <div className="priority-row">
            <div className="priority-label low">Low</div>
            <div className="priority-bar-container">
              <div 
                className="priority-bar low"
                style={{ width: `${(tasksByPriority.low / Math.max(1, tasksByPriority.high + tasksByPriority.medium + tasksByPriority.low)) * 100}%` }}
              ></div>
            </div>
            <div className="priority-count">{tasksByPriority.low}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;