import { Link } from "react-router";
import TiltComponent from "../../components/TiltComponent";
import type { Game } from "../../types/game";

const MainGrid = ({ games }: { games: Game[] }) => {
  return (
    <div className="bg- grid max-h-screen w-full grid-cols-9 grid-rows-9 gap-1 overflow-hidden">
      {games?.map((game) => (
        <Link
          key={game.id}
          to={`/game/${game.id}`}
          className="w-full overflow-hidden"
        >
          <TiltComponent>
            <img
              loading="lazy"
              src={game.background_image || "/"}
              alt=""
              className="h-full w-full bg-primary object-cover object-center grayscale-80 hover:grayscale-0"
            />
          </TiltComponent>
        </Link>
      ))}
      <div className="col-span-3 col-start-4 row-span-3 row-start-4 hidden flex-col items-center justify-center sm:flex">
        <h1 className="font-extrabold tracking-wide uppercase sm:text-5xl lg:text-7xl">
          atary
        </h1>
        <p className="text-center tracking-very-wide capitalize sm:text-md lg:text-lg">
          more than 898,456 games
        </p>
      </div>
    </div>
  );
};

export default MainGrid;
