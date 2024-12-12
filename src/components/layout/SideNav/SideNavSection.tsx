import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getIconClasses } from "../../../helpers/menuitems.helper";
import type { MenuItem } from "../../../types/common";
import { SubSideNav } from "./SubSideNav";

interface SideNavItemProps {
  item: MenuItem;
  collapsed: boolean;
  level?: number;
}

function SideNavItem({ item, collapsed, level = 0 }: SideNavItemProps) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = level * 12 + (collapsed ? 16 : 16);

  return (
    <div className="relative">
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          clsx(
            "flex items-center gap-3 py-2 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors relative",
            {
              "bg-primary-50 dark:bg-gray-900/20": isActive,
              "bg-primary-25 dark:bg-gray-900/10": hasChildren && !isActive
            }
          )
        }
        style={{ paddingLeft: `${paddingLeft}px`, paddingRight: "16px" }}
        onClick={e => {
          if (hasChildren) {
            e.preventDefault();
            setIsSubMenuOpen(true);
          }
        }}
      >
        <item.icon className={`${getIconClasses(collapsed)} flex-shrink-0`} />
        {!collapsed && (
          <>
            <span className="truncate text-gray-700 dark:text-gray-300 flex-1">{item.label}</span>
            {hasChildren && <ChevronDown className="w-4 h-4 transform -rotate-90 text-gray-400" />}
          </>
        )}
        {collapsed && hasChildren && <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-primary-400 dark:bg-primary-500" />}
      </NavLink>
      {hasChildren && (
        <SubSideNav items={item.children ?? []} parent={item} isOpen={isSubMenuOpen} onClose={() => setIsSubMenuOpen(false)} collapsed={collapsed} />
      )}
    </div>
  );
}

interface SideNavSectionProps {
  items: MenuItem[];
  collapsed: boolean;
}

export function SideNavSection({ items, collapsed }: SideNavSectionProps) {
  return (
    <div className="py-2 text-sm">
      {items.map(item => (
        <SideNavItem key={item.id} item={item} collapsed={collapsed} />
      ))}
    </div>
  );
}
