import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Lang.module.scss';

const Lang = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const languages = {
    uz: { key: 'uz', shortName: "O'z", label: "O'zbekcha" },
    ru: { key: 'ru', shortName: 'Ру', label: 'Русский' }
  } as const;

  type LangKey = keyof typeof languages;

  // 🌐 LocalStorage'dan o‘qish yoki default — 'ru'
  const savedLang = (localStorage.getItem('lang') as LangKey) || 'ru';
  const [lang, setLang] = useState<LangKey>(savedLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    i18n.changeLanguage(lang);

    // URLdagi /uz yoki /ru ni yangilash
    const newPath = location.pathname.replace(/^\/(uz|ru)/, `/${lang}`);
    if (newPath !== location.pathname) {
      navigate(newPath, { replace: true });
    }
  }, [lang, location.pathname, i18n, navigate]);

  const handleChange = (lng: LangKey) => {
    if (lng !== lang) {
      localStorage.setItem('lang', lng);
      setLang(lng);
      window.location.reload(); // 🔥 sahifani qayta yuklaymiz
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
