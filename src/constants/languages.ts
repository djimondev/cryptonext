import type { Language } from '../types/common';

export const languages: Record<Language, { label: string; flag: string }> = {
  en: {
    label: 'English',
    flag: '🇺🇸',
  },
  fr: {
    label: 'Français',
    flag: '🇫🇷',
  },
} as const;