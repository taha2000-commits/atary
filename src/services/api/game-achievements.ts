import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Achievement } from "../../types/game";

export const getGameAchievements = async (
  id?: string,
  params?: RequestParams,
): Promise<{ data: Response<Achievement> } | null> => {
  if (!id) return null;
  return await api.get(`/games/${id}/achievements`, {
    params,
  });
};

export const useGameAchievements = (id?: string, params?: RequestParams) => {
  const { data, isPlaceholderData, isLoading } = useQuery({
    queryKey: [`game-achievements-${id}`, params || {}],
    queryFn: () => getGameAchievements(id, params),
    placeholderData: keepPreviousData,
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoadingGameAchievements: isLoading,
    gameAchievements: (data as AxiosResponse)?.data.results as Achievement[],
    isPlaceholderData,
  };
};
