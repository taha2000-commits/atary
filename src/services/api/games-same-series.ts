import type { RequestParams, Response } from "../../types/response";
import { api, DEV_MODE } from "./api";
import { GAMES_IN_SAME_SERIES } from "../../placeholders/game-in-same-series";
import { useQuery } from "@tanstack/react-query";
import type { Game } from "../../types/game";
import type { AxiosResponse } from "axios";

export const getGamesInSameSeries = async ({
  game_id,
  params = { page: 1, page_size: 20 },
}: {
  game_id?: string;
  params?: RequestParams;
}): Promise<Response<Game> | null> => {
  if (!game_id) return null;
  return await api.get(`/games/${game_id}/game-series`, {
    params: params,
  });
};

export const useGamesInSameSeries = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`games-in-same-series-of-${id}`],
    queryFn: () => {
      if (DEV_MODE) {
        return new Promise((res) =>
          res({ data: { results: GAMES_IN_SAME_SERIES } }),
        );
      } else return getGamesInSameSeries({ game_id: id });
    },
  });
  return {
    gamesInSameSeries: (data as AxiosResponse)?.data.results as Game[],
    data,
    isLoading,
  };
};
