import React, { useState } from 'react';
import type { Task } from '../../types';
import { animated, useSpring } from 'react-spring';
import { 
  FiCheckCircle, FiCircle, FiEdit2, FiTrash2, 
  FiClock, FiCalendar, FiTag 
} from 'react-icons/fi';

// Category icons and colors
const categoryConfig = {
  work: { icon: '💼', color: 'bg-blue-100 text-blue-800' },
  personal: { icon: '🏠', color: 'bg-purple-100 text-purple-800' },
  shopping: { icon: '🛒', color: 'bg-green-100 text-green-800' },
  health: { icon: '💪', color: 'bg-red-100 text-red-800' },
  learning: { icon: '📚', color: 'bg-yellow-100 text-yellow-800' },
  other: { icon: '✨', color: 'bg-gray-100 text-gray-800' }
};

// Priority colors
const priorityColors = {
  low: 'bg-blue-200',
  medium: 'bg-yellow-200',
  high: 'bg-red-200'
};

interface TaskCardProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  onToggleComplete, 
  onEdit, 
  onDelete 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation for the card
  const cardSpring = useSpring({
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0px)',
    boxShadow: isHovered 
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    config: { tension: 300, friction: 20 }
  });

  // Animation for the checkbox
  const checkboxSpring = useSpring({
    scale: task.completed ? 1.2 : 1,
    rotate: task.completed ? 360 : 0,
    config: { tension: 300, friction: 10 }
  });

  // Format date to a friendly string
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <animated.div
      className={`p-4 rounded-2xl mb-3 transition-all ${task.completed ? 'bg-gray-50' : 'bg-white'}`}
      style={cardSpring}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start">
        {/* Checkbox */}
        <animated.div 
          className="mr-3 mt-1 cursor-pointer"
          style={checkboxSpring}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? (
            <FiCheckCircle className="text-green-500 text-xl" />
          ) : (
            <FiCircle className="text-gray-400 text-xl" />
          )}
        </animated.div>

        {/* Content */}
        <div className="flex-grow">
          <div className="flex items-center mb-1">
            {/* Priority indicator */}
            <div className={`w-2 h-2 rounded-full ${priorityColors[task.priority]} mr-2`}></div>
            
            {/* Title */}
            <h3 className={`font-bold ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
              {task.title}
            </h3>
            
            {/* Category */}
            <div className={`ml-2 px-2 py-0.5 text-xs rounded-full ${categoryConfig[task.category].color}`}>
              <span className="mr-1">{categoryConfig[task.category].icon}</span>
              {task.category}
            </div>
          </div>

          {/* Description */}
          {task.description && (
            <p className={`text-sm mb-2 ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {task.description}
            </p>
          )}

          {/* Dates */}
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <FiCalendar className="mr-1" />
            <span className="mr-3">Created: {formatDate(task.createdAt)}</span>
            
            {task.completed && task.completedAt && (
              <>
                <FiClock className="mr-1" />
                <span>Completed: {formatDate(task.completedAt)}</span>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => onEdit(task.id)}
            className="p-1.5 text-blue-500 hover:bg-blue-100 rounded-full transition-colors"
          >
            <FiEdit2 size={16} />
          </button>
          <button 
            onClick={() => onDelete(task.id)}
            className="p-1.5 text-red-500 hover:bg-red-100 rounded-full transition-colors"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default TaskCard;