import {
  addWeeks,
  endOfWeek,
  format,
  startOfWeek,
  startOfYear,
} from "date-fns";
import { useGames } from "../../../services/api/games";
import { useNavigate } from "react-router";
import CustomSection from "../CustomSection";

const HomeSection = () => {
  const navigate = useNavigate();

  const today = new Date();

  const oneYearAgo = startOfYear(today);

  const nextWeek = addWeeks(today, 1);

  const nextWeekStart = startOfWeek(nextWeek, { weekStartsOn: 0 });
  const nextWeekEnd = endOfWeek(nextWeek, { weekStartsOn: 0 });

  const { games: trendingGames } = useGames({
    ordering: "-released,-added",
    dates: format(oneYearAgo, "yyyy-MM-dd") + "," + format(today, "yyyy-MM-dd"),
    page: 1,
    page_size: 20,
    exclude_game_series: false,
  });

  const { games: nextWeekGames } = useGames({
    ordering: "-released",
    dates:
      format(nextWeekStart, "yyyy-MM-dd") +
      "," +
      format(nextWeekEnd, "yyyy-MM-dd"),
    page: 1,
    page_size: 24,
    exclude_game_series: false,
  });

  const startThisWeek = startOfWeek(today);
  const endThisWeek = endOfWeek(today);

  const { games: thisWeekGames } = useGames({
    ordering: "-released,-added",
    dates:
      format(startThisWeek, "yyyy-MM-dd") +
      "," +
      format(endThisWeek, "yyyy-MM-dd"),
    page: 1,
    page_size: 24,
  });

  const { games: topRatedGames } = useGames({
    ordering: "-rating",
    page: 1,
    page_size: 24,
  });

  return (
    <div className="flex flex-col gap-7 p-3 md:p-10">
      <CustomSection
        games={trendingGames}
        title="New and trending"
        btnOnClick={() => {
          navigate("/games");
        }}
      />
      <CustomSection
        games={nextWeekGames}
        title="coming soon"
        btnOnClick={() => {
          navigate("/games");
        }}
      />
      <CustomSection
        games={thisWeekGames}
        title="released this week"
        btnOnClick={() => {
          navigate("/games");
        }}
      />
      <CustomSection
        games={topRatedGames}
        title="top rated games"
        btnOnClick={() => {
          navigate("/games");
        }}
      />
    </div>
  );
};

export default HomeSection;
