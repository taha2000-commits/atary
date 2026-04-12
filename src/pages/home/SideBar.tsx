import { subYears } from "date-fns";
import type { SetStateAction } from "react";
import { Link } from "react-router";
const now = new Date();

const lastYear = subYears(now, 1);
const sidebar_sections: {
  title: string;
  links: { title: string; path: string }[];
}[] = [
  {
    title: "top",
    links: [
      {
        title: "new and trending",
        path: "new-and-trending",
      },
      {
        title: "best of the year",
        path: "best-of-the-year",
      },
      {
        title: `popular in ${lastYear.getFullYear()}`,
        path: "popular-in-last-year",
      },
      {
        title: "all time top rated",
        path: "all-time-top-rated",
      },
    ],
  },
  {
    title: "New Releases",
    links: [
      {
        title: "Last 30 days",
        path: "last-30-days",
      },
      {
        title: "This week",
        path: "this-week",
      },
      {
        title: "Next week",
        path: "next-week",
      },
    ],
  },
  {
    title: "Browse",
    links: [
      {
        title: "Platforms",
        path: "platforms",
      },
      {
        title: "stores",
        path: "stores",
      },
      {
        title: "tags",
        path: "tags",
      },
      {
        title: "publishers",
        path: "publishers",
      },
      {
        title: "creators",
        path: "creators",
      },
      {
        title: "developers",
        path: "developers",
      },
      {
        title: "genres",
        path: "genres",
      },
    ],
  },
];
const SideBar = ({
  isAnimated = false,
  setIsOpen = () => {},
}: {
  isAnimated?: boolean;
  setIsOpen?: (value: SetStateAction<boolean>) => void;
}) => {
  return (
    <div className="flex w-full min-w-75 flex-col items-center gap-2 pr-3 pl-5">
      <Link
        to={"/"}
        onClick={() => {
          if (isAnimated) setIsOpen((is) => !is);
        }}
      >
        <img
          loading="lazy"
          src="/src/assets/logo.png"
          alt=""
          className="h-30 w-30"
        />
      </Link>
      {sidebar_sections.map((sec) => (
        <div
          className="w-full"
          onClick={() => {
            if (isAnimated) setIsOpen((is) => !is);
          }}
        >
          <h4 className="mb-3 text-2xl font-black capitalize">{sec.title}</h4>
          <div className="flex w-full flex-col gap-2 pl-1">
            {sec.links.map((link) => (
              <Link
                to={"/" + link.path}
                className="w-full rounded-lg p-2 capitalize hover:bg-third"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
