import clsx from "clsx";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import type { Theme } from "../../../types/common";

interface ThemeOptionProps {
  value: Theme;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  collapsed?: boolean;
}

export function ThemeOption({ value, label, isSelected, onClick, collapsed }: ThemeOptionProps) {
  const icons = {
    light: Sun,
    dark: Moon,
    system: Monitor
  };

  const Icon = icons[value];

  return (
    <button
      onClick={onClick}
      className={clsx(
        "w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
        isSelected
          ? "bg-primary-50 dark:bg-gray-900/20 text-primary-600 dark:text-primary-400"
          : "text-gray-700 dark:text-gray-200 hover:bg-primary-100 dark:hover:bg-primary-700"
      )}
    >
      <Icon className="w-4 h-4" />
      {!collapsed && <span className="flex-1 text-left">{label}</span>}
      {isSelected && <Check className="w-4 h-4" />}
    </button>
  );
}
