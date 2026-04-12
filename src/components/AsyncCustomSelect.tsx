import { useRef, useState } from "react";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { ClipLoader, ClockLoader } from "react-spinners";
import { FOURTH_COLOR } from "../helpers/consts";
import { useClickOutside } from "../hooks/useClickOutside";

type Option = { name: string; value: string };

const AsyncCustomSelect = ({
  options,
  onChange,
  selectedOpt = null,
  title,
  showTitle = true,
  paginated,
  isLoading = false,
  infinity,
  nextBtnOnClick = () => {},
  prevBtnOnClick = () => {},
}: {
  title?: string;
  showTitle?: boolean;
  infinity?: {
    fetchNextPage: () => void;
  };
  paginated?: {
    page: number;
    number_pages: number;
  };
  isLoading?: boolean;
  selectedOpt: Option | null;
  options: Option[];
  onChange: (option: Option, selectedOption: Option | null) => void;
  nextBtnOnClick?: () => void;
  prevBtnOnClick?: () => void;
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setMenuVisible(false);
  });

  return (
    <div className="relative">
      <div
        className="absolute z-10 h-full w-full cursor-pointer bg-transparent"
        ref={ref}
        onClick={() => {
          setMenuVisible((is) => !is);
        }}
      ></div>
      <div
        className={`flex cursor-pointer items-center justify-between gap-1 border border-third p-2 text-sm text-gray-400 capitalize transition-all duration-500 ${menuVisible ? "rounded-t-lg" : "rounded-lg"}`}
      >
        {showTitle && <span className="">{title}</span>}
        <span className="text-gray-300">{selectedOpt?.name}</span>
        <MdKeyboardArrowDown
          className={`ml-1 transition-all duration-500 ${menuVisible ? "rotate-180" : "rotate-0"} ${isLoading ? "animate-spin text-fourth" : ""}`}
          size={16}
        />
      </div>
      <div
        className={`absolute top-full right-0 left-0 z-50 origin-top overflow-hidden rounded-b-xl bg-third transition-all duration-500 ${menuVisible ? "translate-y-0 scale-y-100 opacity-100" : "translate-y-2 scale-y-0 opacity-0"}`}
      >
        <div className="flex flex-col">
          {options?.map((opt, i) => (
            <div
              key={i}
              className={`cursor-pointer border-white/10 px-2 py-2 text-sm capitalize not-last:border-b hover:bg-white/5 ${selectedOpt?.name == opt.name && "pointer-events-none bg-white/5"}`}
              onClick={() => {
                onChange(opt, selectedOpt);
                setMenuVisible(false);
              }}
            >
              {opt.name}
            </div>
          ))}

          <div className="my-2 flex items-center">
            <div
              className="w-full px-2 py-1 text-xs text-fourth capitalize"
              onClick={() => {
                setMenuVisible(true);
                if (!paginated && !isLoading) infinity?.fetchNextPage();
              }}
            >
              {infinity ? (
                isLoading ? (
                  <ClipLoader color={FOURTH_COLOR} size={14} />
                ) : (
                  <MdKeyboardArrowDown color={FOURTH_COLOR} size={14} />
                )
              ) : paginated ? (
                <div className="flex w-full items-center justify-between">
                  <div
                    className={`border px-1 ${paginated.page == 1 || isLoading ? "border-white/10 text-white/10" : "border-fourth"}`}
                    onClick={() => {
                      if (!isLoading) prevBtnOnClick();
                    }}
                  >
                    <MdKeyboardArrowLeft size={14} />
                  </div>
                  {isLoading ? (
                    <ClockLoader size={14} color={FOURTH_COLOR} />
                  ) : (
                    <span className="">{paginated.page}</span>
                  )}
                  <div
                    className={`border px-1 ${paginated.page == paginated.number_pages || isLoading ? "border-white/10 text-white/10" : "border-fourth"}`}
                    onClick={() => {
                      if (!isLoading) nextBtnOnClick();
                    }}
                  >
                    <MdKeyboardArrowRight size={14} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyncCustomSelect;
