import { useParams, useSearchParams } from "react-router";
import { usePublisher } from "../../services/api/publisher";
import { useGames } from "../../services/api/games";
import { useState } from "react";
import { ORDERING_OPTIONS } from "../../helpers/consts";
import LoadingPage from "../loading/LoadingPage";
import GamesCustomPage from "../GamesCustomPage";

const PublisherPage = () => {
  const { publisher_id } = useParams();
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const { publisher, isLoading } = usePublisher(publisher_id);

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    publishers: publisher_id,
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
        description: publisher?.description,
        image_background: publisher?.image_background,
        name: publisher?.name,
      }}
      isLoadingGames={isLoadingGames}
      isPlaceholderData={isPlaceholderData}
      title={`games published by ${publisher?.name}`}
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

export default PublisherPage;
