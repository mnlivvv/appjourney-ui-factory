import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaRobot, 
  FaServer, 
  FaDatabase, 
  FaBrain, 
  FaBell,
  FaCog,
  FaChartBar,
  FaChartPie,
  FaChartArea,
  FaExclamationTriangle,
  FaCheck
} from 'react-icons/fa';

// Components
import FuturisticCard from '../ui/FuturisticCard';
import DataDisplay from '../ui/DataDisplay';
import ProgressBar from '../ui/ProgressBar';
import FuturisticButton from '../ui/FuturisticButton';

// Assets
import holographicInterfaceImg from '../../assets/images/holographic-interface.png';

const Dashboard = () => {
  const [aiStatus, setAiStatus] = useState('active');
  const [systemLoad, setSystemLoad] = useState(62);
  const [memoryUsage, setMemoryUsage] = useState(48);
  const [currentTask, setCurrentTask] = useState('Data Analysis');
  const [notifications, setNotifications] = useState([]);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [logData, setLogData] = useState([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);
  
  // Simulate data loading and system monitoring
  useEffect(() => {
    // Initial log data
    setIsLoadingLogs(true);
    setTimeout(() => {
      setLogData([
        'System initialized successfully',
        'Loading AI models...',
        'Neural network connections established',
        'Quantum processing unit online',
        'Data analysis pipeline ready',
        'Starting real-time monitoring',
        'System fully operational'
      ]);
      setIsLoadingLogs(false);
    }, 2000);
    
    // Simulate system load fluctuations
    const loadInterval = setInterval(() => {
      setSystemLoad(prevLoad => {
        const change = Math.floor(Math.random() * 10) - 4; // -4 to +5
        const newLoad = Math.max(30, Math.min(95, prevLoad + change));
        return newLoad;
      });
      
      setMemoryUsage(prevUsage => {
        const change = Math.floor(Math.random() * 8) - 3; // -3 to +4
        const newUsage = Math.max(20, Math.min(90, prevUsage + change));
        return newUsage;
      });
    }, 5000);
    
    // Simulate random notifications
    const notificationInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance of new notification
        const notificationTypes = [
          { 
            id: Date.now(), 
            type: 'warning', 
            message: 'Anomaly detected in data stream', 
            time: new Date().toLocaleTimeString() 
          },
          { 
            id: Date.now() + 1, 
            type: 'info', 
            message: 'Model training complete', 
            time: new Date().toLocaleTimeString() 
          },
          { 
            id: Date.now() + 2, 
            type: 'success', 
            message: 'Data processing task completed', 
            time: new Date().toLocaleTimeString() 
          }
        ];
        
        const newNotification = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
        setNotifications(prev => [newNotification, ...prev].slice(0, 5)); // Keep only the latest 5
        
        // Add to log
        setLogData(prev => [
          `[${newNotification.time}] ${newNotification.message}`,
          ...prev
        ]);
      }
    }, 8000);
    
    // Simulate task changes
    const taskInterval = setInterval(() => {
      const tasks = [
        'Data Analysis',
        'Neural Network Training',
        'Predictive Modeling',
        'Anomaly Detection',
        'Language Processing'
      ];
      
      const newTask = tasks[Math.floor(Math.random() * tasks.length)];
      setCurrentTask(newTask);
      
      // Add to log
      setLogData(prev => [
        `[${new Date().toLocaleTimeString()}] Task switched to: ${newTask}`,
        ...prev
      ]);
      
    }, 15000);
    
    return () => {
      clearInterval(loadInterval);
      clearInterval(notificationInterval);
      clearInterval(taskInterval);
    };
  }, []);
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    
    // Simulate loading data for the selected tab
    if (tab !== 'overview') {
      setIsLoadingLogs(true);
      setLogData([]);
      
      setTimeout(() => {
        let newLogs = [];
        
        switch (tab) {
          case 'performance':
            newLogs = [
              'Performance monitoring initialized',
              'CPU utilization: 42%',
              'Memory allocation: 16.8 GB',
              'Neural processing units: 8/12 active',
              'Network throughput: 2.4 GB/s',
              'Response time: 12ms (avg)',
              'Cache hit ratio: 87.3%',
              'Parallel processing threads: 24'
            ];
            break;
          case 'models':
            newLogs = [
              'AI model registry loaded',
              'Active models: 8',
              'Primary classification model: v2.4.1',
              'Language processing model: v3.1.0',
              'Image recognition model: v4.0.2',
              'Recommendation engine: v1.9.5',
              'Anomaly detection model: v2.2.3',
              'Time series prediction model: v3.0.1'
            ];
            break;
          case 'data':
            newLogs = [
              'Data sources connected: 12',
              'Primary database: Connected (120ms ping)',
              'Data warehouse status: Online',
              'Current storage utilization: 42.3 TB',
              'Data processing rate: 1.8M records/min',
              'ETL pipelines: 16 active, 2 scheduled',
              'Data integrity check: Passed',
              'Last backup: Today at 03:00 AM'
            ];
            break;
          default:
            newLogs = [];
        }
        
        setLogData(newLogs);
        setIsLoadingLogs(false);
      }, 1500);
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Dashboard tabs
  const dashboardTabs = [
    { id: 'overview', name: 'Overview', icon: <FaChartLine /> },
    { id: 'performance', name: 'Performance', icon: <FaChartBar /> },
    { id: 'models', name: 'AI Models', icon: <FaBrain /> },
    { id: 'data', name: 'Data Sources', icon: <FaDatabase /> }
  ];
  
  // Notification icon mapping
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'warning':
        return <FaExclamationTriangle style={{ color: 'var(--neon-magenta)' }} />;
      case 'success':
        return <FaCheck style={{ color: 'var(--neon-cyan)' }} />;
      case 'info':
      default:
        return <FaBell style={{ color: 'var(--electric-blue)' }} />;
    }
  };
  
  return (
    <div className="dashboard-page">
      <div className="container">
        <motion.div 
          className="dashboard-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            padding: 'var(--space-lg) 0',
            borderBottom: '1px solid var(--highlight-blue)'
          }}
        >
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 'var(--space-md)'
            }}
          >
            <div className="dashboard-title">
              <h1>AI System <span className="gradient-text">Dashboard</span></h1>
              <p style={{ color: 'var(--text-secondary)' }}>
                Real-time monitoring and control of AI processes
              </p>
            </div>
            
            <div 
              className="dashboard-status"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                padding: 'var(--space-sm) var(--space-lg)',
                backgroundColor: 'rgba(10, 35, 66, 0.4)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--highlight-blue)'
              }}
            >
              <div 
                className="status-indicator"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)'
                }}
              >
                <div 
                  className={`indicator-dot ${aiStatus}`}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 
                      aiStatus === 'active' ? 'var(--neon-cyan)' :
                      aiStatus === 'warning' ? 'var(--neon-magenta)' :
                      'var(--text-secondary)',
                    boxShadow: 
                      aiStatus === 'active' ? 'var(--glow-cyan)' :
                      aiStatus === 'warning' ? 'var(--glow-magenta)' :
                      'none',
                    animation: aiStatus === 'active' ? 'pulse 2s infinite' : 'none'
                  }}
                ></div>
                <span style={{ color: 'var(--text-primary)' }}>
                  System Status: 
                  <span style={{ 
                    color: 
                      aiStatus === 'active' ? 'var(--neon-cyan)' :
                      aiStatus === 'warning' ? 'var(--neon-magenta)' :
                      'var(--text-secondary)',
                    marginLeft: 'var(--space-xs)',
                    fontWeight: 'bold'
                  }}>
                    {aiStatus === 'active' ? 'ONLINE' : 
                     aiStatus === 'warning' ? 'WARNING' : 'OFFLINE'}
                  </span>
                </span>
              </div>
              
              <div 
                className="current-task"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)'
                }}
              >
                <FaRobot style={{ color: 'var(--neon-cyan)' }} />
                <span style={{ color: 'var(--text-primary)' }}>
                  Current Task: <span style={{ color: 'var(--electric-blue)' }}>{currentTask}</span>
                </span>
              </div>
            </div>
          </div>
          
          <div 
            className="dashboard-tabs"
            style={{
              display: 'flex',
              marginTop: 'var(--space-lg)',
              borderBottom: '1px solid var(--highlight-blue)'
            }}
          >
            {dashboardTabs.map(tab => (
              <div 
                key={tab.id}
                className={`dashboard-tab ${selectedTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabChange(tab.id)}
                style={{
                  padding: 'var(--space-sm) var(--space-lg)',
                  cursor: 'pointer',
                  color: selectedTab === tab.id ? 'var(--neon-cyan)' : 'var(--text-secondary)',
                  borderBottom: selectedTab === tab.id ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-xs)',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-name">{tab.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Dashboard Content */}
        <motion.div 
          className="dashboard-content"
          key={selectedTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: 'var(--space-xl) 0'
          }}
        >
          {selectedTab === 'overview' && (
            <motion.div 
              className="overview-tab"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div 
                className="dashboard-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <motion.div variants={itemVariants}>
                  <FuturisticCard
                    title="System Performance"
                    icon={<FaServer />}
                    glowColor="cyan"
                  >
                    <div className="performance-metrics">
                      <ProgressBar
                        value={systemLoad}
                        label="System Load"
                        animated={true}
                        striped={true}
                        glowColor={systemLoad > 80 ? 'magenta' : 'cyan'}
                      />
                      
                      <ProgressBar
                        value={memoryUsage}
                        label="Memory Usage"
                        animated={true}
                        glowColor="blue"
                      />
                      
                      <div 
                        className="metric-item"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: 'var(--space-sm)',
                          fontSize: '0.9rem'
                        }}
                      >
                        <span style={{ color: 'var(--text-secondary)' }}>AI Models Active:</span>
                        <span style={{ color: 'var(--neon-cyan)' }}>8/12</span>
                      </div>
                      
                      <div 
                        className="metric-item"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: 'var(--space-sm)',
                          fontSize: '0.9rem'
                        }}
                      >
                        <span style={{ color: 'var(--text-secondary)' }}>Processing Rate:</span>
                        <span style={{ color: 'var(--neon-cyan)' }}>1.2M records/sec</span>
                      </div>
                      
                      <div 
                        className="metric-item"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.9rem'
                        }}
                      >
                        <span style={{ color: 'var(--text-secondary)' }}>Response Time:</span>
                        <span style={{ color: 'var(--neon-cyan)' }}>12ms</span>
                      </div>
                    </div>
                  </FuturisticCard>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FuturisticCard
                    title="AI Activity"
                    icon={<FaBrain />}
                    glowColor="magenta"
                  >
                    <div 
                      className="ai-activity-content"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                      }}
                    >
                      <div 
                        className="activity-metrics"
                        style={{
                          marginBottom: 'var(--space-md)'
                        }}
                      >
                        <div 
                          className="metric-item"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 'var(--space-sm)',
                            fontSize: '0.9rem'
                          }}
                        >
                          <span style={{ color: 'var(--text-secondary)' }}>Model Accuracy:</span>
                          <span style={{ color: 'var(--neon-magenta)' }}>97.8%</span>
                        </div>
                        
                        <div 
                          className="metric-item"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 'var(--space-sm)',
                            fontSize: '0.9rem'
                          }}
                        >
                          <span style={{ color: 'var(--text-secondary)' }}>Active Sessions:</span>
                          <span style={{ color: 'var(--neon-magenta)' }}>24</span>
                        </div>
                        
                        <div 
                          className="metric-item"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 'var(--space-md)',
                            fontSize: '0.9rem'
                          }}
                        >
                          <span style={{ color: 'var(--text-secondary)' }}>Predictions Generated:</span>
                          <span style={{ color: 'var(--neon-magenta)' }}>1,842,976</span>
                        </div>
                      </div>
                      
                      <div 
                        className="model-distribution"
                        style={{
                          flex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: 'var(--space-sm)'
                        }}
                      >
                        <h4 style={{ 
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          marginBottom: 'var(--space-xs)'
                        }}>
                          Model Usage Distribution:
                        </h4>
                        
                        <div className="model-bar-container">
                          <div 
                            className="model-bar-label"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.8rem'
                            }}
                          >
                            <span>Classification</span>
                            <span>42%</span>
                          </div>
                          <div 
                            className="model-bar"
                            style={{
                              height: '4px',
                              width: '100%',
                              backgroundColor: 'rgba(10, 35, 66, 0.5)',
                              marginBottom: 'var(--space-xs)',
                              position: 'relative'
                            }}
                          >
                            <div 
                              className="model-bar-fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '42%',
                                backgroundColor: 'var(--neon-magenta)'
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="model-bar-container">
                          <div 
                            className="model-bar-label"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.8rem'
                            }}
                          >
                            <span>Natural Language</span>
                            <span>28%</span>
                          </div>
                          <div 
                            className="model-bar"
                            style={{
                              height: '4px',
                              width: '100%',
                              backgroundColor: 'rgba(10, 35, 66, 0.5)',
                              marginBottom: 'var(--space-xs)',
                              position: 'relative'
                            }}
                          >
                            <div 
                              className="model-bar-fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '28%',
                                backgroundColor: 'var(--neon-magenta)'
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="model-bar-container">
                          <div 
                            className="model-bar-label"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.8rem'
                            }}
                          >
                            <span>Prediction</span>
                            <span>18%</span>
                          </div>
                          <div 
                            className="model-bar"
                            style={{
                              height: '4px',
                              width: '100%',
                              backgroundColor: 'rgba(10, 35, 66, 0.5)',
                              marginBottom: 'var(--space-xs)',
                              position: 'relative'
                            }}
                          >
                            <div 
                              className="model-bar-fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '18%',
                                backgroundColor: 'var(--neon-magenta)'
                              }}
                            ></div>
                          </div>
                        </div>
                        
                        <div className="model-bar-container">
                          <div 
                            className="model-bar-label"
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.8rem'
                            }}
                          >
                            <span>Other</span>
                            <span>12%</span>
                          </div>
                          <div 
                            className="model-bar"
                            style={{
                              height: '4px',
                              width: '100%',
                              backgroundColor: 'rgba(10, 35, 66, 0.5)',
                              position: 'relative'
                            }}
                          >
                            <div 
                              className="model-bar-fill"
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '12%',
                                backgroundColor: 'var(--neon-magenta)'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FuturisticCard>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FuturisticCard
                    title="System Notifications"
                    icon={<FaBell />}
                    glowColor="blue"
                  >
                    <div className="notifications-container">
                      {notifications.length === 0 ? (
                        <div 
                          className="no-notifications"
                          style={{
                            textAlign: 'center',
                            padding: 'var(--space-lg)',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          No new notifications
                        </div>
                      ) : (
                        <div className="notification-list">
                          {notifications.map(notification => (
                            <motion.div 
                              key={notification.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="notification-item"
                              style={{
                                padding: 'var(--space-sm)',
                                marginBottom: 'var(--space-sm)',
                                borderLeft: `2px solid ${
                                  notification.type === 'warning' ? 'var(--neon-magenta)' :
                                  notification.type === 'success' ? 'var(--neon-cyan)' :
                                  'var(--electric-blue)'
                                }`,
                                backgroundColor: 'rgba(10, 35, 66, 0.3)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--space-sm)'
                              }}
                            >
                              <div 
                                className="notification-icon"
                                style={{
                                  marginTop: 'var(--space-xs)'
                                }}
                              >
                                {getNotificationIcon(notification.type)}
                              </div>
                              <div className="notification-content">
                                <div 
                                  className="notification-message"
                                  style={{
                                    fontSize: '0.9rem',
                                    marginBottom: '2px'
                                  }}
                                >
                                  {notification.message}
                                </div>
                                <div 
                                  className="notification-time"
                                  style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--text-secondary)'
                                  }}
                                >
                                  {notification.time}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}
                      
                      <div 
                        className="notification-actions"
                        style={{
                          marginTop: 'var(--space-sm)',
                          display: 'flex',
                          justifyContent: 'flex-end'
                        }}
                      >
                        <FuturisticButton 
                          size="small"
                          variant="text"
                          glowColor="blue"
                        >
                          View All
                        </FuturisticButton>
                      </div>
                    </div>
                  </FuturisticCard>
                </motion.div>
                
                <motion.div variants={itemVariants} className="span-2" style={{ gridColumn: 'span 2' }}>
                  <FuturisticCard
                    title="System Logs"
                    icon={<FaDatabase />}
                    glowColor="cyan"
                  >
                    <div 
                      className="logs-container"
                      style={{
                        height: '300px'
                      }}
                    >
                      <DataDisplay
                        data={logData}
                        loading={isLoadingLogs}
                      />
                    </div>
                  </FuturisticCard>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <FuturisticCard
                    title="Quick Actions"
                    icon={<FaCog />}
                    glowColor="magenta"
                  >
                    <div 
                      className="actions-grid"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 'var(--space-md)',
                        marginBottom: 'var(--space-md)'
                      }}
                    >
                      <FuturisticButton size="small">
                        Run Diagnostics
                      </FuturisticButton>
                      
                      <FuturisticButton 
                        size="small"
                        glowColor="blue"
                      >
                        Optimize System
                      </FuturisticButton>
                      
                      <FuturisticButton 
                        size="small"
                        variant="outlined"
                      >
                        Model Settings
                      </FuturisticButton>
                      
                      <FuturisticButton 
                        size="small"
                        variant="outlined"
                        glowColor="magenta"
                      >
                        View Reports
                      </FuturisticButton>
                    </div>
                    
                    <div 
                      className="system-controls"
                      style={{
                        marginTop: 'var(--space-md)',
                        padding: 'var(--space-sm)',
                        backgroundColor: 'rgba(10, 35, 66, 0.3)',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      <h4 style={{ 
                        fontSize: '0.9rem',
                        marginBottom: 'var(--space-sm)'
                      }}>
                        System Controls
                      </h4>
                      
                      <div 
                        className="control-options"
                        style={{
                          display: 'flex',
                          gap: 'var(--space-md)',
                          flexWrap: 'wrap'
                        }}
                      >
                        <label 
                          className="control-toggle"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-xs)',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                          }}
                        >
                          <input 
                            type="checkbox" 
                            defaultChecked 
                            style={{
                              appearance: 'none',
                              width: '36px',
                              height: '18px',
                              borderRadius: '9px',
                              backgroundColor: 'rgba(10, 35, 66, 0.7)',
                              border: '1px solid var(--highlight-blue)',
                              position: 'relative',
                              cursor: 'pointer'
                            }}
                          />
                          <span 
                            style={{
                              position: 'absolute',
                              width: '14px',
                              height: '14px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--neon-cyan)',
                              boxShadow: 'var(--glow-cyan)',
                              transform: 'translateX(19px)',
                              transition: 'transform var(--transition-fast)'
                            }}
                          ></span>
                          Auto-optimization
                        </label>
                        
                        <label 
                          className="control-toggle"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-xs)',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                          }}
                        >
                          <input 
                            type="checkbox" 
                            defaultChecked 
                            style={{
                              appearance: 'none',
                              width: '36px',
                              height: '18px',
                              borderRadius: '9px',
                              backgroundColor: 'rgba(10, 35, 66, 0.7)',
                              border: '1px solid var(--highlight-blue)',
                              position: 'relative',
                              cursor: 'pointer'
                            }}
                          />
                          <span 
                            style={{
                              position: 'absolute',
                              width: '14px',
                              height: '14px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--neon-cyan)',
                              boxShadow: 'var(--glow-cyan)',
                              transform: 'translateX(19px)',
                              transition: 'transform var(--transition-fast)'
                            }}
                          ></span>
                          Alerts
                        </label>
                      </div>
                    </div>
                  </FuturisticCard>
                </motion.div>
              </div>
              
              <motion.div 
                className="system-overview"
                variants={itemVariants}
                style={{
                  position: 'relative',
                  height: '300px',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-xxl)'
                }}
              >
                <img 
                  src={holographicInterfaceImg} 
                  alt="System Overview" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                
                <div 
                  className="overview-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(5, 10, 20, 0.6)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 'var(--space-lg)'
                  }}
                >
                  <h2 className="gradient-text" style={{ marginBottom: 'var(--space-md)' }}>
                    AI Neural Network Visualization
                  </h2>
                  
                  <p style={{ textAlign: 'center', maxWidth: '600px', marginBottom: 'var(--space-lg)' }}>
                    Interactive 3D visualization of the current neural network architecture and connections.
                    This representation shows real-time data flow and processing across the system.
                  </p>
                  
                  <FuturisticButton>Open Interactive View</FuturisticButton>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {selectedTab !== 'overview' && (
            <div className="tab-content">
              <div 
                className="tab-description"
                style={{
                  marginBottom: 'var(--space-xl)'
                }}
              >
                <h2 className="gradient-text">{dashboardTabs.find(tab => tab.id === selectedTab).name}</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {selectedTab === 'performance' && 'Detailed system performance metrics and resource utilization data.'}
                  {selectedTab === 'models' && 'AI model registry with information about all available and active models.'}
                  {selectedTab === 'data' && 'Connected data sources, storage utilization, and data processing metrics.'}
                </p>
              </div>
              
              <div 
                className="tab-data-display"
                style={{
                  height: '400px'
                }}
              >
                <DataDisplay
                  title={`${dashboardTabs.find(tab => tab.id === selectedTab).name} Data`}
                  data={logData}
                  loading={isLoadingLogs}
                  glowColor={
                    selectedTab === 'performance' ? 'cyan' :
                    selectedTab === 'models' ? 'magenta' :
                    'blue'
                  }
                />
              </div>
              
              <div 
                className="tab-actions"
                style={{
                  marginTop: 'var(--space-xl)',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'var(--space-md)'
                }}
              >
                <FuturisticButton
                  glowColor={
                    selectedTab === 'performance' ? 'cyan' :
                    selectedTab === 'models' ? 'magenta' :
                    'blue'
                  }
                >
                  Refresh Data
                </FuturisticButton>
                
                <FuturisticButton
                  variant="outlined"
                  glowColor={
                    selectedTab === 'performance' ? 'cyan' :
                    selectedTab === 'models' ? 'magenta' :
                    'blue'
                  }
                >
                  Export Report
                </FuturisticButton>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Dynamic CSS for animations */}
      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (max-width: 768px) {
          .dashboard-header > div {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .dashboard-tabs {
            overflow-x: auto;
            width: 100%;
          }
          
          .dashboard-tab {
            white-space: nowrap;
          }
          
          .dashboard-grid .span-2 {
            grid-column: span 1 !important;
          }
          
          .actions-grid {
            grid-template-columns: 1fr !important;
          }
          
          .tab-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;