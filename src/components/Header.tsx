import { useState, useEffect } from 'react';

interface HeaderProps {
  toggleFocusMode: () => void;
  isFocusMode: boolean;
}

const Header = ({ toggleFocusMode, isFocusMode }: HeaderProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentTime);
  
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }).format(currentTime);

  return (
    <header className="app-header">
      <div className="header-left">
        <h1>Mindful Tasks</h1>
      </div>
      
      <div className="header-center">
        <div className="date-time">
          <div className="date">{formattedDate}</div>
          <div className="time">{formattedTime}</div>
        </div>
      </div>
      
      <div className="header-right">
        <button 
          className={`focus-mode-toggle ${isFocusMode ? 'active' : ''}`}
          onClick={toggleFocusMode}
          aria-label={isFocusMode ? "Disable focus mode" : "Enable focus mode"}
        >
          {isFocusMode ? 'Exit Focus' : 'Focus Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;