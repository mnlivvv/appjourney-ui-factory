import React from 'react';

const ModelCard = ({ model }) => {
  const statusColor = 
    model.status === 'Active' ? '#10b981' : 
    model.status === 'Training' ? '#f59e0b' : 
    model.status === 'Error' ? '#ef4444' : '#64748b';
  
  return (
    <div className="card h-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium">{model.name}</h3>
          <p className="text-sm text-gray">{model.type}</p>
        </div>
        <div 
          className="px-2 py-1 rounded text-sm font-medium"
          style={{ 
            backgroundColor: `${statusColor}20`,
            color: statusColor
          }}
        >
          {model.status}
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm text-gray">Accuracy</p>
          <p className="text-sm font-medium">{model.accuracy.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray">F1 Score</p>
          <p className="text-sm font-medium">{model.f1Score.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray">Last Updated</p>
          <p className="text-sm font-medium">{new Date(model.lastUpdated).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="text-sm text-gray">Version</p>
          <p className="text-sm font-medium">{model.version}</p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-medium-gray">
        <div className="flex">
          <button className="btn btn-outline mr-2">
            Details
          </button>
          <button className="btn btn-primary">
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;