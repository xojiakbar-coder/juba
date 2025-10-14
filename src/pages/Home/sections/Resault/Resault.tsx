import { Card } from './components/Card';
import { Title } from '@/interface/components/Title';

// hooks
import { useTranslation } from 'react-i18next';
import { useResult } from '@/modules/resault/hooks';
import { useContext } from '@/core/context/contentLanguage';

// styles
import styles from './Resault.module.scss';

const Resault = () => {
  const { result } = useResult();
  const { lang } = useContext();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {t('our_resaults')}
      </Title>
      <div className={styles.grid}>
        {result?.map((item, i) => (
          <Card key={i + 1} title={String(item[lang]?.result) + '+'} subtitle={item[lang]?.title} />
        ))}
      </div>
    </div>
  );
};

export default Resault;
