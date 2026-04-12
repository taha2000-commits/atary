import { lazy } from "react";

export const HomePage = lazy(() => import("../../pages/home/HomePage"));
export const GenresPage = lazy(() => import("../../pages/genres/GenresPage"));
export const StoresPage = lazy(() => import("../../pages/stores/StoresPage"));
export const GamePage = lazy(() => import("../../pages/game/GamePage"));
export const ErrorPage = lazy(() => import("../../pages/error/ErrorPage"));

export const GenreGamesPage = lazy(
  () => import("../../pages/genre/GenreGamesPage"),
);
export const PublisherPage = lazy(
  () => import("../../pages/publisher/PublisherPage"),
);

export const Landing = lazy(() => import("../../pages/game/routes/Landing"));
export const Achievements = lazy(
  () => import("../../pages/game/routes/Achievements"),
);
export const Creators = lazy(() => import("../../pages/game/routes/Creators"));
export const Trailers = lazy(() => import("../../pages/game/routes/Trailers"));

export const GameCreatorPage = lazy(
  () => import("../../pages/creator/GameCreatorPage"),
);
export const DeveloperPage = lazy(
  () => import("../../pages/developer/DeveloperPage"),
);
export const PlatformPage = lazy(
  () => import("../../pages/platform/PlatformPage"),
);

export const TagPage = lazy(() => import("../../pages/tag/TagPage"));
export const StorePage = lazy(() => import("../../pages/store/StorePage"));

export const HomeSection = lazy(
  () => import("../../pages/home/child-routes/HomeSection"),
);
export const NewAndTrendingPage = lazy(
  () => import("../../pages/home/child-routes/NewAndTrendingPage"),
);
export const BestOfYearPage = lazy(
  () => import("../../pages/home/child-routes/BestOfYearPage"),
);
export const PopularInLastYear = lazy(
  () => import("../../pages/home/child-routes/PopularInLastYear"),
);
export const AllTimeTop = lazy(
  () => import("../../pages/home/child-routes/AllTimeTop"),
);
export const LastMonthPage = lazy(
  () => import("../../pages/home/child-routes/LastMonthPage"),
);
export const ThisWeek = lazy(
  () => import("../../pages/home/child-routes/ThisWeek"),
);
export const NextWeek = lazy(
  () => import("../../pages/home/child-routes/NextWeek"),
);

export const GamesPage = lazy(() => import("../../pages/games/GamesPage"));
export const PlatformsPage = lazy(
  () => import("../../pages/platforms/PlatformsPage"),
);
export const CreatorsPage = lazy(
  () => import("../../pages/creators/CreatorsPage"),
);
export const DevelopersPage = lazy(
  () => import("../../pages/developers/DevelopersPage"),
);
export const PublishersPage = lazy(
  () => import("../../pages/publishers/PublishersPage"),
);
export const TagsPage = lazy(() => import("../../pages/tags/TagsPage"));
