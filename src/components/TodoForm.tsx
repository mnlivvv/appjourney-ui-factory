import { useState, FormEvent } from 'react';
import { useGame } from '../context/GameContext';
import { playSound } from '../utils/sound';
import '../styles/TodoForm.css';

const TodoForm = () => {
  const { dispatch, state } = useGame();
  const { settings } = state;
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) return;
    
    dispatch({
      type: 'ADD_TODO',
      payload: {
        title: title.trim(),
        description: description.trim(),
        difficulty,
      },
    });
    
    // Play sound
    playSound('ADD_TASK', settings.soundEnabled);
    
    // Reset form
    setTitle('');
    setDescription('');
    setDifficulty('easy');
    setIsFormOpen(false);
  };

  return (
    <div className="todo-form-container">
      {!isFormOpen ? (
        <button 
          className="add-quest-button"
          onClick={() => setIsFormOpen(true)}
        >
          + New Quest
        </button>
      ) : (
        <form className="todo-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h3>New Quest</h3>
            <button 
              type="button" 
              className="close-form-btn"
              onClick={() => setIsFormOpen(false)}
            >
              ✖
            </button>
          </div>
          
          <div className="form-group">
            <label htmlFor="title">Quest Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter quest title..."
              required
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Quest Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your quest..."
              className="form-textarea"
              rows={3}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="difficulty">Difficulty Level</label>
            <div className="difficulty-selector">
              <label className={`difficulty-option ${difficulty === 'easy' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="difficulty"
                  value="easy"
                  checked={difficulty === 'easy'}
                  onChange={() => setDifficulty('easy')}
                />
                <span className="difficulty-label">Easy ⚔️</span>
                <span className="xp-reward">+10 XP</span>
              </label>
              
              <label className={`difficulty-option ${difficulty === 'medium' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="difficulty"
                  value="medium"
                  checked={difficulty === 'medium'}
                  onChange={() => setDifficulty('medium')}
                />
                <span className="difficulty-label">Medium ⚔️⚔️</span>
                <span className="xp-reward">+20 XP</span>
              </label>
              
              <label className={`difficulty-option ${difficulty === 'hard' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="difficulty"
                  value="hard"
                  checked={difficulty === 'hard'}
                  onChange={() => setDifficulty('hard')}
                />
                <span className="difficulty-label">Hard ⚔️⚔️⚔️</span>
                <span className="xp-reward">+30 XP</span>
              </label>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Embark on Quest
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TodoForm;