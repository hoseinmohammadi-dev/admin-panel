import { BarChart, Bar, XAxis, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
  { name: 'S', value: 50 },
  { name: 'M', value: 80 },
  { name: 'T', value: 65 },
  { name: 'W', value: 70 },
  { name: 'T', value: 120 },
  { name: 'F', value: 60 },
  { name: 'S', value: 55 },
];

export default function WeekChart() {
  return (
    <div
      style={{
        width: '100%',
        height: 200,
        background: '#2a2543',
        borderRadius: '12px',
        padding: '10px',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={30}>
          {/* خط عمودی وسط چارت */}
          <ReferenceLine x="W" stroke="#3b3fff" strokeWidth={1.5} />
          
          {/* محور پایین (روزها) */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#b5b2c5', fontSize: 12 }}
          />

          {/* ستون‌ها */}
          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
            fill="#5f4b8b"
            shape={(props) => {
              const { x, y, width, height, fill, payload } = props;
              const active = payload.name === 'T'; // روز فعال
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={active ? '#9b5cff' : fill}
                  rx={6}
                />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
