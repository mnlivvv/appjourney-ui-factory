import React, { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // General settings state
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'DataVision AI',
    description: 'AI model management and data visualization platform',
    dateFormat: 'MM/DD/YYYY',
    timezone: 'UTC-5 (Eastern Time)',
    theme: 'light',
    defaultDashboard: 'overview'
  });
  
  // API settings state
  const [apiSettings, setApiSettings] = useState({
    apiKey: 'sk_test_ai12345678abcdef',
    endpoint: 'https://api.datavision-ai.example.com/v1',
    maxRequestsPerMinute: '60',
    timeout: '30',
    authMethod: 'Bearer Token'
  });
  
  // Notification settings state
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    slackNotifications: true,
    slackWebhook: 'https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
    modelTrainingAlerts: true,
    errorAlerts: true,
    weeklyReports: true,
    maintenanceAlerts: true
  });
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Settings saved successfully!');
  };
  
  // Update general settings
  const updateGeneralSetting = (key, value) => {
    setGeneralSettings({
      ...generalSettings,
      [key]: value
    });
  };
  
  // Update API settings
  const updateApiSetting = (key, value) => {
    setApiSettings({
      ...apiSettings,
      [key]: value
    });
  };
  
  // Update notification settings
  const updateNotificationSetting = (key, value) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: value
    });
  };
  
  return (
    <div className="container py-6">
      <h1 className="mb-6">Settings</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="card">
            <nav className="space-y-1">
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'general' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('general')}
              >
                General
              </button>
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'api' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('api')}
              >
                API
              </button>
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'notifications' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('notifications')}
              >
                Notifications
              </button>
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'users' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('users')}
              >
                Users & Permissions
              </button>
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'logs' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('logs')}
              >
                Logs & Audit Trail
              </button>
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'integrations' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('integrations')}
              >
                Integrations
              </button>
              <button 
                className={`w-full text-left py-2 px-3 rounded text-sm font-medium ${activeTab === 'backup' ? 'bg-primary text-white' : 'text-gray hover:bg-light'}`}
                onClick={() => setActiveTab('backup')}
              >
                Backup & Restore
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="md:col-span-3">
          <div className="card">
            {/* General Settings */}
            {activeTab === 'general' && (
              <div>
                <h2 className="text-lg font-medium mb-4">General Settings</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray mb-1">
                        Site Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full" 
                        value={generalSettings.siteName}
                        onChange={(e) => updateGeneralSetting('siteName', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray mb-1">
                        Description
                      </label>
                      <input 
                        type="text" 
                        className="w-full" 
                        value={generalSettings.description}
                        onChange={(e) => updateGeneralSetting('description', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Date Format
                        </label>
                        <select 
                          className="w-full" 
                          value={generalSettings.dateFormat}
                          onChange={(e) => updateGeneralSetting('dateFormat', e.target.value)}
                        >
                          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Timezone
                        </label>
                        <select 
                          className="w-full" 
                          value={generalSettings.timezone}
                          onChange={(e) => updateGeneralSetting('timezone', e.target.value)}
                        >
                          <option value="UTC-12 (Baker Island)">UTC-12 (Baker Island)</option>
                          <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
                          <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                          <option value="UTC+0 (Greenwich Mean Time)">UTC+0 (Greenwich Mean Time)</option>
                          <option value="UTC+1 (Central European Time)">UTC+1 (Central European Time)</option>
                          <option value="UTC+8 (China Standard Time)">UTC+8 (China Standard Time)</option>
                          <option value="UTC+9 (Japan Standard Time)">UTC+9 (Japan Standard Time)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Theme
                        </label>
                        <div className="flex items-center space-x-4">
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="theme" 
                              value="light" 
                              checked={generalSettings.theme === 'light'}
                              onChange={() => updateGeneralSetting('theme', 'light')} 
                              className="mr-1"
                            />
                            Light
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="theme" 
                              value="dark" 
                              checked={generalSettings.theme === 'dark'}
                              onChange={() => updateGeneralSetting('theme', 'dark')} 
                              className="mr-1"
                            />
                            Dark
                          </label>
                          <label className="flex items-center">
                            <input 
                              type="radio" 
                              name="theme" 
                              value="system" 
                              checked={generalSettings.theme === 'system'}
                              onChange={() => updateGeneralSetting('theme', 'system')} 
                              className="mr-1"
                            />
                            System
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Default Dashboard
                        </label>
                        <select 
                          className="w-full" 
                          value={generalSettings.defaultDashboard}
                          onChange={(e) => updateGeneralSetting('defaultDashboard', e.target.value)}
                        >
                          <option value="overview">Overview</option>
                          <option value="analytics">Analytics</option>
                          <option value="models">Models</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* API Settings */}
            {activeTab === 'api' && (
              <div>
                <h2 className="text-lg font-medium mb-4">API Settings</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray mb-1">
                        API Key
                      </label>
                      <div className="flex">
                        <input 
                          type="password" 
                          className="w-full rounded-r-none" 
                          value={apiSettings.apiKey}
                          onChange={(e) => updateApiSetting('apiKey', e.target.value)}
                        />
                        <button 
                          type="button" 
                          className="btn btn-outline rounded-l-none"
                          onClick={() => alert('New API key generated!')}
                        >
                          Regenerate
                        </button>
                      </div>
                      <p className="text-xs text-gray mt-1">Keep this key secret. Used for authenticating API requests.</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray mb-1">
                        API Endpoint
                      </label>
                      <input 
                        type="text" 
                        className="w-full" 
                        value={apiSettings.endpoint}
                        onChange={(e) => updateApiSetting('endpoint', e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Rate Limit (requests per minute)
                        </label>
                        <input 
                          type="number" 
                          className="w-full" 
                          value={apiSettings.maxRequestsPerMinute}
                          onChange={(e) => updateApiSetting('maxRequestsPerMinute', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Timeout (seconds)
                        </label>
                        <input 
                          type="number" 
                          className="w-full" 
                          value={apiSettings.timeout}
                          onChange={(e) => updateApiSetting('timeout', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray mb-1">
                        Authentication Method
                      </label>
                      <select 
                        className="w-full" 
                        value={apiSettings.authMethod}
                        onChange={(e) => updateApiSetting('authMethod', e.target.value)}
                      >
                        <option value="Bearer Token">Bearer Token</option>
                        <option value="API Key">API Key</option>
                        <option value="OAuth 2.0">OAuth 2.0</option>
                        <option value="Basic Auth">Basic Auth</option>
                      </select>
                    </div>
                    
                    <div className="pt-4">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium mb-4">Notification Settings</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        Email Notifications
                      </label>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-email" 
                          className="sr-only"
                          checked={notificationSettings.emailNotifications}
                          onChange={() => updateNotificationSetting('emailNotifications', !notificationSettings.emailNotifications)}
                        />
                        <label 
                          htmlFor="toggle-email" 
                          className={`block overflow-hidden h-6 rounded-full cursor-pointer ${notificationSettings.emailNotifications ? 'bg-primary' : 'bg-gray'}`}
                        >
                          <span className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${notificationSettings.emailNotifications ? 'translate-x-4' : 'translate-x-0'}`}></span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        Slack Notifications
                      </label>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input 
                          type="checkbox" 
                          id="toggle-slack" 
                          className="sr-only"
                          checked={notificationSettings.slackNotifications}
                          onChange={() => updateNotificationSetting('slackNotifications', !notificationSettings.slackNotifications)}
                        />
                        <label 
                          htmlFor="toggle-slack" 
                          className={`block overflow-hidden h-6 rounded-full cursor-pointer ${notificationSettings.slackNotifications ? 'bg-primary' : 'bg-gray'}`}
                        >
                          <span className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${notificationSettings.slackNotifications ? 'translate-x-4' : 'translate-x-0'}`}></span>
                        </label>
                      </div>
                    </div>
                    
                    {notificationSettings.slackNotifications && (
                      <div>
                        <label className="block text-sm font-medium text-gray mb-1">
                          Slack Webhook URL
                        </label>
                        <input 
                          type="text" 
                          className="w-full" 
                          value={notificationSettings.slackWebhook}
                          onChange={(e) => updateNotificationSetting('slackWebhook', e.target.value)}
                        />
                      </div>
                    )}
                    
                    <div className="border-t border-medium-gray pt-4">
                      <h3 className="font-medium mb-3">Notification Events</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="model-training" 
                            className="mr-2"
                            checked={notificationSettings.modelTrainingAlerts}
                            onChange={() => updateNotificationSetting('modelTrainingAlerts', !notificationSettings.modelTrainingAlerts)}
                          />
                          <label htmlFor="model-training" className="text-sm">
                            Model Training Completion
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="error-alerts" 
                            className="mr-2"
                            checked={notificationSettings.errorAlerts}
                            onChange={() => updateNotificationSetting('errorAlerts', !notificationSettings.errorAlerts)}
                          />
                          <label htmlFor="error-alerts" className="text-sm">
                            Error Alerts
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="weekly-reports" 
                            className="mr-2"
                            checked={notificationSettings.weeklyReports}
                            onChange={() => updateNotificationSetting('weeklyReports', !notificationSettings.weeklyReports)}
                          />
                          <label htmlFor="weekly-reports" className="text-sm">
                            Weekly Performance Reports
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="maintenance-alerts" 
                            className="mr-2"
                            checked={notificationSettings.maintenanceAlerts}
                            onChange={() => updateNotificationSetting('maintenanceAlerts', !notificationSettings.maintenanceAlerts)}
                          />
                          <label htmlFor="maintenance-alerts" className="text-sm">
                            System Maintenance Alerts
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
            
            {/* Other Settings Tabs */}
            {(activeTab === 'users' || activeTab === 'logs' || activeTab === 'integrations' || activeTab === 'backup') && (
              <div className="text-center py-12">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 mx-auto mb-4 text-gray" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                  />
                </svg>
                <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
                <p className="text-gray">This feature is under development and will be available soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;