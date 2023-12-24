import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const params = useParams();
  const state = params.state;
  const packageName = params.package;

  useEffect(() => {
    const dynamicPaths = [
      `/best_adventure_places_india/${state}/${packageName}`,
      `/best_adventure_places_india/${state}`,
      "/best_adventure_places_india",
      "/",
    ];

    if (dynamicPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state, packageName]);

  return null;
};

export default ScrollToTop;
