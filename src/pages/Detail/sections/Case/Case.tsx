import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';

// hooks
import { useParams } from 'react-router-dom';
import { useServiceKeys } from '@/modules/services/hooks';

// styles
import styles from './Case.module.scss';
import { useTranslation } from 'react-i18next';
import { useCurrentLang } from '@/core/utils';

const Cases = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useServiceKeys(id ? +id : 0);
  const lang = useCurrentLang();

  return (
    <div className={styles.case}>
      <Title variant="title" className={styles.title}>
        {t('our_keys')}
      </Title>

      <div className={styles.grid}>
        {data?.map(item => (
          <Case key={id} title={item?.[lang]?.title} photo={item?.[lang]?.photo} hashtags={item?.[lang]?.hashtags} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
