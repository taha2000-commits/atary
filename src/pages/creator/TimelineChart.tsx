import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TimelineChart = ({
  data,
}: {
  data: {
    year: number;
    game_count: number;
  }[];
}) => {
  return (
    <AreaChart
      style={{
        width: "100%",
        height: "30vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      syncId="anyId"
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke="var(--color-secondary)" />
      <XAxis
        dataKey="year"
        stroke="var(--color-secondary)"
        tick={({ x, y, payload }) => {
          return (
            <g transform={`translate(${x},${y})`}>
              <text
                x={0}
                y={0}
                dy={16}
                textAnchor="end"
                fill="var(--color-secondary)"
                transform="rotate(-20)"
              >
                {payload?.value}
              </text>
            </g>
          );
        }}
      />
      <YAxis dataKey="game_count" stroke="var(--color-secondary)" />
      <Tooltip
        cursor={{ stroke: "amber" }}
        contentStyle={{
          backgroundColor: "var(--color-third)",
          border: "none",
          borderRadius: "20%",
        }}
      />
      <Area
        type="monotone"
        dataKey="game_count"
        stroke="var(--color-fourth)"
        fill="var(--color-fourth)"
        activeDot={{
          stroke: "var(--color-secondary)",
        }}
      />
    </AreaChart>
  );
};

export default TimelineChart;
