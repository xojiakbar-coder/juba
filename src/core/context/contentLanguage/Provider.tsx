import React, { useEffect, useMemo, useState } from 'react';
import { instance as i18n } from '@/core/services/i18n';
import storage from '@/core/services/storage';

import Context from './context';

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<'uz' | 'ru'>(() => {
    return (storage.local.get('language') as 'uz' | 'ru') || 'ru';
  });

  const setLang = (lng: 'uz' | 'ru') => {
    if (lng !== lang) {
      setLangState(lng);
      i18n.changeLanguage(lng);
      storage.local.set('language', lng);
    }
  };

  useEffect(() => {
    const savedLang = (storage.local.get('language') as 'uz' | 'ru') || 'ru';
    if (savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    const handleChange = (lng: string) => {
      setLangState(lng as 'uz' | 'ru');
      storage.local.set('language', lng);
    };

    i18n.on('languageChanged', handleChange);
    return () => {
      i18n.off('languageChanged', handleChange);
    };
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
