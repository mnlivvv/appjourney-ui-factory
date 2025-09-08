import { Task } from '../types';
import TaskItem from './TaskItem';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInbox, FiArrowUp, FiArrowDown } from 'react-icons/fi';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onReorderTasks: (reorderedTasks: Task[]) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onReorderTasks }: TaskListProps) => {
  const moveTask = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === tasks.length - 1)
    ) {
      return; // Can't move further up/down
    }
    
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    const newTasks = [...tasks];
    const [removed] = newTasks.splice(index, 1);
    newTasks.splice(newIndex, 0, removed);
    
    onReorderTasks(newTasks);
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <FiInbox />
        <h3>No Tasks Yet</h3>
        <p>Add a new task to get started!</p>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <FiInbox style={{ fontSize: '3rem', opacity: 0.5 }} />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="task-list">
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            layout
            transition={{ duration: 0.3 }}
            className="task-item-container"
          >
            <TaskItem 
              task={task} 
              onToggleComplete={onToggleComplete} 
              onDeleteTask={onDeleteTask}
            />
            <div className="task-reorder-buttons">
              {index > 0 && (
                <button 
                  className="task-action-btn" 
                  onClick={() => moveTask(index, 'up')}
                  aria-label="Move task up"
                >
                  <FiArrowUp />
                </button>
              )}
              {index < tasks.length - 1 && (
                <button 
                  className="task-action-btn" 
                  onClick={() => moveTask(index, 'down')}
                  aria-label="Move task down"
                >
                  <FiArrowDown />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;