import { useState } from 'react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  AreaChart, Area, ScatterChart, Scatter, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import './Analytics.css'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('month')
  const [selectedMetric, setSelectedMetric] = useState('accuracy')
  
  // Sample data for performance metrics
  const performanceData = [
    { date: '2023-01-01', accuracy: 78.2, precision: 76.8, recall: 74.5, f1: 75.6, latency: 42 },
    { date: '2023-02-01', accuracy: 80.5, precision: 79.3, recall: 77.1, f1: 78.2, latency: 40 },
    { date: '2023-03-01', accuracy: 79.8, precision: 78.9, recall: 76.4, f1: 77.6, latency: 38 },
    { date: '2023-04-01', accuracy: 85.2, precision: 83.7, recall: 81.9, f1: 82.8, latency: 32 },
    { date: '2023-05-01', accuracy: 87.4, precision: 86.3, recall: 84.1, f1: 85.2, latency: 28 },
    { date: '2023-06-01', accuracy: 89.1, precision: 87.5, recall: 86.2, f1: 86.8, latency: 26 },
    { date: '2023-07-01', accuracy: 91.7, precision: 90.2, recall: 89.5, f1: 89.8, latency: 22 },
  ]
  
  // Sample data for model comparison
  const modelComparisonData = [
    { name: 'GPT-4', accuracy: 91.7, precision: 90.2, recall: 89.5, f1: 89.8, latency: 22 },
    { name: 'BERT', accuracy: 89.3, precision: 87.8, recall: 86.9, f1: 87.3, latency: 18 },
    { name: 'ResNet', accuracy: 94.2, precision: 93.5, recall: 92.8, f1: 93.1, latency: 35 },
    { name: 'DALL-E', accuracy: 88.6, precision: 87.1, recall: 86.2, f1: 86.6, latency: 42 },
    { name: 'YOLO', accuracy: 92.3, precision: 91.7, recall: 90.9, f1: 91.3, latency: 28 },
  ]
  
  // Sample data for resource usage
  const resourceUsageData = [
    { date: '2023-07-01', cpu: 35, memory: 45, gpu: 65, network: 28 },
    { date: '2023-07-02', cpu: 32, memory: 48, gpu: 62, network: 30 },
    { date: '2023-07-03', cpu: 28, memory: 50, gpu: 58, network: 25 },
    { date: '2023-07-04', cpu: 45, memory: 56, gpu: 70, network: 35 },
    { date: '2023-07-05', cpu: 60, memory: 60, gpu: 85, network: 40 },
    { date: '2023-07-06', cpu: 58, memory: 65, gpu: 90, network: 42 },
    { date: '2023-07-07', cpu: 40, memory: 55, gpu: 75, network: 38 },
  ]
  
  // Sample data for inference breakdown
  const inferenceBreakdownData = [
    { name: 'Text Classification', value: 45 },
    { name: 'Image Recognition', value: 25 },
    { name: 'Sentiment Analysis', value: 15 },
    { name: 'Translation', value: 10 },
    { name: 'Other', value: 5 },
  ]
  
  // Sample data for latency distribution
  const latencyDistributionData = [
    { range: '0-10ms', count: 52 },
    { range: '10-20ms', count: 125 },
    { range: '20-30ms', count: 320 },
    { range: '30-40ms', count: 450 },
    { range: '40-50ms', count: 280 },
    { range: '50-60ms', count: 160 },
    { range: '60-70ms', count: 98 },
    { range: '70-80ms', count: 47 },
    { range: '80-90ms', count: 22 },
    { range: '90-100ms', count: 12 },
    { range: '100ms+', count: 15 },
  ]
  
  // Sample data for accuracy vs latency
  const accuracyLatencyData = [
    { name: 'Model 1', accuracy: 78, latency: 12, size: 50 },
    { name: 'Model 2', accuracy: 82, latency: 18, size: 120 },
    { name: 'Model 3', accuracy: 85, latency: 24, size: 180 },
    { name: 'Model 4', accuracy: 88, latency: 32, size: 90 },
    { name: 'Model 5', accuracy: 91, latency: 42, size: 210 },
    { name: 'Model 6', accuracy: 94, latency: 56, size: 140 },
    { name: 'Model 7', accuracy: 97, latency: 78, size: 250 },
  ]
  
  // Colors for charts
  const COLORS = ['#4e6bff', '#36a3eb', '#4caf50', '#ff9800', '#9e9e9e']
  
  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <div className="time-range-selector">
          <button 
            className={timeRange === 'week' ? 'active' : ''} 
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button 
            className={timeRange === 'month' ? 'active' : ''} 
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={timeRange === 'quarter' ? 'active' : ''} 
            onClick={() => setTimeRange('quarter')}
          >
            Quarter
          </button>
          <button 
            className={timeRange === 'year' ? 'active' : ''} 
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      <div className="analytics-metrics">
        <div className="metric-card">
          <div className="metric-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
            <h3>Accuracy</h3>
          </div>
          <div className="metric-value">91.7%</div>
          <div className="metric-change positive">+2.6%</div>
        </div>
        
        <div className="metric-card">
          <div className="metric-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h3>Latency</h3>
          </div>
          <div className="metric-value">22ms</div>
          <div className="metric-change positive">-4ms</div>
        </div>
        
        <div className="metric-card">
          <div className="metric-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
            <h3>Throughput</h3>
          </div>
          <div className="metric-value">164k</div>
          <div className="metric-change positive">+12%</div>
        </div>
        
        <div className="metric-card">
          <div className="metric-header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <h3>Error Rate</h3>
          </div>
          <div className="metric-value">0.42%</div>
          <div className="metric-change positive">-0.18%</div>
        </div>
      </div>
      
      <div className="chart-row">
        <div className="chart-container large">
          <div className="chart-header">
            <h3>Performance Metrics Over Time</h3>
            <div className="chart-controls">
              <select 
                value={selectedMetric} 
                onChange={(e) => setSelectedMetric(e.target.value)}
              >
                <option value="accuracy">Accuracy</option>
                <option value="precision">Precision</option>
                <option value="recall">Recall</option>
                <option value="f1">F1 Score</option>
              </select>
              <button className="icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey={selectedMetric} 
                  stroke="#4e6bff" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="chart-row">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Model Comparison</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={modelComparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="accuracy" fill="#4e6bff" name="Accuracy %" />
                <Bar dataKey="f1" fill="#36a3eb" name="F1 Score %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header">
            <h3>Resource Usage</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={resourceUsageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="cpu" 
                  stackId="1" 
                  stroke="#4e6bff" 
                  fill="#4e6bff" 
                  name="CPU %" 
                />
                <Area 
                  type="monotone" 
                  dataKey="memory" 
                  stackId="2" 
                  stroke="#36a3eb" 
                  fill="#36a3eb" 
                  name="Memory %" 
                />
                <Area 
                  type="monotone" 
                  dataKey="gpu" 
                  stackId="3" 
                  stroke="#ff9800" 
                  fill="#ff9800" 
                  name="GPU %" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="chart-row">
        <div className="chart-container">
          <div className="chart-header">
            <h3>Inference Breakdown</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={inferenceBreakdownData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  {inferenceBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="chart-container">
          <div className="chart-header">
            <h3>Latency Distribution</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={latencyDistributionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#4e6bff" name="Request Count" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="chart-row">
        <div className="chart-container large">
          <div className="chart-header">
            <h3>Accuracy vs. Latency Trade-off</h3>
            <button className="icon-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
          <div className="chart-body">
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  type="number" 
                  dataKey="latency" 
                  name="Latency (ms)" 
                  domain={[0, 100]}
                />
                <YAxis 
                  type="number" 
                  dataKey="accuracy" 
                  name="Accuracy (%)" 
                  domain={[70, 100]}
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter 
                  name="Model Performance" 
                  data={accuracyLatencyData} 
                  fill="#4e6bff"
                >
                  {accuracyLatencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#4e6bff" />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="analytics-footer">
        <div className="analytics-note">
          <div className="note-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <div className="note-content">
            <h4>Data Insights</h4>
            <p>Performance metrics show a steady improvement over the last quarter. The latest model updates have resulted in a 2.6% increase in accuracy while reducing latency by 15.4%.</p>
          </div>
        </div>
        
        <button className="analytics-export-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Export Full Report</span>
        </button>
      </div>
    </div>
  )
}

export default Analytics