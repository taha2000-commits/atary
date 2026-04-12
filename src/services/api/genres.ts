import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api,  } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Genre } from "../../types/game";

export const getGenres = async (
  params?: RequestParams,
): Promise<{ data: Response<Genre> } | null> => {
  return await api.get(`/genres`, { params });
};

export const useGenres = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`genres`, params || {}],
    queryFn: () => getGenres(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingGenres: query?.isLoading,
    genres: (query?.data as AxiosResponse)?.data.results as Genre[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};
