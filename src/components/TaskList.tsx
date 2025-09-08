import { Task } from '../types';
import TaskItem from './TaskItem';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInbox } from 'react-icons/fi';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onReorderTasks: (reorderedTasks: Task[]) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }: TaskListProps) => {
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
        {tasks.map((task) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <TaskItem 
              task={task} 
              onToggleComplete={onToggleComplete} 
              onDeleteTask={onDeleteTask} 
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;