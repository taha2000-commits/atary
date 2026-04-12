import { useState } from "react";
import GamesCustomPage from "../../GamesCustomPage";
import { useSearchParams } from "react-router";
import { format, startOfYear } from "date-fns";
import { useGames } from "../../../services/api/games";

const NewAndTrendingPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const today = new Date();
  const oneWeekAgo = startOfYear(today);

  const {
    data,
    games,
    isLoading: isLoadingGames,
    isPlaceholderData,
  } = useGames({
    ordering: URLSearchParams.get("ordering") || "-released,-added",
    dates: format(oneWeekAgo, "yyyy-MM-dd") + "," + format(today, "yyyy-MM-dd"),
    page: pagination.page,
    page_size: pagination.pageSize,
    exclude_game_series: false,
    platforms: URLSearchParams.get("platform") || "",
  });

  return (
    <GamesCustomPage
      isFixedBackgroundImg={false}
      title={"new and trending"}
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
  );
};

export default NewAndTrendingPage;
