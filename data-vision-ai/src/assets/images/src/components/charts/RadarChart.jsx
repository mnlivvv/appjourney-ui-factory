import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend
} from 'recharts';

const RadarChart = ({ data, title, dataKey = 'A', nameKey = 'subject' }) => {
  return (
    <div className="card h-full">
      {title && <h3 className="mb-4">{title}</h3>}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e2e8f0" />
            <PolarAngleAxis 
              dataKey={nameKey} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 150]} 
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <Radar
              name="Model A"
              dataKey="A"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.6}
            />
            <Radar
              name="Model B"
              dataKey="B"
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.6}
            />
            <Legend 
              layout="horizontal" 
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ fontSize: '12px' }}
            />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarChart;