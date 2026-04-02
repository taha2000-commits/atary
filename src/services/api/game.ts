import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import type { Game, Platform, Rating, RatingKey } from "../../types/game";
import { assignLogoToPlatform } from "../../helpers/assignLogoToPlatform";
import { RATING_COLORS_LOGOS } from "../../helpers/consts";

export const getGameById = async (
  id?: string,
): Promise<{
  data: Game;
  status: string;
} | null> => {
  if (!id) return null;
  return await api.get(`https://api.rawg.io/api/games/${id}`);
};

const addLogoToPlatforms = (arr: Platform[]) => {
  return arr.map((platform) => {
    return { ...platform, logo: assignLogoToPlatform(platform.platform) };
  });
};

const addLogosAndColorsToRatings = (ratings: Rating[]) => {
  return ratings.map((rate) => {
    const rateKey: RatingKey = Object.keys(RATING_COLORS_LOGOS).find((r) =>
      rate.title.includes(r),
    ) as RatingKey;

    if (rateKey) return { ...rate, ...RATING_COLORS_LOGOS[`${rateKey}`] };
    else return rate;
  });
};

export const useGame = (id?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [`game-${id}`],
    queryFn: () => getGameById(id),
  });

  return {
    game: {
      ...data?.data,
      parent_platforms: addLogoToPlatforms(data?.data.parent_platforms || []),
      ratings: addLogosAndColorsToRatings(data?.data.ratings || []),
    },
    isLoading,
  };
};
