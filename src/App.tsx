import { useState, useEffect } from 'react';
import './App.css';
import './styles/global.css';

// Components
import Window from './components/Window';
import ChatWindow from './components/ChatWindow';
import AboutWindow from './components/AboutWindow';
import SettingsWindow from './components/SettingsWindow';
import DesktopIcon from './components/DesktopIcon';
import Taskbar from './components/Taskbar';

// Hooks
import useAIChat from './hooks/useAIChat';
import useWindowManager from './hooks/useWindowManager';
import useTheme from './hooks/useTheme';

// Assets
import robotIcon from './assets/images/robot-icon.svg';
import settingsIcon from './assets/images/settings-icon.svg';
import aboutIcon from './assets/images/about-icon.svg';

// Constants
const WINDOWS = {
  CHAT: 'chat',
  ABOUT: 'about',
  SETTINGS: 'settings',
};

const WINDOW_TITLES = {
  [WINDOWS.CHAT]: 'NEURAL INTERFACE v1.0.2',
  [WINDOWS.ABOUT]: 'ABOUT SYSTEM',
  [WINDOWS.SETTINGS]: 'SYSTEM SETTINGS',
};

function App() {
  // Theme management
  const { theme, setTheme } = useTheme('green');
  
  // Window management
  const {
    openWindows,
    minimizedWindows,
    openWindow,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    bringToFront,
    isWindowOpen,
    getWindowZIndex,
  } = useWindowManager();
  
  // AI Chat functionality
  const { messages, isProcessing, addUserMessage } = useAIChat();
  
  // Time display
  const [time, setTime] = useState(new Date());
  
  // Boot sequence state
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  
  // Handle boot sequence
  useEffect(() => {
    if (isBooting) {
      const bootInterval = setInterval(() => {
        setBootProgress(prev => {
          const newProgress = prev + Math.random() * 5;
          if (newProgress >= 100) {
            clearInterval(bootInterval);
            setTimeout(() => setIsBooting(false), 500);
            return 100;
          }
          return newProgress;
        });
      }, 150);
      
      return () => clearInterval(bootInterval);
    }
  }, [isBooting]);
  
  // Update clock
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(clockInterval);
  }, []);
  
  // Boot screen
  if (isBooting) {
    return (
      <div className="crt-container" style={{ 
        backgroundColor: 'var(--dark-bg)',
        color: 'var(--text-color)',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}>
        <div style={{ 
          fontFamily: 'var(--terminal-font)',
          fontSize: '24px',
          marginBottom: '20px',
          textAlign: 'center',
        }} className="text-glow">
          RETRO-OS v3.14
        </div>
        
        <div style={{ width: '80%', maxWidth: '500px' }}>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${bootProgress}%` }}></div>
          </div>
        </div>
        
        <div style={{ 
          fontFamily: 'var(--terminal-font)',
          fontSize: '16px',
          marginTop: '20px',
          textAlign: 'center',
        }}>
          INITIALIZING NEURAL INTERFACE...{' '}
          <span className="blink">_</span>
        </div>
        
        <div style={{ 
          fontFamily: 'var(--terminal-font)',
          fontSize: '12px',
          marginTop: '40px',
          opacity: 0.7,
        }}>
          © 2024 RETRO COMPUTING SYSTEMS
        </div>
      </div>
    );
  }
  
  return (
    <div className="crt-container">
      {/* Desktop */}
      <div 
        className="desktop"
        style={{ 
          height: 'calc(100vh - 40px)', // Subtract taskbar height
          padding: '20px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Desktop Icons */}
        <div 
          className="desktop-icons"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '20px',
          }}
        >
          <DesktopIcon
            id={WINDOWS.CHAT}
            label="NEURAL INTERFACE"
            icon={robotIcon}
            onClick={() => openWindow(WINDOWS.CHAT)}
          />
          
          <DesktopIcon
            id={WINDOWS.SETTINGS}
            label="SETTINGS"
            icon={settingsIcon}
            onClick={() => openWindow(WINDOWS.SETTINGS)}
          />
          
          <DesktopIcon
            id={WINDOWS.ABOUT}
            label="ABOUT"
            icon={aboutIcon}
            onClick={() => openWindow(WINDOWS.ABOUT)}
          />
        </div>
        
        {/* Windows */}
        <ChatWindow
          id={WINDOWS.CHAT}
          isOpen={isWindowOpen(WINDOWS.CHAT)}
          onClose={() => closeWindow(WINDOWS.CHAT)}
          onMinimize={() => minimizeWindow(WINDOWS.CHAT)}
          messages={messages}
          onSendMessage={addUserMessage}
          zIndex={getWindowZIndex(WINDOWS.CHAT)}
          bringToFront={bringToFront}
        />
        
        <AboutWindow
          id={WINDOWS.ABOUT}
          isOpen={isWindowOpen(WINDOWS.ABOUT)}
          onClose={() => closeWindow(WINDOWS.ABOUT)}
          zIndex={getWindowZIndex(WINDOWS.ABOUT)}
          bringToFront={bringToFront}
        />
        
        <SettingsWindow
          id={WINDOWS.SETTINGS}
          isOpen={isWindowOpen(WINDOWS.SETTINGS)}
          onClose={() => closeWindow(WINDOWS.SETTINGS)}
          currentTheme={theme}
          onChangeTheme={setTheme}
          zIndex={getWindowZIndex(WINDOWS.SETTINGS)}
          bringToFront={bringToFront}
        />
        
        {/* Time display */}
        <div 
          className="time-display text-glow"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontFamily: 'var(--terminal-font)',
            fontSize: '18px',
          }}
        >
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        
        {/* Copyright text */}
        <div 
          className="copyright"
          style={{
            position: 'absolute',
            bottom: '60px', // Just above taskbar
            right: '20px',
            fontFamily: 'var(--terminal-font)',
            fontSize: '12px',
            opacity: 0.5,
          }}
        >
          RETRO-OS v3.14 © 2024
        </div>
      </div>
      
      {/* Taskbar */}
      <Taskbar
        minimizedWindows={minimizedWindows}
        openWindows={minimizedWindows.reduce((acc, id) => {
          acc[id] = WINDOW_TITLES[id as keyof typeof WINDOW_TITLES] || 'Window';
          return acc;
        }, {} as Record<string, string>)}
        onRestoreWindow={restoreWindow}
      />
    </div>
  );
}

export default App;