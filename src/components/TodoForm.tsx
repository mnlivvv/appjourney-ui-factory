import { useState } from 'react';
import useSound from 'use-sound';
import addSound from '../assets/sounds/add.mp3';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('');
  const [playAdd] = useSound(addSound, { volume: 0.5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd(text.trim());
      setText('');
      playAdd();
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="NEW MISSION..."
            className="pixel-input"
            maxLength={40}
          />
          <button type="submit" className="arcade-btn">
            <span className="btn-text">ADD</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;