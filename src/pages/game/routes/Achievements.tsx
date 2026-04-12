import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { useGameAchievements } from "../../../services/api/game-achievements";
import { useGame } from "../../../services/api/game";
import { ClipLoader } from "react-spinners";
import type { Achievement } from "../../../types/game";
import { useState } from "react";
import PageSizeSelect from "../../../components/PageSizeSelect";
import Pagination from "../../../components/Pagination";
import { FaArrowLeft } from "react-icons/fa";
import { FOURTH_COLOR } from "../../../helpers/consts";

const Achievements = () => {
  const { game_id } = useParams();
  const { pathname } = useLocation();
  const [URLSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { game } = useGame(game_id);

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "6"),
  });

  const {
    gameAchievements,
    isLoadingGameAchievements,
    isPlaceholderData,
    data,
  } = useGameAchievements(game_id, {
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  const getAchievementsAsColsAndRows = (achievements?: Achievement[]) => {
    const arr: Achievement[][] = [];
    Array.from(
      { length: Math.ceil(pagination.pageSize / 2) },
      (_, i) => i + 1,
    ).forEach((v, j) => {
      arr.push(achievements?.slice((0 + j) * 2, 2 * v) || []);
    });
    return arr;
  };

  return (
    <div>
      <h1 className="mb-5 flex items-center justify-center gap-3 text-center text-3xl font-extrabold sm:text-4xl">
        {game.name} Achievements
        {(isLoadingGameAchievements || isPlaceholderData) && (
          <ClipLoader color={FOURTH_COLOR} />
        )}
      </h1>
      <div className="mb-5 flex items-center justify-between">
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
      <div className="relative grid grid-cols-10">
        <div className="col-span-10 grid grid-cols-12 border-b border-third sm:grid-cols-10">
          <div className="col-span-1 h-3 border-r border-r-third"></div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className={`col-span-5 sm:col-span-4 ${i < 1 && "border-r border-third"}`}
            ></div>
          ))}
          <div className="col-span-1 border-l border-l-third"></div>
        </div>
        {getAchievementsAsColsAndRows(gameAchievements)?.map((row, i, arr) => {
          if (row?.[0])
            return (
              <div
                key={i}
                className="col-span-10 grid grid-cols-12 sm:grid-cols-10"
              >
                <div className="col-span-1 border-r border-b border-third"></div>
                <div className="col-span-10 grid grid-cols-8 sm:col-span-8">
                  {row.map((el, i) => (
                    <div
                      key={el.id}
                      className={`relative col-span-8 flex items-center p-2 md:col-span-4 ${i < 1 && "border-r"} ${i <= 2 && "border-b border-third"}`}
                    >
                      {isPlaceholderData && (
                        <div className="absolute left-0 h-full w-full animate-pulse bg-white/50"></div>
                      )}
                      <div className="flex h-full w-full items-center gap-2 bg-third p-2">
                        <div className="h-12 min-h-10 w-12 min-w-10 bg-black">
                          <img
                            loading="lazy"
                            src={el.image || "/"}
                            alt=""
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="">
                          <h4 className="flex items-center gap-3 font-medium">
                            <span>{el.name}</span>
                            <span className="text-xs text-white/70">
                              {el.percent}%
                            </span>
                          </h4>
                          <p className="text-xs">{el.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {gameAchievements?.length % 2 === 0 ? (
                  <div className="col-span-1 border-b border-l border-third"></div>
                ) : i < arr.length - 2 ? (
                  <div className="col-span-1 border-b border-l border-third"></div>
                ) : null}
              </div>
            );
        })}{" "}
        <div className="col-span-10 grid grid-cols-12 sm:grid-cols-10">
          <div className="col-span-1 h-3 border-r border-r-third"></div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="col-span-5 sm:col-span-4"></div>
          ))}
          {gameAchievements?.length % 2 === 0 && (
            <div className="col-span-1 border-l border-l-third"></div>
          )}
        </div>
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

export default Achievements;
