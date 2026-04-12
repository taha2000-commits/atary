import {  useSearchParams } from "react-router";

import { useState } from "react";

import { useCreators } from "../../services/api/creators";
import CustomPage from "../CustomPage";

const CreatorsPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });
  const { creators, isPlaceholderData, isLoading, data } = useCreators({
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  return (
    <CustomPage
      data={creators}
      title="creators"
      isLoading={isLoading}
      isPlaceholderData={isPlaceholderData}
      linkPath="/creator"
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

export default CreatorsPage;
