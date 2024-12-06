import clsx from 'clsx';
import { Check } from 'lucide-react';
import { languages } from '../../../constants/languages';
import type { Language } from '../../../types/common';

interface LanguageOptionProps {
  value: Language;
  isSelected: boolean;
  onClick: () => void;
  collapsed?: boolean;
}

export function LanguageOption({ value, isSelected, onClick, collapsed }: LanguageOptionProps) {
  const language = languages[value];

  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors',
        isSelected
          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
          : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
      )}
    >
      <span className="text-base">{language.flag}</span>
      {!collapsed && <span className="flex-1 text-left">{language.label}</span>}
      {isSelected && <Check className="w-4 h-4" />}
    </button>
  );
}