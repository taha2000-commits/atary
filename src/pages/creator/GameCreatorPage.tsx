import { useParams, useSearchParams } from "react-router";
import { useCreator } from "../../services/api/creator";
import LoadingPage from "../loading/LoadingPage";

import TimelineChart from "./TimelineChart";
import { MdRateReview } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { ORDERING_OPTIONS } from "../../helpers/consts";
import { useState } from "react";
import { useGames } from "../../services/api/games";
import ScrolledSection from "../../components/ScrolledSection";
import GamesCustomPage from "../GamesCustomPage";

const GameCreatorPage = () => {
  const { creator_id } = useParams();
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const { creator, isLoading } = useCreator(creator_id);

  const timelineArray =
    creator?.timeline?.filter(
      (tl, i, arr) =>
        (tl.count == 0 && tl.count !== arr[i !== 0 ? i - 1 : i + 1].count) ||
        tl.count !== 0,
    ) || [];

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    creators: creator_id,
    page_size: pagination.pageSize,
    page: pagination.page,
    ordering: URLSearchParams.get("ordering") || ORDERING_OPTIONS[2].value,
    platforms: URLSearchParams.get("platform") || "",
  });

  if (isLoading) return <LoadingPage />;
  return (
    <div className="relative">
      <div
        className="fixed h-[60vh] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${creator?.image_background})` }}
      ></div>
      <div className="absolute top-[60vh] z-10 flex w-screen -translate-y-37.5 flex-col gap-5 bg-linear-to-b from-transparent from-0% to-primary to-[100px]">
        <div className="grid grid-cols-3 items-center">
          <div className="col-span-3 flex h-full items-start justify-center lg:col-span-1">
            <div className="h-60 w-60 overflow-hidden rounded-full bg-third outline-4 outline-third xl:h-75 xl:w-75">
              <img
                loading="lazy"
                src={creator?.image || "/"}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-3 flex flex-col items-center px-7 pt-15 sm:px-10 lg:col-span-2 lg:items-start lg:px-0 lg:pe-20">
            <h1 className="mb-2 text-4xl font-extrabold xs:text-5xl sm:text-6xl">
              {creator?.name}
            </h1>
            <div className="mb-3 flex flex-wrap items-center gap-2 capitalize">
              {creator?.positions?.map((pos) => (
                <div
                  className="rounded-xl bg-third px-2 py-1 text-sm"
                  key={pos.id}
                >
                  {pos.name}
                </div>
              ))}
            </div>
            <div className="mb-3 flex gap-2">
              <div className="flex items-center gap-1 rounded-md bg-third px-1 py-0.5 text-sm capitalize hover:scale-120">
                <span className="text-xs text-white/80">reviews:</span>
                <span className="">{creator.reviews_count}</span>
                <MdRateReview />
              </div>
              <div className="flex items-center gap-1 rounded-md bg-third px-1 py-0.5 text-sm hover:scale-120">
                <div className="flex items-end">
                  <span> {creator.rating}</span>
                  <span className="text-xs text-secondary">
                    /{creator.rating_top}
                  </span>
                </div>
                <FaStar color="yellow" />
              </div>
            </div>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: creator?.description || "" }}
            ></div>
          </div>
        </div>
        <div className="grid w-full grid-cols-3 px-7 sm:px-10 lg:px-20">
          <div className="col-span-1 hidden lg:block"></div>
          <div className="col-span-3 flex flex-col gap-5 lg:col-span-2">
            {creator?.positions?.[0] && (
              <div className="">
                <h3 className="mb-2 text-4xl font-bold capitalize">
                  positions
                </h3>
                <div className="flex flex-wrap items-center gap-2 capitalize">
                  {creator?.positions?.map((pos) => (
                    <div className="rounded-xl bg-third px-2 py-1" key={pos.id}>
                      {pos.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {creator?.platforms?.results?.[0] && (
              <div className="">
                <h3 className="mb-2 text-4xl font-bold capitalize">
                  Works on platforms
                </h3>
                <ScrolledSection>
                  <div className="flex h-fit w-screen gap-2 capitalize">
                    {creator?.platforms?.results?.map((platform) => (
                      <div
                        key={platform.platform.id}
                        className="flex min-w-30 flex-col items-center gap-3 rounded-xl border border-third p-3"
                      >
                        <div
                          className="flex h-15 w-15 items-center justify-center first:fill-white"
                          dangerouslySetInnerHTML={{
                            __html: platform.logo,
                          }}
                        ></div>
                        <div className="flex flex-col items-center gap-0.5">
                          <h5 className="text-lg font-bold text-wrap capitalize">
                            {platform.platform.name}
                          </h5>
                          <h6 className="text-sm font-thin text-white/50 capitalize">
                            {platform.count} games
                          </h6>
                          <p className="text-xs text-fourth capitalize">
                            {platform.percent}%
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrolledSection>
              </div>
            )}
            {timelineArray?.[0] && (
              <div className="">
                <h3 className="mb-2 text-4xl font-bold capitalize">
                  work timeline
                </h3>
                <div className="">
                  <TimelineChart
                    data={timelineArray?.map((tl) => {
                      return {
                        year: tl.year,
                        game_count: tl.count,
                      };
                    })}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 w-full">
          <GamesCustomPage
            isFixedBackgroundImg={false}
            title={`${creator?.name} Games`}
            data={{
              image_background: games?.[0]?.background_image,
            }}
            isLoadingGames={isLoadingGames}
            isPlaceholderData={isPlaceholderData}
            games={games}
            paginationData={{
              count: data?.data.count,
              isHasNext: data?.data.next,
              isHasPrevious: data?.data.previous,
              pagination,
              setPagination,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCreatorPage;
