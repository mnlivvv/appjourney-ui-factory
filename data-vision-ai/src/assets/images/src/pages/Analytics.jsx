import React, { useState } from 'react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import RadarChart from '../components/charts/RadarChart';
import { predefinedData, generateTimeSeriesData, generateCategoricalData, generatePieData, generateRadarData } from '../utils/data';

const Analytics = () => {
  // State for time range
  const [timeRange, setTimeRange] = useState('30d');
  
  // Generate time series data based on selected range
  const getTimeSeriesData = () => {
    switch (timeRange) {
      case '7d':
        return generateTimeSeriesData(7, 150, 0.15);
      case '30d':
        return predefinedData.performance;
      case '90d':
        return generateTimeSeriesData(90, 100, 0.08);
      case '1y':
        return generateTimeSeriesData(365, 80, 0.05);
      default:
        return predefinedData.performance;
    }
  };
  
  // Sample data for more complex charts
  const multiSeriesData = [
    { name: 'Jan', Model_A: 4000, Model_B: 2400, Model_C: 1800 },
    { name: 'Feb', Model_A: 3000, Model_B: 1398, Model_C: 2800 },
    { name: 'Mar', Model_A: 2000, Model_B: 9800, Model_C: 4300 },
    { name: 'Apr', Model_A: 2780, Model_B: 3908, Model_C: 2500 },
    { name: 'May', Model_A: 1890, Model_B: 4800, Model_C: 5300 },
    { name: 'Jun', Model_A: 2390, Model_B: 3800, Model_C: 4200 },
  ];
  
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1>Analytics</h1>
        <div className="flex">
          <div className="mr-2">
            <select 
              className="py-2 px-3 border border-medium-gray rounded text-sm"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
          <button className="btn btn-outline mr-2">
            Export Data
          </button>
          <button className="btn btn-primary">
            Generate Report
          </button>
        </div>
      </div>
      
      {/* Performance Overview */}
      <div className="card mb-6">
        <h2 className="mb-4">Performance Overview</h2>
        <div style={{ height: 400 }}>
          <LineChart 
            data={getTimeSeriesData()} 
            title={null}
            grid={true}
          />
        </div>
      </div>
      
      {/* Model Comparison */}
      <div className="card mb-6">
        <h2 className="mb-4">Model Comparison</h2>
        <div style={{ height: 400 }} className="mb-4">
          <div className="w-full h-full">
            <ResponsiveBarChart data={multiSeriesData} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-sm">Model A</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-secondary mr-2"></div>
            <span className="text-sm">Model B</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#f59e0b' }} mr-2></div>
            <span className="text-sm">Model C</span>
          </div>
        </div>
      </div>
      
      {/* Multi-Chart Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="mb-4">Feature Importance</h3>
          <BarChart 
            data={generateCategoricalData(['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E'], 100)} 
            layout="vertical"
            title={null}
          />
        </div>
        <div className="card">
          <h3 className="mb-4">Error Distribution</h3>
          <PieChart 
            data={generatePieData(['False Positives', 'False Negatives', 'True Positives', 'True Negatives'])} 
            title={null}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="card">
          <h3 className="mb-4">Model Capabilities</h3>
          <RadarChart 
            data={predefinedData.radar} 
            title={null}
          />
        </div>
        <div className="card">
          <h3 className="mb-4">Training Progress</h3>
          <LineChart 
            data={generateTimeSeriesData(20, 50, 0.3).map(item => ({
              ...item,
              date: `Epoch ${item.date.slice(-2)}`,
            }))} 
            xKey="date"
            title={null}
            color="#8b5cf6"
          />
        </div>
      </div>
      
      {/* Analytics Insights */}
      <div className="card mb-6">
        <h2 className="mb-4">Key Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-medium mb-2">Performance Trend</h3>
            <p className="text-sm text-gray">Model accuracy has improved by 4.2% over the last 30 days, primarily driven by dataset expansion.</p>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <h3 className="font-medium mb-2">Resource Utilization</h3>
            <p className="text-sm text-gray">GPU utilization decreased by 12% while maintaining same inference speed through optimization.</p>
          </div>
          <div className="border-l-4 pl-4" style={{ borderColor: '#f59e0b' }}>
            <h3 className="font-medium mb-2">Anomaly Detection</h3>
            <p className="text-sm text-gray">Unusual spike in prediction errors detected on May 15. Investigation recommended.</p>
          </div>
        </div>
      </div>
      
      {/* Export Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card">
          <h3 className="mb-2">PDF Report</h3>
          <p className="text-sm text-gray mb-4">Comprehensive analysis with all charts and insights.</p>
          <button className="btn btn-outline w-full">Generate PDF</button>
        </div>
        
        <div className="card">
          <h3 className="mb-2">CSV Export</h3>
          <p className="text-sm text-gray mb-4">Raw data export for all metrics and KPIs.</p>
          <button className="btn btn-outline w-full">Export CSV</button>
        </div>
        
        <div className="card">
          <h3 className="mb-2">Schedule Reports</h3>
          <p className="text-sm text-gray mb-4">Set up automated report delivery.</p>
          <button className="btn btn-outline w-full">Schedule</button>
        </div>
        
        <div className="card">
          <h3 className="mb-2">Share Dashboard</h3>
          <p className="text-sm text-gray mb-4">Share this dashboard with team members.</p>
          <button className="btn btn-primary w-full">Share</button>
        </div>
      </div>
    </div>
  );
};

// Component for responsive multi-series bar chart
const ResponsiveBarChart = ({ data }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            stroke="#64748b" 
            fontSize={12} 
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <YAxis 
            stroke="#64748b" 
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: '#e2e8f0' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: 'none', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderRadius: '4px',
              fontSize: '12px'
            }} 
          />
          <Bar dataKey="Model_A" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Model_B" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Model_C" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Import necessary components from recharts
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default Analytics;