import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import type { Theme } from "../../../types/common";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; icon: React.ReactNode }[] = [
    { value: "light", icon: <Sun className="w-4 h-4" /> },
    { value: "dark", icon: <Moon className="w-4 h-4" /> },
    { value: "system", icon: <Monitor className="w-4 h-4" /> }
  ];

  return (
    <div className="flex items-center gap-1 bg-primary-100 dark:bg-primary-700 rounded-lg p-1">
      {themes.map(({ value, icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`p-2 rounded-md ${theme === value ? "bg-white dark:bg-primary-600 shadow-sm" : "text-gray-600 dark:text-gray-300"}`}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
