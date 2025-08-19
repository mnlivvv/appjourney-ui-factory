import { useState } from 'react';
import soundManager from '../utils/soundEffects';
import { SoundEffect } from '../types';

interface TodoFormProps {
  onAddTodo: (text: string, dueDate?: Date) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      soundManager.play(SoundEffect.ADD);
      
      // Convert dueDate string to Date object if provided
      const dueDateObj = dueDate ? new Date(dueDate) : undefined;
      
      onAddTodo(text, dueDateObj);
      setText('');
      setDueDate('');
      setIsExpanded(false);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDueDate(e.target.value);
  };

  const handleExpand = () => {
    soundManager.play(SoundEffect.CLICK);
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="todo-form-container">
      <div className="form-header">
        <h2>NEW MISSION</h2>
        <button 
          type="button" 
          className="expand-btn"
          onClick={handleExpand}
        >
          {isExpanded ? '[ - ]' : '[ + ]'}
        </button>
      </div>
      
      <form 
        className={`todo-form ${isExpanded ? 'expanded' : ''}`}
        onSubmit={handleSubmit}
      >
        <div className="form-content">
          <div className="input-group">
            <label htmlFor="todo-text">MISSION:</label>
            <input
              id="todo-text"
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="ENTER YOUR QUEST..."
              autoComplete="off"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="todo-date">DEADLINE:</label>
            <input
              id="todo-date"
              type="date"
              value={dueDate}
              onChange={handleDateChange}
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <button type="submit" className="add-btn">
            START MISSION
          </button>
        </div>
      </form>
    </div>
  );
}