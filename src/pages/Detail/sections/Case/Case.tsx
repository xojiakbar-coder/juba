import { Title } from '@/interface/components/Title';
import { Case } from '@/interface/components/Cards/Case';

// hooks
import { useTranslation } from 'react-i18next';
import { useServiceKeys } from '@/modules/services/hooks';
import { useContext } from '@/core/context/servicesContext';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './Case.module.scss';

const Cases = () => {
  const { t } = useTranslation();
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceKeys(service?.id ? +service?.id : 0);

  return (
    <div className={styles.case}>
      <Title variant="title" className={styles.title}>
        {t('our_keys')}
      </Title>

      <div className={styles.grid}>
        {data?.map(item => (
          <Case
            key={item?.[lang]?.id}
            title={item?.[lang]?.title}
            photo={item?.[lang]?.photo}
            hashtags={item?.[lang]?.hashtags}
          />
        ))}
      </div>
    </div>
  );
};

export default Cases;
