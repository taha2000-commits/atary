import type { Rating, RatingKey } from "../types/game";
import { RATING_COLORS_LOGOS } from "./consts";

export const assignLogosAndColorsToRatings = (rate: Rating) => {
  const title = rate.title.toLowerCase();

  const match = Object.keys(RATING_COLORS_LOGOS).find((key) =>
    title.includes(key),
  ) as RatingKey;

  return match ? RATING_COLORS_LOGOS[match] : {};
};
