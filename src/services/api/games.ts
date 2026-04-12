import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { RequestParams } from "../../types/response";
import { api } from "./api";
import type { EsrbRating, EsrbTitle, Game, Platform } from "../../types/game";
import { assignLogoToPlatform } from "../../helpers/assignLogoToPlatform";
import { ESRB_RATINGS } from "../../helpers/consts";
import { removeEmptyValues } from "../../helpers/removeEmptyValues";

export const getGames = async (params?: RequestParams) => {
  return await api.get("/games", {
    params: { exclude_game_series: true, ...removeEmptyValues(params) },
  });
};
const addLogoToPlatforms = (arr?: Platform[]) => {
  return arr?.map((platform) => {
    return { ...platform, logo: assignLogoToPlatform(platform.platform) };
  });
};
const addAgeToEsrb = (rate?: EsrbRating) => {
  if (!rate) return rate;
  return {
    ...rate,
    age: ESRB_RATINGS[rate.name.toLowerCase() as EsrbTitle]?.value,
  };
};
export const useGames = (params?: RequestParams) => {
  const query = useQuery({
    queryKey: ["games", removeEmptyValues(params)],
    queryFn: () => getGames(params),
    placeholderData: keepPreviousData,
  });

  const games = (query?.data?.data?.results as Game[])?.map((game) => {
    return {
      ...game,
      parent_platforms: addLogoToPlatforms(game.parent_platforms),
      esrb_rating: addAgeToEsrb(game.esrb_rating),
    };
  });

  return { ...query, games: games as Game[] };
};
