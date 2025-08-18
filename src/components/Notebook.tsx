import { useState, useRef, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import CategoryTabs from './CategoryTabs';
import '../styles/Notebook.css';

const Notebook = () => {
  const { currentCategory, categories } = useTodo();
  const [pageAngle, setPageAngle] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const notebookRef = useRef<HTMLDivElement>(null);
  const prevCategoryRef = useRef<string>(currentCategory);

  // Function to handle page turning animation
  useEffect(() => {
    if (prevCategoryRef.current !== currentCategory) {
      // Play page flip sound and animation
      const audio = new Audio();
      audio.src = 'data:audio/mp3;base64,SUQzAwAAAAAfdlRJVDIAAABYAFBhZ2UgRmxpcCBTb3VuZCBFZmZlY3QAVFBFMQAAABQAUGF1dGhvciBTb3VuZCBFZmZlY3QAVEFMQgAAABMAUGFnZSBGbGlwIFNvdW5kAAAA/+NAwAAAAnEkgCpnE1MClSAaC2EzCJgEQOoYiAGAw8+VH/+ZP/+cj//+QBgJwMJAcD4cIAgH/////8QBgP//1AGEI4f//Q6gJALDwP//lQmH/9Qih4dCAAAD//+YGnRyYWNrIGJ5IFNvdW5kQmlibGUuY29tLy8vLy8vLy8vLy8vLy8vLw==';
      audio.volume = 0.3;
      audio.play().catch(err => console.error('Error playing page flip sound:', err));
      
      // Set flipping state
      setIsFlipping(true);
      
      // Animate page turn
      const startTime = Date.now();
      const duration = 600; // ms
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Calculate the angle for the page turning effect
        // Goes from 0 to 180 degrees and back to 0
        const angle = progress < 0.5 
          ? progress * 2 * 180 
          : (1 - (progress - 0.5) * 2) * 180;
        
        setPageAngle(angle);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setIsFlipping(false);
        }
      };
      
      requestAnimationFrame(animate);
      prevCategoryRef.current = currentCategory;
    }
  }, [currentCategory]);

  // Find current category name
  const currentCategoryName = categories.find(cat => cat.id === currentCategory)?.name || 'All';

  return (
    <div className="notebook" ref={notebookRef}>
      <div className="notebook-binding"></div>
      
      <div className="notebook-content">
        <div className={`notebook-page ${isFlipping ? 'flipping' : ''}`}
             style={{ transform: isFlipping ? `rotateY(${pageAngle}deg)` : 'none' }}>
          
          <div className="page-header">
            <h1>{currentCategoryName} Tasks</h1>
            <div className="paperclip"></div>
          </div>
          
          <TodoForm />
          <TodoList />
        </div>
      </div>
      
      <CategoryTabs />
    </div>
  );
};

export default Notebook;