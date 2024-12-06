import { useEffect, useState } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    scrollY: window.screenY,
  });

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollY: window.screenY,
      });
    };

    window.addEventListener("scroll", windowSizeHandler);
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("scroll", windowSizeHandler);
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export default useSize;
