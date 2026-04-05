import type { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSearchParams } from "react-router";

const Pagination = ({
  pagination,
  setPagination,
  isHasNext = true,
  isHasPrevious = false,
  count = 0,
  disabled = false,
}: {
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
  isHasPrevious?: boolean;
  isHasNext?: boolean;
  count?: number;
  disabled?: boolean;
}) => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();

  const numOfPages = count > 0 ? Math.ceil(count / pagination.pageSize) : 0;
  console.log(numOfPages);

  const handleToPrev = () => {
    if (pagination.page > 1) {
      setPagination((p) => {
        return { ...p, page: p.page - 1 };
      });
      URLSearchParams.set("page", `${pagination.page - 1}`);
      SetURLSearchParams(URLSearchParams);
    }
  };

  const handleToNext = () => {
    if (pagination.page < numOfPages) {
      setPagination((p) => {
        return { ...p, page: p.page + 1 };
      });
      URLSearchParams.set("page", `${pagination.page + 1}`);
      SetURLSearchParams(URLSearchParams);
    }
  };
  if ([0, 1].includes(numOfPages)) return;
  return (
    <div className="grid grid-cols-3">
      {isHasPrevious ? (
        <div
          className={`col-span-1 cursor-pointer rounded-lg border border-third p-2 hover:border-fourth hover:text-fourth ${disabled && "pointer-events-none"}`}
          onClick={handleToPrev}
        >
          <MdKeyboardArrowLeft />
        </div>
      ) : (
        <div className="col-span-1"></div>
      )}
      <div className="col-span-1 flex items-center justify-center">
        {URLSearchParams.get("page") || pagination.page}
      </div>
      {isHasNext ? (
        <div
          className={`col-span-1 cursor-pointer rounded-lg border border-third p-2 hover:border-fourth hover:text-fourth ${disabled && "pointer-events-none"}`}
          onClick={handleToNext}
        >
          <MdKeyboardArrowRight />
        </div>
      ) : (
        <div className="col-span-1"></div>
      )}
    </div>
  );
};

export default Pagination;
