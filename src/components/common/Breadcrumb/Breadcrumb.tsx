import { Home } from "lucide-react";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { routeConfig } from "../../../config/routes";
import { BreadcrumbItem } from "./BreadcrumbItem";

// Add proper typing
interface BreadcrumbItem {
  label: string;
  path: string;
}

interface Route {
  path: string;
  label: string;
  children?: Route[];
}

function findBreadcrumbItems(path: string): BreadcrumbItem[] {
  const pathSegments = path.split("/").filter(Boolean);

  // Initialize with home
  const items: BreadcrumbItem[] = [
    {
      label: "Home",
      path: "/"
    }
  ];

  // Early return if no segments
  if (pathSegments.length === 0) return items;

  // Find matching section
  const section = routeConfig.sections.find(s => s.path.split("/").filter(Boolean)[0] === pathSegments[0]);

  if (!section) return items;

  items.push({
    label: section.label,
    path: section.path
  });

  // Recursively build breadcrumb items
  const buildBreadcrumbItems = (routes: Route[], segments: string[]): void => {
    if (segments.length === 0) return;

    const currentSegment = segments[0];
    const matchingRoute = routes.find(route => {
      const routeSegments = route.path.split("/").filter(Boolean);
      return routeSegments[routeSegments.length - 1] === currentSegment;
    });

    if (matchingRoute) {
      items.push({
        label: matchingRoute.label,
        path: matchingRoute.path
      });

      if (matchingRoute.children && segments.length > 1) {
        buildBreadcrumbItems(matchingRoute.children, segments.slice(1));
      }
    }
  };

  buildBreadcrumbItems(section.children, pathSegments.slice(1));
  return items;
}

export function Breadcrumb() {
  const location = useLocation();
  const breadcrumbItems = useMemo(() => findBreadcrumbItems(location.pathname), [location.pathname]);

  if (breadcrumbItems.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ol className="flex items-center flex-wrap">
          <li className="flex items-center">
            <Link to="/" className="text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-white" aria-label="Home">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {breadcrumbItems.slice(1).map((item, index) => (
            <BreadcrumbItem key={item.path} label={item.label} path={item.path} isLast={index === breadcrumbItems.length - 2} />
          ))}
        </ol>
      </div>
    </nav>
  );
}
