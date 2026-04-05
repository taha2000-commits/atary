import { type Dispatch, type SetStateAction } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSearchParams } from "react-router";

const PageSizeSelect = ({
  pagination,
  setPagination,
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
}) => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  return (
    <div className="flex items-center gap-1 rounded-lg border border-third pl-2">
      <span className="text-sm text-gray-400 capitalize">page size:</span>
      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
        <select
          id="page-size"
          name="page-size"
          aria-label="page-size"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-400 outline-none sm:text-sm/6"
          onChange={(e) => {
            setPagination({ page: 1, pageSize: parseInt(e.target.value) });
            URLSearchParams.set("page-size", e.target.value);
            SetURLSearchParams(URLSearchParams);
          }}
          value={URLSearchParams.get("page-size") || pagination.pageSize}
        >
          <option className="bg-gray-500">6</option>
          <option className="bg-gray-500">12</option>
          <option className="bg-gray-500">20</option>
        </select>
        <MdKeyboardArrowDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4" />
      </div>
    </div>
  );
};

export default PageSizeSelect;
