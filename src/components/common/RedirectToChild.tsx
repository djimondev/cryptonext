import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { routeConfig } from "../../config/routes";
import { findRouteByPath, findSectionByPath, getFirstChildPath } from "../../utils/routing";

export function RedirectToChild() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const section = findSectionByPath(routeConfig, location.pathname);
    const route = findRouteByPath(routeConfig, location.pathname);

    if (section && section.path === location.pathname && section.children.length > 0) {
      // Redirect section path to first child
      navigate(getFirstChildPath(section), { replace: true });
    } else if (route && route.children && route.children.length > 0) {
      // Redirect route with children to its first child
      navigate(route.children[0].path, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}
