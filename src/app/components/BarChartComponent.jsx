'use client';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', earning: 40, expense: 20 },
  { name: 'Feb', earning: 60, expense: 25 },
  { name: 'Mar', earning: 80, expense: 40 },
  { name: 'Apr', earning: 50, expense: 30 },
  { name: 'May', earning: 70, expense: 35 },
  { name: 'Jun', earning: 45, expense: 25 },
  { name: 'Jul', earning: 65, expense: 30 },
];

export default function BarChartComponent() {
  return (
    <div className="p-4 w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={10}>
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
          <Legend
            wrapperStyle={{
              paddingTop: '10px',
            }}
            iconType="circle"
            verticalAlign="bottom"
            height={36}
          />
          <Bar dataKey="earning" fill="#449928" radius={[10, 10, 0, 0]} />
          <Bar dataKey="expense" fill="#9ca3af" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
