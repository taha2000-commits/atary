import { useParams } from "react-router";
import { useGame } from "../services/api/game";
import { FaStar } from "react-icons/fa";
import { Pie, PieChart } from "recharts";
import { useTrailers } from "../services/api/trailers";

const GamePage = () => {
  const { game_id } = useParams();

  const { game, isLoading } = useGame(game_id);

  const { trailers, isLoadingTrailers } = useTrailers(game_id);

  if (isLoading || isLoadingTrailers)
    return <div className="bg-[#0f0f0f] text-white">Loaging</div>;
  return (
    <div className="">
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="backdrop--xs bg-radial from-black/40 from-10% to-black w-full h-full absolute -z-9"></div>
        <div className="absolute top-0 w-full h-full -z-10">
          <img
            src={game?.background_image}
            alt=""
            className="w-full h-full object-top object-cover"
          />
        </div>
        <div className="w-[95%] h-[95%] bg-black/40 backdrop-blur-xs rounded-4xl overflow-hidden flex flex-wrap">
          <div className="w-[50%] h-[50%] "></div>
          <div className="w-[50%] h-[50%] rounded-bl-4xl overflow-hidden">
            {trailers?.[0] ? (
              <video
                src={trailers[0].data[480]}
                autoPlay
                controls
                muted
                className="w-full h-full object-top object-cover"
              />
            ) : (
              <img
                src={game?.background_image}
                alt=""
                className="w-full h-full object-top object-cover"
              />
            )}
          </div>
          <div className="w-[50%] h-[50%] b-red-500 px-10 py-5">
            <h1 className="w-fit text-4xl font-extrabold text-white">
              <div className="flex justify-end">
                {game.released && (
                  <p className="text-sm font-normal bg-white text-black rounded-sm w-fit text-end px-1">
                    {new Date(game.released).getFullYear()}
                  </p>
                )}
              </div>
              {game.name || game.name_original}
            </h1>
            <div className="flex gap-2 mt-2">
              {game.parent_platforms.map((p) => (
                <div
                  key={p.platform.id}
                  className="w-5 h-5"
                  dangerouslySetInnerHTML={{ __html: p.logo }}
                />
              ))}
            </div>
          </div>
          <div className="w-[50%] h-[50%] flex items-center flex-col justify-center">
            <div className="w-full gap-2 flex items-center flex-col justify-center">
              <PieChart
                style={{
                  width: "50%",
                  aspectRatio: 1.5,
                }}
                responsive
              >
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={game.ratings?.map((rate) => {
                    return {
                      name: rate.title,
                      value: rate.count,
                      fill: `#${rate.color}`,
                    };
                  })}
                  cx="50%"
                  cy="100%"
                  outerRadius="120%"
                  fill="#8884d8"
                  label={true}
                  isAnimationActive={true}
                />
              </PieChart>
              <div className="flex items-center gap-2">
                {game.ratings.map((rate) => (
                  <div className="text-sm flex items-center gap-1">
                    <span
                      className={`w-2 h-2 rounded-full block`}
                      style={{ backgroundColor: `#${rate.color}` }}
                    ></span>
                    <span className="capitalize">{rate.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-betwen gap-3 items-center">
              <div className="border-r border-white/60 pe-3">
                {game.ratings?.length > 0 && (
                  <p className="text-4xl font-bold mb-2 capitalize">
                    {game.ratings?.sort((a, b) => b.count - a.count)[0].title}
                    <span className="t">👍</span>
                  </p>
                )}
                <p className="uppercase text-white/60">
                  {game.ratings?.sort((a, b) => b.count - a.count)[0].count}{" "}
                  ratings
                </p>
              </div>
              <div className="relative w-fit">
                <div className="flex items-end justify-center">
                  <div className="w-fit h-fit absolute translate-x-[50%] right-0 top-0 -translate-y-[50%]">
                    <FaStar color="yellow" />
                  </div>
                  <span className="text-4xl font-bold">{game.rating}</span>
                  <span className="text-lg">/</span>
                  <span className="text-xs">{game.rating_top}</span>
                </div>
                <p className="uppercase text-white/60">
                  {game.ratings_count} ratings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
