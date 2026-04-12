import { useParams, useSearchParams } from "react-router";
import { useGames } from "../../services/api/games";
import { useState } from "react";
import { ORDERING_OPTIONS } from "../../helpers/consts";
import { usePlatform } from "../../services/api/platform";
import LoadingPage from "../loading/LoadingPage";
import GamesCustomPage from "../GamesCustomPage";

const PlatformPage = () => {
  const { platform_id } = useParams();
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const { platform, isLoading } = usePlatform(platform_id);

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    platforms: platform_id,
    page_size: pagination.pageSize,
    page: pagination.page,
    ordering: URLSearchParams.get("ordering") || ORDERING_OPTIONS[2].value,
  });
  if (isLoading || isLoadingGames) return <LoadingPage />;
  return (
    <GamesCustomPage
      games={games}
      data={{
        description: platform?.description,
        image_background: platform?.image_background,
        name: platform?.name,
      }}
      isLoadingGames={isLoadingGames}
      isPlaceholderData={isPlaceholderData}
      title={`games for ${platform?.name}`}
      paginationData={{
        pagination,
        setPagination,
        count: data?.data.count,
        isHasNext: data?.data.next,
        isHasPrevious: data?.data.previous,
      }}
    />
  );
};

export default PlatformPage;
