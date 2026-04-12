import GameCard from "../../components/GameCard";
import ScrolledSection from "../../components/ScrolledSection";
import type { Game } from "../../types/game";

const CustomSection = ({
  games,
  title,
  btnOnClick = () => {},
}: {
  title: string;
  games: Game[];
  btnOnClick?: () => void;
}) => {
  return (
    <div className="grid w-full grid-cols-4 gap-x-10 gap-y-2 overflow-hidden">
      <div className="col-span-4 flex flex-col justify-center gap-2 p-4 capitalize md:col-span-1">
        <h3 className="text-3xl font-extrabold lg:text-4xl">{title}</h3>
        <button
          onClick={() => {
            btnOnClick();
          }}
          className="w-fit cursor-pointer rounded-lg border border-fourth px-2 py-1 text-sm text-fourth"
        >
          show all
        </button>
      </div>
      <ScrolledSection className="col-span-4 md:col-span-3">
        <div className="grid grid-flow-col grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
          {games?.map((game) => (
              <GameCard game={game} isLoading={false} showHoverEffect={false} />
          ))}
        </div>
      </ScrolledSection>
    </div>
  );
};

export default CustomSection;
