import { Outlet } from "react-router";
import MainGrid from "./MainGrid";
import SideBar from "./SideBar";
import { useGames } from "../../services/api/games";
import { format, startOfYear } from "date-fns";
import type { Game } from "../../types/game";
import LoadingPage from "../loading/LoadingPage";
import Navbar from "../../components/Navbar";
import AnimatedSidebar from "../../components/AnimatedSidebar";
import { useInView } from "react-intersection-observer";

const img1 =
  "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg";

const HomePage = () => {
  const today = new Date();
  const oneYearAgo = startOfYear(today);
  const { games, isLoading } = useGames({
    ordering: "-added",
    dates: format(oneYearAgo, "yyyy-MM-dd") + "," + format(today, "yyyy-MM-dd"),
    page: 1,
    page_size: 40,
    exclude_game_series: false,
  });
  const { games: games2, isLoading: isLoading2 } = useGames({
    ordering: "-added",
    dates: format(oneYearAgo, "yyyy-MM-dd") + "," + format(today, "yyyy-MM-dd"),
    page: 1,
    page_size: 32,
    exclude_game_series: false,
  });

  const { inView, ref } = useInView();

  if (isLoading || isLoading2) return <LoadingPage />;
  return (
    <div className="relative h-full">
      <Navbar />
      <div
        className="fixed top-0 h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="absolute flex h-screen w-full items-center justify-center bg-radial from-black/30 from-0% to-primary to-70% text-8xl font-extrabold text-white/20 sm:text-12xl md:text-huge md:tracking-very-wide">
          ATARY
        </div>
      </div>
      <div className="absolute top-[60vh] w-full bg-linear-to-b from-0% to-primary to-[40vh]">
        <div className="mx-auto flex h-full w-4/5 flex-col gap-10">
          <MainGrid games={[...games, ...games2] as Game[]} />
        </div>
        <div className="mt-15 grid grid-cols-12">
          <div className="sticky top-0 col-span-2 hidden h-full lg:block">
            <SideBar />
          </div>
          <div className="col-span-12 lg:col-span-10" ref={ref}>
            <Outlet />
          </div>
        </div>
      </div>

      {inView && <AnimatedSidebar />}
    </div>
  );
};

export default HomePage;
