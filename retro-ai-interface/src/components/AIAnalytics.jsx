import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/AIAnalytics.css';

const AIAnalytics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeModel, setActiveModel] = useState('neural-v3');
  
  // Mock analytics data
  const analyticsData = {
    'neural-v3': {
      accuracy: 97.8,
      precision: 95.6,
      recall: 94.2,
      fScore: 94.9,
      trainingTime: '3h 47m',
      parameters: '45.6M',
      inferenceTime: '23ms',
      lastUpdated: '2023.09.15'
    },
    'quantum-v2': {
      accuracy: 99.1,
      precision: 98.3,
      recall: 97.9,
      fScore: 98.1,
      trainingTime: '8h 12m',
      parameters: '120.8M',
      inferenceTime: '37ms',
      lastUpdated: '2023.10.03'
    },
    'predictive-v1': {
      accuracy: 92.4,
      precision: 91.7,
      recall: 89.5,
      fScore: 90.6,
      trainingTime: '2h 23m',
      parameters: '18.2M',
      inferenceTime: '12ms',
      lastUpdated: '2023.08.27'
    }
  };
  
  // Simulation data for visualizations
  const visualizationData = {
    'neural-v3': [15, 23, 45, 37, 92, 85, 78, 54, 65, 72],
    'quantum-v2': [45, 52, 68, 75, 82, 91, 88, 95, 93, 97],
    'predictive-v1': [32, 38, 45, 51, 59, 67, 72, 76, 85, 92]
  };
  
  // Simulated batch prediction results
  const batchResults = [
    { id: 'A7382', confidence: 98.2, result: 'Class Alpha', timestamp: '15:42:12' },
    { id: 'B9174', confidence: 94.7, result: 'Class Beta', timestamp: '15:41:58' },
    { id: 'C2053', confidence: 99.1, result: 'Class Alpha', timestamp: '15:40:33' },
    { id: 'D6129', confidence: 87.3, result: 'Class Gamma', timestamp: '15:39:27' },
    { id: 'E1847', confidence: 92.8, result: 'Class Beta', timestamp: '15:38:02' }
  ];
  
  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleModelChange = (modelId) => {
    setIsLoading(true);
    setActiveModel(modelId);
    
    // Simulate loading delay when changing models
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  
  // Currently selected model data
  const currentModelData = analyticsData[activeModel] || {};
  
  return (
    <div className="analytics-dashboard">
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="led active"></span>
            <h2>AI MODEL ANALYTICS</h2>
          </div>
        </div>
        
        <div className="model-selector">
          <div className="selector-label">SELECT MODEL:</div>
          <div className="selector-buttons">
            <button 
              className={`model-button ${activeModel === 'neural-v3' ? 'active' : ''}`}
              onClick={() => handleModelChange('neural-v3')}
            >
              NEURAL-V3
            </button>
            <button 
              className={`model-button ${activeModel === 'quantum-v2' ? 'active' : ''}`}
              onClick={() => handleModelChange('quantum-v2')}
            >
              QUANTUM-V2
            </button>
            <button 
              className={`model-button ${activeModel === 'predictive-v1' ? 'active' : ''}`}
              onClick={() => handleModelChange('predictive-v1')}
            >
              PREDICTIVE-V1
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <div className="loading-text">LOADING MODEL DATA...</div>
          </div>
        ) : (
          <div className="model-analytics">
            <div className="analytics-grid">
              <motion.div 
                className="analytics-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="analytics-header">
                  <h3>PERFORMANCE METRICS</h3>
                </div>
                <div className="metrics-grid">
                  <div className="metric">
                    <div className="metric-label">ACCURACY</div>
                    <div className="metric-value">{currentModelData.accuracy}%</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${currentModelData.accuracy}%` }}></div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">PRECISION</div>
                    <div className="metric-value">{currentModelData.precision}%</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${currentModelData.precision}%` }}></div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">RECALL</div>
                    <div className="metric-value">{currentModelData.recall}%</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${currentModelData.recall}%` }}></div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-label">F-SCORE</div>
                    <div className="metric-value">{currentModelData.fScore}%</div>
                    <div className="metric-bar">
                      <div className="metric-fill" style={{ width: `${currentModelData.fScore}%` }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="analytics-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="analytics-header">
                  <h3>MODEL SPECIFICATIONS</h3>
                </div>
                <div className="specs-grid">
                  <div className="spec-item">
                    <div className="spec-label">TRAINING TIME</div>
                    <div className="spec-value">{currentModelData.trainingTime}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">PARAMETERS</div>
                    <div className="spec-value">{currentModelData.parameters}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">INFERENCE TIME</div>
                    <div className="spec-value">{currentModelData.inferenceTime}</div>
                  </div>
                  <div className="spec-item">
                    <div className="spec-label">LAST UPDATED</div>
                    <div className="spec-value">{currentModelData.lastUpdated}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="analytics-card visualization-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="analytics-header">
                <h3>TRAINING PROGRESSION</h3>
                <div className="card-controls">
                  <button className="card-control-btn">
                    <span>⋮</span>
                  </button>
                </div>
              </div>
              <div className="visualization">
                <div className="visualization-y-axis">
                  <div className="axis-label">100%</div>
                  <div className="axis-label">75%</div>
                  <div className="axis-label">50%</div>
                  <div className="axis-label">25%</div>
                  <div className="axis-label">0%</div>
                </div>
                <div className="visualization-content">
                  <div className="grid-lines">
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                    <div className="grid-line"></div>
                  </div>
                  <div className="bar-chart">
                    {visualizationData[activeModel].map((value, index) => (
                      <div 
                        key={index} 
                        className="chart-bar"
                      >
                        <motion.div 
                          className="bar-fill"
                          initial={{ height: 0 }}
                          animate={{ height: `${value}%` }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        ></motion.div>
                        <div className="bar-label">{index + 1}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="visualization-legend">EPOCHS</div>
            </motion.div>
            
            <motion.div 
              className="analytics-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="analytics-header">
                <h3>RECENT PREDICTIONS</h3>
                <div className="card-controls">
                  <button className="card-control-btn refresh">
                    <span>⟳</span>
                  </button>
                </div>
              </div>
              <div className="predictions-table">
                <div className="table-header">
                  <div className="header-cell">ID</div>
                  <div className="header-cell">CONFIDENCE</div>
                  <div className="header-cell">RESULT</div>
                  <div className="header-cell">TIME</div>
                </div>
                <div className="table-body">
                  {batchResults.map((result, index) => (
                    <motion.div 
                      key={index} 
                      className="table-row"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      <div className="table-cell">{result.id}</div>
                      <div className="table-cell confidence">
                        {result.confidence}%
                        <div className="confidence-bar">
                          <div 
                            className={`confidence-fill ${result.confidence > 95 ? 'high' : result.confidence > 90 ? 'medium' : 'low'}`}
                            style={{ width: `${result.confidence}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="table-cell">{result.result}</div>
                      <div className="table-cell">{result.timestamp}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AIAnalytics;