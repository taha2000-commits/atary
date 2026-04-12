import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { useGame } from "../../../services/api/game";
import { ClipLoader } from "react-spinners";
import PageSizeSelect from "../../../components/PageSizeSelect";
import { useState } from "react";
import Pagination from "../../../components/Pagination";
import { useDevelopmentTeam } from "../../../services/api/development-team";
import { FaArrowLeft } from "react-icons/fa";
import { FOURTH_COLOR } from "../../../helpers/consts";
import CustomCard from "../../../components/CustomCard";

const Creators = () => {
  const { game_id } = useParams();
  const [URLSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { game } = useGame(game_id);

  const [pagination, setPagination] = useState({
    page: parseInt(URLSearchParams.get("page") || "1"),
    pageSize: parseInt(URLSearchParams.get("page-size") || "6"),
  });

  const { developmentTeam, isLoadingDevelopmentTeam, data, isPlaceholderData } =
    useDevelopmentTeam(game_id, {
      page: pagination.page,
      page_size: pagination.pageSize,
    });

  return (
    <div>
      <h1 className="mb-3 flex items-center justify-center gap-3 text-center text-3xl font-extrabold sm:text-4xl">
        {game.name} Creators
        {(isLoadingDevelopmentTeam || isPlaceholderData) && (
          <ClipLoader color={FOURTH_COLOR} />
        )}
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
        <PageSizeSelect pagination={pagination} setPagination={setPagination} />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {developmentTeam?.map((dev) => (
          <CustomCard
            data={dev}
            isLoading={isPlaceholderData}
            linkPath="/creator"
            key={dev.id}
          />
        ))}
      </div>
      <div className="mt-3 flex justify-center">
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          isHasNext={data?.next}
          isHasPrevious={data?.previous}
          count={data?.count}
          disabled={isPlaceholderData}
        />
      </div>
    </div>
  );
};

export default Creators;
