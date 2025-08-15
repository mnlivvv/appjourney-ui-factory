import React from 'react';
import Window from './Window';
import { ThemeColor } from '../types';

interface SettingsWindowProps {
  id: string;
  isOpen: boolean;
  onClose: (id: string) => void;
  currentTheme: ThemeColor;
  onChangeTheme: (theme: ThemeColor) => void;
  zIndex: number;
  bringToFront: (id: string) => void;
}

const SettingsWindow: React.FC<SettingsWindowProps> = ({
  id,
  isOpen,
  onClose,
  currentTheme,
  onChangeTheme,
  zIndex,
  bringToFront,
}) => {
  return (
    <Window
      id={id}
      title="SYSTEM SETTINGS"
      isOpen={isOpen}
      onClose={onClose}
      initialWidth={400}
      initialHeight={350}
      initialX={Math.round(window.innerWidth / 2 - 200)}
      initialY={Math.round(window.innerHeight / 2 - 175)}
      zIndex={zIndex}
      bringToFront={bringToFront}
    >
      <div className="settings-content">
        <div style={{ marginBottom: '20px' }}>
          <div className="text-glow" style={{ marginBottom: '10px', borderBottom: '1px solid var(--text-color)' }}>
            DISPLAY SETTINGS:
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>PHOSPHOR TYPE:</div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className="retro-button" 
                style={{ 
                  backgroundColor: currentTheme === 'green' ? '#33FF33' : undefined,
                  color: currentTheme === 'green' ? '#000' : undefined,
                  minWidth: '80px'
                }}
                onClick={() => onChangeTheme('green')}
              >
                GREEN
              </button>
              <button 
                className="retro-button" 
                style={{ 
                  backgroundColor: currentTheme === 'amber' ? '#FFCC00' : undefined,
                  color: currentTheme === 'amber' ? '#000' : undefined,
                  minWidth: '80px'
                }}
                onClick={() => onChangeTheme('amber')}
              >
                AMBER
              </button>
              <button 
                className="retro-button" 
                style={{ 
                  backgroundColor: currentTheme === 'blue' ? '#5555FF' : undefined,
                  color: currentTheme === 'blue' ? '#FFF' : undefined,
                  minWidth: '80px'
                }}
                onClick={() => onChangeTheme('blue')}
              >
                BLUE
              </button>
            </div>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>CRT EFFECTS:</div>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" defaultChecked={true} style={{ marginRight: '10px' }} />
              SCAN LINES
            </label>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <input type="checkbox" defaultChecked={true} style={{ marginRight: '10px' }} />
              SCREEN FLICKER
            </label>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" defaultChecked={true} style={{ marginRight: '10px' }} />
              TEXT GLOW
            </label>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div className="text-glow" style={{ marginBottom: '10px', borderBottom: '1px solid var(--text-color)' }}>
            SYSTEM PERFORMANCE:
          </div>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '75%' }}></div>
          </div>
          <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>
            MEMORY USAGE: 75%
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            className="retro-button" 
            onClick={() => onClose(id)}
          >
            SAVE SETTINGS
          </button>
        </div>
      </div>
    </Window>
  );
};

export default SettingsWindow;