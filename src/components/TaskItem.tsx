import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { Task } from '../types';
import { motion } from 'framer-motion';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onDeleteTask }: TaskItemProps) => {
  const handleToggle = () => {
    onToggleComplete(task);
  };

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <motion.div
      className={`task-item ${task.category} ${task.completed ? 'completed' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      layout
      transition={{ duration: 0.3 }}
    >
      <div className="task-checkbox">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={handleToggle}
          aria-label={`Mark "${task.title}" as ${task.completed ? 'incomplete' : 'complete'}`}
        />
        <FiCheck className="checkmark" />
      </div>
      
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <div>
          <span className={`task-category ${task.category}`}>
            {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
          </span>
          {task.completed && task.completedAt && (
            <span className="task-completed-date">
              Completed: {task.completedAt.toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
      
      <div className="task-actions">
        <button 
          className="task-action-btn delete-btn" 
          onClick={handleDelete}
          aria-label={`Delete "${task.title}"`}
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

export default TaskItem;