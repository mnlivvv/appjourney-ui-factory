import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/ModelTraining.css';

const ModelTraining = () => {
  const [activeTab, setActiveTab] = useState('training');
  const [trainingStatus, setTrainingStatus] = useState('idle'); // idle, running, completed, error
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [trainingLogs, setTrainingLogs] = useState([]);
  
  // Training parameters
  const [formData, setFormData] = useState({
    modelType: 'neural',
    epochs: 100,
    batchSize: 32,
    learningRate: 0.001,
    optimizer: 'adam',
    activationFunction: 'relu',
    dataset: 'synthetic-a',
    description: ''
  });
  
  // Dataset options
  const datasets = [
    { id: 'synthetic-a', name: 'Synthetic Dataset A', size: '1.2 GB', classes: 5 },
    { id: 'synthetic-b', name: 'Synthetic Dataset B', size: '2.7 GB', classes: 8 },
    { id: 'quantum-sim', name: 'Quantum Simulation', size: '850 MB', classes: 3 },
    { id: 'text-corpus', name: 'Text Corpus Alpha', size: '3.4 GB', classes: 12 }
  ];
  
  // Existing models
  const existingModels = [
    { 
      id: 1, 
      name: 'NEURAL-V3', 
      type: 'neural', 
      status: 'active', 
      accuracy: 97.8, 
      created: '2023.09.15', 
      lastUsed: '2023.10.12' 
    },
    { 
      id: 2, 
      name: 'QUANTUM-V2', 
      type: 'quantum', 
      status: 'active', 
      accuracy: 99.1, 
      created: '2023.10.03', 
      lastUsed: '2023.10.10' 
    },
    { 
      id: 3, 
      name: 'PREDICTIVE-V1', 
      type: 'predictive', 
      status: 'archived', 
      accuracy: 92.4, 
      created: '2023.08.27', 
      lastUsed: '2023.09.30' 
    }
  ];
  
  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Start the training simulation
    setTrainingStatus('running');
    setTrainingProgress(0);
    setTrainingLogs([
      { timestamp: getCurrentTimestamp(), message: 'INITIALIZING TRAINING SESSION...' }
    ]);
    
    // Simulate training progress
    simulateTraining();
  };
  
  // Get current timestamp in format HH:MM:SS
  const getCurrentTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };
  
  // Simulate training progress
  const simulateTraining = () => {
    let progress = 0;
    const totalSteps = 20;
    const intervalTime = 1000;
    
    const interval = setInterval(() => {
      progress += 1;
      
      // Generate a log message based on progress
      if (progress === 1) {
        addTrainingLog('LOADING DATASET...');
      } else if (progress === 3) {
        addTrainingLog('DATASET LOADED. PREPROCESSING DATA...');
      } else if (progress === 5) {
        addTrainingLog('INITIALIZING MODEL ARCHITECTURE...');
      } else if (progress === 7) {
        addTrainingLog('BEGINNING TRAINING EPOCH 1/' + formData.epochs);
      } else if (progress === 10) {
        addTrainingLog('TRAINING PROGRESS: 25% COMPLETE');
      } else if (progress === 12) {
        addTrainingLog('VALIDATING INTERMEDIATE RESULTS...');
      } else if (progress === 15) {
        addTrainingLog('TRAINING PROGRESS: 50% COMPLETE');
      } else if (progress === 18) {
        addTrainingLog('TRAINING PROGRESS: 75% COMPLETE');
      } else if (progress === 20) {
        addTrainingLog('TRAINING COMPLETE. EVALUATING MODEL...');
        addTrainingLog('ACCURACY: 96.7% | PRECISION: 95.2% | RECALL: 94.8%');
        addTrainingLog('MODEL SAVED AS "' + formData.modelType.toUpperCase() + '-NEW"');
        setTrainingStatus('completed');
        clearInterval(interval);
      }
      
      // Update progress percentage
      setTrainingProgress((progress / totalSteps) * 100);
      
    }, intervalTime);
  };
  
  // Add a log message with current timestamp
  const addTrainingLog = (message) => {
    setTrainingLogs(prevLogs => [
      ...prevLogs,
      { timestamp: getCurrentTimestamp(), message }
    ]);
  };
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Auto-scroll logs to bottom when new logs are added
  useEffect(() => {
    const logsContainer = document.querySelector('.training-logs-content');
    if (logsContainer) {
      logsContainer.scrollTop = logsContainer.scrollHeight;
    }
  }, [trainingLogs]);
  
  return (
    <div className="model-training">
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="led active"></span>
            <h2>MODEL TRAINING INTERFACE</h2>
          </div>
        </div>
        
        <div className="training-tabs">
          <button 
            className={`tab-button ${activeTab === 'training' ? 'active' : ''}`}
            onClick={() => handleTabChange('training')}
          >
            TRAINING
          </button>
          <button 
            className={`tab-button ${activeTab === 'models' ? 'active' : ''}`}
            onClick={() => handleTabChange('models')}
          >
            EXISTING MODELS
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'training' && (
            <div className="training-content">
              <div className="training-form-container">
                <form className="training-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="modelType">MODEL TYPE</label>
                      <select 
                        className="form-input" 
                        id="modelType" 
                        name="modelType"
                        value={formData.modelType}
                        onChange={handleFormChange}
                        disabled={trainingStatus === 'running'}
                      >
                        <option value="neural">NEURAL NETWORK</option>
                        <option value="quantum">QUANTUM MODEL</option>
                        <option value="predictive">PREDICTIVE ENGINE</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="epochs">EPOCHS</label>
                      <input 
                        className="form-input" 
                        type="number" 
                        id="epochs" 
                        name="epochs"
                        min="1"
                        max="1000"
                        value={formData.epochs}
                        onChange={handleFormChange}
                        disabled={trainingStatus === 'running'}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="batchSize">BATCH SIZE</label>
                      <input 
                        className="form-input" 
                        type="number" 
                        id="batchSize" 
                        name="batchSize"
                        min="1"
                        max="512"
                        value={formData.batchSize}
                        onChange={handleFormChange}
                        disabled={trainingStatus === 'running'}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="learningRate">LEARNING RATE</label>
                      <input 
                        className="form-input" 
                        type="number" 
                        id="learningRate" 
                        name="learningRate"
                        step="0.001"
                        min="0.0001"
                        max="1"
                        value={formData.learningRate}
                        onChange={handleFormChange}
                        disabled={trainingStatus === 'running'}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="optimizer">OPTIMIZER</label>
                      <select 
                        className="form-input" 
                        id="optimizer" 
                        name="optimizer"
                        value={formData.optimizer}
                        onChange={handleFormChange}
                        disabled={trainingStatus === 'running'}
                      >
                        <option value="adam">ADAM</option>
                        <option value="sgd">SGD</option>
                        <option value="rmsprop">RMSPROP</option>
                        <option value="quantum">QUANTUM</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label" htmlFor="activationFunction">ACTIVATION</label>
                      <select 
                        className="form-input" 
                        id="activationFunction" 
                        name="activationFunction"
                        value={formData.activationFunction}
                        onChange={handleFormChange}
                        disabled={trainingStatus === 'running'}
                      >
                        <option value="relu">RELU</option>
                        <option value="sigmoid">SIGMOID</option>
                        <option value="tanh">TANH</option>
                        <option value="quantum">QUANTUM</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">DATASET</label>
                    <div className="dataset-selector">
                      {datasets.map(dataset => (
                        <div 
                          key={dataset.id} 
                          className={`dataset-option ${formData.dataset === dataset.id ? 'selected' : ''}`}
                          onClick={() => {
                            if (trainingStatus !== 'running') {
                              setFormData({...formData, dataset: dataset.id});
                            }
                          }}
                        >
                          <div className="dataset-info">
                            <div className="dataset-name">{dataset.name}</div>
                            <div className="dataset-meta">
                              <span>{dataset.size}</span>
                              <span>•</span>
                              <span>{dataset.classes} Classes</span>
                            </div>
                          </div>
                          <div className="dataset-select">
                            {formData.dataset === dataset.id && (
                              <span className="selected-mark">✓</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="description">DESCRIPTION (OPTIONAL)</label>
                    <textarea 
                      className="form-input" 
                      id="description" 
                      name="description"
                      rows="2"
                      value={formData.description}
                      onChange={handleFormChange}
                      disabled={trainingStatus === 'running'}
                      placeholder="Enter a description for this training session..."
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className={`action-button start-training ${trainingStatus === 'running' ? 'disabled' : ''}`}
                      disabled={trainingStatus === 'running'}
                    >
                      INITIALIZE TRAINING
                    </button>
                    
                    <button 
                      type="button" 
                      className="action-button reset"
                      onClick={() => {
                        if (trainingStatus !== 'running') {
                          setFormData({
                            modelType: 'neural',
                            epochs: 100,
                            batchSize: 32,
                            learningRate: 0.001,
                            optimizer: 'adam',
                            activationFunction: 'relu',
                            dataset: 'synthetic-a',
                            description: ''
                          });
                        }
                      }}
                      disabled={trainingStatus === 'running'}
                    >
                      RESET PARAMETERS
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="training-status-container">
                <div className="status-header">
                  <h3>TRAINING STATUS</h3>
                  <div className={`status-indicator ${trainingStatus}`}>
                    <span className={`led ${trainingStatus === 'idle' ? '' : trainingStatus === 'completed' ? 'active' : trainingStatus === 'error' ? 'error' : 'warning'}`}></span>
                    <span className="status-text">
                      {trainingStatus === 'idle' ? 'IDLE' : 
                       trainingStatus === 'running' ? 'RUNNING' : 
                       trainingStatus === 'completed' ? 'COMPLETED' : 'ERROR'}
                    </span>
                  </div>
                </div>
                
                {trainingStatus !== 'idle' && (
                  <div className="training-progress">
                    <div className="progress-label">
                      <span>PROGRESS</span>
                      <span className="progress-percentage">{Math.round(trainingProgress)}%</span>
                    </div>
                    <div className="progress-bar">
                      <motion.div 
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${trainingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                )}
                
                <div className="training-logs">
                  <div className="logs-header">
                    <span>TRAINING LOGS</span>
                    <button 
                      className="clear-logs-btn"
                      onClick={() => {
                        if (trainingStatus !== 'running') {
                          setTrainingLogs([]);
                        }
                      }}
                      disabled={trainingStatus === 'running'}
                    >
                      CLEAR
                    </button>
                  </div>
                  <div className="training-logs-content">
                    {trainingLogs.length === 0 ? (
                      <div className="empty-logs">No logs available. Start training to see output.</div>
                    ) : (
                      trainingLogs.map((log, index) => (
                        <div key={index} className="log-entry">
                          <span className="log-timestamp">[{log.timestamp}]</span>
                          <span className="log-message">{log.message}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'models' && (
            <div className="models-content">
              <div className="models-header">
                <h3>TRAINED MODELS</h3>
                <div className="models-controls">
                  <button className="models-control-btn">
                    <span>⨁</span> NEW MODEL
                  </button>
                  <button className="models-control-btn">
                    <span>⟳</span> REFRESH
                  </button>
                </div>
              </div>
              
              <div className="models-list">
                <div className="models-table">
                  <div className="table-header">
                    <div className="header-cell">NAME</div>
                    <div className="header-cell">TYPE</div>
                    <div className="header-cell">STATUS</div>
                    <div className="header-cell">ACCURACY</div>
                    <div className="header-cell">CREATED</div>
                    <div className="header-cell">ACTIONS</div>
                  </div>
                  
                  <div className="table-body">
                    {existingModels.map((model) => (
                      <div key={model.id} className="table-row">
                        <div className="table-cell model-name">{model.name}</div>
                        <div className="table-cell">{model.type.toUpperCase()}</div>
                        <div className="table-cell">
                          <span className={`status-badge ${model.status}`}>
                            {model.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="table-cell">{model.accuracy}%</div>
                        <div className="table-cell">{model.created}</div>
                        <div className="table-cell actions">
                          <button className="action-icon view" title="View Details">◎</button>
                          <button className="action-icon export" title="Export Model">↓</button>
                          <button className="action-icon delete" title="Delete Model">×</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ModelTraining;