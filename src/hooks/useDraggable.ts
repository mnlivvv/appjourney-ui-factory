import { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface UseDraggableOptions {
  initialPosition?: Position;
  disabled?: boolean;
  onDragEnd?: (position: Position) => void;
}

export function useDraggable({
  initialPosition = { x: 0, y: 0 },
  disabled = false,
  onDragEnd,
}: UseDraggableOptions = {}) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>(initialPosition);
  const elementRef = useRef<HTMLDivElement>(null);
  const dragStartPosRef = useRef<Position>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled || !elementRef.current) return;
    
    setIsDragging(true);
    const rect = elementRef.current.getBoundingClientRect();
    
    dragStartPosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !elementRef.current) return;
    
    const newX = e.clientX - dragStartPosRef.current.x;
    const newY = e.clientY - dragStartPosRef.current.y;
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    if (onDragEnd) {
      onDragEnd(position);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position]);

  useEffect(() => {
    if (initialPosition) {
      setPosition(initialPosition);
    }
  }, [initialPosition]);

  return {
    position,
    isDragging,
    elementRef,
    handleMouseDown,
  };
}