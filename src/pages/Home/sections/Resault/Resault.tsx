import { Card } from './components/Card';
import { Title } from '@/interface/components/Title';

// hooks
import { useResult } from '@/modules/resault/hooks';

// styles
import styles from './Resault.module.scss';

const Resault = () => {
  const { result } = useResult();

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        Наши результаты в цифрах
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
