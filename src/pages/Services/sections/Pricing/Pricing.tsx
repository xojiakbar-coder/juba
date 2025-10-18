// react
import { memo } from 'react';

// components
import { Desc } from '@/interface/components/Desc';
import { Title } from '@/interface/components/Title';
import { Button } from '@/interface/components/Button';
import { Wrapper } from '@/interface/components/Section';

// hooks
import { scroller } from 'react-scroll';
import { getTextOfHTML } from '@/helpers';
import { useTranslation } from 'react-i18next';
import { useContext as useLangContext } from '@/core/context/contentLanguage';
import { useServicePricing, useServicePricingById } from '@/modules/services/hooks';

// styles
import styles from './Pricing.module.scss';

const Pricing = memo(({ id }: { id: number }) => {
  const { t } = useTranslation();
  const { lang } = useLangContext();
  const { data } = useServicePricingById(id);
  const { data: pricingData } = useServicePricing(id);

  return (
    <Wrapper>
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
    </Wrapper>
  );
});

export default Pricing;
