import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { FullPlatform } from "./platform";

export const getPlatforms = async (
  params?: RequestParams,
): Promise<{ data: Response<FullPlatform> } | null> => {
  return await api.get(`/platforms`, {
    params: { ...params, ordering: "-games_count" },
  });
};

export const usePlatforms = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`platforms`, params || {}],
    queryFn: () => getPlatforms(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingPlatforms: query?.isLoading,
    platforms: (query?.data as AxiosResponse)?.data.results as FullPlatform[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};

export const useInfinityPlatforms = (params: RequestParams) => {
  return useInfiniteQuery({
    queryKey: ["platforms"],
    queryFn: ({ pageParam }) =>
      getPlatforms({ page: pageParam, page_size: params.page_size }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (!lastPage?.data.next) return null;

      const nextPage = parseInt(
        new URL(lastPage?.data.next).searchParams.get("page") || "",
      );

      return nextPage;
    },
  });
};
