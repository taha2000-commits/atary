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
      <div className="mx-auto w-[80%] py-10">
        <Outlet />

        {/* ================= */}
      </div>
    </div>
  );
};

export default GamePage;
