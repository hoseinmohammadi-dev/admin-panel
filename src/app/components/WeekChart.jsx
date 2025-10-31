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
        background: 'var(--color-surface)',
        borderRadius: '12px',
        padding: '10px',
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={30}>
          <ReferenceLine x="W" stroke="var(--color-primary)" strokeWidth={1.5} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--color-text)', fontSize: 12 }}
          />

          <Bar
            dataKey="value"
            radius={[4, 4, 0, 0]}
            fill="var(--color-primary)"
            shape={(props) => {
              const { x, y, width, height, fill, payload } = props;
              const active = payload.name === 'T';
              return (
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={active ? 'var(--color-primary)' : fill}
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
