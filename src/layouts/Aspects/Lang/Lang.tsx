import { useTranslation } from 'react-i18next';
import { useContext } from '@/core/context/contentLanguage';

// styles
import clsx from 'clsx';
import styles from './Lang.module.scss';

const Lang = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useContext();

  return (
    <div className={styles.langContainer}>
      <button className={clsx(styles.langBtn, { [styles.active]: lang === 'ru' })} onClick={() => setLang('ru')}>
        {t('ru')}
      </button>
      <button className={clsx(styles.langBtn, { [styles.active]: lang === 'uz' })} onClick={() => setLang('uz')}>
        {t('uz')}
      </button>
    </div>
  );
};

export default Lang;
