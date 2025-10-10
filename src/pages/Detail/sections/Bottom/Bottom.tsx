import { useParams } from 'react-router-dom';
import { useServiceTypeBottom } from '@/modules/services/hooks';

import { Title } from '@/interface/components/Title';

// styles
import styles from './Bottom.module.scss';
import { useCurrentLang } from '@/core/utils';
import { useTranslation } from 'react-i18next';

const BottomCard = () => {
  const { id } = useParams();
  const lang = useCurrentLang();
  const { t } = useTranslation();
  const { data } = useServiceTypeBottom(id ? +id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {t('rules_on_work')}
      </Title>
      <div className={styles.grid}>
        {data.map(p => (
          <div key={p?.[lang].id} className={styles.card}>
            <div className={styles.icon}>
              <img src={p?.[lang].photo} alt={p?.[lang].title} />
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
