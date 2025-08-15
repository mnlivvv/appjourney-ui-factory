import { useState } from 'react'
import './Settings.css'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general')
  
  // User profile state
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'AI Engineer',
    language: 'English',
    timezone: 'UTC-8 (Pacific Time)',
    twoFactorEnabled: true
  })
  
  // UI preferences state
  const [uiPreferences, setUiPreferences] = useState({
    theme: 'light',
    compactMode: false,
    animationsEnabled: true,
    showPerformanceStats: true,
    dataRefreshRate: '5min'
  })
  
  // API settings state
  const [apiSettings, setApiSettings] = useState({
    apiKey: 'XXXX-XXXX-XXXX-XXXX',
    endpointUrl: 'https://api.aiplatform.example.com/v1',
    maxRequestsPerMinute: 100,
    timeout: 30
  })
  
  // Notification preferences state
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    modelTrainingComplete: true,
    modelPerformanceAlerts: true,
    systemUpdates: true,
    datasetImportComplete: true,
    weeklyReports: true
  })
  
  // Handle toggle changes
  const handleToggleChange = (section, field) => {
    if (section === 'uiPreferences') {
      setUiPreferences({
        ...uiPreferences,
        [field]: !uiPreferences[field]
      })
    } else if (section === 'userProfile') {
      setUserProfile({
        ...userProfile,
        [field]: !userProfile[field]
      })
    } else if (section === 'notificationPreferences') {
      setNotificationPreferences({
        ...notificationPreferences,
        [field]: !notificationPreferences[field]
      })
    }
  }
  
  // Handle text input changes
  const handleInputChange = (section, field, value) => {
    if (section === 'userProfile') {
      setUserProfile({
        ...userProfile,
        [field]: value
      })
    } else if (section === 'apiSettings') {
      setApiSettings({
        ...apiSettings,
        [field]: value
      })
    }
  }
  
  // Handle select changes
  const handleSelectChange = (section, field, value) => {
    if (section === 'userProfile') {
      setUserProfile({
        ...userProfile,
        [field]: value
      })
    } else if (section === 'uiPreferences') {
      setUiPreferences({
        ...uiPreferences,
        [field]: value
      })
    }
  }
  
  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>Settings</h1>
      </div>
      
      <div className="settings-container">
        <div className="settings-sidebar">
          <div className="settings-tabs">
            <button 
              className={`settings-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span>General</span>
            </button>
            
            <button 
              className={`settings-tab ${activeTab === 'account' ? 'active' : ''}`}
              onClick={() => setActiveTab('account')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Account</span>
            </button>
            
            <button 
              className={`settings-tab ${activeTab === 'api' ? 'active' : ''}`}
              onClick={() => setActiveTab('api')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <span>API</span>
            </button>
            
            <button 
              className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('notifications')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              <span>Notifications</span>
            </button>
            
            <button 
              className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
              onClick={() => setActiveTab('appearance')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Appearance</span>
            </button>
          </div>
        </div>
        
        <div className="settings-content">
          {activeTab === 'general' && (
            <div className="settings-section">
              <h2>General Settings</h2>
              <p className="settings-description">Configure general platform settings and preferences.</p>
              
              <div className="settings-card">
                <h3>System Information</h3>
                
                <div className="settings-info-group">
                  <div className="settings-info-item">
                    <span className="info-label">Platform Version</span>
                    <span className="info-value">2.5.3</span>
                  </div>
                  <div className="settings-info-item">
                    <span className="info-label">Last Updated</span>
                    <span className="info-value">July 15, 2023</span>
                  </div>
                  <div className="settings-info-item">
                    <span className="info-label">Environment</span>
                    <span className="info-value">Production</span>
                  </div>
                </div>
                
                <div className="settings-actions">
                  <button className="settings-button">Check for Updates</button>
                </div>
              </div>
              
              <div className="settings-card">
                <h3>Performance</h3>
                
                <div className="settings-form-group">
                  <label>Data Refresh Rate</label>
                  <select 
                    value={uiPreferences.dataRefreshRate}
                    onChange={(e) => handleSelectChange('uiPreferences', 'dataRefreshRate', e.target.value)}
                  >
                    <option value="1min">Every minute</option>
                    <option value="5min">Every 5 minutes</option>
                    <option value="15min">Every 15 minutes</option>
                    <option value="30min">Every 30 minutes</option>
                    <option value="1hour">Every hour</option>
                  </select>
                </div>
                
                <div className="settings-toggle-group">
                  <div className="settings-toggle">
                    <span>Show Performance Statistics</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={uiPreferences.showPerformanceStats}
                        onChange={() => handleToggleChange('uiPreferences', 'showPerformanceStats')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'account' && (
            <div className="settings-section">
              <h2>Account Settings</h2>
              <p className="settings-description">Manage your profile information and account preferences.</p>
              
              <div className="settings-card">
                <h3>Profile Information</h3>
                
                <div className="settings-form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    value={userProfile.name}
                    onChange={(e) => handleInputChange('userProfile', 'name', e.target.value)}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={userProfile.email}
                    onChange={(e) => handleInputChange('userProfile', 'email', e.target.value)}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Role</label>
                  <input 
                    type="text" 
                    value={userProfile.role}
                    onChange={(e) => handleInputChange('userProfile', 'role', e.target.value)}
                  />
                </div>
              </div>
              
              <div className="settings-card">
                <h3>Preferences</h3>
                
                <div className="settings-form-group">
                  <label>Language</label>
                  <select 
                    value={userProfile.language}
                    onChange={(e) => handleSelectChange('userProfile', 'language', e.target.value)}
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>
                
                <div className="settings-form-group">
                  <label>Timezone</label>
                  <select 
                    value={userProfile.timezone}
                    onChange={(e) => handleSelectChange('userProfile', 'timezone', e.target.value)}
                  >
                    <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
                    <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                    <option value="UTC+0 (GMT)">UTC+0 (GMT)</option>
                    <option value="UTC+1 (Central European Time)">UTC+1 (Central European Time)</option>
                    <option value="UTC+8 (China Standard Time)">UTC+8 (China Standard Time)</option>
                  </select>
                </div>
              </div>
              
              <div className="settings-card">
                <h3>Security</h3>
                
                <div className="settings-toggle-group">
                  <div className="settings-toggle">
                    <span>Two-Factor Authentication</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={userProfile.twoFactorEnabled}
                        onChange={() => handleToggleChange('userProfile', 'twoFactorEnabled')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
                
                <div className="settings-actions">
                  <button className="settings-button secondary">Change Password</button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'api' && (
            <div className="settings-section">
              <h2>API Settings</h2>
              <p className="settings-description">Manage API keys, endpoints, and rate limits for external integrations.</p>
              
              <div className="settings-card">
                <h3>API Configuration</h3>
                
                <div className="settings-form-group">
                  <label>API Key</label>
                  <div className="password-input">
                    <input 
                      type="password" 
                      value={apiSettings.apiKey}
                      onChange={(e) => handleInputChange('apiSettings', 'apiKey', e.target.value)}
                    />
                    <button className="icon-button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="settings-form-group">
                  <label>API Endpoint URL</label>
                  <input 
                    type="text" 
                    value={apiSettings.endpointUrl}
                    onChange={(e) => handleInputChange('apiSettings', 'endpointUrl', e.target.value)}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Max Requests per Minute</label>
                  <input 
                    type="number" 
                    value={apiSettings.maxRequestsPerMinute}
                    onChange={(e) => handleInputChange('apiSettings', 'maxRequestsPerMinute', e.target.value)}
                  />
                </div>
                
                <div className="settings-form-group">
                  <label>Request Timeout (seconds)</label>
                  <input 
                    type="number" 
                    value={apiSettings.timeout}
                    onChange={(e) => handleInputChange('apiSettings', 'timeout', e.target.value)}
                  />
                </div>
                
                <div className="settings-actions">
                  <button className="settings-button danger">Revoke API Key</button>
                  <button className="settings-button">Generate New Key</button>
                </div>
              </div>
              
              <div className="settings-card">
                <h3>API Usage</h3>
                
                <div className="settings-info-group">
                  <div className="settings-info-item">
                    <span className="info-label">Requests Today</span>
                    <span className="info-value">2,487</span>
                  </div>
                  <div className="settings-info-item">
                    <span className="info-label">Monthly Quota</span>
                    <span className="info-value">100,000</span>
                  </div>
                  <div className="settings-info-item">
                    <span className="info-label">Quota Usage</span>
                    <span className="info-value">32%</span>
                  </div>
                </div>
                
                <div className="usage-bar">
                  <div className="usage-progress" style={{ width: '32%' }}></div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notification Settings</h2>
              <p className="settings-description">Customize when and how you receive notifications and alerts.</p>
              
              <div className="settings-card">
                <h3>Notification Preferences</h3>
                
                <div className="settings-toggle-group">
                  <div className="settings-toggle">
                    <span>Email Notifications</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notificationPreferences.emailNotifications}
                        onChange={() => handleToggleChange('notificationPreferences', 'emailNotifications')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle">
                    <span>Model Training Complete</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notificationPreferences.modelTrainingComplete}
                        onChange={() => handleToggleChange('notificationPreferences', 'modelTrainingComplete')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle">
                    <span>Model Performance Alerts</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notificationPreferences.modelPerformanceAlerts}
                        onChange={() => handleToggleChange('notificationPreferences', 'modelPerformanceAlerts')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle">
                    <span>System Updates</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notificationPreferences.systemUpdates}
                        onChange={() => handleToggleChange('notificationPreferences', 'systemUpdates')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle">
                    <span>Dataset Import Complete</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notificationPreferences.datasetImportComplete}
                        onChange={() => handleToggleChange('notificationPreferences', 'datasetImportComplete')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle">
                    <span>Weekly Reports</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={notificationPreferences.weeklyReports}
                        onChange={() => handleToggleChange('notificationPreferences', 'weeklyReports')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'appearance' && (
            <div className="settings-section">
              <h2>Appearance Settings</h2>
              <p className="settings-description">Customize the look and feel of the platform interface.</p>
              
              <div className="settings-card">
                <h3>Theme</h3>
                
                <div className="theme-selector">
                  <div 
                    className={`theme-option ${uiPreferences.theme === 'light' ? 'active' : ''}`}
                    onClick={() => handleSelectChange('uiPreferences', 'theme', 'light')}
                  >
                    <div className="theme-preview light-theme">
                      <div className="preview-header"></div>
                      <div className="preview-sidebar"></div>
                      <div className="preview-content"></div>
                    </div>
                    <span>Light</span>
                  </div>
                  
                  <div 
                    className={`theme-option ${uiPreferences.theme === 'dark' ? 'active' : ''}`}
                    onClick={() => handleSelectChange('uiPreferences', 'theme', 'dark')}
                  >
                    <div className="theme-preview dark-theme">
                      <div className="preview-header"></div>
                      <div className="preview-sidebar"></div>
                      <div className="preview-content"></div>
                    </div>
                    <span>Dark</span>
                  </div>
                  
                  <div 
                    className={`theme-option ${uiPreferences.theme === 'system' ? 'active' : ''}`}
                    onClick={() => handleSelectChange('uiPreferences', 'theme', 'system')}
                  >
                    <div className="theme-preview system-theme">
                      <div className="preview-half light">
                        <div className="preview-header"></div>
                        <div className="preview-content"></div>
                      </div>
                      <div className="preview-half dark">
                        <div className="preview-header"></div>
                        <div className="preview-content"></div>
                      </div>
                    </div>
                    <span>System</span>
                  </div>
                </div>
              </div>
              
              <div className="settings-card">
                <h3>Interface Settings</h3>
                
                <div className="settings-toggle-group">
                  <div className="settings-toggle">
                    <span>Compact Mode</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={uiPreferences.compactMode}
                        onChange={() => handleToggleChange('uiPreferences', 'compactMode')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  
                  <div className="settings-toggle">
                    <span>Enable Animations</span>
                    <label className="toggle-switch">
                      <input 
                        type="checkbox" 
                        checked={uiPreferences.animationsEnabled}
                        onChange={() => handleToggleChange('uiPreferences', 'animationsEnabled')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="settings-actions-bar">
            <button className="settings-button secondary">Cancel</button>
            <button className="settings-button">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings