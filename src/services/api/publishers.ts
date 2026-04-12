import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Publisher } from "../../types/game";

export const getPublishers = async (
  params?: RequestParams,
): Promise<{ data: Response<Publisher> } | null> => {
  return await api.get(`/publishers`, { params });
};

export const usePublishers = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`publishers`, params || {}],
    queryFn: () => getPublishers(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingPublishers: query?.isLoading,
    publishers: (query?.data as AxiosResponse)?.data.results as Publisher[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};
