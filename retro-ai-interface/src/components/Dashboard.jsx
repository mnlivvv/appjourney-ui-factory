import { useState, useEffect } from 'react';
import { useAudio } from '../context/AudioContext';

function Dashboard() {
  const { playUISound } = useAudio();
  const [systemMetrics, setSystemMetrics] = useState({
    aiStatus: 'OPERATIONAL',
    processingPower: 87,
    memoryUsage: 42,
    networkStatus: 'CONNECTED',
    activeSensors: 16,
    pendingTasks: 3,
  });
  
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, timestamp: new Date(Date.now() - 120000).toISOString(), action: 'System scan completed', status: 'complete' },
    { id: 2, timestamp: new Date(Date.now() - 240000).toISOString(), action: 'Neural network calibration', status: 'complete' },
    { id: 3, timestamp: new Date(Date.now() - 360000).toISOString(), action: 'User authentication', status: 'complete' },
    { id: 4, timestamp: new Date(Date.now() - 480000).toISOString(), action: 'Database optimization', status: 'complete' },
  ]);
  
  // Simulate changing metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        ...prev,
        processingPower: Math.min(100, Math.max(60, prev.processingPower + (Math.random() * 10 - 5))),
        memoryUsage: Math.min(100, Math.max(30, prev.memoryUsage + (Math.random() * 8 - 4))),
        activeSensors: Math.floor(Math.random() * 5) + 14,
        pendingTasks: Math.floor(Math.random() * 5) + 1,
      }));
      
      // Randomly add new activities
      if (Math.random() > 0.7) {
        const actions = [
          'Quantum calculation completed',
          'Security scan performed',
          'Data backup executed',
          'System diagnostic run',
          'Network analysis completed',
          'AI model updated',
          'Predictive analysis generated'
        ];
        
        const newActivity = {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          action: actions[Math.floor(Math.random() * actions.length)],
          status: 'complete'
        };
        
        setRecentActivities(prev => [newActivity, ...prev.slice(0, 9)]);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  return (
    <div className="dashboard-container">
      <h1 className="terminal-text" style={{ marginBottom: '20px' }}>SYSTEM DASHBOARD</h1>
      
      <div className="grid-container">
        {/* System Status Panel */}
        <div className="panel screen">
          <div className="panel-header">
            <h2 className="panel-title terminal-text">SYSTEM STATUS</h2>
            <div className="status-indicator status-active"></div>
          </div>
          
          <div className="panel-content">
            <div className="status-item">
              <span className="terminal-text">AI Core:</span>
              <span className="terminal-text">{systemMetrics.aiStatus}</span>
            </div>
            
            <div className="status-item">
              <span className="terminal-text">Processing:</span>
              <div className="loading-bar">
                <div 
                  className="loading-bar-progress" 
                  style={{ width: `${systemMetrics.processingPower}%` }}
                ></div>
              </div>
              <span className="terminal-text">{Math.floor(systemMetrics.processingPower)}%</span>
            </div>
            
            <div className="status-item">
              <span className="terminal-text">Memory:</span>
              <div className="loading-bar">
                <div 
                  className="loading-bar-progress" 
                  style={{ width: `${systemMetrics.memoryUsage}%` }}
                ></div>
              </div>
              <span className="terminal-text">{Math.floor(systemMetrics.memoryUsage)}%</span>
            </div>
            
            <div className="status-item">
              <span className="terminal-text">Network:</span>
              <span className="terminal-text">{systemMetrics.networkStatus}</span>
            </div>
            
            <div className="status-item">
              <span className="terminal-text">Active Sensors:</span>
              <span className="terminal-text">{systemMetrics.activeSensors}</span>
            </div>
            
            <div className="status-item">
              <span className="terminal-text">Pending Tasks:</span>
              <span className="terminal-text">{systemMetrics.pendingTasks}</span>
            </div>
            
            <button className="button" onClick={playUISound} style={{ marginTop: '15px' }}>
              RUN DIAGNOSTICS
            </button>
          </div>
        </div>
        
        {/* Activity Panel */}
        <div className="panel screen">
          <div className="panel-header">
            <h2 className="panel-title terminal-text">RECENT ACTIVITIES</h2>
            <button className="button" onClick={playUISound}>
              REFRESH
            </button>
          </div>
          
          <div className="panel-content">
            <div className="activity-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-timestamp terminal-text">
                    {formatTimestamp(activity.timestamp)}
                  </div>
                  <div className="activity-details">
                    <span className="terminal-text">{activity.action}</span>
                    <span className="status-indicator status-active" style={{ marginLeft: '10px' }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Command Center Panel */}
        <div className="panel screen">
          <div className="panel-header">
            <h2 className="panel-title terminal-text">COMMAND CENTER</h2>
          </div>
          
          <div className="panel-content">
            <div className="command-buttons">
              <button className="button" onClick={playUISound}>
                INITIATE SCAN
              </button>
              <button className="button" onClick={playUISound}>
                UPDATE AI MODELS
              </button>
              <button className="button" onClick={playUISound}>
                OPTIMIZE SYSTEM
              </button>
              <button className="button" onClick={playUISound}>
                BACKUP DATA
              </button>
            </div>
            
            <div className="system-message screen" style={{ marginTop: '15px', padding: '10px' }}>
              <div className="terminal-text">
                READY FOR COMMAND INPUT
                <span className="blink">_</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Data Visualization Panel */}
        <div className="panel screen">
          <div className="panel-header">
            <h2 className="panel-title terminal-text">DATA VISUALIZATION</h2>
            <button className="button" onClick={playUISound}>
              CHANGE VIEW
            </button>
          </div>
          
          <div className="panel-content">
            <div className="visualization-container">
              <img 
                src="/assets/images/pixelated-interface.png" 
                alt="Data Visualization" 
                className="pixelated"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '200px',
                  objectFit: 'contain',
                  marginBottom: '10px'
                }} 
              />
              
              <div className="visualization-metrics">
                <div className="metric-item terminal-text">
                  QUANTUM FLUX: 87.3%
                </div>
                <div className="metric-item terminal-text">
                  NEURAL DENSITY: 42.1%
                </div>
                <div className="metric-item terminal-text">
                  ALGORITHM EFFICIENCY: 93.7%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;