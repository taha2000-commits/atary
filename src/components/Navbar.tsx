import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const nav = useNavigate();

  const [searchText, setSearchText] = useState("");
  return (
    <div className="absolute top-0 left-0 z-100 grid w-full grid-cols-2 items-center bg-primary px-5 ring-0 md:grid-cols-12">
      <div className="col-span-2 flex items-center justify-center">
        <Link to={"/"} className="">
          <img
            src="/src/assets/logo.png"
            alt=""
            className="w-20"
          />
        </Link>
      </div>
      <div className="col-span-2 grid h-fit grid-cols-7 overflow-hidden rounded-full bg-third/30 md:col-span-6 md:col-start-6 md:grid-cols-10">
        <input
          name="searchTitle"
          type="text"
          className="col-span-6 min-h-full w-full rounded-l-full border-none bg-none p-2 outline-none md:col-span-9"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <div
          className="col-span-1 flex h-full items-center justify-center bg-white/20"
          onClick={() => {
            nav(`/games?search=${searchText}`);
          }}
        >
          <FaSearch className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
