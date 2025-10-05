import React, { useEffect, useMemo } from 'react';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Context from './context.ts';

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams(); // URL dan /uz yoki /ru ni olamiz
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // use-query-params structure'ni saqlaymiz (faqat bo‘sh ishlatiladi)
  const [query, setQuery] = useQueryParams({
    contentLang: withDefault(StringParam, lang || 'uz')
  });

  useEffect(() => {
    const currentLang = lang || 'uz';

    // noto‘g‘ri til bo‘lsa — uz ga qaytamiz
    if (!['uz', 'ru'].includes(currentLang)) {
      navigate('/uz', { replace: true });
      return;
    }

    // i18n tilini va html lang atributini yangilaymiz
    i18n.changeLanguage(currentLang);
    document.documentElement.lang = currentLang;
  }, [lang, navigate, i18n]);

  const contextValue = useMemo(
    () => ({
      contentLang: lang || 'uz', // faqat URL asosida
      setQuery // strukturani saqlash uchun qoldiramiz (lekin ishlatmaymiz)
    }),
    [lang, setQuery]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
