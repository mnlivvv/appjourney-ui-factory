import { useCallback, useState } from 'react';

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export const useRippleEffect = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  let nextId = 0;

  const addRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Get the position of the click relative to the button
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate ripple size based on the largest dimension of the element
    const size = Math.max(rect.width, rect.height);
    
    // Add new ripple
    const newRipple = {
      x,
      y,
      size,
      id: nextId++
    };
    
    setRipples(prevRipples => [...prevRipples, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prevRipples => 
        prevRipples.filter(ripple => ripple.id !== newRipple.id)
      );
    }, 1000); // Animation duration in ms
  }, []);

  return { ripples, addRipple };
};