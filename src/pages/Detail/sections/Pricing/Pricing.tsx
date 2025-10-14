import { Desc } from '../components';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';

import { scroller } from 'react-scroll';
import { getTextOfHTML } from '@/helpers';
import { useTranslation } from 'react-i18next';
import { useContext } from '@/core/context/servicesContext';
import { useContext as useLangContext } from '@/core/context/contentLanguage';
import { useServicePricing, useServicePricingById } from '@/modules/services/hooks';

// styles
import styles from './Pricing.module.scss';

const Pricing = () => {
  const { t } = useTranslation();
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServicePricingById(service?.id ? +service?.id : 0);
  const { data: pricingData } = useServicePricing(service?.id ? +service?.id : 0);

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
            <div className={styles.card} key={item?.[lang]?.id}>
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
