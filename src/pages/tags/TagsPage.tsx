import { useSearchParams } from "react-router";

import { useState } from "react";

import { useTags } from "../../services/api/tags";
import CustomPage from "../CustomPage";

const TagsPage = () => {
  const [URLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "24"),
  });

  const { tags, isPlaceholderData, isLoadingTags, data } = useTags({
    page: pagination.page,
    page_size: pagination.pageSize,
  });

  return (
    <CustomPage
      data={tags}
      title="tags"
      isLoading={isLoadingTags}
      isPlaceholderData={isPlaceholderData}
      linkPath="/tag"
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

export default TagsPage;
