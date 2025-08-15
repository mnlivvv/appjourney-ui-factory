import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Terminal from './components/Terminal';
import Dashboard from './components/Dashboard';
import AIAnalytics from './components/AIAnalytics';
import ModelTraining from './components/ModelTraining';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

// Import styles
import './styles/App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [systemStatus, setSystemStatus] = useState('initializing');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Simulate system boot sequence
  useEffect(() => {
    const bootSequence = async () => {
      setSystemStatus('booting');
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSystemStatus('loading_kernel');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSystemStatus('initializing_modules');
      await new Promise(resolve => setTimeout(resolve, 1200));
      setSystemStatus('establishing_connection');
      await new Promise(resolve => setTimeout(resolve, 800));
      setSystemStatus('system_ready');
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };
    
    bootSequence();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (isLoading) {
    return (
      <div className="boot-screen scanner">
        <div className="boot-content">
          <h1 className="flicker">SYSTEM BOOT</h1>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: getProgressWidth(systemStatus) }}></div>
          </div>
          <div className="boot-message">
            <span className="led active"></span>
            {getBootMessage(systemStatus)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container scanner">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="main-content">
        <Sidebar isOpen={sidebarOpen} />
        
        <AnimatePresence mode="wait">
          <motion.main 
            className="content-area grid-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/terminal" element={<Terminal />} />
              <Route path="/analytics" element={<AIAnalytics />} />
              <Route path="/training" element={<ModelTraining />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
      </div>
      
      <Footer />
    </div>
  );
}

// Helper functions for boot sequence
function getProgressWidth(status) {
  switch (status) {
    case 'booting':
      return '20%';
    case 'loading_kernel':
      return '40%';
    case 'initializing_modules':
      return '60%';
    case 'establishing_connection':
      return '80%';
    case 'system_ready':
      return '100%';
    default:
      return '0%';
  }
}

function getBootMessage(status) {
  switch (status) {
    case 'booting':
      return 'INITIALIZING SYSTEM BOOT SEQUENCE...';
    case 'loading_kernel':
      return 'LOADING NEURAL KERNEL v2.7.14...';
    case 'initializing_modules':
      return 'INITIALIZING AI MODULES AND SUBSYSTEMS...';
    case 'establishing_connection':
      return 'ESTABLISHING SECURE CONNECTION...';
    case 'system_ready':
      return 'SYSTEM READY - WELCOME TO RETROFUTURE AI TERMINAL';
    default:
      return 'STANDBY...';
  }
}

export default App;