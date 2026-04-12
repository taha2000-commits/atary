import { useParams, useSearchParams } from "react-router";
import { useGames } from "../../services/api/games";
import { useState } from "react";
import { ORDERING_OPTIONS } from "../../helpers/consts";
import LoadingPage from "../loading/LoadingPage";
import { useTag } from "../../services/api/tag";
import GamesCustomPage from "../GamesCustomPage";

const TagPage = () => {
  const { tag_id } = useParams();
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const { tag, isLoading } = useTag(tag_id);

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    tags: tag_id,
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
        description: tag?.description,
        image_background: tag?.image_background,
        name: tag?.name,
      }}
      isLoadingGames={isLoadingGames}
      isPlaceholderData={isPlaceholderData}
      title={`${tag?.name} games`}
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

export default TagPage;
