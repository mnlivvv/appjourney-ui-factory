import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAudio } from '../context/AudioContext';

function Header() {
  const location = useLocation();
  const { playUISound, isMuted, toggleMute } = useAudio();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState({
    cpu: Math.floor(Math.random() * 30) + 10,
    memory: Math.floor(Math.random() * 40) + 30,
    network: 'ACTIVE'
  });
  
  // Update system status periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus({
        cpu: Math.floor(Math.random() * 30) + 10,
        memory: Math.floor(Math.random() * 40) + 30,
        network: Math.random() > 0.05 ? 'ACTIVE' : 'SYNCING'
      });
      setCurrentTime(new Date());
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  return (
    <header className="header-bar screen">
      <div className="header-title">RETRO-AI INTERFACE v1.0</div>
      
      <nav className="main-nav">
        {[
          { path: '/', label: 'DASHBOARD' },
          { path: '/terminal', label: 'TERMINAL' },
          { path: '/ai', label: 'AI MODULE' }
        ].map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className={`button ${location.pathname === link.path ? 'active' : ''}`}
            onClick={playUISound}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      
      <div className="system-info">
        <div className="system-status">
          <span className="terminal-text">CPU: {systemStatus.cpu}%</span>
          <span className="terminal-text">MEM: {systemStatus.memory}%</span>
          <div className="status-indicator status-active"></div>
          <span className="terminal-text">{systemStatus.network}</span>
        </div>
        <div className="system-time terminal-text">{formatTime(currentTime)}</div>
        <button 
          className="button" 
          onClick={() => {
            playUISound();
            toggleMute();
          }}
        >
          {isMuted ? 'UNMUTE' : 'MUTE'}
        </button>
      </div>
    </header>
  );
}

export default Header;