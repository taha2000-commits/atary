import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Developer } from "../../types/game";

export const getDevelopers = async (
  params?: RequestParams,
): Promise<{ data: Response<Developer> } | null> => {
  return await api.get(`/developers`, { params });
};
export const useDevelopers = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`Developers`, params || {}],
    queryFn: () => getDevelopers(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingDevelopers: query?.isLoading,
    developers: (query?.data as AxiosResponse)?.data.results as Developer[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};
