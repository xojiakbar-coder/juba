import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

// styles
import clsx from 'clsx';
import styles from './Lang.module.scss';

import config from '@/config';

const Lang = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = {
    uz: { key: 'uz', shortName: "O'z", label: "O'zbekcha" },
    ru: { key: 'ru', shortName: 'Ру', label: 'Русский' }
  } as const;

  type LangKey = keyof typeof languages;

  const savedLang = (localStorage.getItem(config.language.key) as LangKey) || 'uz';
  const [lang, setLang] = useState<LangKey>(savedLang);

  useEffect(() => {
    document.documentElement.lang = lang;

    i18n.changeLanguage(lang);

    const newPath = location.pathname.match(/^\/(uz|ru)/)
      ? location.pathname.replace(/^\/(uz|ru)/, `/${lang}`)
      : `/${lang}${location.pathname}`;

    if (newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }
  }, [lang, location.pathname, i18n, navigate]);

  const handleChange = (lng: LangKey) => {
    if (lng !== lang) {
      localStorage.setItem(config.language.key, lng);
      setLang(lng);
    }
  };

  return (
    <div className={styles.langContainer}>
      <button className={clsx(styles.langBtn, { [styles.active]: lang === 'ru' })} onClick={() => handleChange('ru')}>
        Ru
      </button>
      <button className={clsx(styles.langBtn, { [styles.active]: lang === 'uz' })} onClick={() => handleChange('uz')}>
        Uz
      </button>
    </div>
  );
};

export default Lang;
