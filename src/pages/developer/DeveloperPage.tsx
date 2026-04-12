import { useParams, useSearchParams } from "react-router";
import { useGames } from "../../services/api/games";
import { useState } from "react";
import { ORDERING_OPTIONS } from "../../helpers/consts";
import { useDeveloper } from "../../services/api/developer";
import LoadingPage from "../loading/LoadingPage";
import GamesCustomPage from "../GamesCustomPage";

const DeveloperPage = () => {
  const { developer_id } = useParams();
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const { developer, isLoading } = useDeveloper(developer_id);

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    developers: developer_id,
    page_size: pagination.pageSize,
    page: pagination.page,
    ordering: URLSearchParams.get("ordering") || ORDERING_OPTIONS[2].value,
    platforms: URLSearchParams.get("platform") || "",
  });

  if (isLoading || isLoadingGames) return <LoadingPage />;
  return (
    <div className="relative">
      <div
        className="fixed h-[60vh] w-full bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url(${developer?.image_background})` }}
      ></div>
      <div className="absolute top-[60vh] z-10 flex min-h-[40vh] w-full -translate-y-37.5 flex-col gap-5 bg-linear-to-b from-transparent from-0% to-primary to-[100px]">
        {developer?.description && (
          <div className="">
            <h1 className="mb-2 text-4xl font-extrabold xs:text-5xl sm:text-6xl">
              {developer?.name}
            </h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: developer?.description || "" }}
            ></div>
          </div>
        )}
        <div className="">
          <GamesCustomPage
            isFixedBackgroundImg={false}
            title={`games developed by ${developer?.name}`}
            data={{ description: developer.description }}
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

export default DeveloperPage;
