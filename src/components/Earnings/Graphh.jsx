import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'JANUARY', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'FEBRUARY', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'MARCH', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'APRAIL', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'MAY', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'JUNE', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'JULY', uv: 3490, pv: 4300, amt: 2100 },
];

const EarningsBarChart = () => {
  return (
    <div className="w-[80%] h-[80vh] scale-90">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            stroke="#6B 280"
          />
          <YAxis stroke="#6B7280" tickFormatter={(value) => `${value}$`}/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <Bar dataKey="pv" fill="#703bf7" 
          background={{ fill: '#E0F2FE' }}
           />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsBarChart;
