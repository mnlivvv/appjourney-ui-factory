/**
 * Utility functions for generating mock data for our visualizations
 */

// Generate random time series data
export const generateTimeSeriesData = (days = 30, baseline = 100, volatility = 0.2) => {
  const data = [];
  let value = baseline;
  
  for (let i = 0; i < days; i++) {
    // Random walk algorithm
    const change = value * volatility * (Math.random() - 0.5);
    value += change;
    
    data.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      value: Math.max(0, Math.round(value)),
    });
  }
  
  return data;
};

// Generate categorical data for bar charts
export const generateCategoricalData = (categories, maxValue = 100) => {
  return categories.map(category => ({
    name: category,
    value: Math.floor(Math.random() * maxValue) + 10,
  }));
};

// Generate pie chart data
export const generatePieData = (slices, total = 100) => {
  const data = [];
  let remaining = total;
  
  for (let i = 0; i < slices.length; i++) {
    const isLast = i === slices.length - 1;
    const value = isLast ? remaining : Math.floor(Math.random() * (remaining / 2)) + 5;
    
    data.push({
      name: slices[i],
      value: value,
    });
    
    remaining -= value;
    if (remaining <= 0) break;
  }
  
  return data;
};

// Generate data for a radar/spider chart
export const generateRadarData = (attributes) => {
  return attributes.map(attr => ({
    subject: attr,
    A: Math.floor(Math.random() * 100) + 20,
    B: Math.floor(Math.random() * 100) + 20,
    fullMark: 150,
  }));
};

// Predefined datasets for different visualization types
export const predefinedData = {
  performance: generateTimeSeriesData(30, 120, 0.1),
  categories: generateCategoricalData(['Category A', 'Category B', 'Category C', 'Category D', 'Category E']),
  distribution: generatePieData(['Segment 1', 'Segment 2', 'Segment 3', 'Segment 4']),
  comparison: [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ],
  multiSeries: [
    { name: 'Jan', series1: 4000, series2: 2400 },
    { name: 'Feb', series1: 3000, series2: 1398 },
    { name: 'Mar', series1: 2000, series2: 9800 },
    { name: 'Apr', series1: 2780, series2: 3908 },
    { name: 'May', series1: 1890, series2: 4800 },
    { name: 'Jun', series1: 2390, series2: 3800 },
  ],
  radar: generateRadarData(['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E', 'Feature F']),
};

// AI model performance metrics
export const aiModelMetrics = {
  accuracy: 0.92,
  precision: 0.89,
  recall: 0.94,
  f1Score: 0.91,
  auc: 0.95,
  latency: 120, // milliseconds
  throughput: 250, // requests per second
  trainingTime: 4.5, // hours
  modelSize: 2.3, // GB
  parameters: 125, // millions
};

// Generate sample predictions data
export const generatePredictions = (count = 10) => {
  const types = ['Classification', 'Regression', 'Clustering'];
  const statuses = ['Success', 'Warning', 'Error'];
  const models = ['BERT', 'GPT', 'XGBoost', 'Random Forest', 'Neural Network'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `pred-${i + 1}`,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    type: types[Math.floor(Math.random() * types.length)],
    model: models[Math.floor(Math.random() * models.length)],
    confidence: Math.random().toFixed(2),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    processingTime: Math.floor(Math.random() * 500) + 50,
  }));
};

// Sample predictions
export const recentPredictions = generatePredictions(8);