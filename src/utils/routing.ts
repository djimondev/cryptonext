import type { MenuItem } from "../types/common";
import type { AppRouteConfig, RouteConfig, SectionConfig } from "../types/routing";

export function getAllRoutes(config: AppRouteConfig): RouteConfig[] {
  const routes: RouteConfig[] = [];

  config.sections.forEach(section => {
    if (section.children.length > 0) {
      // Add section route that will redirect to first child
      routes.push({
        id: section.id,
        path: section.path,
        label: section.label,
        icon: section.icon,
        component: section.children[0].component,
        metadata: section.metadata,
        children: section.children
      });

      // Add all child routes
      section.children.forEach(child => {
        routes.push(child);

        // Add nested child routes if they exist
        if (child.children) {
          child.children.forEach(nestedChild => {
            routes.push(nestedChild);
          });
        }
      });
    }
  });

  return routes;
}

export function getSectionRoutes(section: SectionConfig): RouteConfig[] {
  return section.children;
}

export function findRouteByPath(config: AppRouteConfig, path: string): RouteConfig | null {
  const allRoutes = getAllRoutes(config);
  return allRoutes.find(route => route.path === path) || null;
}

export function findSectionByPath(config: AppRouteConfig, path: string): SectionConfig | null {
  return config.sections.find(section => path === section.path || path.startsWith(`${section.path}/`)) || null;
}

export function getFirstChildPath(section: SectionConfig): string {
  return section.children[0]?.path || section.path;
}

export function getMenuItems(section: SectionConfig): MenuItem[] {
  return section.children.map(route => ({
    id: route.id,
    label: route.label,
    icon: route.icon,
    path: route.path,
    requiresAuth: route.metadata?.requiresAuth,
    isSecondary: route.metadata?.isSecondary,
    children: route.children?.map(child => ({
      id: child.id,
      label: child.label,
      icon: child.icon,
      path: child.path,
      requiresAuth: child.metadata?.requiresAuth,
      isSecondary: child.metadata?.isSecondary
    }))
  }));
}
