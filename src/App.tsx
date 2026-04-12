import { Outlet } from "react-router";
import TextPopup from "./components/TextPopup";
import VideoPopup from "./components/VideoPopup";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative bg-primary text-white">
      <Navbar />
      <Outlet />
      <TextPopup />
      <VideoPopup />
      <div className="fixed right-10 bottom-10 z-1000">
        <div
          onClick={() => {
            scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="mb-3 rounded-full bg-third p-3 sm:hidden"
        >
          <MdOutlineKeyboardDoubleArrowUp />
        </div>
        <div
          onClick={() => {
            scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          className="rounded-full bg-third p-3 sm:hidden"
        >
          <MdOutlineKeyboardDoubleArrowDown />
        </div>
      </div>
    </div>
  );
}

export default App;
