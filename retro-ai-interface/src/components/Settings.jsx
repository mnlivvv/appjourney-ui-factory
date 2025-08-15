import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Settings.css';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('system');
  const [isSaving, setIsSaving] = useState(false);
  
  // System settings
  const [systemSettings, setSystemSettings] = useState({
    theme: 'green',
    scanlineEffect: true,
    glowEffects: true,
    soundEffects: true,
    animationSpeed: 1.0,
    lowPowerMode: false
  });
  
  // AI settings
  const [aiSettings, setAiSettings] = useState({
    inferenceMode: 'balanced',
    quantumAcceleration: true,
    neuralOptimization: 'high',
    securityLevel: 'adaptive',
    dataStorage: 'local',
    autoUpdate: true
  });
  
  // Security settings
  const [securitySettings, setSecuritySettings] = useState({
    encryptionLevel: 'quantum',
    firewallStatus: true,
    anomalyDetection: 'active',
    networkScanning: 'hourly',
    biometricAuth: false,
    dataBackup: 'daily'
  });
  
  // Handle settings form change
  const handleSystemChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSystemSettings({
      ...systemSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleAIChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAiSettings({
      ...aiSettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSecuritySettings({
      ...securitySettings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Handle settings save
  const handleSaveSettings = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate saving delay
    setTimeout(() => {
      setIsSaving(false);
      
      // Show success notification or handle accordingly
    }, 1500);
  };
  
  // Handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  
  return (
    <div className="settings-container">
      <section className="section">
        <div className="section-header">
          <div className="section-title">
            <span className="led active"></span>
            <h2>SYSTEM SETTINGS</h2>
          </div>
        </div>
        
        <div className="settings-layout">
          <div className="settings-sidebar">
            <div className="settings-nav">
              <button 
                className={`nav-item ${activeSection === 'system' ? 'active' : ''}`}
                onClick={() => handleSectionChange('system')}
              >
                <span className="nav-icon">⚙</span>
                <span className="nav-text">SYSTEM</span>
              </button>
              
              <button 
                className={`nav-item ${activeSection === 'ai' ? 'active' : ''}`}
                onClick={() => handleSectionChange('ai')}
              >
                <span className="nav-icon">◎</span>
                <span className="nav-text">AI CONFIG</span>
              </button>
              
              <button 
                className={`nav-item ${activeSection === 'security' ? 'active' : ''}`}
                onClick={() => handleSectionChange('security')}
              >
                <span className="nav-icon">⨂</span>
                <span className="nav-text">SECURITY</span>
              </button>
              
              <button 
                className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleSectionChange('about')}
              >
                <span className="nav-icon">ⓘ</span>
                <span className="nav-text">ABOUT</span>
              </button>
            </div>
          </div>
          
          <div className="settings-content">
            <form onSubmit={handleSaveSettings}>
              {activeSection === 'system' && (
                <motion.div 
                  className="settings-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>SYSTEM CONFIGURATION</h3>
                  
                  <div className="settings-group">
                    <div className="setting-item">
                      <label className="setting-label">UI THEME</label>
                      <div className="setting-control">
                        <select 
                          name="theme" 
                          value={systemSettings.theme}
                          onChange={handleSystemChange}
                        >
                          <option value="green">GREEN MONOCHROME</option>
                          <option value="amber">AMBER MONOCHROME</option>
                          <option value="blue">BLUE MONOCHROME</option>
                          <option value="red">RED MONOCHROME</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <label className="setting-label">ANIMATION SPEED</label>
                      <div className="setting-control range-control">
                        <input 
                          type="range" 
                          name="animationSpeed" 
                          min="0.5" 
                          max="2" 
                          step="0.1" 
                          value={systemSettings.animationSpeed}
                          onChange={handleSystemChange}
                        />
                        <span className="range-value">{systemSettings.animationSpeed}x</span>
                      </div>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="scanlineEffect" 
                          checked={systemSettings.scanlineEffect}
                          onChange={handleSystemChange}
                        />
                        <span className="checkbox-text">SCANLINE EFFECT</span>
                      </label>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="glowEffects" 
                          checked={systemSettings.glowEffects}
                          onChange={handleSystemChange}
                        />
                        <span className="checkbox-text">GLOW EFFECTS</span>
                      </label>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="soundEffects" 
                          checked={systemSettings.soundEffects}
                          onChange={handleSystemChange}
                        />
                        <span className="checkbox-text">SOUND EFFECTS</span>
                      </label>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="lowPowerMode" 
                          checked={systemSettings.lowPowerMode}
                          onChange={handleSystemChange}
                        />
                        <span className="checkbox-text">LOW POWER MODE</span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeSection === 'ai' && (
                <motion.div 
                  className="settings-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>AI CONFIGURATION</h3>
                  
                  <div className="settings-group">
                    <div className="setting-item">
                      <label className="setting-label">INFERENCE MODE</label>
                      <div className="setting-control">
                        <select 
                          name="inferenceMode" 
                          value={aiSettings.inferenceMode}
                          onChange={handleAIChange}
                        >
                          <option value="speed">SPEED PRIORITY</option>
                          <option value="balanced">BALANCED</option>
                          <option value="accuracy">ACCURACY PRIORITY</option>
                          <option value="quantum">QUANTUM ENHANCED</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <label className="setting-label">NEURAL OPTIMIZATION</label>
                      <div className="setting-control">
                        <select 
                          name="neuralOptimization" 
                          value={aiSettings.neuralOptimization}
                          onChange={handleAIChange}
                        >
                          <option value="low">LOW</option>
                          <option value="medium">MEDIUM</option>
                          <option value="high">HIGH</option>
                          <option value="extreme">EXTREME</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <label className="setting-label">DATA STORAGE</label>
                      <div className="setting-control">
                        <select 
                          name="dataStorage" 
                          value={aiSettings.dataStorage}
                          onChange={handleAIChange}
                        >
                          <option value="local">LOCAL ONLY</option>
                          <option value="cloud">CLOUD SYNC</option>
                          <option value="distributed">DISTRIBUTED</option>
                          <option value="quantum">QUANTUM SECURED</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="quantumAcceleration" 
                          checked={aiSettings.quantumAcceleration}
                          onChange={handleAIChange}
                        />
                        <span className="checkbox-text">QUANTUM ACCELERATION</span>
                      </label>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="autoUpdate" 
                          checked={aiSettings.autoUpdate}
                          onChange={handleAIChange}
                        />
                        <span className="checkbox-text">AUTO-UPDATE AI MODELS</span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeSection === 'security' && (
                <motion.div 
                  className="settings-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>SECURITY CONFIGURATION</h3>
                  
                  <div className="settings-group">
                    <div className="setting-item">
                      <label className="setting-label">ENCRYPTION LEVEL</label>
                      <div className="setting-control">
                        <select 
                          name="encryptionLevel" 
                          value={securitySettings.encryptionLevel}
                          onChange={handleSecurityChange}
                        >
                          <option value="standard">STANDARD</option>
                          <option value="enhanced">ENHANCED</option>
                          <option value="military">MILITARY GRADE</option>
                          <option value="quantum">QUANTUM RESISTANT</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <label className="setting-label">ANOMALY DETECTION</label>
                      <div className="setting-control">
                        <select 
                          name="anomalyDetection" 
                          value={securitySettings.anomalyDetection}
                          onChange={handleSecurityChange}
                        >
                          <option value="passive">PASSIVE</option>
                          <option value="active">ACTIVE</option>
                          <option value="aggressive">AGGRESSIVE</option>
                          <option value="learning">SELF-LEARNING</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <label className="setting-label">NETWORK SCANNING</label>
                      <div className="setting-control">
                        <select 
                          name="networkScanning" 
                          value={securitySettings.networkScanning}
                          onChange={handleSecurityChange}
                        >
                          <option value="manual">MANUAL ONLY</option>
                          <option value="daily">DAILY</option>
                          <option value="hourly">HOURLY</option>
                          <option value="continuous">CONTINUOUS</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item">
                      <label className="setting-label">DATA BACKUP</label>
                      <div className="setting-control">
                        <select 
                          name="dataBackup" 
                          value={securitySettings.dataBackup}
                          onChange={handleSecurityChange}
                        >
                          <option value="manual">MANUAL ONLY</option>
                          <option value="weekly">WEEKLY</option>
                          <option value="daily">DAILY</option>
                          <option value="realtime">REAL-TIME</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="firewallStatus" 
                          checked={securitySettings.firewallStatus}
                          onChange={handleSecurityChange}
                        />
                        <span className="checkbox-text">NEURAL FIREWALL</span>
                      </label>
                    </div>
                    
                    <div className="setting-item checkbox-item">
                      <label className="setting-label">
                        <input 
                          type="checkbox" 
                          name="biometricAuth" 
                          checked={securitySettings.biometricAuth}
                          onChange={handleSecurityChange}
                        />
                        <span className="checkbox-text">BIOMETRIC AUTHENTICATION</span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeSection === 'about' && (
                <motion.div 
                  className="settings-section about-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>SYSTEM INFORMATION</h3>
                  
                  <div className="system-info">
                    <div className="info-item">
                      <div className="info-label">SYSTEM VERSION</div>
                      <div className="info-value">RetroFuture AI v2.7.14</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">NEURAL KERNEL</div>
                      <div className="info-value">v3.5.7</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">QUANTUM CORE</div>
                      <div className="info-value">MARK IV</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">BUILD DATE</div>
                      <div className="info-value">2023.10.15</div>
                    </div>
                    
                    <div className="info-item">
                      <div className="info-label">LICENSE</div>
                      <div className="info-value">COMMERCIAL-X7392-NEURO</div>
                    </div>
                  </div>
                  
                  <div className="about-content">
                    <div className="about-logo">RetroFuture AI</div>
                    <p>
                      RetroFuture AI Terminal is a next-generation neural interface system combining
                      quantum computing with advanced AI algorithms. Designed for high-security 
                      environments and specialized research applications.
                    </p>
                    <p>
                      © 2023-2024 RetroFuture Systems Corp. All Rights Reserved.
                    </p>
                  </div>
                </motion.div>
              )}
              
              {activeSection !== 'about' && (
                <div className="settings-actions">
                  <button 
                    type="submit" 
                    className="save-button"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <span className="loading-spinner small"></span>
                        <span>SAVING...</span>
                      </>
                    ) : (
                      <span>SAVE SETTINGS</span>
                    )}
                  </button>
                  
                  <button 
                    type="button" 
                    className="reset-button"
                    onClick={() => {
                      // Reset to default based on active section
                      if (activeSection === 'system') {
                        setSystemSettings({
                          theme: 'green',
                          scanlineEffect: true,
                          glowEffects: true,
                          soundEffects: true,
                          animationSpeed: 1.0,
                          lowPowerMode: false
                        });
                      } else if (activeSection === 'ai') {
                        setAiSettings({
                          inferenceMode: 'balanced',
                          quantumAcceleration: true,
                          neuralOptimization: 'high',
                          securityLevel: 'adaptive',
                          dataStorage: 'local',
                          autoUpdate: true
                        });
                      } else if (activeSection === 'security') {
                        setSecuritySettings({
                          encryptionLevel: 'quantum',
                          firewallStatus: true,
                          anomalyDetection: 'active',
                          networkScanning: 'hourly',
                          biometricAuth: false,
                          dataBackup: 'daily'
                        });
                      }
                    }}
                  >
                    RESET TO DEFAULT
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;