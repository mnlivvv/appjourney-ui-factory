import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './Dashboard.css'

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month')

  // Sample data for charts
  const performanceData = [
    { name: 'Jan', accuracy: 78, latency: 42 },
    { name: 'Feb', accuracy: 81, latency: 40 },
    { name: 'Mar', accuracy: 80, latency: 38 },
    { name: 'Apr', accuracy: 85, latency: 32 },
    { name: 'May', accuracy: 87, latency: 28 },
    { name: 'Jun', accuracy: 89, latency: 26 },
    { name: 'Jul', accuracy: 92, latency: 22 },
  ]

  const inferenceData = [
    { name: 'Mon', value: 4200 },
    { name: 'Tue', value: 3800 },
    { name: 'Wed', value: 5200 },
    { name: 'Thu', value: 4800 },
    { name: 'Fri', value: 6200 },
    { name: 'Sat', value: 3500 },
    { name: 'Sun', value: 2800 },
  ]

  const modelUsageData = [
    { name: 'GPT-4', value: 45 },
    { name: 'BERT', value: 25 },
    { name: 'ResNet', value: 15 },
    { name: 'DALL-E', value: 10 },
    { name: 'Other', value: 5 },
  ]

  const resourceUsageData = [
    { name: '00:00', cpu: 32, memory: 48, gpu: 62 },
    { name: '04:00', cpu: 28, memory: 50, gpu: 58 },
    { name: '08:00', cpu: 45, memory: 56, gpu: 70 },
    { name: '12:00', cpu: 60, memory: 60, gpu: 85 },
    { name: '16:00', cpu: 58, memory: 65, gpu: 90 },
    { name: '20:00', cpu: 40, memory: 55, gpu: 75 },
    { name: '24:00', cpu: 30, memory: 50, gpu: 60 },
  ]

  // Active models data
  const activeModels = [
    { id: 1, name: 'GPT-4 Classifier', type: 'Text', status: 'active', requests: '2.4k/day', accuracy: '94.2%' },
    { id: 2, name: 'BERT Sentiment', type: 'Text', status: 'active', requests: '1.8k/day', accuracy: '89.5%' },
    { id: 3, name: 'ResNet Image Classifier', type: 'Image', status: 'active', requests: '950/day', accuracy: '92.1%' },
    { id: 4, name: 'DALL-E Generator', type: 'Image', status: 'warning', requests: '570/day', accuracy: 'N/A' },
  ]

  // Recent activities data
  const recentActivities = [
    { id: 1, type: 'model', title: 'GPT-4 Classifier updated to v2.1', time: '2 hours ago' },
    { id: 2, type: 'dataset', title: 'ImageNet-2023 dataset imported', time: '5 hours ago' },
    { id: 3, type: 'system', title: 'GPU cluster scaled up to 8 nodes', time: 'Yesterday' },
    { id: 4, type: 'model', title: 'BERT Sentiment training completed', time: 'Yesterday' },
    { id: 5, type: 'system', title: 'Weekly system backup completed', time: '3 days ago' },
  ]

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>AI Platform Overview</h1>
        <div className="dashboard-actions">
          <div className="period-selector">
            <button 
              className={selectedPeriod === 'week' ? 'active' : ''} 
              onClick={() => setSelectedPeriod('week')}
            >
              Week
            </button>
            <button 
              className={selectedPeriod === 'month' ? 'active' : ''} 
              onClick={() => setSelectedPeriod('month')}
            >
              Month
            </button>
            <button 
              className={selectedPeriod === 'year' ? 'active' : ''} 
              onClick={() => setSelectedPeriod('year')}
            >
              Year
            </button>
          </div>
          <button className="dashboard-action-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="8" y1="12" x2="16" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="16"></line>
            </svg>
            <span>Export Report</span>
          </button>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon models">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="stat-content">
            <h3>12</h3>
            <p>Active Models</p>
          </div>
          <div className="stat-change positive">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span>+2</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon datasets">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <div className="stat-content">
            <h3>24</h3>
            <p>Datasets</p>
          </div>
          <div className="stat-change positive">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span>+3</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon inferences">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="stat-content">
            <h3>164k</h3>
            <p>Inferences / Day</p>
          </div>
          <div className="stat-change positive">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span>+12%</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon compute">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
          </div>
          <div className="stat-content">
            <h3>78%</h3>
            <p>GPU Utilization</p>
          </div>
          <div className="stat-change negative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            <span>-5%</span>
          </div>
        </div>
      </div>
      
      <div className="charts-grid">
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <h3>Model Performance</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#4e6bff" activeDot={{ r: 8 }} name="Accuracy %" />
                  <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#ff9800" name="Latency (ms)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <h3>Daily Inferences</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inferenceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#4e6bff" name="API Requests" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <h3>Model Usage Distribution</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={modelUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label
                  >
                    {modelUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={
                        index === 0 ? '#4e6bff' :
                        index === 1 ? '#36a3eb' :
                        index === 2 ? '#4caf50' :
                        index === 3 ? '#ff9800' : '#9e9e9e'
                      } />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card chart-card">
          <div className="card-header">
            <h3>Resource Usage</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="card-body">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={resourceUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="cpu" stackId="1" stroke="#4e6bff" fill="#4e6bff" name="CPU %" />
                  <Area type="monotone" dataKey="memory" stackId="2" stroke="#4caf50" fill="#4caf50" name="Memory %" />
                  <Area type="monotone" dataKey="gpu" stackId="3" stroke="#ff9800" fill="#ff9800" name="GPU %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-footer-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Active Models</h3>
            <button className="text-button">View All</button>
          </div>
          <div className="card-body">
            <div className="models-table">
              <div className="models-table-header">
                <div className="models-name">Name</div>
                <div className="models-type">Type</div>
                <div className="models-status">Status</div>
                <div className="models-requests">Requests</div>
                <div className="models-accuracy">Accuracy</div>
              </div>
              <div className="models-table-body">
                {activeModels.map(model => (
                  <div key={model.id} className="models-table-row">
                    <div className="models-name">{model.name}</div>
                    <div className="models-type">{model.type}</div>
                    <div className="models-status">
                      <span className={`status status-${model.status}`}>
                        {model.status === 'active' ? 'Active' : 'Warning'}
                      </span>
                    </div>
                    <div className="models-requests">{model.requests}</div>
                    <div className="models-accuracy">{model.accuracy}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Activities</h3>
            <button className="text-button">View All</button>
          </div>
          <div className="card-body">
            <div className="activities-list">
              {recentActivities.map(activity => (
                <div key={activity.id} className="activity-item">
                  <div className={`activity-icon ${activity.type}`}>
                    {activity.type === 'model' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    )}
                    {activity.type === 'dataset' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    )}
                    {activity.type === 'system' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                        <line x1="6" y1="6" x2="6.01" y2="6"></line>
                        <line x1="6" y1="18" x2="6.01" y2="18"></line>
                      </svg>
                    )}
                  </div>
                  <div className="activity-content">
                    <p>{activity.title}</p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-banner">
        <div className="banner-content">
          <h3>Want to improve your AI models?</h3>
          <p>Our new optimization toolkit can help you achieve 30% better performance.</p>
        </div>
        <button className="banner-button">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Dashboard