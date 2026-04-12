import { Pie, PieChart, Tooltip } from "recharts";
import type { Rating } from "../../types/game";

const RatingsChartSection = ({ ratings }: { ratings: Rating[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="mb-2 w-full text-2xl font-bold capitalize">ratings</div>
      <PieChart
        style={{
          width: "80%",
          aspectRatio: 1.5,
        }}
        responsive
      >
        <Pie
          label
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={ratings?.map((rate) => {
            return {
              name: rate.title,
              value: rate.count,
              fill: `#${rate.color}`,
            };
          })}
          cx="50%"
          cy="100%"
          outerRadius="150%"
          innerRadius="60%"
          fill="#8884d8"
          isAnimationActive={true}
          cursor={"pointer"}
        />
        <Tooltip
          formatter={(value, name) => [
            `${value}`,
            name?.toString().toUpperCase(),
          ]}
        />
      </PieChart>
      <div className="flex items-center gap-5 mt-3">
        {ratings.map((rate) => (
          <div
            key={rate.id}
            className="flex flex-col items-center gap-1 text-sm sm:flex-row sm:text-lg"
          >
            <span
              className={`block h-3 w-3 rounded-full`}
              style={{ backgroundColor: `#${rate.color}` }}
            ></span>
            <span className="flex w-full flex-col items-center gap-1 capitalize sm:flex-row">
              {rate.title + " "}
              <span className="text-sm text-white/40">{rate.count}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsChartSection;
