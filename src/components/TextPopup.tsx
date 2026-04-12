import { useRef } from "react";
import { useTextPopupContext } from "../context/TextPopupContext";
import { useClickOutside } from "../hooks/useClickOutside";

const TextPopup = () => {
  const { closePopup, state } = useTextPopupContext();
  const ref = useRef(null);

  useClickOutside(ref, () => {
    closePopup();
  });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!state.isOpen) return null;
  return (
    <div className="fixed top-0 flex h-fit min-h-screen w-full items-center justify-center bg-black/80 z-10000">
      <div
        ref={ref}
        className="grid max-h-[80vh] min-h-50 w-11/12 grid-rows-12 rounded-xl bg-third pt-5 pb-5 pl-5 xs:w-3/4 xs:text-sm sm:w-2/3 md:w-1/2 xl:w-1/3"
      >
        <div
          className="content text-pop-up-scrollbar row-span-11 overflow-y-scroll pr-5 text-justify text-xs text-pretty"
          dangerouslySetInnerHTML={{ __html: state.text }}
        ></div>
        <div className="flex gap-3 pt-3 pr-5">
          <button
            onClick={closePopup}
            className="h-full w-full cursor-pointer rounded-xl bg-secondary p-2 text-sm text-black capitalize hover:bg-white/40"
          >
            close
          </button>
          <button
            onClick={() => handleCopy(state.text)}
            className="h-full w-full cursor-pointer rounded-xl bg-secondary p-2 text-sm text-black capitalize hover:bg-white/40"
          >
            copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextPopup;
