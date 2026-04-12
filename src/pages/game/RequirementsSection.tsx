import { useState } from "react";
import type { Platform } from "../../types/game";
import { IoIosArrowDown } from "react-icons/io";
import Text from "../../components/Text";

const RequirementsSection = ({
  platforms = [],
}: {
  platforms?: Platform[];
}) => {
  const [requirementOpen, setRequirementOpen] = useState<{
    index?: number;
    is: boolean;
  }>({
    is: false,
  });
  if (!platforms?.[0]) return null;
  return (
    <div className="">
      <h3 className="text-2xl font-bold">System requirements</h3>
      <div className="grid grid-cols-7 border-b border-b-third">
        <span className="col-span-2 border-r border-r-third py-1"></span>
        <span className="col-span-5"></span>
      </div>
      {/*  */}
      {/*  */}
      {platforms?.map((p, index) => (
        <div
          key={p.platform.id}
          className="grid grid-cols-7 border-b border-b-third"
        >
          <span className="col-span-2 border-r border-r-third py-1 text-xs capitalize xs:text-sm">
            {p.platform.name}
          </span>
          <span className="col-span-5 p-2 text-sm text-white/70">
            {(p.requirements.minimum || p.requirements.recommended) && (
              <div className="flex w-full items-center justify-end">
                <IoIosArrowDown
                  onClick={() =>
                    setRequirementOpen(({ is }) => {
                      return { index, is: !is };
                    })
                  }
                  className={`transition-all duration-500 ${Object.keys(p.requirements)?.[0] ? "cursor-pointer hover:text-fourth" : "pointer-events-none"} ${requirementOpen.index == index && requirementOpen.is ? "rotate-180" : "rotate-0"}`}
                />
              </div>
            )}
            {requirementOpen.index == index && requirementOpen.is
              ? Object.keys(p.requirements)?.[0] && (
                  <>
                    <div className="mb-2 border-b border-b-third pb-2">
                      <h6 className="text-lg font-bold capitalize">minimum</h6>
                      <Text text={p.requirements.minimum} numOfWords={80} />
                    </div>
                    <h6 className="text-lg font-bold capitalize">
                      recommended
                    </h6>
                    <Text text={p.requirements.recommended} numOfWords={80} />
                  </>
                )
              : null}
          </span>
        </div>
      ))}
      {/*  */}
      {/*  */}
      <div className="grid grid-cols-7">
        <span className="col-span-2 border-r border-r-third py-1"></span>
        <span className="col-span-5"></span>
      </div>
    </div>
  );
};

export default RequirementsSection;
