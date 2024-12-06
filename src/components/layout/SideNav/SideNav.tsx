import clsx from 'clsx';
import { languages } from '../../../constants/languages';
import { sectionMenuItems } from '../../../constants/sectionMenuItems';
import { useCurrentSection } from '../../../hooks/useCurrentSection';
import { useLanguage } from '../../../hooks/useLanguage';
import { useTheme } from '../../../hooks/useTheme';
import { Language, Theme } from '../../../types/common';
import { LanguageOption } from '../../common/ProfileDropdown/LanguageOption';
import { ThemeOption } from '../../common/ProfileDropdown/ThemeOption';
import { SectionDropdown } from './SectionDropdown';
import { SideNavSection } from './SideNavSection';

interface SideNavProps {
  collapsed: boolean;
}

export function SideNav({ collapsed }: SideNavProps) {
  const currentSection = useCurrentSection();
  const sectionItems = currentSection ? sectionMenuItems[currentSection] : [];
  const languageOptions: Language[] = Object.keys(languages) as Language[];
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const themeOptions: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  

  return !!currentSection && (
    <nav
      className={clsx(
        'h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300',
        {
          'w-64': !collapsed,
          'w-16': collapsed,
        }
      )}
    >
      <SectionDropdown currentSection={currentSection} collapsed={collapsed} />
      {currentSection === 'profile' && <><div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        {!collapsed && <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 truncate">Language</p>}
            <div className="space-y-1">
              {languageOptions.map((option) => (
                <LanguageOption
                  key={option}
                  value={option}
                  isSelected={language === option}
                  onClick={() => setLanguage(option)}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            {!collapsed && <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 truncate">Theme</p>}
            <div className="space-y-1">
              {themeOptions.map((option) => (
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
          </>}
      {currentSection && sectionItems.length > 0 && (
        <SideNavSection items={sectionItems} collapsed={collapsed} />
      )}
    </nav>
  );
}