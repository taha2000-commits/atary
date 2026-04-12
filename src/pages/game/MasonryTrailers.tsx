import { FaPlay } from "react-icons/fa";
import { getColsAndRows } from "../../helpers/getColsAndRows";
import type { Trailer } from "../../types/trailer";
import { useVideoPopupContext } from "../../context/VideoPopupContext";

const MasonryTrailers = ({
  trailers,
  page_size,
  numOfCols,
}: {
  trailers: Trailer[];
  page_size: number;
  numOfCols: number;
}) => {
  const { openPopup } = useVideoPopupContext();

  const numOfRows = Math.ceil(page_size / numOfCols);
  return (
    <div
      className={`grid grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
    >
      {getColsAndRows<Trailer>(trailers, numOfCols, numOfRows).map((col, i) => (
        <div key={i} className="flex flex-col gap-3">
          {col.map((video) => (
            <div key={video.id} className="">
              <div className="overflow-hidden rounded-2xl bg-third">
                <div className="relative aspect-video w-full overflow-hidden rounded-b-xl">
                  <div
                    onClick={() => {
                      openPopup(video.data.max);
                    }}
                    className="absolute flex aspect-video w-full cursor-pointer items-center justify-center bg-linear-to-t from-black to-transparent"
                  >
                    <div className="rounded-full bg-white/50 p-5">
                      <FaPlay size={16} />
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src={video.preview || "/"}
                    alt={video.name}
                    className="z-0 w-full"
                  />
                </div>
                <div className="p-2">
                  <h5
                    onClick={() => {
                      openPopup(video.data.max);
                    }}
                    className="cursor-pointer underline-offset-2 hover:text-white/50 hover:underline"
                  >
                    {video.name}
                  </h5>
                  <div className="mt-2 flex justify-end gap-1">
                    {Object.keys(video.data || {})?.map((data, i) => (
                      <span
                        key={i}
                        className="rounded-lg border border-fourth p-1 px-2 text-xs text-fourth"
                      >
                        {data}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryTrailers;
