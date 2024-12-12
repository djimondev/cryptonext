import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { getIconClasses } from "../../../helpers/menuitems.helper";
import type { MenuItem } from "../../../types/common";

interface SubSideNavProps {
  items: MenuItem[];
  parent: MenuItem;
  onClose: () => void;
  isOpen: boolean;
  collapsed: boolean;
}

export function SubSideNav({ items, parent, onClose, isOpen, collapsed }: SubSideNavProps) {
  const subNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (subNavRef.current && !subNavRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      ref={subNavRef}
      className={clsx(
        "fixed top-16 h-[calc(100vh-4rem)] bg-white dark:bg-primary-800 border-r border-gray-200 dark:border-gray-700 shadow-lg",
        "transition-all duration-300 ease-in-out will-change-transform",
        {
          "translate-x-16 z-[110]": isOpen && collapsed,
          "translate-x-64 z-[110]": isOpen && !collapsed,
          "-translate-x-full z-[90]": !isOpen
        }
      )}
      style={{ width: "256px" }}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Submenu"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{parent.label}</span>
        <button
          onClick={onClose}
          className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Close submenu"
        >
          <ChevronDown className="w-4 h-4 transform -rotate-90" />
        </button>
      </div>
      <div className="py-2 overflow-y-auto h-[calc(100%-4rem)]">
        {items.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-3 px-4 py-2 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-700 transition-colors",
                {
                  "bg-primary-50 dark:bg-gray-900/20": isActive
                }
              )
            }
            onClick={onClose}
          >
            <item.icon className={getIconClasses(false)} />
            <span className="truncate text-gray-700 dark:text-gray-300">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
