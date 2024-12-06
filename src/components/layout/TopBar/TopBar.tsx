import { Menu } from 'lucide-react';
import { useCurrentSection } from '../../../hooks/useCurrentSection';
import { Logo } from '../../common/Logo/Logo';
import { ProfileDropdown } from '../../common/ProfileDropdown/ProfileDropdown';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const currentSection = useCurrentSection();

  return (
    <header className="h-16 bg-white dark:bg-primary-800 border-b border-gray-200 dark:border-gray-700 px-4">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          {!!currentSection && (
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-primary-100 dark:hover:bg-primary-700 rounded-lg transition-colors"
              aria-label="Toggle sidebar"
              >
                <Menu className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </button>)}
          <Logo />
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
}