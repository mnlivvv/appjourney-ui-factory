import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [aiStatus, setAiStatus] = useState({
    neural: { value: 0, max: 100 },
    quantum: { value: 0, max: 100 },
    learning: { value: 0, max: 100 },
    security: { value: 0, max: 100 },
  });
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      timestamp: '14:27:33',
      message: 'MODEL TRAINING COMPLETE - ACCURACY 97.8%',
      type: 'success',
    },
    {
      id: 2,
      timestamp: '13:05:12',
      message: 'SECURITY SCAN COMPLETED - NO THREATS DETECTED',
      type: 'info',
    },
    {
      id: 3,
      timestamp: '09:42:58',
      message: 'SYSTEM UPDATE AVAILABLE - v3.5.7',
      type: 'warning',
    },
  ]);
  
  // Simulate loading of AI system status
  useEffect(() => {
    const loadStatusData = () => {
      setAiStatus({
        neural: { value: 87, max: 100 },
        quantum: { value: 92, max: 100 },
        learning: { value: 63, max: 100 },
        security: { value: 95, max: 100 },
      });
    };
    
    const timer = setTimeout(loadStatusData, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  // Recent activities data
  const recentActivities = [
    { timestamp: '15:42:12', activity: 'NEURAL MODEL OPTIMIZATION' },
    { timestamp: '14:30:05', activity: 'DATA ANALYSIS: PATTERN ALPHA-7' },
    { timestamp: '13:27:58', activity: 'SECURITY PROTOCOL UPDATE' },
    { timestamp: '12:15:33', activity: 'QUANTUM CIRCUIT CALIBRATION' },
    { timestamp: '11:02:47', activity: 'DEEP LEARNING TRAINING CYCLE' },
  ];
  
  // Stats data
  const stats = [
    { label: 'ACTIVE MODELS', value: '12' },
    { label: 'INFERENCE CALLS', value: '1,427' },
    { label: 'ACCURACY RATING', value: '96.3%' },
    { label: 'UPTIME', value: '14d 7h' },
  ];
  
  return (
    <div className="dashboard">
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="led active"></span>
            <h2>AI SYSTEM STATUS</h2>
          </div>
          <div className="section-controls">
            <button className="refresh-btn">
              <span className="refresh-icon">⟳</span>
              REFRESH
            </button>
          </div>
        </div>
        
        <div className="status-grid">
          {Object.entries(aiStatus).map(([key, { value, max }]) => (
            <motion.div 
              key={key}
              className="status-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="status-header">
                <h3>{key.toUpperCase()} NETWORK</h3>
                <div className="status-indicator">
                  <span className={`led ${value > 70 ? 'active' : 'warning'}`}></span>
                </div>
              </div>
              
              <div className="status-body">
                <div className="meter-container">
                  <div className="meter-label">
                    <span>STATUS</span>
                    <span className="meter-value">{value}%</span>
                  </div>
                  <div className="meter">
                    <motion.div 
                      className="meter-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${(value / max) * 100}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <div className="dashboard-grid">
        <section className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="led active"></span>
              <h2>NOTIFICATIONS</h2>
            </div>
          </div>
          
          <div className="notifications-list">
            {notifications.map((notification) => (
              <motion.div 
                key={notification.id}
                className={`notification-item ${notification.type}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="notification-time">{notification.timestamp}</div>
                <div className="notification-content">
                  <span className={`led ${notification.type}`}></span>
                  <div className="notification-message">{notification.message}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        <section className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="led active"></span>
              <h2>RECENT ACTIVITY</h2>
            </div>
          </div>
          
          <div className="activity-list">
            {recentActivities.map((activity, index) => (
              <motion.div 
                key={index}
                className="activity-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="activity-time">{activity.timestamp}</div>
                <div className="activity-content">{activity.activity}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="led active"></span>
            <h2>SYSTEM OVERVIEW</h2>
          </div>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value flicker">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;