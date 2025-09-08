import { useState } from 'react';

interface TodoDragHandleProps {
  onDragStart: () => void;
  onDragEnd: () => void;
}

const TodoDragHandle = ({ onDragStart, onDragEnd }: TodoDragHandleProps) => {
  const [isDragging, setIsDragging] = useState(false);
  
  const handleDragStart = () => {
    setIsDragging(true);
    onDragStart();
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };
  
  return (
    <div 
      className={`todo-item__drag-handle ${isDragging ? 'todo-item__drag-handle--dragging' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      aria-label="Drag to reorder"
    >
      <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="currentColor" />
        <circle cx="2" cy="10" r="2" fill="currentColor" />
        <circle cx="2" cy="18" r="2" fill="currentColor" />
        <circle cx="10" cy="2" r="2" fill="currentColor" />
        <circle cx="10" cy="10" r="2" fill="currentColor" />
        <circle cx="10" cy="18" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

export default TodoDragHandle;