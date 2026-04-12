import { useRef } from "react";
import { useVideoPopupContext } from "../context/VideoPopupContext";
import { useClickOutside } from "../hooks/useClickOutside";

const VideoPopup = () => {
  const { closePopup, state } = useVideoPopupContext();
  const ref = useRef(null);

  useClickOutside(ref, () => {
    closePopup();
  });

  if (!state.isOpen) return null;
  return (
    <div className="fixed top-0 flex h-fit min-h-screen w-full items-center justify-center bg-black/80 z-100000">
      <div
        className="aspect-video w-full rounded-2xl bg-primary sm:w-120 md:w-150 lg:w-200"
        ref={ref}
      >
        <video
          src={state.url}
          controls
          autoPlay
          className="h-full w-full"
        ></video>
      </div>
    </div>
  );
};

export default VideoPopup;
