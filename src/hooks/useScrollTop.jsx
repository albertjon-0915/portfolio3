import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function UseScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default UseScrollTop;
