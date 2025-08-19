import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Draggable } from 'react-beautiful-dnd';
import { FaCheck, FaTrash, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { Todo, Category } from '../types';
import confetti from 'canvas-confetti';
import { useTodo } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
  index: number;
  categoryColors: Record<string, string>;
}

const TodoItem = ({ todo, index, categoryColors }: TodoItemProps) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editCategory, setEditCategory] = useState<Category>(todo.category);
  const inputRef = useRef<HTMLInputElement>(null);

  // When entering edit mode, focus the input
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleToggle = () => {
    toggleTodo(todo.id);
    
    // If being marked as completed, trigger confetti
    if (!todo.completed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editText, editCategory);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setEditCategory(todo.category);
    setIsEditing(false);
  };

  const categoryColorClass = categoryColors[todo.category] || 'bg-gray-200';

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`relative rounded-lg shadow-md p-4 mb-3 ${
            snapshot.isDragging ? 'shadow-lg' : ''
          } ${todo.completed ? 'bg-opacity-70' : ''}`}
          style={{
            ...provided.draggableProps.style,
            background: `linear-gradient(135deg, white 90%, ${categoryColorClass.replace('bg-', '')} 90%)`,
          }}
        >
          <div className={`absolute top-0 left-0 w-2 h-full rounded-l-lg ${categoryColorClass}`} />
          
          {isEditing ? (
            <div className="flex flex-col space-y-2">
              <input
                ref={inputRef}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              
              <select
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value as Category)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="health">Health</option>
                <option value="other">Other</option>
              </select>
              
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="flex items-center justify-center p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <FaSave className="text-sm" />
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center justify-center p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center ml-2">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleToggle}
                className={`flex items-center justify-center w-6 h-6 mr-3 rounded-full border-2 ${
                  todo.completed
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-400'
                }`}
              >
                {todo.completed && <FaCheck className="text-white text-xs" />}
              </motion.button>
              
              <div className="flex-grow">
                <p
                  className={`text-md ${
                    todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                  }`}
                >
                  {todo.text}
                </p>
                <p className="text-xs text-gray-500">
                  {todo.category.charAt(0).toUpperCase() + todo.category.slice(1)} • {new Date(todo.createdAt).toLocaleDateString()}
                </p>
              </div>
              
              <div className="flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleEdit}
                  className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  <FaEdit className="text-sm" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteTodo(todo.id)}
                  className="flex items-center justify-center p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <FaTrash className="text-sm" />
                </motion.button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </Draggable>
  );
};

export default TodoItem;