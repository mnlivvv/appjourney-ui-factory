import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import { WindowProps } from '../types';

const Window: React.FC<WindowProps> = ({
  id,
  title,
  isOpen,
  initialWidth = 400,
  initialHeight = 300,
  initialX = 100,
  initialY = 100,
  minWidth = 200,
  minHeight = 150,
  onClose,
  onMinimize,
  children,
  zIndex,
  bringToFront,
}) => {
  const windowRef = useRef<Rnd>(null);

  if (!isOpen) {
    return null;
  }

  return (
    <Rnd
      ref={windowRef}
      default={{
        x: initialX,
        y: initialY,
        width: initialWidth,
        height: initialHeight,
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      className="retro-window"
      style={{ 
        zIndex,
        // Add subtle CRT shadow
        boxShadow: '0 0 10px rgba(51, 255, 51, 0.3)',
      }}
      dragHandleClassName="window-header"
      onMouseDown={() => bringToFront(id)}
    >
      <div className="window-header">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          {onMinimize && (
            <button
              className="window-button"
              onClick={() => onMinimize(id)}
              aria-label="Minimize"
            >
              _
            </button>
          )}
          <button
            className="window-button"
            onClick={() => onClose(id)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </Rnd>
  );
};

export default Window;