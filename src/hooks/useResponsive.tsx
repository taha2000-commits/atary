import { useEffect, useState } from "react";

export function useResponsive() {
  const [responsive, setResponsive] = useState<{
    width: number;
    height: number;
  }>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
    
  const handleClickOutside = (e: Event) => {
    const target = e.target as Window;
    setResponsive({ width: target.innerWidth, height: target.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleClickOutside, true);
    return () => {
      window.removeEventListener("resize", handleClickOutside, true);
    };
  }, []);
  return responsive;
}
