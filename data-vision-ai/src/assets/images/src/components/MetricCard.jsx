import React from 'react';

const MetricCard = ({ title, value, unit, description, trend, icon, color = '#3b82f6' }) => {
  const trendColor = trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#64748b';
  
  return (
    <div className="card h-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray text-sm font-medium">{title}</h3>
          <div className="flex items-baseline mt-2">
            <span className="text-xl font-bold" style={{ color }}>{value}</span>
            {unit && <span className="text-sm text-gray ml-1">{unit}</span>}
          </div>
          {description && <p className="text-sm text-gray mt-2">{description}</p>}
        </div>
        {icon && (
          <div 
            className="p-2 rounded" 
            style={{ backgroundColor: `${color}10` }}
          >
            {icon}
          </div>
        )}
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center">
          <span 
            className="text-sm font-medium" 
            style={{ color: trendColor }}
          >
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {Math.abs(trend).toFixed(1)}%
          </span>
          <span className="text-sm text-gray ml-1">vs last period</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;