import { useSearchParams } from "react-router";

import { useState } from "react";

import { useGenres } from "../../services/api/genres";
import CustomPage from "../CustomPage";

const GenresPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });
  const { genres, isPlaceholderData, isLoadingGenres, data } = useGenres({
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  return (
    <CustomPage
      data={genres}
      title="genres"
      isLoading={isLoadingGenres}
      isPlaceholderData={isPlaceholderData}
      linkPath="/genre"
      paginationData={{
        count: data?.data?.count || 0,
        isHasNext: Boolean(data?.data?.next),
        isHasPrevious: Boolean(data?.data?.previous),
        pagination,
        setPagination,
      }}
    />
  );
};

export default GenresPage;
