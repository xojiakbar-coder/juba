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
import { useCurrentLang } from '@/core/utils';

const Pricing = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data } = useServicePricingById(id ? +id : 0);
  const { data: pricingData } = useServicePricing(id ? +id : 0);
  const lang = useCurrentLang();

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Title variant="section-name" className={styles.title}>
            {pricingData[0]?.[lang]?.title}
          </Title>
          <Desc className={styles.desc}>{getTextOfHTML(pricingData[0]?.[lang]?.description)}</Desc>
        </div>

        <div className={styles.grid}>
          {data?.map(item => (
            <div className={styles.card} key={id}>
              <div className={styles.cardTitle}>{item?.[lang]?.title}</div>
              <div className={styles.cardPrice}>{item?.[lang]?.price}$</div>
              <div className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: item?.[lang]?.description }} />
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
