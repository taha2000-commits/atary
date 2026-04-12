import { useTextPopupContext } from "../context/TextPopupContext";

const Text = ({
  numOfWords,
  text,
  className,
  isHtml = false,
}: {
  numOfWords: number;
  text?: string;
  className?: string;
  isHtml?: boolean;
}) => {
  const { openPopup } = useTextPopupContext();
  if (!text) return null;

  const arrOfWords = text.split(" ");
  const isTextTall = arrOfWords.length > numOfWords;
  const txt = !isTextTall
    ? text
    : text.split(" ").slice(0, numOfWords).join(" ") + "...";
  return (
    <div className={`${className || "text-justify text-pretty"} `}>
      {isHtml ? (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: txt }}
        ></div>
      ) : (
        txt
      )}{" "}
      {isTextTall && (
        <span
          className="cursor-pointer text-sm capitalize underline underline-offset-1 hover:text-white/50"
          onClick={() => {
            openPopup(text);
          }}
        >
          show more
        </span>
      )}
    </div>
  );
};

export default Text;
