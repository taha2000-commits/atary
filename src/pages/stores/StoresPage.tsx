import { useSearchParams } from "react-router";

import { useState } from "react";

import { useStores } from "../../services/api/stores";
import CustomPage from "../CustomPage";

const StoresPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });
  const { stores, isPlaceholderData, isLoadingStores, data } = useStores({
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  return (
    <CustomPage
      data={stores}
      title="stores"
      isLoading={isLoadingStores}
      isPlaceholderData={isPlaceholderData}
      linkPath="/store"
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

export default StoresPage;
