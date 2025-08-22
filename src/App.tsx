import { useState } from 'react';
import { GameProvider } from './context/GameContext';
import Character from './components/Character';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Achievements from './components/Achievements';
import GameSettings from './components/GameSettings';
import LevelUpModal from './components/LevelUpModal';
import './App.css';

function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <GameProvider>
      <div className="app-container">
        <div className="app-content">
          <header className="app-header">
            <h1 className="app-title">Quest Journal</h1>
            <p className="app-subtitle">Transform your tasks into epic adventures</p>
            <button 
              className="sound-toggle" 
              onClick={() => setSoundEnabled(!soundEnabled)}
              aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
          </header>
          
          <main className="app-main">
            <div className="main-content">
              <TodoForm />
              <TodoList />
            </div>
            
            <aside className="sidebar">
              <Character />
              <Achievements />
              <GameSettings />
            </aside>
          </main>
          
          <footer className="app-footer">
            <p>Quest Journal - Your Adventure Awaits</p>
          </footer>
        </div>
        
        {/* Level up modal */}
        <LevelUpModal />
      </div>
    </GameProvider>
  );
}

export default App;
