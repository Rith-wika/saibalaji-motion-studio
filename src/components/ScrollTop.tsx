
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Get the current location object, which includes the URL path
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to the top-left corner (0, 0) every time the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything, it only manages a side effect
  return null;
};

export default ScrollToTop;