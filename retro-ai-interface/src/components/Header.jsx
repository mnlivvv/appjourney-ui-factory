import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ toggleSidebar }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Simulated notification after 15 seconds
  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setIsNotificationActive(true);
    }, 15000);
    
    return () => clearTimeout(notificationTimer);
  }, []);
  
  // Format time in retro style: HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  // Format date in retro style: YYYY.MM.DD
  const formattedDate = `${currentTime.getFullYear()}.${String(currentTime.getMonth() + 1).padStart(2, '0')}.${String(currentTime.getDate()).padStart(2, '0')}`;
  
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/" className="logo">
          <h1>RetroFuture AI</h1>
        </Link>
      </div>
      
      <div className="header-center">
        {isNotificationActive && (
          <div className="notification flicker">
            <span className="led warning"></span>
            NEURAL NETWORK UPDATE AVAILABLE - v3.5.7
          </div>
        )}
      </div>
      
      <div className="header-right">
        <div className="system-status">
          <span className="status-label">STATUS:</span>
          <span className="status-value">
            <span className="led active"></span>
            {systemStatus}
          </span>
        </div>
        
        <div className="system-time">
          <div className="date">{formattedDate}</div>
          <div className="time flicker">{formattedTime}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;