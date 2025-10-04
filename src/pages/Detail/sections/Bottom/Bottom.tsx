import { useParams } from 'react-router-dom';
import { useServiceTypeBottom } from '@/modules/services/hooks';

import { Title } from '@/interface/components/Title';

// styles
import styles from './Bottom.module.scss';

const BottomCard = () => {
  const { id } = useParams();
  const { data } = useServiceTypeBottom(id ? +id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        Ishdagi nizomlar
      </Title>
      <div className={styles.grid}>
        {data.map(p => (
          <div key={p.id} className={styles.card}>
            <div className={styles.icon}>
              <img src={p.photo} alt={p.title} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomCard;
