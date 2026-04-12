import { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useClickOutside } from "../hooks/useClickOutside";

type Option = { name: string; value: string };

const CustomSelect = ({
  options,
  onChange,
  selectedOpt = null,
  title,
  showTitle = true,
}: {
  title?: string;
  showTitle?: boolean;
  selectedOpt: Option | null;
  options: Option[];
  onChange: (option: Option, selectedOption: Option | null) => void;
}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selected, setSelected] = useState<Option | null>(selectedOpt);
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
        className={`flex cursor-pointer items-center justify-between gap-1 border border-third p-2 text-sm text-gray-400 capitalize transition-all duration-500 sm:justify-start ${menuVisible ? "rounded-t-lg" : "rounded-lg"}`}
      >
        {showTitle && <span className="">{title}</span>}
        <span className="text-gray-300">{selected?.name}</span>
        <MdKeyboardArrowDown
          className={`ml-1 transition-all duration-500 ${menuVisible ? "rotate-180" : "rotate-0"}`}
          size={16}
        />
      </div>
      <div
        className={`absolute top-full right-0 left-0 z-50 origin-top overflow-hidden rounded-b-xl bg-third transition-all duration-500 ${menuVisible ? "translate-y-0 scale-y-100 opacity-100" : "translate-y-2 scale-y-0 opacity-0"}`}
      >
        <div className="flex flex-col">
          {options.map((opt, i) => (
            <div
              key={i}
              className={`cursor-pointer border-white/10 px-2 py-2 text-sm capitalize not-last:border-b hover:bg-white/5 ${selected?.name == opt.name && "pointer-events-none bg-white/5"}`}
              onClick={() => {
                setSelected(opt);
                onChange(opt, selected);
                setMenuVisible(false);
              }}
              onBlur={() => {
                setMenuVisible(false);
              }}
            >
              {opt.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
