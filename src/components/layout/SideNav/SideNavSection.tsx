import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { getIconClasses } from '../../../helpers/menuitems.helper';
import type { MenuItem } from '../../../types/common';

interface SideNavSectionProps {
  items: MenuItem[];
  collapsed: boolean;
}

export function SideNavSection({ items, collapsed }: SideNavSectionProps) {
  return (
    <div className="py-2 text-sm">
      {items.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            clsx(
              'flex items-center gap-3 px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors',
              {
                'bg-gray-100 dark:bg-gray-700': isActive,
              }
            )
          }
        >
          <item.icon className={`${getIconClasses(collapsed)} flex-shrink-0`} />
          {!collapsed && (
            <span className="truncate">{item.label}</span>
          )}
        </NavLink>
      ))}
    </div>
  );
}