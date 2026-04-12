import { type Dispatch, type SetStateAction } from "react";
import Pagination from "../components/Pagination";
import GameGrid from "../components/GameGrid";
import type { Game } from "../types/game";
import PageSizeSelect from "../components/PageSizeSelect";
import { FOURTH_COLOR, ORDERING_OPTIONS } from "../helpers/consts";
import CustomSelect from "../components/CustomSelect";
import { ClipLoader } from "react-spinners";
import { useSearchParams } from "react-router";
import FilterByPlatformSelect from "./genre/FilterByPlatformSelect";

const GamesCustomPage = ({
  games,
  data,
  title,
  isLoadingGames,
  isPlaceholderData,
  paginationData,
  isFixedBackgroundImg = true,
}: {
  title: string;
  data: { description?: string; image_background?: string; name?: string };
  isLoadingGames: boolean;
  isPlaceholderData: boolean;
  isFixedBackgroundImg?: boolean;
  games: Game[];
  paginationData: {
    isHasNext: boolean;
    isHasPrevious: boolean;
    count: number;
    pagination: {
      page: number;
      pageSize: number;
    };
    setPagination: Dispatch<
      SetStateAction<{
        page: number;
        pageSize: number;
      }>
    >;
  };
}) => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const isMultiPages = paginationData.count > 8;

  return (
    <div className="relative">
      {!isLoadingGames && data?.image_background && (
        <div
          className={`h-[60vh] w-full bg-cover bg-top bg-no-repeat ${isFixedBackgroundImg ? "fixed" : ""}"`}
          style={{ backgroundImage: `url(${data?.image_background})` }}
        ></div>
      )}
      <div
        className={`${isFixedBackgroundImg ? "absolute" : ""} ${!isLoadingGames && data?.image_background ? "top-[60vh] -translate-y-37.5" : "pt-[20vh]"} z-10 flex w-full flex-col gap-5 bg-linear-to-b from-transparent from-0% to-primary to-[100px] px-3 sm:px-5 lg:px-20`}
      >
        {data?.description && (
          <div className="">
            <h1 className="mb-2 text-3xl font-extrabold capitalize xs:text-4xl sm:text-6xl">
              {data?.name}
            </h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            ></div>
          </div>
        )}

        <div className="">
          <div className="flex flex-col gap-8">
            <h1 className="flex items-center justify-start gap-3 text-center text-4xl font-extrabold capitalize sm:text-6xl">
              {title}
              {isPlaceholderData && <ClipLoader color={FOURTH_COLOR} />}
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
              {!paginationData.isHasPrevious && isMultiPages && (
                <PageSizeSelect
                  pagination={paginationData.pagination}
                  setPagination={paginationData.setPagination}
                />
              )}
            </div>
            <GameGrid
              games={games}
              isPlaceholderData={isPlaceholderData}
              isLoading={isLoadingGames}
            />
            <div className="flex items-center justify-end">
              <Pagination {...paginationData} disabled={isPlaceholderData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesCustomPage;
