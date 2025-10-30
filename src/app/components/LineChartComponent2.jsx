'use client';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb', value: 0 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 75 },
  { name: 'Jun', value: 65 },
  { name: 'Jun', value: 80 },
  { name: 'Jun', value: 120 },
];

export default function LineChartComponent2() {
  return (
    <div className="p-4 w-full h-30 mt-7">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#27293d"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7fff00"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
