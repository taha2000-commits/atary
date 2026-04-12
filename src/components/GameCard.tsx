import { format } from "date-fns";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router";
import type { Game } from "../types/game";

const GameCard = ({
  game,
  isLoading,
  showHoverEffect = true,
}: {
  game: Game;
  isLoading: boolean;
  showHoverEffect: boolean;
}) => {
  const navigate = useNavigate();

  if (!game) return null;
  return (
    <div key={game.id} className="group relative h-full min-w-62.5">
      <div className="relative h-full overflow-hidden rounded-2xl bg-third">
        {isLoading && (
          <div className="absolute z-20 h-full w-full animate-pulse bg-white/60"></div>
        )}
        {game.parent_platforms?.[0] && (
          <div className="absolute top-0 right-0 w-fit rounded-bl-2xl bg-primary px-3 py-2">
            <div className="flex items-center gap-1">
              {game.parent_platforms?.map((p) => (
                <Fragment key={p.platform.id}>
                  {p.logo && (
                    <div
                      className="flex h-3 w-3 items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: p.logo }}
                    ></div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}
        <img
          loading="lazy"
          src={game.background_image || "/src/assets/logo.png"}
          className="aspect-video w-full bg-primary object-cover"
        />

        <div className="grid grid-cols-12 p-3">
          <div className="col-span-10">
            <h3
              className="cursor-pointer truncate text-xl font-semibold underline-offset-4 hover:text-white/50 hover:underline"
              onClick={() => {
                navigate(`/game/${game.id}`);
              }}
            >
              {game.name}
            </h3>
            {game.released && (
              <div className="text-xs text-white/50">
                {format(game.released, "yyyy")}
              </div>
            )}
          </div>

          {game.metacritic > 0 && (
            <div className="col-span-2 flex justify-end">
              <div className="h-fit w-fit rounded-lg border border-fourth px-2 py-1 text-xs text-fourth">
                {game.metacritic}
              </div>
            </div>
          )}
        </div>
      </div>

      {!isLoading && showHoverEffect && (
        <div className="pointer-events-none absolute top-0 left-0 z-20 w-full translate-y-2 scale-95 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          <div className="relative overflow-hidden rounded-2xl bg-third shadow-2xl">
            {game.parent_platforms?.[0] && (
              <div className="absolute top-0 right-0 w-fit rounded-bl-2xl bg-primary px-3 py-2">
                <div className="flex items-center gap-1">
                  {game.parent_platforms?.map((p) => (
                    <Fragment key={p.platform.id}>
                      {p.logo && (
                        <div
                          className="flex h-3 w-3 items-center justify-center"
                          dangerouslySetInnerHTML={{ __html: p.logo }}
                        ></div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
            <img
              loading="lazy"
              src={game.background_image || "/src/assets/logo.png"}
              className="h-52 w-full bg-primary object-cover"
            />

            <div className="space-y-3 p-4">
              <h3
                className="cursor-pointer text-xl font-semibold underline-offset-4 hover:text-white/50 hover:underline"
                onClick={() => {
                  navigate(`/game/${game.id}`);
                }}
              >
                {game.name}
              </h3>

              {game.released && (
                <p className="flex justify-between border-b border-white/30 pb-2 text-xs text-white/80">
                  <span className="capitalize">released at:</span>
                  <span className="">
                    {format(game.released, "MMM dd, yyyy")}
                  </span>
                </p>
              )}

              {game.metacritic > 0 && (
                <p className="flex justify-between border-b border-white/30 pb-2 text-xs text-white/80">
                  <span className="capitalize">metacritic:</span>
                  <span className="">{game.metacritic}</span>
                </p>
              )}
              {game.esrb_rating?.age && (
                <p className="flex justify-between border-b border-white/30 pb-2 text-xs text-white/80">
                  <span className="capitalize">esrb rating:</span>
                  <span className="">{game.esrb_rating.age}</span>
                </p>
              )}
              {game.genres?.[0] && (
                <div className="flex justify-between text-xs text-white/80">
                  <span className="capitalize">genres:</span>
                  <div className="flex gap-0.5">
                    {game.genres.map((genre, i, arr) => (
                      <Link
                        to={`/genre/${genre.id}`}
                        key={genre.id}
                        className="hover:text-white"
                      >
                        <span className="underline">{genre.name}</span>{" "}
                        {i < arr.length - 1 ? "," : ""}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameCard;
