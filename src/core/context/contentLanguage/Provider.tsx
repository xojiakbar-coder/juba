// import { useEffect, useMemo } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useParams, useNavigate } from 'react-router-dom';
// import { StringParam, useQueryParams, withDefault } from 'use-query-params';
// import { useQueryClient } from '@tanstack/react-query';

// import Context from './context.ts';
// import config from '@/config.ts';
// import { storage } from '@/core/services/index.ts';
// import { setHttpLanguage } from '@/core/services/http/http.ts';

// const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { lang } = useParams();
//   const navigate = useNavigate();
//   const { i18n } = useTranslation();
//   const queryClient = useQueryClient();

//   const [query, setQuery] = useQueryParams({
//     contentLang: withDefault(StringParam, lang || 'uz')
//   });

//   useEffect(() => {
//     (async () => {
//       const storedLang = storage.local.get(config.language.key) || 'uz';
//       const currentLang = lang || storedLang || 'uz';

//       if (!['uz', 'ru'].includes(currentLang)) {
//         navigate('/uz', { replace: true });
//         return;
//       }

//       await i18n.changeLanguage(currentLang);
//       document.documentElement.lang = currentLang;
//       storage.local.set(config.language.key, currentLang);
//       setHttpLanguage(currentLang);

//       try {
//       } catch (err) {
//         console.error('Query refetch error', err);
//       }
//     })();
//   }, [lang, navigate, i18n]);

//   const contextValue = useMemo(
//     () => ({
//       contentLang: lang || 'uz',
//       setQuery
//     }),
//     [lang, setQuery]
//   );

//   return <Context.Provider value={contextValue}>{children}</Context.Provider>;
// };

// export default Provider;

import React, { useEffect, useMemo } from 'react';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';

import Context from './context.ts';

const getContentLangSearchParam = () => {
  return new URLSearchParams(window.location.href).get('contentLang') || '';
};

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [query, setQuery] = useQueryParams({
    contentLang: withDefault(StringParam, getContentLangSearchParam())
  });

  useEffect(() => {
    if (query.contentLang && !['uz', 'ru'].includes(query.contentLang)) {
      setQuery({ ...query, contentLang: 'uz' }, 'replace');
    }
  }, [query, query.contentLang, setQuery]);

  const contextValue = useMemo(
    () => ({
      contentLang: query.contentLang || '',
      setQuery
    }),
    [query.contentLang, setQuery]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
