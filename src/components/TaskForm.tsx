import { useState, FormEvent } from 'react';
import { useRippleEffect } from '../hooks/useRippleEffect';

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);
  const { ripples, addRipple } = useRippleEffect();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAddTask(text.trim());
      setText('');
    }
  };
  
  return (
    <form 
      className={`task-form ${isActive ? 'active' : ''}`} 
      onSubmit={handleSubmit}
    >
      <div className="form-content">
        <div className="icon-container">
          <img src="./src/assets/icons/leaf.svg" alt="New Task" className="leaf-icon" />
        </div>
        
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task to your garden..."
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        
        <button 
          type="submit" 
          disabled={text.trim() === ''}
          aria-label="Add task"
          onClick={addRipple}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {ripples.map(ripple => (
            <span
              key={ripple.id}
              className="ripple"
              style={{
                left: ripple.x - ripple.size / 2,
                top: ripple.y - ripple.size / 2,
                width: ripple.size,
                height: ripple.size
              }}
            />
          ))
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" />
          </svg>
        </button>
      </div>
    </form>
  );
}