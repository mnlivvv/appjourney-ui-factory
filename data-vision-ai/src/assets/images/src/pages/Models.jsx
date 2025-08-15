import React, { useState } from 'react';
import ModelCard from '../components/ModelCard';

const Models = () => {
  // State for filters
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('updated');
  
  // Mock data for models
  const mockModels = [
    {
      id: 1,
      name: 'Classification Model XGBoost',
      type: 'Classification',
      status: 'Active',
      accuracy: 0.94,
      f1Score: 0.92,
      lastUpdated: '2023-08-15T10:30:00Z',
      version: 'v2.3.1',
      description: 'High-performance classification model for customer segmentation using XGBoost algorithm.'
    },
    {
      id: 2,
      name: 'Sentiment Analysis BERT',
      type: 'NLP',
      status: 'Active',
      accuracy: 0.88,
      f1Score: 0.87,
      lastUpdated: '2023-08-10T14:15:00Z',
      version: 'v1.2.0',
      description: 'Fine-tuned BERT model for sentiment analysis of customer reviews and feedback.'
    },
    {
      id: 3,
      name: 'Image Recognition CNN',
      type: 'Computer Vision',
      status: 'Training',
      accuracy: 0.91,
      f1Score: 0.89,
      lastUpdated: '2023-08-05T09:45:00Z',
      version: 'v3.0.0-beta',
      description: 'Convolutional neural network for image classification and object detection.'
    },
    {
      id: 4,
      name: 'Time Series Forecasting',
      type: 'Regression',
      status: 'Active',
      accuracy: 0.86,
      f1Score: 0.84,
      lastUpdated: '2023-07-28T16:20:00Z',
      version: 'v1.1.4',
      description: 'ARIMA-based time series forecasting model for predicting sales and inventory levels.'
    },
    {
      id: 5,
      name: 'Recommendation Engine',
      type: 'Recommendation',
      status: 'Active',
      accuracy: 0.82,
      f1Score: 0.79,
      lastUpdated: '2023-07-20T11:05:00Z',
      version: 'v2.2.0',
      description: 'Collaborative filtering recommendation engine for product recommendations.'
    },
    {
      id: 6,
      name: 'Anomaly Detection',
      type: 'Anomaly Detection',
      status: 'Error',
      accuracy: 0.90,
      f1Score: 0.88,
      lastUpdated: '2023-08-12T13:40:00Z',
      version: 'v1.0.5',
      description: 'Isolation Forest model for detecting anomalies in system metrics and user behavior.'
    },
    {
      id: 7,
      name: 'Text Summarization T5',
      type: 'NLP',
      status: 'Training',
      accuracy: 0.85,
      f1Score: 0.83,
      lastUpdated: '2023-08-08T10:15:00Z',
      version: 'v0.9.2',
      description: 'T5-based model for generating concise summaries of long-form text content.'
    },
    {
      id: 8,
      name: 'Customer Churn Predictor',
      type: 'Classification',
      status: 'Active',
      accuracy: 0.89,
      f1Score: 0.88,
      lastUpdated: '2023-07-25T09:30:00Z',
      version: 'v3.1.0',
      description: 'Ensemble model for predicting customer churn based on behavioral and demographic data.'
    }
  ];
  
  // Filter models based on active filter and search query
  const filteredModels = mockModels.filter(model => {
    const matchesFilter = 
      activeFilter === 'all' || 
      (activeFilter === 'active' && model.status === 'Active') ||
      (activeFilter === 'training' && model.status === 'Training') ||
      (activeFilter === 'error' && model.status === 'Error');
    
    const matchesSearch = 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });
  
  // Sort models
  const sortedModels = [...filteredModels].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'accuracy') {
      return b.accuracy - a.accuracy;
    } else if (sortBy === 'updated') {
      return new Date(b.lastUpdated) - new Date(a.lastUpdated);
    }
    return 0;
  });
  
  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1>AI Models</h1>
        <button className="btn btn-primary">
          Add New Model
        </button>
      </div>
      
      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="flex space-x-2">
          <button 
            className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Models
          </button>
          <button 
            className={`btn ${activeFilter === 'active' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveFilter('active')}
          >
            Active
          </button>
          <button 
            className={`btn ${activeFilter === 'training' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveFilter('training')}
          >
            Training
          </button>
          <button 
            className={`btn ${activeFilter === 'error' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveFilter('error')}
          >
            Error
          </button>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-grow md:w-64">
            <input
              type="text"
              placeholder="Search models..."
              className="w-full py-2 px-3 border border-medium-gray rounded"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="absolute right-3 top-2.5 text-gray">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
          
          <select 
            className="py-2 px-3 border border-medium-gray rounded"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="updated">Last Updated</option>
            <option value="name">Name</option>
            <option value="accuracy">Accuracy</option>
          </select>
        </div>
      </div>
      
      {/* Models Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {sortedModels.map(model => (
          <ModelCard key={model.id} model={model} />
        ))}
        
        {sortedModels.length === 0 && (
          <div className="col-span-full text-center py-12">
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
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h3 className="text-lg font-medium mb-2">No models found</h3>
            <p className="text-gray">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
      
      {/* Models Info */}
      <div className="card mb-6">
        <h2 className="mb-4">Model Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-medium mb-2">Training Resources</h3>
            <p className="text-sm text-gray mb-4">Configure and allocate computing resources for model training jobs.</p>
            <button className="btn btn-outline">Configure</button>
          </div>
          <div className="border-l-4 border-secondary pl-4">
            <h3 className="font-medium mb-2">Model Registry</h3>
            <p className="text-sm text-gray mb-4">Central repository for managing model versions and artifacts.</p>
            <button className="btn btn-outline">Browse Registry</button>
          </div>
          <div className="border-l-4 pl-4" style={{ borderColor: '#8b5cf6' }}>
            <h3 className="font-medium mb-2">Deployment Pipelines</h3>
            <p className="text-sm text-gray mb-4">Set up automated CI/CD pipelines for model deployment.</p>
            <button className="btn btn-outline">Setup Pipeline</button>
          </div>
        </div>
      </div>
      
      {/* Model Documentation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="mb-4">Quick Start Guide</h3>
          <ul className="list-disc list-inside text-sm text-gray space-y-2 mb-4">
            <li>Upload a trained model in H5, ONNX, or SavedModel format</li>
            <li>Configure model metadata and performance metrics</li>
            <li>Set resource requirements for inference</li>
            <li>Deploy to development or production environment</li>
            <li>Monitor performance and adjust as needed</li>
          </ul>
          <button className="btn btn-outline">View Documentation</button>
        </div>
        
        <div className="card">
          <h3 className="mb-4">Model Lifecycle</h3>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-medium-gray"></div>
            <div className="ml-8 space-y-6">
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">1</div>
                <h4 className="font-medium">Development</h4>
                <p className="text-sm text-gray mt-1">Model training, evaluation, and iteration</p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">2</div>
                <h4 className="font-medium">Testing</h4>
                <p className="text-sm text-gray mt-1">Quality assurance and performance validation</p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">3</div>
                <h4 className="font-medium">Deployment</h4>
                <p className="text-sm text-gray mt-1">Containerization and deployment to production</p>
              </div>
              <div className="relative">
                <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs">4</div>
                <h4 className="font-medium">Monitoring</h4>
                <p className="text-sm text-gray mt-1">Continuous performance tracking and alerting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;