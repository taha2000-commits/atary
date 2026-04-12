import { FaRegRegistered } from "react-icons/fa";

const EsrbBanner = ({
  esrbRating,
}: {
  esrbRating: { name: string; age: string };
}) => {
  return (
    <div className="mt-5 w-fit rounded-sm border-2 border-black bg-white p-px">
      <div className="w-full bg-black text-center">{esrbRating?.name}</div>
      <div className="flex items-center justify-center p-2 text-4xl font-black text-black">
        <div className="flex">
          {esrbRating?.age}
          <FaRegRegistered size={12} />
        </div>
      </div>
      <div className="flex items-center justify-evenly bg-black">
        <span>E</span>
        <span>S</span>
        <span>R</span>
        <span>B</span>
      </div>
    </div>
  );
};

export default EsrbBanner;
