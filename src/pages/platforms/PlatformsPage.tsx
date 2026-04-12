import { usePlatforms } from "../../services/api/platforms";
import { useSearchParams } from "react-router";
import { useState } from "react";
import CustomPage from "../CustomPage";

const PlatformsPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });

  const { platforms, isPlaceholderData, isLoading, data } = usePlatforms({
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  return (
    <CustomPage
      data={platforms}
      title="platforms"
      isLoading={isLoading}
      isPlaceholderData={isPlaceholderData}
      linkPath="/platform"
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

export default PlatformsPage;
