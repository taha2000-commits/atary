import { useRef, useState } from "react";
import SideBar from "../pages/home/SideBar";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useClickOutside } from "../hooks/useClickOutside";

const AnimatedSidebar = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <>
      <div
        ref={ref}
        className={`fixed top-0 ${open ? "left-0" : "-left-full"} z-99 h-screen max-w-75 w-4/5 overflow-y-scroll bg-primary pb-10 transition-all duration-500 ease-linear`}
      >
        <SideBar isAnimated setIsOpen={setOpen} />
      </div>
      <div
        className={`${open ? "left-80" : "left-5"} cursor-pointer lg:hidden fixed top-10 z-1000 h-10 w-10 transition-all duration-600`}
        onClick={() => {
          setOpen((is) => !is);
        }}
      >
        {!open ? (
          <GoSidebarCollapse size={35} />
        ) : (
          <GoSidebarExpand size={35} />
        )}
      </div>
    </>
  );
};

export default AnimatedSidebar;
