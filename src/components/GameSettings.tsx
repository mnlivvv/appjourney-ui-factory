import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGame } from '../context/GameContext';
import '../styles/GameSettings.css';

const GameSettings = () => {
  const { state, dispatch } = useGame();
  const { settings } = state;
  const [isOpen, setIsOpen] = useState(false);
  
  // Animation for opening/closing the panel
  const panelAnimation = useSpring({
    height: isOpen ? 'auto' : '50px',
    opacity: isOpen ? 1 : 0.8,
    config: { tension: 200, friction: 20 },
  });
  
  // Animation for the gear icon
  const gearAnimation = useSpring({
    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    config: { tension: 300, friction: 10 },
  });
  
  // Toggle sound setting
  const handleToggleSound = () => {
    dispatch({ type: 'TOGGLE_SOUND' });
  };
  
  // Toggle animations setting
  const handleToggleAnimations = () => {
    dispatch({ type: 'TOGGLE_ANIMATIONS' });
  };

  return (
    <animated.div className="game-settings-panel" style={panelAnimation}>
      <div 
        className="settings-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <animated.span className="settings-icon" style={gearAnimation}>⚙️</animated.span>
        <h3 className="settings-title">Settings</h3>
      </div>
      
      <div className="settings-content">
        <div className="setting-item">
          <div className="setting-info">
            <h4 className="setting-title">Sound Effects</h4>
            <p className="setting-description">Enable quest completion and level up sounds</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.soundEnabled}
              onChange={handleToggleSound}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="setting-item">
          <div className="setting-info">
            <h4 className="setting-title">Animations</h4>
            <p className="setting-description">Enable character and UI animations</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={settings.animationsEnabled}
              onChange={handleToggleAnimations}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        
        <div className="setting-footer">
          <p className="game-credits">Quest Journal v1.0</p>
        </div>
      </div>
    </animated.div>
  );
};

export default GameSettings;