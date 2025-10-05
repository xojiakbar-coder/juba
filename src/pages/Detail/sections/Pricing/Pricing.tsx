import { scroller } from 'react-scroll';
import { getTextOfHTML } from '@/helpers';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useServicePricing, useServicePricingById } from '@/modules/services/hooks';

import { Desc } from '../components';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

// styles
import styles from './Pricing.module.scss';

const Pricing = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useServicePricingById(id ? +id : 0);
  const { data: pricingData } = useServicePricing(id ? +id : 0);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Title variant="section-name" className={styles.title}>
            {pricingData[0]?.title}
          </Title>
          <Desc className={styles.desc}>{getTextOfHTML(pricingData[0]?.description)}</Desc>
        </div>

        <div className={styles.grid}>
          {data?.map(({ id, price, title, description }) => (
            <div className={styles.card} key={id}>
              <div className={styles.cardTitle}>{title}</div>
              <div className={styles.cardPrice}>{price}$</div>
              <div className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: description }} />
              <div className={styles.cardFooter}>
                <Button
                  size="xl"
                  className={styles.cardBtn}
                  full
                  effective
                  onClick={() => scroller.scrollTo('send', {})}
                >
                  {t('order')}
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
