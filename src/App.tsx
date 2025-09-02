import { useState, useEffect } from 'react'
import ChatInterface from './components/ChatInterface'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  // Detect OS preference for dark/light mode and initialize state
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure smooth fade-in animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      
      <div className="app-header">
        <h1>Nature<span className="accent">AI</span></h1>
        <p className="app-subtitle">A harmonious conversation with artificial intelligence</p>
      </div>
      
      <div className="container">
        <div className="chat-container">
          <ChatInterface />
        </div>
      </div>
      
      <footer className="app-footer">
        <p className="read-the-docs">
          Built with React + Vite • Inspired by nature
        </p>
      </footer>
    </div>
  )
}

export default App
