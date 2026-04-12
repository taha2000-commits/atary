import { useParams, useSearchParams } from "react-router";
import { useGenre } from "../../services/api/genre";
import Text from "../../components/Text";
import LoadingPage from "../loading/LoadingPage";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import GameGrid from "../../components/GameGrid";
import { useGames } from "../../services/api/games";
import PageSizeSelect from "../../components/PageSizeSelect";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { FOURTH_COLOR, ORDERING_OPTIONS } from "../../helpers/consts";
import Pagination from "../../components/Pagination";
import CustomSelect from "../../components/CustomSelect";
import FilterByPlatformSelect from "./FilterByPlatformSelect";

const GenreGamesPage = () => {
  const { genre_id } = useParams();
  const { genre, isLoading } = useGenre(genre_id);
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "8"),
  });

  const {
    data,
    games,
    isPlaceholderData,
    isLoading: isLoadingGames,
  } = useGames({
    genres: genre_id,
    page_size: pagination.pageSize,
    page: pagination.page,
    ordering: URLSearchParams.get("ordering") || ORDERING_OPTIONS[2].value,
    platforms: URLSearchParams.get("platform") || "",
  });

  if (isLoading) return <LoadingPage />;
  return (
    <div className="">
      <div className="relative flex h-screen w-full items-center justify-center">
        <div className="absolute z-2 h-full w-full bg-linear-to-t from-primary from-36% to-black/20 sm:bg-radial sm:from-black/40 sm:from-10% sm:to-black/50 md:bg-none"></div>
        <div className="fixed top-0 left-0 z-1 h-full w-full">
          <img
            loading="lazy"
            src={genre?.image_background || "/"}
            alt=""
            className="h-2/3 w-full object-cover object-top sm:h-full"
          />
        </div>
        <div className="z-2 flex h-[95%] w-[95%] flex-wrap overflow-hidden rounded-4xl bg-none from-black/40 from-50% to-black/90 backdrop-blur-none md:bg-radial md:backdrop-blur-xs">
          <div className="flex h-full w-full flex-col items-center justify-end gap-5 p-5 sm:justify-center">
            <h1 className="text-6xl font-extrabold sm:text-8xl">
              {genre?.name}
            </h1>
            <Text
              text={genre?.description}
              numOfWords={80}
              isHtml={true}
              className="hidden w-4/5 text-center sm:block"
            />
            {(genre?.games_count || 0) > 0 && (
              <div className="">
                more than{" "}
                <span className="text-xl text-fourth sm:text-3xl">
                  {genre?.games_count}{" "}
                </span>{" "}
                games
              </div>
            )}
            <div
              className="cursor-pointer rounded-full bg-white/50 p-2 hover:bg-white/20"
              onClick={() => {
                setTimeout(() => {
                  scrollTo({
                    behavior: "smooth",
                    top: window.screen.height,
                  });
                }, 100);
              }}
            >
              <MdOutlineKeyboardDoubleArrowDown
                size={20}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky z-2 w-full bg-primary py-10">
        <div className="mx-auto h-full p-5 sm:w-5/6 sm:p-0">
          <div className="flex flex-col gap-8">
            <div className="sm:hidden">
              <h3 className="mb-3 text-4xl font-bold capitalize">about</h3>
              <Text
                text={genre?.description}
                numOfWords={80}
                isHtml={true}
                className="w-full text-justify text-pretty"
              />
            </div>
            <h1 className="flex items-center justify-start gap-3 text-center text-6xl font-extrabold">
              {genre?.name} Games{" "}
              {(isLoadingGames || isPlaceholderData) && (
                <ClipLoader color={FOURTH_COLOR} />
              )}
            </h1>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CustomSelect
                  title="ordered by:"
                  options={ORDERING_OPTIONS}
                  onChange={(option, selectedOption) => {
                    if (option.name !== selectedOption?.name) {
                      URLSearchParams.set("ordering", option.value);
                      SetURLSearchParams(URLSearchParams);
                    }
                  }}
                  selectedOpt={
                    ORDERING_OPTIONS.filter(
                      (opt) => opt.value == URLSearchParams.get("ordering"),
                    )[0] || ORDERING_OPTIONS[2]
                  }
                />
                <FilterByPlatformSelect />
              </div>
              <PageSizeSelect
                pagination={pagination}
                setPagination={setPagination}
              />
            </div>
            <GameGrid
              games={games}
              isPlaceholderData={isPlaceholderData}
              isLoading={isLoadingGames}
            />
            <div className="flex items-center justify-end">
              <Pagination
                pagination={pagination}
                setPagination={setPagination}
                isHasNext={data?.data?.next}
                isHasPrevious={data?.data?.previous}
                count={data?.data?.count}
                disabled={isPlaceholderData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreGamesPage;
