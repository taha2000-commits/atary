export interface Game {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: MetacriticPlatform[];
  released: string; // ISO date (YYYY-MM-DD)
  tba: boolean;
  updated: string; // ISO datetime
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  added: number;
  added_by_status: AddedByStatus;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: EsrbRating;
  platforms: Platform[];
  parent_platforms: Platform[];
  genres: Genre[];
  dominant_color: string;
  publishers: Publisher[];
  description_raw: string;
  tags: Tag[];
  stores: Store[];
  developers: Developer[];
  urls: {
    title: string;
    url: string;
  }[];
  gamesInSameSeries: Game[];
}
export type StoreKey =
  | "steam"
  | "playstation"
  | "apple"
  | "xbox"
  | "gog"
  | "google"
  | "nintendo"
  | "itch"
  | "epic";
export type StoreInfo = {
  id: number;
  name: StoreKey;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
  description?: string;
};

export type Store = {
  id: number;
  url: string;
  store: StoreInfo;
  logo: string;
};
export type Genre = {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
  description?: string;
};
export interface MetacriticPlatform {
  metascore: number;
  url: string;
}
export type EsrbTitle =
  | "teen"
  | "adult"
  | "mature"
  | "everyone 10+"
  | "everyone";
export interface EsrbRating {
  id: number;
  slug: string;
  name: EsrbTitle;
  age: string;
}
export type Publisher = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description?: string;
};
export interface Platform {
  platform: PlatformInfo;
  released_at: string;
  requirements: Requirements;
  logo: string;
}
export type Developer = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image: string;
  positions: { id: number; name: string }[];
  games: Game[];
  description?: string;
};
export interface PlatformInfo {
  id: number;
  slug: string;
  name: string;
}

export interface Requirements {
  minimum: string;
  recommended: string;
}
export type RatingKey = "exceptional" | "recommended" | "meh" | "skip";
export interface Rating {
  id: number;
  title: RatingKey;
  count: number;
  percent: number;
  color: string;
  logo: string;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
  description?: string;
};
export type Achievement = {
  id: number;
  name: string;
  description: string;
  image: string;
  percent: string;
};
