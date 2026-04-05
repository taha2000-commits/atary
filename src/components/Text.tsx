const Text = ({
  numOfWords,
  text,
  className,
}: {
  numOfWords: number;
  text?: string;
  className?: string;
}) => {
  if (!text) return null;

  const arrOfWords = text.split(" ");
  const isTextTall = arrOfWords.length > numOfWords;
  console.log(arrOfWords.length);

  return (
    <p className={`text-justify text-pretty ${className || ""}`}>
      {!isTextTall
        ? text
        : text.split(" ").slice(0, numOfWords).join(" ") + "..."}{" "}
      {isTextTall && (
        <span
          className="cursor-pointer text-sm capitalize underline underline-offset-1 hover:text-white/50"
          onClick={() => {
            console.log(text);
          }}
        >
          show more
        </span>
      )}
    </p>
  );
};

export default Text;
