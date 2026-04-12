import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type {
  EsrbRating,
  EsrbTitle,
  Game,
  Platform,
  Rating,
  Store,
} from "../../types/game";
import { assignLogoToPlatform } from "../../helpers/assignLogoToPlatform";
import { assignLogosAndColorsToRatings } from "../../helpers/assignLogosAndColorsToRatings";
import { ESRB_RATINGS } from "../../helpers/consts";
import { assignLogoToStore } from "../../helpers/assignLogoToStore";
import { useGamesInSameSeries } from "./games-same-series";
import { useGameStores } from "./game-stores";

export const getGameById = async (
  id?: string,
): Promise<{
  data: Game;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`/games/${id}`);
};

const addLogoToPlatforms = (arr: Platform[] = []) => {
  return arr.map((platform) => {
    return { ...platform, logo: assignLogoToPlatform(platform.platform) };
  });
};
const addLogoToStore = (
  arr: Store[],
  stores: {
    id: number;
    game_id: number;
    store_id: number;
    url: string;
  }[],
) => {
  return arr.map((e) => {
    return {
      ...e,
      ...stores.filter((s) => s.id == e.id)[0],
      logo: assignLogoToStore(e.store),
    };
  });
};

const addLogosAndColorsToRatings = (ratings: Rating[]) => {
  return ratings.map((rate) => {
    return { ...rate, ...assignLogosAndColorsToRatings(rate) };
  });
};

const addAgeToEsrb = (rate?: EsrbRating) => {
  if (!rate) return rate;
  return {
    ...rate,
    age: ESRB_RATINGS[rate.name.toLowerCase() as EsrbTitle]?.value,
  };
};

function createURLs(game?: Game): {
  title: string;
  url: string;
}[] {
  const arr = [];
  if (game?.website)
    arr.push({
      title: "website",
      url: game?.website,
    });
  if (game?.reddit_url)
    arr.push({
      title: "reddit",
      url: game?.reddit_url,
    });
  if (game?.metacritic_url)
    arr.push({
      title: "metacritic",
      url: game?.metacritic_url,
    });
  return arr;
}

export const useGame = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`game-${id}`],
    queryFn: () => getGameById(id),
  });

  const { gamesInSameSeries, isLoading: isLoadingGamesInSameSeries } =
    useGamesInSameSeries(id);

  const { stores, isLoading: isLoadingStores } = useGameStores(id);

  return {
    game: {
      ...data?.data,
      parent_platforms: addLogoToPlatforms(data?.data.parent_platforms),
      ratings: addLogosAndColorsToRatings(data?.data.ratings || []),
      esrb_rating: addAgeToEsrb(data?.data.esrb_rating),
      metacritic_url:
        data?.data.metacritic_url || "https://www.metacritic.com/game/",
      stores: addLogoToStore(data?.data.stores || [], stores || []),
      urls: createURLs(data?.data),
      gamesInSameSeries: gamesInSameSeries,
    },
    isLoading: isLoading || isLoadingGamesInSameSeries || isLoadingStores,
  };
};
