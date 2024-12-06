import clsx from 'clsx';
import { ChevronDown, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { languages } from '../../../constants/languages';
import { sectionMenuItems } from '../../../constants/sectionMenuItems';
import { useLanguage } from '../../../hooks/useLanguage';
import { useTheme } from '../../../hooks/useTheme';
import type { Language, Theme } from '../../../types/common';
import { LanguageOption } from './LanguageOption';
import { ThemeOption } from './ThemeOption';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeOptions: { value: Theme; label: string }[] = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  const languageOptions: Language[] = Object.keys(languages) as Language[];

  const profileMenuItems = sectionMenuItems.profile;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        aria-label={t('common.profile')}
      >
        <User className="w-5 h-5" />
        <ChevronDown
          className={clsx('w-4 h-4 transition-transform', {
            'transform rotate-180': isOpen,
          })}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
          </div>

          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</p>
            <div className="space-y-1">
              {languageOptions.map((option) => (
                <LanguageOption
                  key={option}
                  value={option}
                  isSelected={language === option}
                  onClick={() => setLanguage(option)}
                />
              ))}
            </div>
          </div>

          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Theme</p>
            <div className="space-y-1">
              {themeOptions.map((option) => (
                <ThemeOption
                  key={option.value}
                  value={option.value}
                  label={option.label}
                  isSelected={theme === option.value}
                  onClick={() => setTheme(option.value)}
                />
              ))}
            </div>
          </div>

          <div className="py-1">
            {profileMenuItems.map((item) => (
              <button
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}