import '@splidejs/react-splide/css';
import { Desc } from '../components';
import { Image } from '@mantine/core';
import { Title } from '@/interface/components/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// hooks
import { useTranslation } from 'react-i18next';
import { useServiceWorks } from '@/modules/services/hooks';
import { useContext } from '@/core/context/servicesContext';
import { useContext as useLangContext } from '@/core/context/contentLanguage';

// styles
import styles from './OurWorks.module.scss';

const OurWorks = () => {
  const { t } = useTranslation();
  const { service } = useContext();
  const { lang } = useLangContext();
  const { data } = useServiceWorks(service?.id ? +service?.id : 0);

  return (
    <div className={styles.container}>
      <Title variant="section-name" className={styles.title}>
        {t('our_keys')}
      </Title>
      <Desc className={styles.desc}>{data?.[0]?.[lang]?.description}</Desc>

      <div className={styles.wrapper}>
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            padding: '5rem',
            focus: 'center',
            gap: '2rem',
            autoplay: true,
            pagination: true,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2, focus: 'center' },
              640: { perPage: 1, focus: 'center' }
            }
          }}
          aria-label="Bizning ishlarimiz"
        >
          {data?.map((item, index) => (
            <SplideSlide key={index}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={item?.[lang]?.photo} alt={item?.[lang]?.services} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <p className={styles.cardDesc}>{item?.[lang]?.description}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default OurWorks;
