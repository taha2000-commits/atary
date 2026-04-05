import { ClipLoader } from "react-spinners";
import type { Game } from "../../types/game";
import { Link, useParams } from "react-router";
import { useTrailers } from "../../services/api/trailers";
import MasonryTrailers from "./MasonryTrailers";
import { FOURTH_COLOR } from "../../helpers/consts";

const TrailersSection = ({ game }: { game?: Game }) => {
  const { game_id } = useParams();

  const page_size = 8;

  const { trailers, isLoadingTrailers } = useTrailers(game_id, {
    page: 1,
    page_size,
  });

  if (!game) return null;
  return (
    <>
      {(game.movies_count || trailers?.[0]) && (
        <div className="col-span-2 mt-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex gap-3 text-2xl font-bold capitalize">
              {game.name} trailers{" "}
              {isLoadingTrailers && <ClipLoader color={FOURTH_COLOR} />}
            </h3>
            {game.movies_count > page_size && (
              <Link
                to={"trailers"}
                className="flex cursor-pointer items-center gap-2 text-lg text-white/50 capitalize hover:text-white/80"
              >
                <span className="underline">show all</span>
                <span className="rounded-full bg-third p-1 px-2 text-sm no-underline">
                  {game.movies_count}
                </span>
              </Link>
            )}
          </div>
          <MasonryTrailers
            trailers={trailers || []}
            page_size={page_size}
            numOfCols={4}
          />
        </div>
      )}
    </>
  );
};

export default TrailersSection;
