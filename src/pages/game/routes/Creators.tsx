import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { useGame } from "../../../services/api/game";
import { ClipLoader } from "react-spinners";
import PageSizeSelect from "../../../components/PageSizeSelect";
import { useState } from "react";
import Pagination from "../../../components/Pagination";
import { useDevelopmentTeam } from "../../../services/api/development-team";
import { MdOutlinePerson } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

const Creators = () => {
  const { game_id } = useParams();
  const [URLSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { game } = useGame(game_id);

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "6"),
  });

  const { developmentTeam, isLoadingDevelopmentTeam, data, isPlaceholderData } =
    useDevelopmentTeam(game_id, {
      page: pagination.page,
      page_size: pagination.pageSize,
    });
  console.log(developmentTeam);

  return (
    <div>
      <h1 className="mb-3 flex items-center justify-center gap-3 text-center text-4xl font-extrabold">
        {game.name} Creators
        {(isLoadingDevelopmentTeam || isPlaceholderData) && (
          <ClipLoader color="#3b82f6" />
        )}
      </h1>
      <div className="mb-3 flex items-center justify-between">
        <div
          className="cursor-pointer rounded-full bg-third p-2 hover:bg-third/50"
          onClick={() =>
            navigate(`${pathname.split("/").slice(0, -1).join("/")}`)
          }
        >
          <FaArrowLeft size={20} />
        </div>
        <PageSizeSelect pagination={pagination} setPagination={setPagination} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {developmentTeam?.map((dev) => (
          <div
            key={dev.id}
            className="relative h-107.5 w-76 rounded-lg bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(32,32,32,0.5), rgb(32,32,32) 70%), url(${dev.image_background})`,
            }}
          >
            {isPlaceholderData && (
              <div className="absolute left-0 h-full w-full animate-pulse bg-white/50"></div>
            )}
            <div className="flex h-full w-full flex-col justify-end p-3">
              <div className="flex h-full flex-col items-center justify-center">
                <img
                  src={dev.image || "/src/assets/profile.jpg"}
                  alt=""
                  className="h-24 w-24 rounded-full bg-gray-500 object-cover"
                />
                <Link
                  to={`/developer/${dev.id}`}
                  className="border-b border-white/70 pb-px text-2xl font-black transition-all duration-500 hover:text-white/50"
                >
                  {dev.name}
                </Link>
                <div className="mt-1 flex items-center gap-0.5 text-sm font-thin">
                  {dev.positions?.map((pos, i, arr) => (
                    <span key={pos.id} className="">
                      {pos.name + (i < arr.length - 1 ? "," : "")}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-2">
                <div className="mb-1 flex items-center justify-between border-b border-third pb-2 text-sm">
                  <h5 className="font-bold capitalize">known for</h5>
                  <span className="text-sm text-white/60">
                    {dev.games_count}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {dev.games.map((game) => (
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
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center">
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          isHasNext={data?.next}
          isHasPrevious={data?.previous}
          count={data?.count}
          disabled={isPlaceholderData}
        />
      </div>
    </div>
  );
};

export default Creators;
