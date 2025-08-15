import React from 'react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import MetricCard from '../components/MetricCard';
import DataTable from '../components/DataTable';
import { predefinedData, recentPredictions, aiModelMetrics } from '../utils/data';

const Dashboard = () => {
  // Columns configuration for predictions table
  const predictionColumns = [
    { key: 'id', header: 'ID', width: '10%' },
    { key: 'timestamp', header: 'Timestamp', width: '20%', render: (row) => new Date(row.timestamp).toLocaleString() },
    { key: 'type', header: 'Type', width: '15%' },
    { key: 'model', header: 'Model', width: '15%' },
    { key: 'confidence', header: 'Confidence', width: '15%', render: (row) => `${(row.confidence * 100).toFixed(0)}%` },
    { 
      key: 'status', 
      header: 'Status', 
      width: '15%',
      render: (row) => (
        <span 
          className="px-2 py-1 rounded text-xs font-medium"
          style={{ 
            backgroundColor: row.status === 'Success' 
              ? '#10b98120' 
              : row.status === 'Warning' 
                ? '#f59e0b20' 
                : '#ef444420',
            color: row.status === 'Success' 
              ? '#10b981' 
              : row.status === 'Warning' 
                ? '#f59e0b' 
                : '#ef4444'
          }}
        >
          {row.status}
        </span>
      )
    },
    { 
      key: 'processingTime', 
      header: 'Processing Time', 
      width: '10%', 
      render: (row) => `${row.processingTime}ms` 
    }
  ];
  
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1>Dashboard</h1>
        <div className="flex">
          <button className="btn btn-outline mr-2">
            Export
          </button>
          <button className="btn btn-primary">
            Refresh
          </button>
        </div>
      </div>
      
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard 
          title="Model Accuracy" 
          value={aiModelMetrics.accuracy.toFixed(2)} 
          trend={2.5}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          }
        />
        <MetricCard 
          title="Predictions" 
          value="8,542" 
          description="Total predictions today"
          trend={12.3}
          color="#10b981"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
        />
        <MetricCard 
          title="Response Time" 
          value={aiModelMetrics.latency} 
          unit="ms"
          trend={-5.2}
          color="#f59e0b"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <MetricCard 
          title="Active Models" 
          value="5" 
          description="2 in training"
          trend={0}
          color="#8b5cf6"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          }
        />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LineChart 
          data={predefinedData.performance} 
          title="Model Performance Trend" 
        />
        <BarChart 
          data={predefinedData.categories} 
          title="Prediction Categories" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PieChart 
          data={predefinedData.distribution} 
          title="Data Distribution" 
        />
        <div className="card h-full flex flex-col">
          <h3 className="mb-4">Performance Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm text-gray mb-2">Accuracy</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-primary h-2 rounded" 
                  style={{ width: `${aiModelMetrics.accuracy * 100}%` }}
                ></div>
              </div>
              
              <h4 className="text-sm text-gray mb-2">Precision</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-primary h-2 rounded" 
                  style={{ width: `${aiModelMetrics.precision * 100}%` }}
                ></div>
              </div>
              
              <h4 className="text-sm text-gray mb-2">Recall</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-primary h-2 rounded" 
                  style={{ width: `${aiModelMetrics.recall * 100}%` }}
                ></div>
              </div>
              
              <h4 className="text-sm text-gray mb-2">F1 Score</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-primary h-2 rounded" 
                  style={{ width: `${aiModelMetrics.f1Score * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm text-gray mb-2">AUC</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-secondary h-2 rounded" 
                  style={{ width: `${aiModelMetrics.auc * 100}%` }}
                ></div>
              </div>
              
              <h4 className="text-sm text-gray mb-2">Latency</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-secondary h-2 rounded" 
                  style={{ width: `${(aiModelMetrics.latency / 200) * 100}%` }}
                ></div>
              </div>
              
              <h4 className="text-sm text-gray mb-2">Throughput</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-secondary h-2 rounded" 
                  style={{ width: `${(aiModelMetrics.throughput / 300) * 100}%` }}
                ></div>
              </div>
              
              <h4 className="text-sm text-gray mb-2">Model Size</h4>
              <div className="bg-light rounded h-2 mb-4">
                <div 
                  className="bg-secondary h-2 rounded" 
                  style={{ width: `${(aiModelMetrics.modelSize / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Predictions Table */}
      <div className="mb-6">
        <DataTable 
          data={recentPredictions} 
          columns={predictionColumns} 
          title="Recent Predictions" 
        />
      </div>
      
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="mb-2">Deploy New Model</h3>
          <p className="text-sm text-gray mb-4">Upload and deploy a new AI model to production.</p>
          <button className="btn btn-primary w-full">Upload Model</button>
        </div>
        
        <div className="card">
          <h3 className="mb-2">Run Diagnostics</h3>
          <p className="text-sm text-gray mb-4">Check system health and model performance.</p>
          <button className="btn btn-outline w-full">Run Diagnostics</button>
        </div>
        
        <div className="card">
          <h3 className="mb-2">Schedule Training</h3>
          <p className="text-sm text-gray mb-4">Schedule new training jobs with the latest data.</p>
          <button className="btn btn-outline w-full">Schedule Job</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;