import { Logo } from "../../common/Logo/Logo";
import { ProfileDropdown } from "../../common/ProfileDropdown/ProfileDropdown";

export function TopBar() {
  return (
    <header className="h-16 bg-white dark:bg-primary-800 border-b border-gray-200 dark:border-gray-700 px-4">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo />
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
}
