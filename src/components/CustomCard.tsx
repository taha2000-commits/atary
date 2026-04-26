import { MdOutlinePerson } from "react-icons/md";
import { Link } from "react-router";
import type { Game } from "../types/game";

const CustomCard = ({
  isLoading,
  data,
  linkPath,
}: {
  linkPath: string;
  isLoading: boolean;
  data: {
    id: number;
    image_background: string;
    image?: string;
    name: string;
    positions?: {
      id: number;
      name: string;
    }[];
    games?: Game[];
    games_count: number;
  };
}) => {
  return (
    <div
      key={data.id}
      className="relative w-76 rounded-lg bg-cover bg-center pt-30"
      style={{
        backgroundImage: `linear-gradient(rgba(32,32,32,0.5), rgb(32,32,32) 70%), url(${data.image_background})`,
      }}
    >
      {isLoading && (
        <div className="absolute left-0 h-full w-full animate-pulse bg-white/50"></div>
      )}
      <div className="flex h-full w-full flex-col justify-end p-3">
        <div className="flex h-full flex-col items-center justify-center">
          {data.image && (
            <img
              loading="lazy"
              src={data.image || "/profile.jpg"}
              alt=""
              className="h-24 w-24 rounded-full bg-gray-500 object-cover"
            />
          )}
          <Link
            to={`${linkPath}/${data.id}`}
            className="border-b border-white/70 pb-px text-center text-2xl font-black transition-all duration-500 hover:text-white/50"
          >
            {data.name}
          </Link>
          {data.positions?.[0] && (
            <div className="mt-1 flex items-center gap-0.5 text-sm font-thin">
              {data.positions?.map((pos, i, arr) => (
                <span key={pos.id} className="">
                  {pos.name + (i < arr.length - 1 ? "," : "")}
                </span>
              ))}
            </div>
          )}
        </div>
        {data.games_count > 0 && data.games?.[0] && (
          <div className="p-2">
            <div className="mb-1 flex items-center justify-between border-b border-third pb-2 text-sm">
              <h5 className="font-bold capitalize">known for</h5>
              <span className="text-sm text-white/60">{data.games_count}</span>
            </div>
            <div className="flex flex-col gap-1">
              {data.games?.slice(0, 3).map((game) => (
                <div
                  key={game.id}
                  className="flex items-center justify-between text-sm"
                >
                  <Link
                    to={`/game/${game.id}`}
                    className="truncate underline underline-offset-1 hover:text-white/60"
                  >
                    {game.name}
                  </Link>
                  <div className="flex items-center gap-1 text-white/60">
                    <span>{game.added}</span>
                    <MdOutlinePerson />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
