import React, { useState, useEffect } from 'react';
import type { Task, TaskCategory } from '../../types';
import { useSpring, animated } from 'react-spring';
import Button from '../ui/Button';
import { FiPlus, FiX, FiSave } from 'react-icons/fi';

// Category options with icons
const categoryOptions: { value: TaskCategory; label: string; icon: string }[] = [
  { value: 'work', label: 'Work', icon: '💼' },
  { value: 'personal', label: 'Personal', icon: '🏠' },
  { value: 'shopping', label: 'Shopping', icon: '🛒' },
  { value: 'health', label: 'Health', icon: '💪' },
  { value: 'learning', label: 'Learning', icon: '📚' },
  { value: 'other', label: 'Other', icon: '✨' }
];

// Priority options
const priorityOptions = [
  { value: 'low', label: 'Low', color: 'bg-blue-200' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-200' },
  { value: 'high', label: 'High', color: 'bg-red-200' }
];

interface TaskFormProps {
  onSubmit: (title: string, description: string, category: TaskCategory, priority: 'low' | 'medium' | 'high') => void;
  editingTask?: Task | null;
  onCancel?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ 
  onSubmit, 
  editingTask = null, 
  onCancel 
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<TaskCategory>('personal');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [expanded, setExpanded] = useState(!!editingTask);

  // Animation for form expansion
  const formSpring = useSpring({
    height: expanded ? 'auto' : '60px',
    opacity: expanded ? 1 : 0.9,
    config: { tension: 300, friction: 26 }
  });

  // Load task data if editing
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description || '');
      setCategory(editingTask.category);
      setPriority(editingTask.priority);
      setExpanded(true);
    }
  }, [editingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onSubmit(title.trim(), description.trim(), category, priority);
    
    // Reset form if not editing
    if (!editingTask) {
      setTitle('');
      setDescription('');
      setCategory('personal');
      setPriority('medium');
      setExpanded(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    
    if (!editingTask) {
      setTitle('');
      setDescription('');
      setCategory('personal');
      setPriority('medium');
      setExpanded(false);
    }
  };

  return (
    <animated.div 
      className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden"
      style={formSpring}
    >
      <form onSubmit={handleSubmit} className="p-4">
        {/* Collapsed view / Title row */}
        <div className="flex items-center">
          <button
            type="button"
            className={`mr-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expanded ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'}`}
            onClick={() => expanded ? handleCancel() : setExpanded(true)}
          >
            {expanded ? <FiX size={18} /> : <FiPlus size={18} />}
          </button>
          
          <input
            type="text"
            placeholder={expanded ? "Task title" : "Add a new task..."}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-grow p-2 text-gray-800 bg-transparent border-b-2 border-transparent focus:border-purple-400 focus:outline-none transition-colors"
            onFocus={() => !expanded && setExpanded(true)}
          />
          
          {expanded && (
            <Button 
              type="submit"
              variant="primary"
              size="small"
              className="ml-2"
              icon={<FiSave />}
            >
              {editingTask ? 'Update' : 'Add'}
            </Button>
          )}
        </div>

        {/* Expanded view */}
        {expanded && (
          <div className="mt-4 animate-fadeIn">
            {/* Description */}
            <div className="mb-4">
              <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all"
                rows={3}
              />
            </div>

            {/* Categories */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`px-3 py-2 rounded-full text-sm flex items-center transition-all ${
                      category === option.value
                        ? 'bg-purple-100 text-purple-700 ring-2 ring-purple-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setCategory(option.value)}
                  >
                    <span className="mr-1">{option.icon}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Priority */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <div className="flex gap-2">
                {priorityOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`px-3 py-2 rounded-full text-sm flex items-center transition-all ${
                      priority === option.value
                        ? 'ring-2 ring-gray-400 font-medium'
                        : 'opacity-70'
                    } ${option.color}`}
                    onClick={() => setPriority(option.value as 'low' | 'medium' | 'high')}
                  >
                    <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>
    </animated.div>
  );
};

export default TaskForm;