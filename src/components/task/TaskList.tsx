import React from 'react';
import type { Task, TaskCategory } from '../../types';
import TaskCard from './TaskCard';
import { useSpring, animated } from 'react-spring';
import { FiInbox } from 'react-icons/fi';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  filter: TaskCategory | 'all';
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onEdit,
  onDelete,
  filter
}) => {
  // Animation for the empty state
  const emptySpring = useSpring({
    opacity: tasks.length === 0 ? 1 : 0,
    transform: tasks.length === 0 ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 300, friction: 20 }
  });

  // Sort tasks by completion status and date
  const sortedTasks = [...tasks].sort((a, b) => {
    // Incomplete tasks first
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    // Then by created date (newest first for incomplete, oldest first for complete)
    if (!a.completed) {
      return b.createdAt.getTime() - a.createdAt.getTime();
    } else {
      return a.completedAt && b.completedAt 
        ? a.completedAt.getTime() - b.completedAt.getTime()
        : 0;
    }
  });

  // Group tasks by completion status
  const incompleteTasks = sortedTasks.filter(task => !task.completed);
  const completedTasks = sortedTasks.filter(task => task.completed);

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <animated.div
          style={emptySpring}
          className="flex flex-col items-center justify-center p-8 text-center"
        >
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-500 mb-3">
            <FiInbox size={24} />
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-1">No tasks found</h3>
          <p className="text-gray-500">
            {filter === 'all'
              ? "You don't have any tasks yet. Create one!"
              : `You don't have any ${filter} tasks. Try a different category or create a new task!`}
          </p>
        </animated.div>
      ) : (
        <div>
          {/* Incomplete tasks */}
          {incompleteTasks.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Tasks to do ({incompleteTasks.length})
              </h2>
              <div>
                {incompleteTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Completed tasks */}
          {completedTasks.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-500 mb-3 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Completed ({completedTasks.length})
              </h2>
              <div>
                {completedTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskList;