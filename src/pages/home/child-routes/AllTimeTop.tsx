import { useState } from "react";
import GamesCustomPage from "../../GamesCustomPage";
import { useSearchParams } from "react-router";
import { useGames } from "../../../services/api/games";

const AllTimeTop = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const {
    data,
    games,
    isLoading: isLoadingGames,
    isPlaceholderData,
  } = useGames({
    ordering: URLSearchParams.get("ordering") || "-rating",
    page: pagination.page,
    page_size: pagination.pageSize,
    platforms: URLSearchParams.get("platform") || "",
  });

  return (
    <GamesCustomPage
      isFixedBackgroundImg={false}
      title={"top rated"}
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

export default AllTimeTop;
