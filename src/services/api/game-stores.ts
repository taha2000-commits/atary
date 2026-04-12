import { useQuery } from "@tanstack/react-query";
import type { Response } from "../../types/response";
import { api } from "./api";
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
  return await api.get(`/games/${id}/stores`);
};

export const useGameStores = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`game-${id}-stores`],
    queryFn: () => getGameStores(id),
  });
  return {
    data: (data as AxiosResponse)?.data,
    isLoading,
    stores: (data as AxiosResponse)?.data.results,
  };
};
