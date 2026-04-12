import { FaStar } from "react-icons/fa";
import type { Game } from "../../types/game";
import { Link } from "react-router";
import type { Trailer } from "../../types/trailer";
import { Fragment } from "react/jsx-runtime";
import EsrbBanner from "../../components/EsrbBanner";
import TrailersCarousel from "../../components/CustomSwiper";

const LandingSection = ({
  game,
  trailers,
}: {
  game: Game;
  trailers: Trailer[];
}) => {
  return (
    <div className="fixed -z-1 flex h-screen w-full items-center justify-center">
      <div className="absolute -z-9 h-full w-full bg-radial from-black/40 from-10% to-black/50"></div>
      <div className="-z absolute top-0 h-full w-full">
        <img
          loading="lazy"
          src={game?.background_image || "/"}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="flex h-[95%] w-[95%] flex-wrap overflow-hidden rounded-4xl bg-radial from-black/40 from-50% to-black/90 backdrop-blur-xs">
        {game.parent_platforms?.[0] && (
          <div className="absolute top-0 right-0 w-fit rounded-bl-2xl bg-black/20 p-3 px-5 py-4">
            <div className="flex items-center gap-1">
              {game.parent_platforms?.map((p) => (
                <Fragment key={p.platform.id}>
                  {p.logo && (
                    <div
                      className="flex h-5 w-5 items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: p.logo }}
                    ></div>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        )}

        <div className="flex w-full flex-col justify-center gap-3 p-4 lg:flex-row lg:justify-start">
          <div className="flex w-full flex-col justify-center gap-3 lg:w-half">
            <p className="flex h-fit gap-1 text-sm text-white/40">
              <Link to={"/"} className="hover:text-white hover:underline">
                Home
              </Link>
              /
              <Link to={"/games"} className="hover:text-white hover:underline">
                Games
              </Link>
              /<span>{game.name || game.name_original}</span>
            </p>
            <EsrbBanner esrbRating={game.esrb_rating} />
            <div className="flex items-center gap-3">
              <div className="border-r border-white/60 pe-3">
                {game.ratings?.[0] && (
                  <p className="mb-2 text-xl font-bold capitalize xs:text-2xl sm:text-3xl">
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
                  <div className="absolute top-0 right-0 h-fit w-fit -translate-y-half">
                    <FaStar color="yellow" />
                  </div>
                  <span className="text-2xl font-extrabold sm:text-3xl">
                    {game.rating}
                  </span>
                  <span className="text-lg">/</span>
                  <span className="text-xs">5</span>
                </div>
                <p className="text-white/60 uppercase">
                  {game.ratings_count} ratings
                </p>
              </div>
            </div>
            <div className="">
              <h1 className="w-fit text-4xl font-black text-white md:text-6xl lg:text-5xl">
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
                      className="text-xl font-thin text-white/50 capitalize hover:underline sm:text-2xl"
                    >
                      {publisher.name}
                    </Link>
                  ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {game.genres?.slice(0, 3)?.map((genre, i) => {
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
          </div>
          {trailers?.[0] && (
            <div className="w-full flex-1 lg:w-half">
              <TrailersCarousel trailers={trailers} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
