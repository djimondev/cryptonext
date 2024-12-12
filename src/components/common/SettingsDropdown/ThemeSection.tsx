import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import type { Theme } from "../../../types/common";

export function ThemeSection() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun className="w-4 h-4" /> },
    { value: "dark", label: "Dark", icon: <Moon className="w-4 h-4" /> },
    { value: "system", label: "System", icon: <Monitor className="w-4 h-4" /> }
  ];

  return (
    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
      <p className="text-sm font-medium text-primary-700 dark:text-primary-300 mb-2">Theme</p>
      <div className="space-y-1">
        {themes.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
              theme === value
                ? "bg-primary-50 dark:bg-gray-900/20 text-primary-600 dark:text-primary-400"
                : "text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-700"
            }`}
            role="menuitem"
          >
            {icon}
            <span className="flex-1 text-left">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
