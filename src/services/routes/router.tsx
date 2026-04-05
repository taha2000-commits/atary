import { createBrowserRouter } from "react-router";
import App from "../../App";
import HomePage from "../../pages/home/HomePage";
import GamePage from "../../pages/game/GamePage";
import ErrorPage from "../../pages/error/ErrorPage";
import GenreGamesPage from "../../pages/genre/GenreGamesPage";
import PublisherPage from "../../pages/publisher/PublisherPage";
import Landing from "../../pages/game/routes/Landing";
import Achievements from "../../pages/game/routes/Achievements";
import Creators from "../../pages/game/routes/Creators";
import Trailers from "../../pages/game/routes/Trailers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
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
    ],
  },
]);
