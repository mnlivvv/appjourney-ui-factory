import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const BarChart = ({ 
  data, 
  title, 
  xKey = 'name', 
  yKey = 'value', 
  color = '#3b82f6', 
  grid = true,
  layout = 'vertical',
  barSize = 20
}) => {
  // For vertical layout, we need to switch the axes
  const vertical = layout === 'vertical';
  
  return (
    <div className="card h-full">
      {title && <h3 className="mb-4">{title}</h3>}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            data={data}
            layout={layout}
            margin={{ top: 5, right: 20, left: vertical ? 60 : 0, bottom: 5 }}
          >
            {grid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />}
            <XAxis 
              dataKey={vertical ? null : xKey} 
              type={vertical ? "number" : "category"}
              stroke="#64748b" 
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: '#e2e8f0' }}
            />
            <YAxis 
              dataKey={vertical ? xKey : null}
              type={vertical ? "category" : "number"}
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
            <Bar 
              dataKey={yKey} 
              fill={color} 
              barSize={barSize}
              radius={[4, 4, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChart;