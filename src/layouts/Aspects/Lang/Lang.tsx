import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

// styles
import cx from 'clsx';
import styles from './Lang.module.scss';

const Lang = () => {
  const { i18n } = useTranslation();

  const languages = {
    uz: { key: 'uz', shortName: "O'z", label: "O'zbekcha" },
    ru: { key: 'ru', shortName: 'Ру', label: 'Русский' }
  } as const;

  type LangKey = keyof typeof languages;

  const [lang, setLang] = useState<LangKey>(i18n.language as LangKey);

  const handleChange = (lng: LangKey) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.langContainer}>
      <button className={cx(styles.langBtn, { [styles.active]: lang === 'ru' })} onClick={() => handleChange('ru')}>
        Ru
      </button>
      <button className={cx(styles.langBtn, { [styles.active]: lang === 'uz' })} onClick={() => handleChange('uz')}>
        Uz
      </button>
    </div>
  );
};

export default Lang;
