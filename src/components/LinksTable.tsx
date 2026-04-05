import { FaExternalLinkAlt } from "react-icons/fa";

const LinksTable = ({
  urls = [],
}: {
  urls: { title: string; url: string }[];
}) => {
  if (urls.length == 0) return null;
  return (
    <div className="">
      <div className="grid grid-cols-7 border-b border-b-third">
        <span className="col-span-1 border-r border-r-third py-1"></span>
        <span className="col-span-5"></span>
        <span className="col-span-1 border-l border-l-third"></span>
      </div>
      {urls.map((url, i) => (
        <div key={i} className="grid grid-cols-7 border-b border-b-third">
          <span className="col-span-1 border-r border-r-third py-1 capitalize">
            {url.title}
          </span>
          <span className="col-span-5 flex items-center truncate p-1 text-sm text-white/70">
            {url.url}
          </span>
          <a
            href={url.url}
            className="col-span-1 grid place-items-center border-l border-l-third"
          >
            <FaExternalLinkAlt className="cursor-pointer text-white/50 hover:text-white" />
          </a>
        </div>
      ))}
      <div className="grid grid-cols-7">
        <span className="col-span-1 border-r border-r-third py-1"></span>
        <span className="col-span-5"></span>
        <span className="col-span-1 border-l border-l-third"></span>
      </div>
    </div>
  );
};

export default LinksTable;
