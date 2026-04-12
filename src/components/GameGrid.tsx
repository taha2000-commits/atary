import { RiseLoader } from "react-spinners";
import type { Game } from "../types/game";
import GameCard from "./GameCard";
import { FOURTH_COLOR } from "../helpers/consts";

export default function GameGrid({
  games,
  isPlaceholderData,
  isLoading,
}: {
  games: Game[];
  isPlaceholderData: boolean;
  isLoading: boolean;
}) {
  return (
    <div className="">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {games?.map((game) => {
          if (game.name) {
            return (
              <GameCard
                key={game.id}
                game={game}
                isLoading={isPlaceholderData}
                showHoverEffect
              />
            );
          }
        })}
        {isLoading && (
          <div className="col-span-full flex h-50 w-full items-center justify-center">
            <RiseLoader size={20} color={FOURTH_COLOR} />
          </div>
        )}
        {!isLoading && !games?.[0] && (
          <div className="col-span-full flex h-50 items-center justify-center bg-fourth">
            No Games
          </div>
        )}
      </div>
    </div>
  );
}
