import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

// Components
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Terminal from './components/Terminal';
import AIModule from './components/AIModule';
import LoadingScreen from './components/LoadingScreen';
import NotFound from './components/NotFound';

// Context
import { AudioProvider } from './context/AudioContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [systemStatus, setSystemStatus] = useState('initializing');
  
  // Simulate system boot sequence
  useEffect(() => {
    const bootSequence = async () => {
      const bootSteps = [
        'Initializing system kernel...',
        'Loading main modules...',
        'Establishing neural network connections...',
        'Calibrating AI interface...',
        'Optimizing quantum algorithms...',
        'System ready'
      ];
      
      const stepTime = 1200; // ms per step
      
      for (let i = 0; i < bootSteps.length; i++) {
        setSystemStatus(bootSteps[i]);
        setLoadingProgress(Math.floor((i + 1) / bootSteps.length * 100));
        
        // Simulate loading time
        await new Promise(resolve => setTimeout(resolve, stepTime));
      }
      
      // Final delay before showing main interface
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };
    
    bootSequence();
  }, []);
  
  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} status={systemStatus} />;
  }
  
  return (
    <AudioProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/terminal" element={<Terminal />} />
              <Route path="/ai" element={<AIModule />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AudioProvider>
  );
}

export default App;