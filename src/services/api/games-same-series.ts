import type { RequestParams } from "../../types/response";
import { api } from "./api";
import { useQuery } from "@tanstack/react-query";
import type { Game } from "../../types/game";

export const getGamesInSameSeries = async ({
  game_id,
  params = { page: 1, page_size: 20 },
}: {
  game_id?: string;
  params?: RequestParams;
}) => {
  if (!game_id) return null;
  return await api.get(`/games/${game_id}/game-series`, {
    params: params,
  });
};
export const useGamesInSameSeries = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`games-in-same-series-of-${id}`],
    queryFn: () => getGamesInSameSeries({ game_id: id }),
  });
  return {
    gamesInSameSeries: data?.data?.results as Game[],
    data,
    isLoading,
  };
};
