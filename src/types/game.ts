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
}

export interface MetacriticPlatform {
  metascore: number;
  url: string;
}

export interface EsrbRating {
  id: number;
  slug: string;
  name: string;
}

export interface Platform {
  platform: PlatformInfo;
  released_at: string;
  requirements: Requirements;
}

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
