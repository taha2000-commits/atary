import { useRef, type PropsWithChildren, type RefObject } from "react";
import { useDraggable } from "react-use-draggable-scroll";
function ScrolledSection({
  style,
  children,
  className,
}: {
  style?: React.CSSProperties;
  className?: string;
} & PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <div
      className={
        "custom-scroll flex h-full w-full cursor-pointer overflow-x-scroll overflow-y-hidden" +
        " " +
        className
      }
      style={style}
      ref={ref}
      {...events}
    >
      {children}
    </div>
  );
}

export default ScrolledSection;
