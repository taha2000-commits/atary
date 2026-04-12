import { useSearchParams } from "react-router";
import { useGames } from "../../services/api/games";
import GamesCustomPage from "../GamesCustomPage";
import { useState } from "react";
import LoadingPage from "../loading/LoadingPage";
import Navbar from "../../components/Navbar";

const GamesPage = () => {
  const [URLSearchParams] = useSearchParams();
  const search = URLSearchParams.get("search");

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "16"),
  });

  const {
    data,
    games,
    isLoading: isLoadingGames,
    isPlaceholderData,
  } = useGames({
    ordering: URLSearchParams.get("ordering") || "-added",
    page: pagination.page,
    page_size: pagination.pageSize,
    exclude_game_series: false,
    search: search || "",
    platforms: URLSearchParams.get("platform") || "",
  });

  if (isLoadingGames) return <LoadingPage />;
  return (
    <div className="">
      <Navbar />
      <GamesCustomPage
        title={search ? `Search for ${search}` : "Games"}
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
  );
};

export default GamesPage;
