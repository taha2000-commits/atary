import { ClipLoader } from "react-spinners";
import Text from "../../../components/Text";
import TitleAndListOfLinks from "../../../components/TitleAndListOfLinks";
import { useDevelopmentTeam } from "../../../services/api/development-team";
import { useGameAchievements } from "../../../services/api/game-achievements";
import type { Game } from "../../../types/game";
import RequirementsSection from "../RequirementsSection";
import { Link, useNavigate, useParams } from "react-router";
import LinksTable from "../../../components/LinksTable";
import { format } from "date-fns";
import GenresSection from "../GenresSection";
import RatingsChartSection from "../RatingsChartSection";
import TrailersSection from "../TrailersSection";
import { useGame } from "../../../services/api/game";
import { FOURTH_COLOR } from "../../../helpers/consts";

const Landing = () => {
  const { game_id } = useParams();
  const navigate = useNavigate();

  const { game } = useGame(game_id);
  
  const { developmentTeam, isLoadingDevelopmentTeam } = useDevelopmentTeam(
    game_id,
    { page: 1, page_size: 3 },
  );

  const { gameAchievements, isLoadingGameAchievements } = useGameAchievements(
    game_id,
    { page: 1, page_size: 3 },
  );

  if (!game) return null;
  return (
    <div className="grid w-full grid-cols-2 gap-x-15">
      {/* ============= */}
      <div className="col-span-1 flex flex-col gap-6">
        <div className="grid content-center overflow-hidden">
          <h3 className="mb-3 text-2xl font-black capitalize">about</h3>
          <Text text={game.description_raw} numOfWords={80} />
        </div>
        <TitleAndListOfLinks title={"tags"} links={game.tags} pathName="/tag" />

        <div className="col-span-3">
          <img
            src={game.background_image_additional}
            alt=""
            className="h-full w-full"
          />
        </div>
        <TitleAndListOfLinks
          links={game.gamesInSameSeries}
          pathName="/game"
          title="Other games in the series"
          className="flex flex-col justify-center gap-2"
        />
        <RequirementsSection platforms={game.platforms} />

        {game.parent_achievements_count && (
          <div className="">
            <div className="flex justify-between">
              <h3 className="mb-2 text-2xl font-bold capitalize">
                {game.name} achievements
              </h3>
              {isLoadingGameAchievements ? (
                <ClipLoader color={FOURTH_COLOR} />
              ) : (
                <Link
                  to={"achievements"}
                  className="flex cursor-pointer items-center gap-2 text-lg text-white/50 capitalize hover:text-white/80"
                >
                  <span className="underline">show all</span>
                  <span className="rounded-full bg-third p-1 px-2 text-sm no-underline">
                    {game.parent_achievements_count}
                  </span>
                </Link>
              )}
            </div>
            <div className="mt-2 flex flex-col gap-2">
              {gameAchievements?.map((achievement) => (
                <div key={achievement.id} className="flex gap-2 bg-third p-2">
                  <div className="h-12 w-12 rounded-xl bg-black">
                    <img
                      src={achievement.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="">
                      <h6 className="text-sm text-white">{achievement.name}</h6>
                      <p className="text-xs text-white/60">
                        {achievement.description}
                      </p>
                    </div>
                    <div className="grid h-12 w-12 place-content-center rounded-full bg-white/30">
                      <span className="text-xs font-bold text-black">
                        {achievement.percent}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* ============= */}
      <div className="col-span-1 flex flex-col gap-6">
        <div className="flex flex-col justify-center gap-5">
          <div className="">
            <h5 className="mb-2 text-white/50 capitalize">alternative names</h5>
            <div className="flex flex-wrap items-center gap-2 gap-y-1">
              {game.alternative_names?.[0] ? (
                game.alternative_names.map((name, i) => (
                  <span
                    key={i}
                    className="rounded-xl bg-third p-2 py-1 text-sm"
                  >
                    {name}
                  </span>
                ))
              ) : (
                <span className="rounded-xl bg-third p-2 py-1 text-sm">
                  {game.name}
                </span>
              )}
            </div>
          </div>

          <LinksTable urls={game.urls} />
          <div className="grid h-full grid-cols-6 content-start gap-x-10 gap-y-5">
            <TitleAndListOfLinks
              title="publishers"
              links={game.publishers}
              className="col-span-3"
            />
            <TitleAndListOfLinks
              title="developers"
              links={game.developers}
              className="col-span-3"
            />

            {game.released ? (
              <div className="col-span-2">
                <h5 className="mb-1 text-white/50 capitalize">released</h5>
                <span>{format(game.released, "MMM dd, yyyy")}</span>
              </div>
            ) : game.tba ? (
              <div className="col-span-2">
                <h5 className="mb-1 text-white/50 capitalize">released</h5>
                <span>TBA</span>
              </div>
            ) : null}
            <div className="col-span-2">
              <h5 className="mb-1 text-white/50 capitalize">Age rating</h5>
              <span className="capitalize">
                {game.esrb_rating?.name
                  ? game.esrb_rating.name + " " + game.esrb_rating.age
                  : "not rated"}
              </span>
            </div>
            <div className="col-span-2">
              <h5 className="mb-1 flex items-start gap-1 text-white/50 capitalize">
                Metascore
                {game.metacritic && (
                  <span className="h-1 w-1 rounded-full bg-fourth"></span>
                )}
              </h5>
              <div className="w-fit rounded-sm border border-fourth px-2 font-bold text-fourth">
                {game.metacritic ?? 0}
              </div>
            </div>
          </div>
        </div>
        {game.stores?.[0] && (
          <div className="col-span-2">
            <h5 className="mb-1 text-white/50 capitalize">Where to buy</h5>
            <div className="flex flex-wrap items-center gap-2">
              {game.stores?.map((store, i) => (
                <a
                  key={i}
                  href={store.url}
                  target="_blank"
                  className="flex items-start gap-2 rounded-xl bg-third p-3 py-2 hover:bg-secondary hover:text-shadow-2xs hover:text-shadow-black"
                >
                  <span>{store.store.name}</span>{" "}
                  {store.logo && (
                    <div
                      key={store.id}
                      className="h-5 w-5"
                      dangerouslySetInnerHTML={{ __html: store.logo }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        <GenresSection genres={game.genres} />
        <TitleAndListOfLinks
          title="platforms"
          links={game.platforms?.map((platform) => {
            return {
              ...platform.platform,
            };
          })}
        />
        <RatingsChartSection ratings={game.ratings} />

        {game.creators_count && (
          <div className="">
            <div className="flex justify-between">
              <h3 className="mb-2 text-2xl font-bold capitalize">
                {game.name} created by
              </h3>
              {isLoadingDevelopmentTeam ? (
                <ClipLoader color={FOURTH_COLOR} />
              ) : (
                <Link
                  to={"creators"}
                  className="flex cursor-pointer items-center gap-2 text-lg text-white/50 capitalize hover:text-white/80"
                >
                  <span className="underline">show all</span>
                  <span className="rounded-full bg-third p-1 px-2 text-sm no-underline">
                    {game.creators_count}
                  </span>
                </Link>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {developmentTeam?.map((developer) => (
                <div
                  key={developer.id}
                  onClick={() => navigate(`/developer/${developer.id}`)}
                  className="flex overflow-hidden rounded-3xl bg-third"
                >
                  <div
                    className="col-span-1 w-25 bg-cover"
                    style={{
                      backgroundImage: `url(${developer.image_background})`,
                    }}
                  >
                    <div className="flex h-full w-full items-center justify-center bg-black/60">
                      <img
                        src={developer.image}
                        alt=""
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col justify-evenly gap-3 p-2">
                    <div className="flex items-center gap-2">
                      <h5 className="text-xl font-bold text-white">
                        {developer.name}
                      </h5>
                      <div className="flex items-center">
                        (
                        {developer.positions?.map((pos, i, arr) => (
                          <span key={pos.id} className="text-sm text-white/50">
                            {pos.name + (i < arr.length - 1 ? " ," : "")}
                          </span>
                        ))}
                        )
                      </div>
                    </div>

                    <div className="">
                      <h6 className="text-xs font-thin text-white/80 capitalize">
                        known for
                      </h6>
                      <div className="">
                        {developer.games?.slice(0, 3).map((game, i) => (
                          <div
                            key={game.id}
                            className="flex gap-1 text-xs text-white/70"
                          >
                            <span>{i + 1} -</span>
                            <Link
                              to={`/game/${game.id}`}
                              key={game.id}
                              className="block underline underline-offset-1 hover:text-white/20"
                            >
                              {game.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* ============= */}
      <TrailersSection game={game as Game} />
    </div>
  );
};

export default Landing;
