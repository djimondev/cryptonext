import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { getIconClasses } from "../../../helpers/menuitems.helper";
import type { MenuItem } from "../../../types/common";

interface SideNavSectionProps {
  items: MenuItem[];
  collapsed: boolean;
}

export function SideNavSection({ items, collapsed }: SideNavSectionProps) {
  return (
    <div className="py-2 text-sm">
      {items.map(item => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            clsx("flex items-center gap-3 px-4 py-2 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors", {
              "bg-primary-50 dark:bg-gray-900/20": isActive
            })
          }
        >
          <item.icon className={`${getIconClasses(collapsed)} flex-shrink-0`} />
          {!collapsed && <span className="truncate text-gray-700 dark:text-gray-300">{item.label}</span>}
        </NavLink>
      ))}
    </div>
  );
}
