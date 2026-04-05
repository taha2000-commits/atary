import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api, DEV_MODE } from "./api";
import type { RequestParams, Response } from "../../types/response";
import type { AxiosResponse } from "axios";
import type { Achievement } from "../../types/game";
import { GAME_ACHEIVEMENTS } from "../../placeholders/game-achievements";

export const getGameAchievements = async (
  id?: string,
  params?: RequestParams,
): Promise<{ data: Response<Achievement> } | null> => {
  if (!id) return null;
  return await api.get(`https://api.rawg.io/api/games/${id}/achievements`, {
    params,
  });
};

export const useGameAchievements = (id?: string, params?: RequestParams) => {
  const { data, isPlaceholderData, isLoading } = useQuery({
    queryKey: [`game-achievements-${id}`, params || {}],
    queryFn: () => {
      if (DEV_MODE) {
        return new Promise((res) =>
          res({
            data: {
              results: params
                ? GAME_ACHEIVEMENTS.slice(
                    params?.page_size * (params?.page - 1),
                    params?.page_size * params?.page,
                  )
                : GAME_ACHEIVEMENTS,
              count: GAME_ACHEIVEMENTS.length,
            },
          }),
        );
      } else return getGameAchievements(id, params);
    },
    placeholderData: keepPreviousData,
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoadingGameAchievements: isLoading,
    gameAchievements: (data as AxiosResponse)?.data.results as Achievement[],
    isPlaceholderData,
  };
};
