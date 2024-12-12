import clsx from "clsx";
import { routeConfig } from "../../../config/routes";
import { useCurrentSection } from "../../../hooks/useCurrentSection";
import { getMenuItems } from "../../../utils/routing";
import { SectionDropdown } from "./SectionDropdown";
import { SideNavSection } from "./SideNavSection";

interface SideNavProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function SideNav({ collapsed, onToggleCollapse }: SideNavProps) {
  const currentSection = useCurrentSection();
  const section = currentSection ? routeConfig.sections.find(s => s.id === currentSection) : null;
  const sectionItems = section ? getMenuItems(section) : [];

  return (
    !!currentSection && (
      <nav
        className={clsx("h-full bg-white dark:bg-primary-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 relative z-[120]", {
          "w-64": !collapsed,
          "w-16": collapsed
        })}
      >
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <SectionDropdown currentSection={currentSection} collapsed={collapsed} />
            {currentSection && sectionItems.length > 0 && <SideNavSection items={sectionItems} collapsed={collapsed} />}
          </div>
        </div>

        <button
          onClick={onToggleCollapse}
          className={clsx(
            "absolute -right-3 bottom-8 p-1.5 rounded-full",
            "bg-white dark:bg-primary-800 shadow-md",
            "border border-gray-200 dark:border-gray-700",
            "hover:bg-gray-50 dark:hover:bg-primary-700 transition-colors z-[121]"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform", { "rotate-180": collapsed })}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    )
  );
}
