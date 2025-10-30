'use client';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 80 },
  { name: 'Mar', value: 40 },
  { name: 'Apr', value: 70 },
  { name: 'May', value: 50 },
  { name: 'Jun', value: 100 },
];

export default function LineChartComponent() {
  return (
    <div className="bg-[#2c2943] p-4 rounded-2xl shadow-md w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#9ca3af"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f1d33',
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
