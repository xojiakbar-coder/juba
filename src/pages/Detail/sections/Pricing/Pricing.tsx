import { useParams } from 'react-router-dom';
import { useServicePricingById } from '@/modules/services/hooks';

import { Desc } from '../components';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

// styles
import styles from './Pricing.module.scss';

const Pricing = () => {
  const { id } = useParams();
  const { data } = useServicePricingById(id ? +id : 0);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Title variant="section-name" className={styles.title}>
            Tariflarimiz
          </Title>
          <Desc className={styles.desc}>Bizning joriy tariflarimiz - o'zingiznikini tanlang!</Desc>
        </div>

        <div className={styles.grid}>
          {data?.map(({ id, price, title, description }) => (
            <div className={styles.card} key={id}>
              <div className={styles.cardTitle}>{title}</div>
              <div className={styles.cardPrice}>{price}$</div>
              <div className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: description }} />
              <div className={styles.cardFooter}>
                <Button size="xl" full effective>
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
