import { type Dispatch, type SetStateAction } from "react";
import Pagination from "../components/Pagination";
import PageSizeSelect from "../components/PageSizeSelect";
import { FOURTH_COLOR } from "../helpers/consts";
import { ClipLoader } from "react-spinners";
import CustomCard from "../components/CustomCard";
import LoadingPage from "./loading/LoadingPage";

const CustomPage = ({
  data,
  title,
  isLoading,
  isPlaceholderData,
  paginationData,
  isFixedBackgroundImg = true,
  linkPath,
}: {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  linkPath: string;
  isLoading: boolean;
  isPlaceholderData: boolean;
  isFixedBackgroundImg?: boolean;
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
  const isMultiPages = paginationData.count > 8;

  if (isLoading) return <LoadingPage />;
  return (
    <div className="relative">
      {!isLoading && data?.[0]?.image_background && (
        <div
          className={`h-[60vh] w-full bg-cover bg-top bg-no-repeat ${isFixedBackgroundImg ? "fixed" : ""}"`}
          style={{ backgroundImage: `url(${data?.[0]?.image_background})` }}
        ></div>
      )}
      <div
        className={`${isFixedBackgroundImg ? "absolute" : ""} ${!isLoading && data?.[0]?.image_background ? "top-[60vh] -translate-y-37.5" : ""} z-10 flex w-full flex-col gap-5 bg-linear-to-b from-transparent from-0% to-primary to-[100px] px-7 sm:px-10 lg:px-20`}
      >
        <div className="">
          <div className="flex flex-col gap-8">
            <h1 className="flex items-center justify-start gap-3 text-center text-4xl font-extrabold capitalize sm:text-6xl">
              {title}
              {isPlaceholderData && <ClipLoader color={FOURTH_COLOR} />}
            </h1>
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              {!paginationData.isHasPrevious && isMultiPages && (
                <PageSizeSelect
                  pagination={paginationData.pagination}
                  setPagination={paginationData.setPagination}
                />
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {data?.map((element) => (
                <CustomCard
                  key={element.id}
                  data={element}
                  linkPath={linkPath}
                  isLoading={isPlaceholderData}
                />
              ))}
            </div>
            <div className="flex items-center justify-end">
              <Pagination {...paginationData} disabled={isPlaceholderData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;
