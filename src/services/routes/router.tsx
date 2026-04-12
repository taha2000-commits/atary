import { createBrowserRouter } from "react-router";
import App from "../../App";

import { Achievements, AllTimeTop, BestOfYearPage, Creators, CreatorsPage, DeveloperPage, DevelopersPage, ErrorPage, GameCreatorPage, GamePage, GamesPage, GenreGamesPage, GenresPage, HomePage, HomeSection, Landing, LastMonthPage, NewAndTrendingPage, NextWeek, PlatformPage, PlatformsPage, PopularInLastYear, PublisherPage, PublishersPage, StorePage, StoresPage, TagPage, TagsPage, ThisWeek, Trailers } from "./pages-chunks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: HomePage,
        children: [
          {
            index: true,
            Component: HomeSection,
          },
          {
            path: "/new-and-trending",
            Component: NewAndTrendingPage,
          },
          {
            path: "/best-of-the-year",
            Component: BestOfYearPage,
          },
          {
            path: "/popular-in-last-year",
            Component: PopularInLastYear,
          },
          {
            path: "/all-time-top-rated",
            Component: AllTimeTop,
          },
          {
            path: "/last-30-days",
            Component: LastMonthPage,
          },
          {
            path: "/this-week",
            Component: ThisWeek,
          },
          {
            path: "/next-week",
            Component: NextWeek,
          },
        ],
      },
      {
        path: "/game/:game_id",
        Component: GamePage,
        children: [
          {
            index: true,
            Component: Landing,
          },
          {
            path: "achievements",
            Component: Achievements,
          },
          {
            path: "creators",
            Component: Creators,
          },
          {
            path: "trailers",
            Component: Trailers,
          },
        ],
      },
      { path: "/genre/:genre_id", Component: GenreGamesPage },
      { path: "/publisher/:publisher_id", Component: PublisherPage },
      { path: "/creator/:creator_id", Component: GameCreatorPage },
      { path: "/developer/:developer_id", Component: DeveloperPage },
      { path: "/platform/:platform_id", Component: PlatformPage },
      { path: "/tag/:tag_id", Component: TagPage },
      { path: "/store/:store_id", Component: StorePage },
      {
        path: "/games",
        Component: GamesPage,
      },
      {
        path: "/platforms",
        Component: PlatformsPage,
      },
      {
        path: "/creators",
        Component: CreatorsPage,
      },
      {
        path: "/developers",
        Component: DevelopersPage,
      },
      {
        path: "/publishers",
        Component: PublishersPage,
      },
      {
        path: "/tags",
        Component: TagsPage,
      },
      {
        path: "/stores",
        Component: StoresPage,
      },
      {
        path: "/genres",
        Component: GenresPage,
      },
    ],
  },
]);
