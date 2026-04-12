import { useSearchParams } from "react-router";

import { useState } from "react";

import { useDevelopers } from "../../services/api/developers";
import CustomPage from "../CustomPage";

const DevelopersPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });
  const { developers, isPlaceholderData, isLoading, data } = useDevelopers({
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  return (
    <CustomPage
      data={developers}
      title="developers"
      isLoading={isLoading}
      isPlaceholderData={isPlaceholderData}
      linkPath="/developer"
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

export default DevelopersPage;
