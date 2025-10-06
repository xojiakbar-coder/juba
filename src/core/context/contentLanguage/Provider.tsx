import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';
import { useQueryClient } from '@tanstack/react-query';

import Context from './context.ts';
import config from '@/config.ts';
import { setHttpLanguage } from '@/core/services/http/http.ts';

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();

  const [query, setQuery] = useQueryParams({
    contentLang: withDefault(StringParam, lang || 'uz')
  });

  useEffect(() => {
    const storedLang = localStorage.getItem(config.language.key) || 'uz';
    const currentLang = lang || storedLang || 'uz';

    if (!['uz', 'ru'].includes(currentLang)) {
      navigate('/uz', { replace: true });
      return;
    }

    i18n.changeLanguage(currentLang);
    document.documentElement.lang = currentLang;

    localStorage.setItem(config.language.key, currentLang);

    queryClient.invalidateQueries();

    setHttpLanguage(currentLang);

    // console.log('🌍 Provider til o‘rnatildi:', {
    //   storedLang,
    //   currentLang,
    //   httpHeader: currentLang
    // });
  }, [lang, navigate, i18n, queryClient]);

  const contextValue = useMemo(
    () => ({
      contentLang: lang || 'uz',
      setQuery
    }),
    [lang, setQuery]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
