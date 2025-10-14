import { Title } from '@/interface/components/Title';

// hooks
import { useTranslation } from 'react-i18next';
import { useContext } from '@/core/context/servicesContext';
import { useServiceTypeBottom } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Bottom.module.scss';

const BottomCard = () => {
  const { t } = useTranslation();
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceTypeBottom(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {t('rules_on_work')}
      </Title>
      <div className={styles.grid}>
        {data.map(p => (
          <div key={p?.[lang].id} className={styles.card}>
            <div className={styles.icon}>
              <img src={p?.[lang].photo} alt={p?.[lang].title} loading="lazy" />
            </div>
            <div>
              <h3 className={styles.cardTitle}>{p?.[lang].title}</h3>
              <p className={styles.cardDesc}>{p?.[lang].description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomCard;
