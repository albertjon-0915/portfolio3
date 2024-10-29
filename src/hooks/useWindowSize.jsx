import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    if (windowSize === 0) setWindowSize(window.innerWidth);

    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { windowSize };
}

export default useWindowSize;
