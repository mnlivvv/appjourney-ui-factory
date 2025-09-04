import { Task, TaskCategory } from '../types';
import TaskItem from './TaskItem';
import emptyTasks from '../assets/images/empty-tasks.svg';
import '../styles/TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
  filter: TaskCategory | 'all';
}

const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onToggleComplete, 
  onDeleteTask,
  filter
}) => {
  // Filter tasks based on the selected category
  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === filter);
  
  // Sort tasks by completion status and date
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    // Incomplete tasks first
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    // For incomplete tasks, newer first
    if (!a.completed) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    // For completed tasks, recently completed first
    return new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime();
  });

  if (sortedTasks.length === 0) {
    return (
      <div className="empty-state">
        <img src={emptyTasks} alt="No tasks" className="empty-image" />
        <h3>No tasks found</h3>
        {filter !== 'all' ? (
          <p>No {filter} tasks. Add a new task or change the filter.</p>
        ) : (
          <p>Your task list is empty. Add your first task to get started!</p>
        )}
      </div>
    );
  }

  return (
    <div className="task-list">
      {sortedTasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleComplete={onToggleComplete} 
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;