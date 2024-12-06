import clsx from "clsx";
import { colorPalettes } from "../../../constants/colorPalettes";
import { languages } from "../../../constants/languages";
import { sectionMenuItems } from "../../../constants/sectionMenuItems";
import { useColorPalette } from "../../../hooks/useColorPalette";
import { useCurrentSection } from "../../../hooks/useCurrentSection";
import { useLanguage } from "../../../hooks/useLanguage";
import { useTheme } from "../../../hooks/useTheme";
import { Language, Theme } from "../../../types/common";
import { ColorPreview } from "../../common/ProfileDropdown/ColorPaletteSection";
import { LanguageOption } from "../../common/ProfileDropdown/LanguageOption";
import { ThemeOption } from "../../common/ProfileDropdown/ThemeOption";
import { SectionDropdown } from "./SectionDropdown";
import { SideNavSection } from "./SideNavSection";

interface SideNavProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function SideNav({ collapsed, onToggleCollapse }: SideNavProps) {
  const currentSection = useCurrentSection();
  const sectionItems = currentSection ? sectionMenuItems[currentSection] : [];
  const languageOptions: Language[] = Object.keys(languages) as Language[];
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { currentPalette, setPalette } = useColorPalette();

  const themeOptions: { value: Theme; label: string }[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" }
  ];

  return (
    !!currentSection && (
      <nav
        className={clsx("h-full bg-white dark:bg-primary-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 relative", {
          "w-64": !collapsed,
          "w-16": collapsed
        })}
      >
        <button
          onClick={onToggleCollapse}
          className={clsx(
            "absolute -right-4 top-16 p-2 rounded-full bg-white dark:bg-primary-800 border border-gray-200 dark:border-gray-700",
            "hover:bg-gray-50 dark:hover:bg-primary-700 transition-colors",
            "transform transition-transform",
            { "rotate-180": collapsed }
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <SectionDropdown currentSection={currentSection} collapsed={collapsed} />
        {currentSection === "profile" && (
          <>
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                {!collapsed && <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Color Theme</span>}
              </div>
              <div className="space-y-1">
                {colorPalettes.map(palette => (
                  <ColorPreview
                    key={palette.id}
                    colors={[palette.colors.primary[600], palette.colors.primary[400], palette.colors.secondary[600]]}
                    isSelected={currentPalette.id === palette.id}
                    onClick={() => setPalette(palette.id)}
                    name={palette.name}
                    collapsed={collapsed}
                  />
                ))}
              </div>
            </div>

            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              {!collapsed && <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-2 truncate">Language</p>}
              <div className="space-y-1">
                {languageOptions.map(option => (
                  <LanguageOption key={option} value={option} isSelected={language === option} onClick={() => setLanguage(option)} collapsed={collapsed} />
                ))}
              </div>
            </div>
            <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
              {!collapsed && <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-2 truncate">Theme</p>}
              <div className="space-y-1">
                {themeOptions.map(option => (
                  <ThemeOption
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    isSelected={theme === option.value}
                    onClick={() => setTheme(option.value)}
                    collapsed={collapsed}
                  />
                ))}
              </div>
            </div>
          </>
        )}
        {currentSection && sectionItems.length > 0 && <SideNavSection items={sectionItems} collapsed={collapsed} />}
      </nav>
    )
  );
}
