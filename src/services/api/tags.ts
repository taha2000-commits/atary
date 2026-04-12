import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Tag } from "../../types/game";

export const getTags = async (
  params?: RequestParams,
): Promise<{ data: Response<Tag> } | null> => {
  return await api.get(`/tags`, { params });
};

export const useTags = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`tags`, params || {}],
    queryFn: () => getTags(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingTags: query?.isLoading,
    tags: (query?.data as AxiosResponse)?.data.results as Tag[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};
