import { memo, useRef } from 'react';
import { Desc } from '@/interface/components/Desc';
import { Title } from '@/interface/components/Title';
import { Wrapper } from '@/interface/components/Section';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useTranslation } from 'react-i18next';
import { useServiceWorks } from '@/modules/services/hooks';
import { useContext as useLangContext } from '@/core/context/contentLanguage';
import styles from './OurWorks.module.scss';

const OurWorks = memo(({ id }: { id: number }) => {
  const { t } = useTranslation();
  const { lang } = useLangContext();
  const { data } = useServiceWorks(id);

  const splideRef = useRef<any>(null);

  const handleSlideClick = (index: number) => {
    if (splideRef.current) {
      splideRef.current.go(index);
    }
  };

  return (
    <Wrapper>
      <Title variant="section-name" className={styles.title}>
        {t('our_keys')}
      </Title>
      <Desc className={styles.desc}>{data?.[0]?.[lang]?.description}</Desc>

      <div className={styles.wrapper}>
        <Splide
          ref={splideRef}
          key={data?.length || 0}
          options={{
            type: 'loop',
            perPage: 3,
            gap: '50px',
            focus: 'center',
            autoplay: true,
            pagination: false,
            arrows: false,
            breakpoints: {
              1024: { perPage: 2, focus: 'center' },
              640: { perPage: 1, focus: 'center' }
            }
          }}
        >
          {data?.map((item, index) => (
            <SplideSlide key={item[lang].id}>
              <div className={styles.card} onClick={() => handleSlideClick(index)}>
                <div className={styles.imageWrapper}>
                  <img src={item?.[lang]?.photo} alt={item?.[lang]?.services} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <p className={styles.cardDesc}>{item?.[lang]?.description}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </Wrapper>
  );
});

export default OurWorks;
