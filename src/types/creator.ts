import type { PlatformInfo, Rating } from "./game";

export type Creator = {
  id: number;
  name: string;
  slug: string;

  image: string;
  image_background: string;
  description: string;

  games_count: number;
  reviews_count: number;

  rating: string;
  rating_top: number;

  updated: string;

  positions: Position[];
  platforms: Platforms;
  ratings: Rating[];
  timeline: {
    year: number;
    count: number;
  }[];
};
type Position = {
  id: number;
  name: string;
  slug: string;
};
type Platforms = {
  total: number;
  count: number;
  results: PlatformResult[];
};
export type PlatformResult = {
  count: number;
  percent: number;
  platform: PlatformInfo;
  logo: string;
};
