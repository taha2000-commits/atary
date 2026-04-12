import { useState } from "react";
import GamesCustomPage from "../../GamesCustomPage";
import { useSearchParams } from "react-router";
import { endOfYear, format, startOfYear, subYears } from "date-fns";
import { useGames } from "../../../services/api/games";

const PopularInLastYear = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const now = new Date();

  const lastYear = subYears(now, 1);

  const start = startOfYear(lastYear);
  const end = endOfYear(lastYear);

  const {
    data,
    games,
    isLoading: isLoadingGames,
    isPlaceholderData,
  } = useGames({
    ordering: URLSearchParams.get("ordering") || "-added",
    dates: format(start, "yyyy-MM-dd") + "," + format(end, "yyyy-MM-dd"),
    page: pagination.page,
    page_size: pagination.pageSize,
    platforms: URLSearchParams.get("platform") || "",
  });

  return (
    <GamesCustomPage
      isFixedBackgroundImg={false}
      title={`popular in ${lastYear.getFullYear()}`}
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

export default PopularInLastYear;
