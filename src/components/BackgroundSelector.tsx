import React, { useState } from 'react';
import type { BackgroundOption } from '../types';
import './BackgroundSelector.css';

interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({ background, setBackground }) => {
  const [isOpen, setIsOpen] = useState(false);

  const backgrounds: BackgroundOption[] = [
    { id: 'gradient-1', name: 'Purple Haze' },
    { id: 'gradient-2', name: 'Ocean Blue' },
    { id: 'gradient-3', name: 'Sunset' },
    { id: 'gradient-4', name: 'Forest' },
    { id: 'gradient-5', name: 'Cosmic' },
    { id: 'pattern-1', name: 'Geometric' },
    { id: 'pattern-2', name: 'Dots' },
    { id: 'pattern-3', name: 'Waves' },
  ];

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };

  const handleBackgroundChange = (bg: string) => {
    setBackground(bg);
    setIsOpen(false);
  };

  return (
    <div className="background-selector">
      <button className="bg-selector-toggle" onClick={toggleSelector}>
        <span className="toggle-icon">🎨</span>
        <span className="toggle-text">Theme</span>
      </button>

      {isOpen && (
        <div className="background-options">
          <h3>Choose Background</h3>
          <div className="bg-grid">
            {backgrounds.map(bg => (
              <div 
                key={bg.id}
                className={`bg-option bg-${bg.id} ${background === bg.id ? 'active' : ''}`}
                onClick={() => handleBackgroundChange(bg.id)}
              >
                <div className="bg-preview"></div>
                <span className="bg-name">{bg.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundSelector;