import { useQuery } from "@tanstack/react-query";
import { GAME_STORES } from "../../placeholders/game-stores";
import type { Response } from "../../types/response";
import { api, DEV_MODE } from "./api";
import type { AxiosResponse } from "axios";

export const getGameStores = async (
  id?: string,
): Promise<{
  data: Response<{
    id: number;
    game_id: number;
    store_id: number;
    url: string;
  }>;
} | null> => {
  if (!id) return null;
  return await api.get(`https://api.rawg.io/api/games/${id}/stores`);
};

export const useGameStores = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`game-${id}-stores`],
    queryFn: () => {
      if (DEV_MODE) {
        return new Promise((res) => res({ data: { results: GAME_STORES } }));
      } else return getGameStores(id);
    },
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoading,
    stores: (data as AxiosResponse)?.data.results,
  };
};
