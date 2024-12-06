import { useState, useEffect } from 'react';
import i18n from '../i18n';
import type { Language } from '../types/common';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage(language);
      localStorage.setItem('language', language);
    };
    
    changeLanguage();
  }, [language]);

  return { language, setLanguage };
}