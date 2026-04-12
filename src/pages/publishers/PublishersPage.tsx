import { useSearchParams } from "react-router";

import { useState } from "react";

import { usePublishers } from "../../services/api/publishers";
import CustomPage from "../CustomPage";

const PublishersPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });
  const { publishers, isPlaceholderData, isLoadingPublishers, data } =
    usePublishers({
      page: pagination.page,
      page_size: pagination.pageSize,
    });

  return (
    <CustomPage
      data={publishers}
      title="publishers"
      isLoading={isLoadingPublishers}
      isPlaceholderData={isPlaceholderData}
      linkPath="/publisher"
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

export default PublishersPage;
