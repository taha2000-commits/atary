import { FaRegRegistered, FaStar } from "react-icons/fa";
import type { Game } from "../../types/game";
import { format } from "date-fns";
import { Link } from "react-router";
import type { Trailer } from "../../types/trailer";

const LandingSection = ({
  game,
  trailers,
}: {
  game: Game;
  trailers: Trailer[];
}) => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <div className="absolute -z-9 h-full w-full bg-radial from-black/40 from-10% to-black/50"></div>
      <div className="-z absolute top-0 h-full w-full">
        <img
          src={game?.background_image}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex h-[95%] w-[95%] flex-wrap overflow-hidden rounded-4xl bg-radial from-black/40 from-50% to-black/90 backdrop-blur-xs">
        <div className="h-[50%] w-[50%] p-7">
          <p className="text-sm text-white/40">
            Home / Games / {game.name || game.name_original}
          </p>
          <div className="mt-5 w-fit rounded-sm border border-white bg-white outline outline-black">
            <div className="w-full bg-black text-center">
              {game.esrb_rating?.name}
            </div>
            <div className="flex items-center justify-center p-2 text-4xl font-black text-black">
              <div className="flex">
                {game.esrb_rating?.age}
                <FaRegRegistered size={12} />
              </div>
            </div>
            <div className="flex items-center justify-evenly bg-black">
              <span>E</span>
              <span>S</span>
              <span>R</span>
              <span>B</span>
            </div>
          </div>
          <div className="justify-betwen flex items-center gap-3 pt-5">
            <div className="border-r border-white/60 pe-3">
              {game.ratings?.[0] && (
                <p className="mb-2 text-3xl font-bold capitalize">
                  {game.ratings?.sort((a, b) => b.count - a.count)[0].title}
                  <span className="t">
                    {game.ratings?.sort((a, b) => b.count - a.count)[0].logo}
                  </span>
                </p>
              )}
              {game.ratings?.[0] && (
                <p className="text-white/60 uppercase">
                  {game.ratings?.sort((a, b) => b.count - a.count)[0].count}{" "}
                  ratings
                </p>
              )}
            </div>
            <div className="relative w-fit">
              <div className="flex items-end justify-center">
                <div className="absolute top-0 right-0 h-fit w-fit translate-x-[50%] -translate-y-[50%]">
                  <FaStar color="yellow" />
                </div>
                <span className="text-3xl font-bold">{game.rating}</span>
                <span className="text-lg">/</span>
                <span className="text-xs">5</span>
              </div>
              <p className="text-white/60 uppercase">
                {game.ratings_count} ratings
              </p>
            </div>
          </div>
          {game.updated && (
            <div className="mt-3 w-fit rounded-xl bg-white px-2 font-thin text-black">
              <span className="font-normal capitalize">updated at</span>{" "}
              {format(game.updated, "MMM dd, yyyy")}
            </div>
          )}
          {game.updated && (
            <div className="mt-3 w-fit rounded-xl bg-white px-2 font-thin text-black">
              <span className="font-normal capitalize">Average Playtime:</span>{" "}
              {game.playtime} hours
            </div>
          )}
        </div>
        <div className="h-[50%] w-[50%] overflow-hidden rounded-bl-4xl">
          {trailers?.[0] ? (
            <video
              src={trailers?.[0].data[480]}
              autoPlay
              controls
              muted
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <img
              src={game?.background_image}
              alt=""
              className="h-full w-full object-cover object-top"
            />
          )}
        </div>
        <div className="b-red-500 flex h-[50%] w-[50%] flex-col justify-between px-10 py-5">
          <div className="">
            <h1 className="w-fit text-6xl font-extrabold text-white">
              <div className="flex justify-end">
                {game.released && (
                  <p className="w-fit rounded-sm bg-white px-1 text-end text-sm font-normal text-black">
                    {new Date(game.released).getFullYear()}
                  </p>
                )}
              </div>
              {game.name || game.name_original}
            </h1>
            <div className="flex items-center gap-2">
              {game.publishers?.[0] &&
                game.publishers?.map((publisher) => (
                  <Link
                    key={publisher.id}
                    to={`/publisher/${publisher.id}`}
                    className="text-2xl font-thin text-white/50 capitalize hover:underline"
                  >
                    {publisher.name}
                  </Link>
                ))}
            </div>
            <div className="mt-2 flex items-center gap-2">
              {game.parent_platforms.map((p) => (
                <div
                  key={p.platform.id}
                  className="h-6 w-6"
                  dangerouslySetInnerHTML={{ __html: p.logo }}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              {game.genres?.map((genre, i) => {
                if (i <= 3)
                  return (
                    <Link
                      key={genre.id}
                      to={`/genre/${genre.id}`}
                      className="cursor-pointer overflow-hidden rounded-xl bg-cover text-xl font-bold shadow-xl hover:shadow-white/10"
                      style={{
                        backgroundImage: `url(${genre.image_background})`,
                      }}
                    >
                      <div className="bg-black/40 p-2 px-4 hover:bg-black/70">
                        {genre.name}
                      </div>
                    </Link>
                  );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {game.website && (
              <a
                href={game.website}
                target="_blank"
                className={`flex w-fit cursor-pointer items-center gap-2 rounded-2xl bg-white/20 p-2 px-3 font-medium capitalize shadow-xl hover:shadow-white/10`}
              >
                <span>Home Page</span>
                <img
                  src={game.background_image_additional}
                  alt=""
                  className="h-6 w-6 rounded-full"
                />
              </a>
            )}
            <a
              href={game.metacritic_url}
              target="_blank"
              className="flex w-fit cursor-pointer items-center gap-2 rounded-2xl bg-[#ffbd3f]/50 p-2 px-3 font-medium capitalize shadow-xl hover:shadow-white/10"
            >
              <span>metacritic</span>
              <span className="flex items-center justify-center rounded-full bg-[#ffbd3f] px-1 text-sm">
                {game.metacritic}
              </span>
              <img
                src="/src/assets/metacritic-logo.png"
                alt=""
                className="h-6 w-6"
              />
            </a>
            <a
              href={game.reddit_url}
              target="_blank"
              className="flex w-fit cursor-pointer items-center gap-2 rounded-2xl bg-[#FF4500]/50 p-2 px-3 font-medium capitalize shadow-xl hover:shadow-white/10"
            >
              <span>reddit</span>
              <span className="h flex items-center justify-center rounded-full bg-[#FF4500] px-1 text-sm">
                {game.reddit_count}
              </span>
              <img
                src={game.reddit_logo || "/src/assets/reddit-logo.png"}
                alt=""
                className="h-6 w-6 rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="flex h-[50%] w-[50%] flex-col items-center justify-center"></div>
      </div>
    </div>
  );
};

export default LandingSection;
