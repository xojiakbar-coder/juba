import { Card } from './components/Card';
import { Title } from '@/interface/components/Title';

// hooks
import { useResult } from '@/modules/resault/hooks';

// styles
import styles from './Resault.module.scss';
import { useTranslation } from 'react-i18next';

const Resault = () => {
  const { result } = useResult();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {t('our_resaults')}
      </Title>
      <div className={styles.grid}>
        {result?.map(({ id, title, result }) => (
          <Card key={id} title={String(result) + '+'} subtitle={title} />
        ))}
      </div>
    </div>
  );
};

export default Resault;
