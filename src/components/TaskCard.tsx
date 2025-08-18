import { useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Task } from '../types';
import { useTaskContext } from '../context/TaskContext';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const { completeTask, deleteTask, updateTask } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || '');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleComplete = () => {
    if (!task.completed) {
      completeTask(task.id);
    }
  };

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      deleteTask(task.id);
    }, 500); // Matches the bounceOut animation duration
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(task.id, {
      title: editedTitle,
      description: editedDescription || undefined
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
    setEditedDescription(task.description || '');
    setIsEditing(false);
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-orange-400';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isDeleting ? 0 : 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`task-card task-card-${task.category} ${isDeleting ? 'bounce-out' : ''} ${task.completed ? 'opacity-70' : ''}`}
    >
      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="input-field"
            autoFocus
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="input-field min-h-[80px]"
            placeholder="Description (optional)"
          />
          <div className="flex justify-end space-x-2 mt-2">
            <button 
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-3 py-1 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div 
                onClick={handleComplete}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  task.completed 
                    ? 'bg-secondary border-secondary' 
                    : 'border-gray-300 hover:border-secondary'
                }`}
              >
                {task.completed && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className={`font-medium text-lg transition-all ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.title}
                </h3>
                
                {task.description && (
                  <p className={`mt-1 text-sm ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                    {task.description}
                  </p>
                )}
                
                <div className="flex items-center mt-2 space-x-2">
                  <span className={`text-xs ${getPriorityColor()}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                  </span>
                  
                  <span className="text-xs text-gray-500">
                    • {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
                  </span>
                  
                  {task.dueDate && (
                    <span className="text-xs text-gray-500">
                      • Due: {format(task.dueDate, 'MMM d')}
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex space-x-1">
              <button 
                onClick={handleEdit}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                title="Edit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              
              <button 
                onClick={handleDelete}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                title="Delete"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default TaskCard;