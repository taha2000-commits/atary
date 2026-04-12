import { Link } from "react-router";

const TitleAndListOfLinks = ({
  title,
  links = [],
  className = "",
  pathName,
}: {
  title: string;
  links?: { name: string; pathName?: string; id: number }[];
  className?: string;
  pathName?: string;
}) => {
  return (
    <>
      {links?.[0] && (
        <div className={className}>
          <h5 className="mb-1 text-sm text-white/50 capitalize xs:text-md">
            {title}
          </h5>
          <div className="flex flex-wrap items-center gap-1">
            {links.map((link, i, arr) => {
              if (pathName)
                return (
                  <Link
                    key={link.id}
                    to={pathName + "/" + link.id}
                    className="text-sm underline hover:text-white/50 xs:text-md"
                  >
                    {link.name + (i < arr.length - 1 ? ", " : "")}
                  </Link>
                );
              else
                return (
                  <span key={link.id} className="underline">
                    {link.name + (i < arr.length - 1 && ", ")}
                  </span>
                );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default TitleAndListOfLinks;
