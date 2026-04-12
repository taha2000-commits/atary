import { useParams, useSearchParams } from "react-router";
import { useGames } from "../../services/api/games";
import { useState } from "react";
import { ORDERING_OPTIONS } from "../../helpers/consts";
import LoadingPage from "../loading/LoadingPage";
import { useStore } from "../../services/api/store";
import GamesCustomPage from "../GamesCustomPage";

const StorePage = () => {
  const { store_id } = useParams();
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const { store, isLoading } = useStore(store_id);

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    stores: store_id,
    page_size: pagination.pageSize,
    page: pagination.page,
    ordering: URLSearchParams.get("ordering") || ORDERING_OPTIONS[2].value,
    platforms: URLSearchParams.get("platform") || "",
  });

  if (isLoading || isLoadingGames) return <LoadingPage />;
  return (
    <GamesCustomPage
      games={games}
      data={{
        description: store?.description,
        image_background: store?.image_background,
        name: store?.name,
      }}
      isLoadingGames={isLoadingGames}
      isPlaceholderData={isPlaceholderData}
      title={`Games Available at ${store?.name}`}
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

export default StorePage;
