import { useState } from 'react';

const backgrounds = [
  { id: 'default', name: 'Default', color: '#f0f4f8', type: 'color' },
  { id: 'forest', name: 'Forest', color: '#e8f5e9', type: 'color' },
  { id: 'ocean', name: 'Ocean', color: '#e3f2fd', type: 'color' },
  { id: 'sunset', name: 'Sunset', color: '#fff8e1', type: 'color' },
  { id: 'mountain', name: 'Mountain', color: '#f3e5f5', type: 'color' },
];

interface BackgroundSelectorProps {
  onSelectBackground: (background: string) => void;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({ 
  onSelectBackground 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('default');

  const handleSelect = (id: string) => {
    setSelected(id);
    const bg = backgrounds.find(b => b.id === id);
    if (bg) {
      onSelectBackground(bg.color);
    }
    setIsOpen(false);
  };

  return (
    <div className="background-selector">
      <button 
        className="bg-selector-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change background"
      >
        <span className="material-icon">palette</span>
      </button>
      
      {isOpen && (
        <div className="bg-options">
          {backgrounds.map((bg) => (
            <button
              key={bg.id}
              className={`bg-option ${selected === bg.id ? 'selected' : ''}`}
              style={{ backgroundColor: bg.color }}
              onClick={() => handleSelect(bg.id)}
            >
              {bg.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BackgroundSelector;
