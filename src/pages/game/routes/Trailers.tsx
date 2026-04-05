import { useLocation, useNavigate, useParams } from "react-router";
import { useInfinityTrailers } from "../../../services/api/trailers";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { FaArrowLeft, FaPlay } from "react-icons/fa";
import { useGame } from "../../../services/api/game";
import { FOURTH_COLOR } from "../../../helpers/consts";

const Trailers = () => {
  const { game_id } = useParams();
  const { game } = useGame(game_id);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const page_size = 20;

  const { data, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfinityTrailers({ page_size }, game_id);

  const { ref, inView } = useInView();

  const flatPages =
    data?.pages.map((page) => page?.data.results || []).flat() || [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      <h1 className="mb-3 flex items-center justify-center gap-3 text-center text-4xl font-extrabold">
        {game.name} Trailers
        {isFetching && <ClipLoader color={FOURTH_COLOR} />}
      </h1>
      <div className="mb-3 flex items-center justify-between">
        <div
          className="cursor-pointer rounded-full bg-third p-2 hover:bg-third/50"
          onClick={() =>
            navigate(`${pathname.split("/").slice(0, -1).join("/")}`)
          }
        >
          <FaArrowLeft size={20} />
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-4 gap-3">
          {flatPages.map((video) => (
            <div key={video.id} className="col-span-1 h-full w-full">
              <div className="overflow-hidden rounded-2xl bg-third">
                <div className="relative aspect-video w-full overflow-hidden rounded-b-xl">
                  <div className="absolute flex aspect-video w-full cursor-pointer items-center justify-center bg-linear-to-t from-black to-transparent">
                    <div className="rounded-full bg-white/50 p-5">
                      <FaPlay size={16} />
                    </div>
                  </div>
                  <img
                    src={video.preview}
                    alt={video.name}
                    className="z-0 w-full"
                  />
                </div>
                <div className="p-2">
                  <h5 className="truncate">{video.name}</h5>
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
        <div className="flex items-center justify-center py-5" ref={ref}>
          {isFetchingNextPage && (
            <div className="flex items-center justify-center bg-third px-5 py-3">
              <ClipLoader size={25} color="red" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trailers;
