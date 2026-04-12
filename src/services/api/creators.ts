import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Game } from "../../types/game";

type Creator = {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_background: string;
  games_count: number;
  positions: {
    id: number;
    name: string;
    slug: string;
  }[];
  games: Game[];
};
export const getCreators = async (
  params?: RequestParams,
): Promise<{ data: Response<Creator> } | null> => {
  return await api.get(`/creators`, { params });
};

export const useCreators = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: [`creators`, params || {}],
    queryFn: () => getCreators(params),
    placeholderData: keepPreviousData,
  });
  return {
    ...query,
    isLoadingCreators: query?.isLoading,
    creators: (query?.data as AxiosResponse)?.data.results as Creator[],
    number_pages: Math.ceil(
      (query?.data as AxiosResponse)?.data.count / (params?.page_size || 10),
    ),
  };
};
