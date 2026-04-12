import { Outlet, useParams } from "react-router";
import { useGame } from "../../services/api/game";

import LandingSection from "./LandingSection";
import type { Game } from "../../types/game";
import { useTrailers } from "../../services/api/trailers";
import LoadingPage from "../loading/LoadingPage";

const GamePage = () => {
  const { game_id } = useParams();

  const { game, isLoading } = useGame(game_id);

  const { trailers } = useTrailers(game_id, {
    page: 1,
    page_size: 12,
  });

  if (isLoading) return <LoadingPage />;
  return (
    <div className="">
      <LandingSection game={game as Game} trailers={trailers} />
      <div className="absolute top-100vh bg-linear-to-b from-0% to-primary to-[100px]">
        <div className="mx-auto w-full px-3 py-10 xs:px-7 sm:w-[80%] sm:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
