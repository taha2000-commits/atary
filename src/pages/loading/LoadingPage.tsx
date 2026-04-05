import { RiseLoader } from "react-spinners";
import { FOURTH_COLOR } from "../../helpers/consts";

const LoadingPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-third">
      <RiseLoader size={20} color={FOURTH_COLOR} />
    </div>
  );
};

export default LoadingPage;
