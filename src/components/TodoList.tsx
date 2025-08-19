import { useState, useEffect } from 'react';
import './TodoList.css';
import ArcadeButton from './ArcadeButton';
import ArcadeInput from './ArcadeInput';
import ArcadeHeader from './ArcadeHeader';

// Sound effects
const SOUNDS = {
  add: new Audio('/sounds/coin.mp3'),
  complete: new Audio('/sounds/complete.mp3'),
  delete: new Audio('/sounds/delete.mp3'),
};

// Initialize sounds as muted initially to prevent autoplay issues
Object.values(SOUNDS).forEach(sound => {
  sound.volume = 0.3;
  sound.muted = true;
});

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
    }
    return [];
  });
  
  const [newTodoText, setNewTodoText] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handle sound enabling/disabling
  useEffect(() => {
    Object.values(SOUNDS).forEach(sound => {
      sound.muted = !soundEnabled;
    });
  }, [soundEnabled]);

  // Randomly trigger glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  const addTodo = () => {
    if (newTodoText.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: newTodoText,
        completed: false,
        createdAt: new Date()
      };
      
      setTodos([...todos, newTodo]);
      setNewTodoText('');
      
      if (soundEnabled) {
        SOUNDS.add.currentTime = 0;
        SOUNDS.add.play();
      }
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        const updatedTodo = { ...todo, completed: !todo.completed };
        
        if (soundEnabled && !todo.completed) {
          SOUNDS.complete.currentTime = 0;
          SOUNDS.complete.play();
        }
        
        return updatedTodo;
      }
      return todo;
    });
    
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    if (soundEnabled) {
      SOUNDS.delete.currentTime = 0;
      SOUNDS.delete.play();
    }
    
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className={`todo-arcade ${isGlitching ? 'glitch' : ''}`}>
      <div className="screen">
        <div className="scan-lines"></div>
        <div className="screen-content">
          <ArcadeHeader title="TODO ARCADE" subtitle="HIGH SCORES" />
          
          <div className="high-score-table">
            <div className="table-header">
              <span className="rank">RANK</span>
              <span className="mission">MISSION</span>
              <span className="status">STATUS</span>
              <span className="action">ZAP</span>
            </div>
            
            {todos.length === 0 ? (
              <div className="no-tasks">
                <p>INSERT COIN TO ADD TASKS</p>
                <p className="blink">PRESS START</p>
              </div>
            ) : (
              <div className="todo-items">
                {todos.map((todo, index) => (
                  <div 
                    key={todo.id} 
                    className={`todo-item ${todo.completed ? 'completed' : ''}`}
                  >
                    <span className="rank">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="mission" onClick={() => toggleTodo(todo.id)}>
                      {todo.text}
                    </span>
                    <span className="status">
                      {todo.completed ? 'COMPLETE' : 'PENDING'}
                    </span>
                    <button 
                      className="delete-btn" 
                      onClick={() => deleteTodo(todo.id)}
                      aria-label="Delete task"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="control-panel">
            <div className="coin-slot">
              <ArcadeInput
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="INSERT NEW MISSION..."
                className={newTodoText ? 'flashing' : ''}
              />
              <ArcadeButton 
                variant="primary"
                onClick={addTodo}
                disabled={!newTodoText.trim()}
              >
                INSERT COIN
              </ArcadeButton>
            </div>
            
            <div className="sound-toggle">
              <label htmlFor="sound-toggle" className="sound-label">
                SOUND FX
              </label>
              <div 
                className={`toggle-switch ${soundEnabled ? 'on' : 'off'}`}
                onClick={() => setSoundEnabled(!soundEnabled)}
              >
                <div className="toggle-slider"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;