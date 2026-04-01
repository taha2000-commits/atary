import { createBrowserRouter } from "react-router";
import App from "../../App";
import HomePage from "../../pages/HomePage";
import GamePage from "../../pages/GamePage";
import ErrorPage from "../../pages/ErrorPage";

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
      { path: "/game/:game_id", Component: GamePage },
    ],
  },
]);
