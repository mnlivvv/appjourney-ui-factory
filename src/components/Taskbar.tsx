import React from 'react';

interface TaskbarProps {
  minimizedWindows: string[];
  openWindows: Record<string, string>; // id -> title
  onRestoreWindow: (id: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({
  minimizedWindows,
  openWindows,
  onRestoreWindow,
}) => {
  return (
    <div 
      className="taskbar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40px',
        backgroundColor: '#181818',
        borderTop: '2px solid var(--button-highlight)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        zIndex: 9999,
      }}
    >
      <div 
        className="start-button retro-button"
        style={{
          marginRight: '10px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 16px',
        }}
      >
        SYSTEM
      </div>
      
      <div 
        className="taskbar-divider"
        style={{
          width: '2px',
          height: '30px',
          backgroundColor: 'var(--button-dark-shadow)',
          margin: '0 10px',
        }}
      />
      
      <div 
        className="window-buttons"
        style={{
          display: 'flex',
          gap: '5px',
          overflowX: 'auto',
          flexGrow: 1,
        }}
      >
        {minimizedWindows.map(id => (
          <button
            key={id}
            className="retro-button"
            style={{
              height: '30px',
              fontSize: '0.8rem',
              padding: '0 10px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '150px',
            }}
            onClick={() => onRestoreWindow(id)}
          >
            {openWindows[id] || 'Window'}
          </button>
        ))}
      </div>
      
      <div 
        className="clock"
        style={{
          marginLeft: 'auto',
          fontFamily: 'var(--terminal-font)',
          color: 'var(--text-color)',
          padding: '0 10px',
        }}
      >
        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default Taskbar;