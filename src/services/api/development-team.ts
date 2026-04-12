import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Developer } from "../../types/game";

export const getDevelopmentTeam = async (
  id?: string,
  params?: RequestParams,
): Promise<{ data: Response<Developer> } | null> => {
  if (!id) return null;
  return await api.get(`/games/${id}/development-team`, {
    params,
  });
};

export const useDevelopmentTeam = (id?: string, params?: RequestParams) => {
  const { data, isLoading, isPlaceholderData } = useQuery({
    queryKey: [`development-team-of-game-${id}`, params || {}],
    queryFn: () => getDevelopmentTeam(id, params),
    placeholderData: keepPreviousData,
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoadingDevelopmentTeam: isLoading,
    developmentTeam: (data as AxiosResponse)?.data.results as Developer[],
    isPlaceholderData,
  };
};
